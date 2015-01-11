var Enemy = {};

Enemy.preload = function() {
	game.load.image('enemy', 'assets/enemy/enemy.png');
};

Enemy.create = function() {
	enemy = game.add.image(game.world.centerX, 320,'enemy');
	game.physics.enable('enemy', Phaser.Physics.ARCADE);
	// enemy.physics.body.setSize(4,32,0,0);
	enemy.body.bounce.y = 0.2;
	enemy.body.gravity.y = 500;
	enemy.body.collideWorldBounds = true;
	enemy.animations.add('left',[0,1],10,true);
	enemy.animations.add('right',[1,2],10,true);
	enemy.body.velocity.x = 100;
};

Enemy.update = function() {

	game.physics.arcade.collide(enemy, platforms)

	if (enemy.health < 0)
	{
		enemy.destroy();
	}
};

// Unneccessary OO
// Enemy.isAlive = function(enemy) {
// 	if (enemy.health > 0)
// 	{
// 		return true;
// 	}
// 	else
// 	{
// 		return false;
// 	}
// };

// function destroySprite (sprite) {
// 	sprite.destroy();
// }