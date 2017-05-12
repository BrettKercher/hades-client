/**
 * Created by Brett on 4/21/2017.
 */

var StartState = function() {
    Phaser.State.prototype.constructor.call(this);
};

StartState.prototype = Object.create(Phaser.State.prototype);

StartState.prototype.create = function() {

    //Set up event listeners
    this.game.client.signals.connectionSuccessful.add(this.onConnectionSuccessful, this);
    this.game.client.signals.connectionError.add(this.onConnectionError, this);
};

StartState.prototype.onPlayClicked = function() {
    var name = $('#inName').val();
    //this.game.client.connect();
};

StartState.prototype.onConnectionSuccessful = function() {
    console.log('connected!');
    $('#menu').hide();
    this.state.start('Main');
};

StartState.prototype.onConnectionError = function() {
    console.log('failed to connect');
    $('#menu').hide();
    this.state.start('Main');
};

module.exports = StartState;