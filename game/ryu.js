var game = game || new Phaser.Game(800,600,Phaser.AUTO,'ryuman',{preload: preload, create: create, update:update});

function preload () {
  game.load.image('ryuNormal', 'assets/ryu/ryu_normal.png');
  game.load.image('ryuFire', 'assets/ryu/ryu_fire.png');
  game.load.image('blueHadoken', 'assets/ryu/blue_hadoken.png');
}

function create () {
  game.add.image(0,0,'ryuNormal');
  ryuBlueHadoken = game.add.group();
  ryuBlueHadoken.enableBody = true;

  playerKeys = {
    //movement
    w: game.input.keyboard.addKey(87),
    a: game.input.keyboard.addKey(65),
    s: game.input.keyboard.addKey(83),
    d: game.input.keyboard.addKey(68),
    //hadoken
    f: game.input.keyboard.addKey(70)
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
  else if (playerKeys.f.isDown) {
    console.log('HADOKEN!');
  }
}