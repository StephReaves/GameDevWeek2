var RyuMove = {};
var ryuMove;

RyuMove.preload = function() {
	game.load.spritesheet('ryuMove', 'assets/ryu/ryu_ken_spritesheet.png');

}

RyuMove.create = function() {
	// game.physics.startSystem(Phaser.Physics.ARCADE);
	ryuMove = game.add.sprite(0, 0, 'ryuMove');
}

RyuMove.update = function() {

}