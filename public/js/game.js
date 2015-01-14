var State = {};
var music;

State.preload = function(){
  game.load.tilemap('level1', 'assets/levels/level_one.json', null, Phaser.Tilemap.TILED_JSON);
  game.load.image('background', 'assets/imgs/background_level1.png');
  game.load.atlasJSONHash('ryuRun', 'assets/ryu/ryu.json', 'assets/ryu/ryu.png');
  Ryu.preload();

};
State.create = function(){
  game.physics.startSystem(Phaser.Physics.ARCADE);
  game.add.tileSprite(0, 0, 4060, 224, 'background');
  game.world.setBounds(0, 0, 4060, 224);
  Ryu.create();
  map = game.add.tilemap('level1');
  map.addTilesetImage('background_level1', 'background');
  map.setCollisionBetween(1, 100000, true, 'Collision');
  // 'ryuman_level1' is the name used in Tiled Map Editor
  // 'Background' is the name of the layer in the tiled file
  // this.backgroundLayer = this.map.createLayer('Background');
  // this.blockedLayer = this.createLayer('Collision');
  //collision on blockedLayer
  //resizes the game world
  //this.backgroundLayer.resizeWorld();

};
State.update = function(){
  Ryu.update();
};
State.render = function() {
  Ryu.render();
};

var game = game || new Phaser.Game(800,224,Phaser.AUTO,'ryuman',State);
