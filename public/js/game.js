var State = {};
var music;

State.preload = function(){
  game.load.tilemap('level_one', 'assets/levels/level_one_redo.json', null, Phaser.Tilemap.TILED_JSON);
  game.load.image('level_one_tiles', 'assets/imgs/background_level1.png');
  // game.load.atlasJSONHash('ryuRun', 'assets/ryu/ryu.json', 'assets/ryu/ryu.png');
  Ryu.preload();

};
State.create = function(){
  game.physics.startSystem(Phaser.Physics.ARCADE);
  map = game.add.tilemap('level_one');
  map.addTilesetImage('level_one_tiles');
  background = map.createLayer('Tile Layer 1');
  background.resizeWorld();

  Ryu.create();

};
State.update = function(){
  Ryu.update();
};
State.render = function() {
  Ryu.render();
};

var game = game || new Phaser.Game(800,224,Phaser.AUTO,'ryuman',State);
