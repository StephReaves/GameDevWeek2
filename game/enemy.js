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

	launchEnemy();
};

Enemy.update = function() {
	enemy.x += 2;
	enemy.scale.x = 1;

	game.physics.arcade.collide(enemy, platforms)

	// If hadoken touches enemy, reduce health
  hadokenCollision = game.physics.arcade.collide(guard, Hadokens);
  // console.log(hadoken);
  if (hadokenCollision === true)
  {
    console.log("hadokenCollision");
    enemy.health--;
    console.log(enemy.health);
  }

	if (guard.health < 0)
	{
		guard.destroy();
		console.log("guard destroyed");
	}

};

function launchEnemy() {

	var guard = enemy.getFirstExists(false);
	if (guard) {
	    guard.reset(50, 500);
	    guard.body.velocity.x = 1
	    guard.health = 2;
	}

}


