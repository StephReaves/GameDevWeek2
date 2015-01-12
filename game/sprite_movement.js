var RyuMove = {};
var ryuMove;
var jumpTimer = 0;
var cursors;

RyuMove.preload = function() {
	game.load.spritesheet('ryuMove', 'assets/ryu/ryu_run.png', 25.5, 40);
	game.load.image('blueHadoken', 'assets/ryu/blue_hadoken.png');
	game.load.image('redHadoken', 'assets/ryu/red_hadoken.png');

}

RyuMove.create = function() {
	ryuMove = game.add.sprite(32, game.world.height - 180, 'ryuMove');
	game.physics.arcade.enable(ryuMove);
	Hadokens = game.add.group();
	Hadokens.enableBody = true;
	ryuMove.anchor.setTo(.5,.5);

	game.physics.arcade.gravity.y = 250;
	game.physics.enable(ryuMove, Phaser.Physics.ARCADE);
	ryuMove.body.bounce.y = 0.2;
    ryuMove.body.collideWorldBounds = true;
    ryuMove.body.setSize(20, 32, 5, 16);


	ryuMove.animations.add('run', [1, 2, 3, 4], 7, true); 
	ryuMove.animations.add('hadoken!', [5,6], 7, true);
	ryuMove.animations.play('hadoken!');
	playerKeys = {
	    //movement
	    w: game.input.keyboard.addKey(87),
	    a: game.input.keyboard.addKey(65),
	    s: game.input.keyboard.addKey(83),
	    d: game.input.keyboard.addKey(68),
	    //hadoken
	    h: game.input.keyboard.addKey(72)
  	};
  	cursors = game.input.keyboard.createCursorKeys();
    jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

}

RyuMove.update = function() {
	if (playerKeys.w.isDown && ryuMove.body.onFloor() && game.time.now > jumpTimer) {
		console.log('move up');
		ryuMove.body.velocity.y = -250;
		jumpTimer = game.time.now + 750;
	}
	else if (playerKeys.a.isDown) {
    	ryuMove.x -= 2;
    	ryuMove.scale.x = -1;
    	ryuMove.animations.play('run');
  	} 
  	else if (playerKeys.s.isDown) {
  		console.log('move down/duck');
  	}
  	else if (playerKeys.d.isDown) {
  		ryuMove.x+=1;
  		ryuMove.scale.x = 1;
  		ryuMove.animations.play('run');
  	}
  	else {
  		ryuMove.animations.stop();
  		ryuMove.frame = 0;
  	}

  	playerKeys.h.onDown.add(function(key){
		if (playerKeys.a.isDown) {
		  this.chuckHadoken(Hadokens, 'blueHadoken', 'left');
		}
		else{
		  this.chuckHadoken(Hadokens, 'blueHadoken', 'right');
		}
	}, this);
  	if (playerKeys.h.isDown) {
    var duration = playerKeys.h.duration;
    playerKeys.h.onUp.add(function(key){
      if (duration >= 500) {
        duration = 0;
        if (playerKeys.a.isDown) {
          this.chuckHadoken(Hadokens, 'redHadoken', 'left');
        }
        else{
          this.chuckHadoken(Hadokens, 'redHadoken', 'right');
        }
      }
    }, this);
  }
}
RyuMove.chuckHadoken = function(hadokens, hadokenImage, direction) {
	var hadoken = hadokens.create(ryuMove.x, ryuMove.y, hadokenImage);
 	if (direction === 'left') {
		hadoken.body.velocity.x = -400;
	}
	else{
		hadoken.body.velocity.x = 400;
	}
}