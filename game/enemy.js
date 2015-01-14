var Enemy = {};

Enemy.preload = function() {
	game.load.image('enemy', 'assets/enemy/enemy.png');
};

Enemy.create = function() {
	game.physics.startSystem(Phaser.Physics.ARCADE);
	enemy = game.add.image(120, 520,'enemy');
	game.physics.arcade.enable(enemy);
	// Enemy physical attributes
	enemy.health = 2;
	enemy.anchor.setTo(.5,.5);
	enemy.animations.add('left',[0,1],10,true);
	enemy.animations.add('right',[1,2],10,true);
};

Enemy.update = function() {
	enemy.x += 2;
	enemy.scale.x = 1;

	game.physics.arcade.collide(enemy, platforms)

	// If hadoken touches enemy, reduce health
  hadokenCollision = game.physics.arcade.collide(enemy, Hadokens);
  // console.log(hadoken);
  if (hadokenCollision === true)
  {
    console.log("hadokenCollision");
    enemyHealth--;
  }

	if (enemy.health < 0)
	{
		enemy.destroy(); // Research animation of death
	}

};


