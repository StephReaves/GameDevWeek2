var State = {};

State.preload = function(){
  game.load.tilemap('level1', 'js/ryu_level1.json', null, Phaser.Tilemap.TILED_JSON);
  game.load.image('background', 'assets/imgs/background_level1.png');
  game.load.atlasJSONHash('ryuRun', 'ryu.json', 'ryu.png')
  Ryu.preload();

};
State.create = function(){
  game.physics.startSystem(Phaser.Physics.ARCADE);
  game.add.sprite(0, 0, 'background');
  Ryu.create();
	this.map = game.add.tilemap('level1');
	// 'ryuman_level1' is the name used in Tiled Map Editor
	this.map.addTilesetImage('ryuman_level1', 'background');
	// 'Background' is the name of the layer in the tiled file
	this.backgroundLayer = this.map.createLayer('Background');
	this.blockedLayer = this.createLayer('Collision');
	//collision on blockedLayer
	this.map.setCollisionBetween(1, 100000, true, 'Collision');
	//resizes the game world
	//this.backgroundLayer.resizeWorld();
};
State.update = function(){
  Ryu.update();
};
State.render = function() {
  Ryu.render();
}

var game = game || new Phaser.Game(800,600,Phaser.AUTO,'ryuman',State);