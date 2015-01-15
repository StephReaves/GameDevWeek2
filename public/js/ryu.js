var Ryu = {};
var jumpTimer = 0;
var ryu;
var attack;
var music;
var die;
var jump;
var damage;
var fireRate = 100;
var nextFire = 0;
var hadoken;

Ryu.preload = function() {
  game.load.spritesheet('ryuRun', 'assets/ryu/ryu_run.png', 25.5, 40);
  game.load.image('blueHadoken', 'assets/ryu/blue_hadoken.png');
  game.load.image('redHadoken', 'assets/ryu/red_hadoken.png');
  game.load.audio('attack', ['assets/audio/attack.mp3']);
  game.load.audio('theme', ['assets/audio/dp_pacmania_stage2.wav']);
  game.load.audio('die', ['assets/audio/death.wav']);
  game.load.audio('jump', ['assets/audio/Jump-SoundBible.com.mp3']);
  game.load.audio('damage', ['assets/audio/damage.wav']);

};

Ryu.create = function() {
  ryu = game.add.sprite(32, game.world.height - 180,'ryuRun');
  game.physics.arcade.enable(ryu);
  ryu.anchor.setTo(.5, .5);
  ryu.body.allowGravity = true;
  ryu.body.setSize(20, 32, 5, 16);
  ryu.body.collideWorldBounds = true;
  ryu.health = 100;

  Hadokens = game.add.group();
  Hadokens.enableBody = true;
  Hadokens.physicsBodyType = Phaser.Physics.ARCADE;
  Hadokens.createMultiple(50, 'blueHadoken');
  Hadokens.setAll('checkWorldBounds', true);
  Hadokens.setAll('outOfBoundsKill', true);
  redHadokens = game.add.group();
  redHadokens.enableBody = true;
  redHadokens.physicsBodyType = Phaser.Physics.ARCADE;
  redHadokens.createMultiple(10, 'redHadoken');
  redHadokens.setAll('checkWorldBounds', true);
  redHadokens.setAll('outOfBoundsKill', true);


  ryu.body.gravity.y = 250;

  ryu.animations.add('run', [1,2,3,4], 7, true);
  attack= game.add.audio('attack');
  music = game.add.audio('theme',1,true);
  jump = game.add.audio('jump');
  damage = game.add.audio('damage');
  music.play('',0,1,true);


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
  game.camera.follow(ryu);
};

Ryu.update = function() {
if (playerKeys.w.isDown && ryu.body.onFloor() && game.time.now > jumpTimer) {
  ryu.body.velocity.y = -150;
  jumpTimer = game.time.now + 750;
  jump.play();
}
else if (playerKeys.a.isDown) {
  ryu.body.velocity.x = -200;
  ryu.scale.x = -1;
  ryu.animations.play('run');
}
else if (playerKeys.s.isDown) {
  console.log('move down/duck?');
}
else if (playerKeys.d.isDown) {
  ryu.body.velocity.x = 200;
  ryu.scale.x = 1;
  ryu.animations.play('run');
}
else {
  ryu.body.velocity.x = 0;
  ryu.animations.stop();
  ryu.frame = 0;
}

// hadoken functionality is working, but the animation is not yet.
playerKeys.h.onDown.add(function(key) {
if (playerKeys.a.isDown) {
      // ryuMove.animations.play('hadoken!');
      attack.play();
      this.chuckHadoken(Hadokens, 'left');
    }
    else{
      // ryuMove.animations.play('hadoken!');
      attack.play();
      this.chuckHadoken(Hadokens, 'right');
    }
  }, this);

if (playerKeys.h.isDown) {
  playerKeys.h.onUp.add(function(key){
    if (key.duration >= 500) {
      if (playerKeys.a.isDown) {
        attack.play();
          // ryuMove.animations.play('hadoken!');
          this.chuckHadoken(redHadokens, 'left');
        }
        else{
          // ryuMove.animations.play('hadoken!');
          attack.play();
          this.chuckHadoken(redHadokens, 'right');
        }
      }
    }, this);
  }

  // If Ryu touches enemy, reduce health
  enemyCollision = game.physics.arcade.collide(enemy, ryu, this.enemyCollision);

  if (ryu.health <= 0)
  {
    ryu.kill();
    // Call method to end or restart game
  }
};

Ryu.enemyCollision = function () {
  ryu.health--;
  console.log(ryu.health--);
}

Ryu.chuckHadoken = function(hadokensGroup, direction) {
  var hadoken = hadokensGroup.getFirstExists(false);
  hadoken.reset(ryu.x, ryu.y);
  if (direction === 'left') {
    hadoken.body.velocity.x = -400;
  }
  else{
    hadoken.body.velocity.x = 400;
  }
  if (game.time.now > nextFire && hadokensGroup.countDead() > 0)
  {
    nextFire = game.time.now + fireRate;
    var hadoken = hadokensGroup.getFirstDead();
    hadoken.reset(sprite.x - 8, sprite.y - 8);
  }
};

Ryu.render = function() {
  game.debug.cameraInfo(game.camera, 32, 32);
  game.debug.spriteCoords(ryu, 32, 500);
};