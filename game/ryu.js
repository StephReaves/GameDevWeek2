var game = game || new Phaser.Game(800,600,Phaser.AUTO,'ryuman',{preload: preload, create: create, update:update});

function preload () {
  game.load.image('ryuNormal', 'assets/ryu/ryu_normal.png');
  game.load.image('blueHadoken', 'assets/ryu/blue_hadoken.png');
}

var hadokenRecoverTime = 0;

function create () {
  ryu = game.add.image(0,0,'ryuNormal');
  BlueHadokens = game.add.group();
  BlueHadokens.enableBody = true;

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

function update () {
  if (playerKeys.w.isDown) {
    console.log('move up');
  }
  else if (playerKeys.a.isDown) {
    console.log('move left');
  }
  else if (playerKeys.s.isDown) {
    console.log('move down/duck?');
  }
  else if (playerKeys.d.isDown) {
    console.log('move right');
  }
  else if (playerKeys.h.isDown) {
    chuckHadoken(BlueHadokens, 'blueHadoken');
  }
}

function chuckHadoken (hadokens, hadokenImage) {
  if (game.time.now > hadokenRecoverTime) {
    var hadoken = hadokens.create(ryu.x, ryu.y, hadokenImage);
    if (playerKeys.a.isDown) {
      hadoken.body.velocity.x = -400;
    }
    else{
      hadoken.body.velocity.x = 400;
    }
    hadokenRecoverTime = game.time.now + 300;
  }
}