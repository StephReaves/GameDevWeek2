var State = {};

State.preload = function(){
  Ryu.preload();
};
State.create = function(){
  Ryu.create();
};
State.update = function(){
  Ryu.update();
};

var game = game || new Phaser.Game(800,600,Phaser.AUTO,'ryuman',State);