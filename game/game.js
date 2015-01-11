var State = {};

State.preload = function(){
  game.load.image('background', 'assets/imgs/mmbackground.jpg');
  Platform.preload();
  Ryu.preload();
  Enemy.preload();
};
State.create = function(){
  game.add.sprite(0, 0, 'background');
  Platform.preload();
  Ryu.create();
  Enemy.create();
};
State.update = function(){
  Ryu.update();
  Enemy.update();
};
State.render = function() {
  Ryu.render();	
}

var game = game || new Phaser.Game(800,600,Phaser.AUTO,'ryuman',State);