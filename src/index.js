/**
 * Created by Brett on 4/21/2017.
 */

//CSS
require('../prototype.css');

//REQUIRED GLOBALS
PIXI = require('phaser-ce/build/custom/pixi');
p2 = require('phaser-ce/build/custom/p2');
Phaser = require('phaser-ce/build/custom/phaser-split');

//STATES
const BootState = require('./states/boot');
const LoadState = require('./states/load');
const StartState = require('./states/start');
const MainState = require('./states/main');

var Game = function() {

    //Initialize Phaser Game
    var appContainer = $('#appContainer');
    Phaser.Game.prototype.constructor.call(this, appContainer.width(), appContainer.height(), Phaser.AUTO, '', null);

    //Set up States
    this.state.add('Boot', BootState, false);
    this.state.add('Load', LoadState, false);
    this.state.add('Start', StartState, false);
    this.state.add('Main', MainState, false);

    //start the boot state
    this.state.start('Boot');
};

Game.prototype = Object.create(Phaser.Game.prototype);

module.exports = new Game();