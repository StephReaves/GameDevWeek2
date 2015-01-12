var Ryu = {};
var jumpTimer = 0;
var ryu;


Ryu.preload = function() {
  game.load.spritesheet('ryuRun', 'assets/ryu/ryu_run.png', 25.5, 40);
  game.load.image('blueHadoken', 'assets/ryu/blue_hadoken.png');
  game.load.image('redHadoken', 'assets/ryu/red_hadoken.png');
};

Ryu.create = function() {
  ryu = game.add.sprite(32, game.world.height - 180,'ryuRun');
  game.physics.arcade.enable(ryu);
  ryu.anchor.setTo(.5, .5);
  ryu.body.allowGravity = true;
  ryu.body.setSize(20, 32, 5, 16);
  ryu.body.collideWorldBounds = true;

  Hadokens = game.add.group();
  Hadokens.enableBody = true;

  game.physics.arcade.gravity.y = 250;
  // I added gravity in order to have the player jump, but now the hadokens have gravity
  // attached to them as well, which makes them sag down
  // I tried to remove gravity from the hadokens below but I keep getting the error
  // "cant set property 'allowGravity' of undefined"
  // I tried two different ways:

  // Hadokens.allowGravity = false;
  // Hadokens.body.allowGravity = false;

  ryu.animations.add('run', [1,2,3,4], 7, true);

// Currently this animation for doing a hadoken is not working
  // ryu.animations.add('hadoken!', [5,6], 7, true);
  // ryu.animations.play('hadoken!');

  playerKeys = {
    //movement
    w: game.input.keyboard.addKey(87),
    a: game.input.keyboard.addKey(65),
    s: game.input.keyboard.addKey(83),
    d: game.input.keyboard.addKey(68),
    //hadoken
    h: game.input.keyboard.addKey(72)
  };
  game.camera.follow(ryu)
};

Ryu.update = function() {
   if (playerKeys.w.isDown && ryu.body.onFloor() && game.time.now > jumpTimer) {
    ryu.body.velocity.y = -150;
    jumpTimer = game.time.now + 750;
  }
  else if (playerKeys.a.isDown) {
    ryu.x -= 2;
    ryu.scale.x = -1;
    ryu.animations.play('run');
  }
  else if (playerKeys.s.isDown) {
    console.log('move down/duck?');
  }
  else if (playerKeys.d.isDown) {
    ryu.x += 2;
    ryu.scale.x = 1;
    ryu.animations.play('run');
  }
// hadoken functionality is working, but the animation is not yet. 
  playerKeys.h.onDown.add(function(key){
    if (playerKeys.a.isDown) {
      // ryuMove.animations.play('hadoken!'); 
      this.chuckHadoken(Hadokens, 'blueHadoken', 'left');
    }
    else{
      // ryuMove.animations.play('hadoken!'); 
      this.chuckHadoken(Hadokens, 'blueHadoken', 'right');
    }
  }, this);

  if (playerKeys.h.isDown) {
    var duration = playerKeys.h.duration;
    playerKeys.h.onUp.add(function(key){
      if (duration >= 500) {
        duration = 0;
        if (playerKeys.a.isDown) {
          // ryuMove.animations.play('hadoken!'); 
          this.chuckHadoken(Hadokens, 'redHadoken', 'left');
        }
        else{
          // ryuMove.animations.play('hadoken!'); 
          this.chuckHadoken(Hadokens, 'redHadoken', 'right');
        }
      }
    }, this);
  }
};

Ryu.chuckHadoken = function(hadokens, hadokenImage, direction) {
  var hadoken = hadokens.create(ryu.x, ryu.y, hadokenImage);
  if (direction === 'left') {
    hadoken.body.velocity.x = -400;
  }
  else{
    hadoken.body.velocity.x = 400;
  }
};

Ryu.render = function() {
  game.debug.cameraInfo(game.camera, 32, 32);
  game.debug.spriteCoords(ryu, 32, 500);
};