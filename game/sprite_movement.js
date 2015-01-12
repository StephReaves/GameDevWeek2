// var RyuMove = {};
// var ryuMove;
// var jumpTimer = 0;
// var cursors;

// RyuMove.preload = function() {
// 	game.load.spritesheet('ryuMove', 'assets/ryu/ryu_run.png', 25.5, 40);
// 	game.load.image('blueHadoken', 'assets/ryu/blue_hadoken.png');
// 	game.load.image('redHadoken', 'assets/ryu/red_hadoken.png');

// }

// RyuMove.create = function() {
// 	ryuMove = game.add.sprite(32, game.world.height - 180, 'ryuMove');
// 	game.physics.arcade.enable(ryuMove);
// 	ryuMove.anchor.setTo(.5,.5);
// 	ryuMove.body.allowGravity = true;

// 	Hadokens = game.add.group();
// 	Hadokens.enableBody = true;
//     ryuMove.body.setSize(20, 32, 5, 16);

// 	// I added gravity in order to have the player jump, but now the hadokens have gravity
// 	// attached to them as well, which makes them sag down
// 	// I tried to remove gravity from the hadokens below but I keep getting the error
// 	// "cant set property 'allowGravity' of undefined"
// 	// I tried two different ways:

// 	// Hadokens.allowGravity = false;
// 	// Hadokens.body.allowGravity = false;

// 	game.physics.arcade.gravity.y = 250;
//     ryuMove.body.collideWorldBounds = true;
//     ryuMove.body.setSize(20, 32, 5, 16);


// 	ryuMove.animations.add('run', [1, 2, 3, 4], 7, true); 

// 	// Currently this animation for doing a hadoken is not working
// 	// ryuMove.animations.add('hadoken!', [5,6], 7, true);
// 	// ryuMove.animations.play('hadoken!');

// 	playerKeys = {
// 	    //movement
// 	    w: game.input.keyboard.addKey(87),
// 	    a: game.input.keyboard.addKey(65),
// 	    s: game.input.keyboard.addKey(83),
// 	    d: game.input.keyboard.addKey(68),
// 	    //hadoken
// 	    h: game.input.keyboard.addKey(72)
//   	};

// }

// RyuMove.update = function() {
// 	if (playerKeys.w.isDown && ryuMove.body.onFloor() && game.time.now > jumpTimer) {
// 		ryuMove.body.velocity.y = -150;
// 		ryuMove.animations.play('hadoken!');		
// 		jumpTimer = game.time.now + 750;
// 	}
// 	else if (playerKeys.a.isDown) {
//     	ryuMove.x -= 2;
//     	ryuMove.scale.x = -1;
//     	ryuMove.animations.play('run');
//   	} 
//   	else if (playerKeys.s.isDown) {
//   		console.log('move down/duck');
//   	}
//   	else if (playerKeys.d.isDown) {
//   		ryuMove.x+=2;
//   		ryuMove.scale.x = 1;
//   		ryuMove.animations.play('run');
//   	}
//   	else {
//   		ryuMove.animations.stop();
//   		ryuMove.frame = 0;
//   	}
//   	// hadoken functionality is working, but the animation is not yet. 
//   	playerKeys.h.onDown.add(function(key){
// 		if (playerKeys.a.isDown) {
// 		  // ryuMove.animations.play('hadoken!');	
// 		  this.chuckHadoken(Hadokens, 'blueHadoken', 'left');
// 		}
// 		else{
// 		  // ryuMove.animations.play('hadoken!');	
// 		  this.chuckHadoken(Hadokens, 'blueHadoken', 'right');
// 		}
// 	}, this);
//   	if (playerKeys.h.isDown) {
//     var duration = playerKeys.h.duration;
//     playerKeys.h.onUp.add(function(key){
//       if (duration >= 500) {
//         duration = 0;
//         if (playerKeys.a.isDown) {
// 		  // ryuMove.animations.play('hadoken!');	
//           this.chuckHadoken(Hadokens, 'redHadoken', 'left');
//         }
//         else{
// 		  // ryuMove.animations.play('hadoken!');	
//           this.chuckHadoken(Hadokens, 'redHadoken', 'right');
//         }
//       }
//     }, this);
//   }
// }
// RyuMove.chuckHadoken = function(hadokens, hadokenImage, direction) {
// 	var hadoken = hadokens.create(ryuMove.x, ryuMove.y, hadokenImage);
//  	if (direction === 'left') {
// 		hadoken.body.velocity.x = -400;
// 	}
// 	else{
// 		hadoken.body.velocity.x = 400;
// 	}
// }