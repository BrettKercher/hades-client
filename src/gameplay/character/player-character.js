/**
 * Created by Brett on 4/21/2017.
 */

var PlayerCharacter = function(game, x, y) {
    Phaser.Sprite.prototype.constructor.call(this, game, x, y, 'playerImg');
};

PlayerCharacter.prototype = Object.create(Phaser.Sprite.prototype);

PlayerCharacter.prototype.create = function() {
    console.log('creating player character');
};

PlayerCharacter.prototype.update = function() {
    this.angle += 1;
};

module.exports = PlayerCharacter;