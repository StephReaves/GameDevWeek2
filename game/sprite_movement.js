var RyuMove = {};
var ryuMove;

RyuMove.preload = function() {
	game.load.spritesheet('ryuMove', 'assets/ryu/ryu_ken_spritesheet.png', 32, 40);

}

RyuMove.create = function() {
	ryuMove = game.add.sprite(32, game.world.height - 150, 'ryuMove');
	game.physics.arcade.enable(ryuMove);
	// ryuMove.body.bounce.y = 0.2;
	// ryuMove.body.gravity.y = 200;
	ryuMove.body.collideWorldBounds = true;

	ryuMove.animations.add('right', [1, 2, 3, 4], 10, true); 

	cursors = game.input.keyboard.createCursorKeys();


}

RyuMove.update = function() {
	ryuMove.body.velocity.x = 0;
	
	if (cursors.right.isDown) {
		ryuMove.body.velocity.x = 150;
		ryuMove.animations.play('right');
	} else {
		ryuMove.animations.stop();
		ryuMove.frame = 4;
	}
	if (cursors.up.isDown && ryuMove.body.touching.down) {
		ryuMove.body.velocity.y	= -250;
	}
}