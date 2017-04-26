/**
 * Created by Brett on 4/21/2017.
 */
const Player = require('../gameplay/character/player_character');

var MainState = function() {
    Phaser.State.prototype.constructor.call(this);
};

MainState.prototype = Object.create(Phaser.State.prototype);

MainState.prototype.create = function() {
    this.init_player();
};

MainState.prototype.init_player = function() {
    this.player = new Player(this, this.world.centerX, this.world.centerY);
    this.game.add.existing(this.player);
    this.game.camera.follow(this.player);
};

module.exports = MainState;