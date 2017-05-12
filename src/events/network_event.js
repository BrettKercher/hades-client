/**
 * Created by Brett on 4/22/2017.
 */

NetworkEvent = function(type, payload) {
    Event.constructor.call(this, type);
    this.payload = payload;
};

NetworkEvent.prototype = Object.create(Event.prototype);

NetworkEvent.Types = {
    CONNECTION_SUCCESSFUL : "CONNECTION_SUCCESSFUL",
    NEW_SESSION : "NEW_SESSION",
    PLAYER_JOINED : "PLAYER_JOINED",
    PLAYER_STATE : "PLAYER_STATE"
};

module.exports = NetworkEvent;
