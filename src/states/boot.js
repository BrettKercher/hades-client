/**
 * Created by Brett on 4/21/2017.
 */

const Client = require('../core/client');

var BootState = function() {
    Phaser.State.prototype.constructor.call(this);
};

BootState.prototype = Object.create(Phaser.State.prototype);

BootState.prototype.create = function() {

    //Initialize core systems
    this.game.client = new Client();
    this.game.client.connect();
    //this.state.start('Load');
};


module.exports = BootState;