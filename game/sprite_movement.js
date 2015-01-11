var RyuMove = {};

RyuMove.preload = function() {
	game.load.spritesheet('ryuMove', 'assets/ryu/ryu_ken_spritesheet.png', 32, 48);

}

RyuMove.create = function() {
	game.physics.startSystem(Phaser.Physics.ARCADE);
	ryuMove = game.add.sprite(50, 50, 'ryuMove');
}

RyuMove.update = function() {

}