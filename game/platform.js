var Platform = {};

var platforms;

Platform.preload = function() {
	game.load.image('platform','assets/imgs/platform.png');
}

Platform.create = function() {
	platforms = game.add.group();

	platforms.enableBody = true;

	// Ground platform
	var ground = platforms.create(0, game.world.height - 64, 'ground');
	ground.scale.setTo(2,2);
	ground.body.immovable = true;

}