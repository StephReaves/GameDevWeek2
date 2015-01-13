var State = {};

State.preload = function(){
  game.load.image('background', 'assets/imgs/mmbackground.jpg');
  game.load.atlasJSONHash('ryuRun', 'ryu.json', 'ryu.png');
  Ryu.preload();

};
State.create = function(){
  game.physics.startSystem(Phaser.Physics.ARCADE);
  game.add.sprite(0, 0, 'background');
  Ryu.create();
};
State.update = function(){
  Ryu.update();
};
State.render = function() {
  Ryu.render();
}

var game = game || new Phaser.Game(800,600,Phaser.AUTO,'ryuman',State);