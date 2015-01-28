var State = {};
var music;

State.preload = function(){

  game.load.tilemap('level_one', 'assets/levels/level_one_redo.json', null, Phaser.Tilemap.TILED_JSON);
  game.load.image('level_one_tiles', 'assets/imgs/background_level1.png');
  // game.load.atlasJSONHash('ryuRun', 'assets/ryu/ryu.json', 'assets/ryu/ryu.png');

  game.load.tilemap('level1', 'assets/levels/level_one.json', null, Phaser.Tilemap.TILED_JSON);
  game.load.image('background', 'assets/imgs/background_level1.png');

  Ryu.preload();
  Enemy.preload();
  Boss.preload();


};
State.create = function(){
  game.physics.startSystem(Phaser.Physics.ARCADE);
  map = game.add.tilemap('level_one');
  map.addTilesetImage('level_one_tiles');
  backgroundLayer = map.createLayer('Tile Layer 1');
  backgroundLayer.resizeWorld();
  map.setCollision([721,815,816,817]);
  Ryu.create();

  Enemy.create();
  Boss.create();

  map = game.add.tilemap('level1');
  map.addTilesetImage('background_level1', 'background');
  map.setCollisionBetween(1, 100000, true, 'Collision');

};
State.update = function(){
  game.physics.arcade.collide(ryu, backgroundLayer);

  Ryu.update();

  Enemy.update();

  Boss.update();

};
State.render = function() {
  Ryu.render();
};

var game = game || new Phaser.Game(800,224,Phaser.AUTO,'ryuman',State);
