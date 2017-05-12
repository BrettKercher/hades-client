/**
 * Created by Brett on 5/8/2017.
 */

//Import required globals
PIXI = require('phaser-ce/build/custom/pixi');
p2 = require('phaser-ce/build/custom/p2');
Phaser = require('phaser-ce/build/custom/phaser-split');

//// Import Dependencies

//States
const BootState = require('./states/boot');
const LoadState = require('./states/load');
const StartState = require('./states/start');
const MainState = require('./states/main');

export default class Game extends Phaser.Game {
    constructor() {
        let appContainer = $('#appContainer');
        super(appContainer.width(), appContainer.height(), Phaser.AUTO, '', null);

        //Set up States
        this.state.add('Boot', BootState, false);
        this.state.add('Load', LoadState, false);
        this.state.add('Start', StartState, false);
        this.state.add('Main', MainState, false);

        //start the boot state
        this.state.start('Boot');
    }
}