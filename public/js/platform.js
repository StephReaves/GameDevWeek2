// var Platform = {};

// var platforms;
// var ground;
// var ledge;

// Platform.preload = function() {
// 	game.load.image('ground','assets/imgs/platform2.png');
// }

// Platform.create = function() {
// 	platforms = game.add.group();

// 	platforms.enableBody = true;

// 	// Ground platform
// 	ground = platforms.create(0, game.world.height - 64, 'ground');
// 	ground.scale.setTo(2,2);
// 	ground.body.immovable = true;

// 	ledge = platforms.create(400,400,'ground');
// 	ledge.body.immovable = true;
// 	ledge = platforms.create(-150,250,'ground');

// }