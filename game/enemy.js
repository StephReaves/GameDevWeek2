var Enemy = {};

Enemy.preload = function() {
	game.load.image('enemy', 'assets/enemy/enemy.png');
};

Enemy.create = function() {
	enemy = game.add.image(250,0,'enemy');
};

Enemy.update = function() {
	// If health of sprite reaches 0, kill sprite
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