/**
 * Created by Brett on 4/22/2017.
 */

//const assert = require('assert');
import assert from 'assert';

let Client = function() {
    this.initDefaultValues();
    this.initMessageParsers();
};

//PACKET TYPES
Client.PacketTypes = {
    NEW_SESSION : 0,
    PLAYER_JOINED : 1,
    PLAYER_STATE : 2
};

//--------------------------------------------------
//
//  INITIALIZATION METHODS
//
//--------------------------------------------------

Client.prototype.initDefaultValues = function () {
    this.connected = false;
    this.parsers = [];

    this.signals = {
        newSession : new Phaser.Signal(),
        playerJoined : new Phaser.Signal(),
        playerState : new Phaser.Signal(),
        connectionSuccessful : new Phaser.Signal(),
        connectionError : new Phaser.Signal()
    };
};

Client.prototype.initMessageParsers = function() {

    this.parsers[Client.PacketTypes.NEW_SESSION] = {
        read : this.readNewSessionPacket
    };
    this.parsers[Client.PacketTypes.PLAYER_JOINED] = {
        read : this.readPlayerJoinedPacket
    };
    this.parsers[Client.PacketTypes.PLAYER_STATE] = {
        read : this.readPlayerStatePacket,
        write : this.writePlayerStatePacket
    };
};

//--------------------------------------------------
//
//  RUNTIME METHODS
//
//--------------------------------------------------

Client.prototype.connect = function () {

    if(process.env.NODE_ENV !== 'production') {
        this.socket = new WebSocket('ws://localhost:7001');
    }
    else {
        this.socket = new WebSocket('ws://174.138.68.104:7001');
    }

    this.socket.binaryType = 'arraybuffer';

    //-- WEBSOCKET EVENT HANDLERS
    this.socket.onmessage = this.handleMessageReceived.bind(this);
    this.socket.onerror = this.handleConnectionError.bind(this);
    this.socket.onopen = this.handleConnectionOpened.bind(this);
    this.socket.onclose = this.handleConnectionClosed.bind(this);
};

Client.prototype.parseBinaryMessage = function (message) {
    let data = new DataView(message, 0);
    let packetType = data.getUint8(0, true);

    assert(this.parsers[packetType] && this.parsers[packetType].read);

    this.parsers[packetType].read.call(this, data);
};

Client.prototype.parseTextMessage = function (message) {
    //--
};

Client.prototype.sendMessage = function(packetType, payload) {
    assert(this.parsers[packetType] && this.parsers[packetType].write);
    this.parsers[packetType].write.call(this, payload);
};

//--------------------------------------------------
//
//  Private methods
//
//--------------------------------------------------

Client.prototype.readNewSessionPacket = function (packet) {

    let byteIndex = 1;
    let newSessionPacket = {};

    newSessionPacket.assignedId = packet.getUint32(byteIndex, true);
    byteIndex += 4;

    newSessionPacket.numOtherPlayers = packet.getUint32(byteIndex, true);
    byteIndex += 4;

    newSessionPacket.otherPlayers = [];
    for(let i = 0; i < newSessionPacket.numOtherPlayers; i++)
    {
        newSessionPacket.otherPlayers[i] = packet.getUint32(byteIndex, true);
        byteIndex += 4;
    }

    this.localPlayerId = newSessionPacket.assignedId;
    this.signals.newSession.dispatch(this, newSessionPacket);
};

Client.prototype.readPlayerJoinedPacket = function (packet) {

    let byteIndex = 1;
    let playerJoinedPacket = {};
    playerJoinedPacket.newPlayerId = packet.getUint32(byteIndex, true);

    this.signals.playerJoined.dispatch(this, playerJoinedPacket);
};

/**
 * @return {boolean}
 */
Client.prototype.IsConnected = function() {
    return this.connected;
};

//--------------------------------------------------
//
//  EVENT HANDLERS
//
//--------------------------------------------------

Client.prototype.handleMessageReceived = function (message) {
    if(typeof message.data === 'string') {
        this.parseTextMessage(message.data);
    }
    else {
        this.parseBinaryMessage(message.data);
    }
};

Client.prototype.handleConnectionError = function (error) {
    console.log("Connection Error: " + error);
    this.signals.connectionError.dispatch(this);
};

Client.prototype.handleConnectionOpened = function () {
    this.connected = true;
    this.signals.connectionSuccessful.dispatch(this);
};

Client.prototype.handleConnectionClosed = function () {
    this.connected = false;
};

module.exports = Client;