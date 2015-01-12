var RyuMove = {};
var ryuMove;

RyuMove.preload = function() {
	game.load.spritesheet('ryuMove', 'assets/ryu/ryu_run.png', 25.5, 40);

}

RyuMove.create = function() {
	ryuMove = game.add.sprite(32, game.world.height - 180, 'ryuMove');
	game.physics.arcade.enable(ryuMove);

	ryuMove.animations.add('right', [1, 2, 3, 4], 7, true); 
	playerKeys = {
	    //movement
	    w: game.input.keyboard.addKey(87),
	    a: game.input.keyboard.addKey(65),
	    s: game.input.keyboard.addKey(83),
	    d: game.input.keyboard.addKey(68),
	    //hadoken
	    h: game.input.keyboard.addKey(72)
  };

}

RyuMove.update = function() {
	
	if (playerKeys.a.isDown) {
    	ryuMove.x += 2;
    	ryuMove.scale.x = 1;
    	ryuMove.animations.play('right');
  	} else {
  		ryuMove.animations.stop();
  		ryuMove.frame = 0;
  	}

}