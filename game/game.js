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
State.render = function() {
  Ryu.render();	
}

var game = game || new Phaser.Game(800,600,Phaser.AUTO,'ryuman',State);