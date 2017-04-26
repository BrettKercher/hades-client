/**
 * Created by Brett on 4/21/2017.
 */

var LoadState = function() {
    Phaser.State.prototype.constructor.call(this);
};

LoadState.prototype = Object.create(Phaser.State.prototype);

LoadState.prototype.preload = function() {
    this.load.image('playerImg', require('../../assets/img/player.png'));
};

LoadState.prototype.create = function() {
    this.state.start('Start');
};

module.exports = LoadState;