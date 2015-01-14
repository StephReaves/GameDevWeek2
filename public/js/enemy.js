var Enemy = {};
var enemy;

Enemy.preload = function() {
	game.load.image('enemy', 'assets/imgs/enemy.png');
};

Enemy.create = function() {
	enemy = game.add.group();
	enemy.enableBody = true;
	enemy.physicsBodyType = Phaser.Physics.ARCADE;
	enemy.createMultiple(5, 'enemy');
	enemy.setAll('anchor.x',0.5);
	enemy.setAll('anchor.y',0.5);
	enemy.setAll('scale.x',0.5);
	enemy.setAll('scale.y',0.5);
	enemy.setAll('checkWorldBounds',true);
	enemy.health = 5;

	// JIC: Need to figure out how to know each enemy object to kill off the specific ones that get hit instead of killing whole group
	this.launchEnemy();
};

Enemy.update = function() {

	// game.physics.arcade.collide(enemy, platforms)

	// If hadoken touches enemy, reduce health
  game.physics.arcade.overlap(enemy, hadoken, this.hadokenCollision);

	if (enemy.health <= 0)
	{
		enemy.destroy();
		console.log("enemy destroyed");
	}

};

Enemy.hadokenCollision = function() {
	enemy.health--;
	hadoken.kill();
	console.log(enemy.health);
}

Enemy.launchEnemy = function() {

	var guard = enemy.getFirstExists(false);
	if (guard) {
	    guard.reset(Math.random(300,700)*1000, game.world.height - 180);
	    guard.body.velocity.x = -30;
	    game.physics.arcade.enable(guard);
	    guard.body.allowGravity = true;
	    guard.body.collideWorldBounds = true;
	    guard.body.gravity.y = 250;
	}
}


