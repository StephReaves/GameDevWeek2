var Enemy = {};

Enemy.preload = function() {
	game.load.image('enemy', 'assets/enemy/enemy.png');
};

Enemy.create = function() {
	// enemy = game.add.image(120, 520,'enemy');
	// enemy.enableBody = true;
	// enemy.physicsBodyType = Phaser.Physics.ARCADE;
	// // Enemy physical attributes
	// enemy.health = 2;
	// enemy.anchor.setTo(.5,.5);
	// enemy.animations.add('left',[0,1],10,true);
	// enemy.animations.add('right',[1,2],10,true);
	enemy = game.add.group();
	enemy.enableBody = true;
	enemy.physicsBodyType = Phaser.Physics.ARCADE;
	enemy.createMultiple(5, 'enemy');
	enemy.setAll('anchor.x',0.5);
	enemy.setAll('anchor.y',0.5);
	enemy.setAll('scale.x',0.5);
	enemy.setAll('scale.x',0.5);
	enemy.setAll('checkWorldBounds',true);
	enemy.health = 2;

	this.launchEnemy();
};

Enemy.update = function() {
	// enemy.x += 2;
	// enemy.scale.x = 1;

	game.physics.arcade.collide(enemy, platforms)

	// If hadoken touches enemy, reduce health
  game.physics.arcade.collide(enemy, Hadokens, this.hadokenCollision);
  // console.log(hadoken);
  // if (hadokenCollision === true)
  // {
  //   console.log("hadokenCollision");
  //   enemy.health--;
  //   // JIC: Need to destroy the colliding hadokens
  //   console.log(enemy.health);
  // }

	if (enemy.health <= 0)
	{
		enemy.destroy();
		console.log("enemy destroyed");
	}

};

Enemy.hadokenCollision = function() {
	enemy.health--;
	console.log(enemy.health);
}

Enemy.launchEnemy = function() {

	var guard = enemy.getFirstExists(false);
	if (guard) {
	    guard.reset(600, 500);
	    guard.body.velocity.x = 1
	    guard.health = 2;
	}
}


