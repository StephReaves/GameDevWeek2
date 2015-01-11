var RyuMove = {};
var ryuMove;

RyuMove.preload = function() {
	game.load.spritesheet('ryuMove', 'assets/ryu/ryu_ken_spritesheet.png', 32, 40);

}

RyuMove.create = function() {
	ryuMove = game.add.sprite(0, 0, 'ryuMove');
}

RyuMove.update = function() {

}