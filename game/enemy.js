var Enemy = {};

var enemyHealth = 2;

Enemy.preload = function() {
	game.load.image('enemy', 'assets/enemy/enemy.png');
};

Enemy.create = function() {
	game.physics.startSystem(Phaser.Physics.ARCADE);
	enemy = game.add.image(game.world.centerX, 320,'enemy');
	console.log(enemy);
	console.log(enemy.body);
	game.physics.arcade.enable(enemy);

	// Enemy physical attributes
	enemy.physics.body.setSize(4,32,0,0);
	enemy.body.bounce.y = 0.2;
	enemy.body.gravity.y = 500;
	enemy.body.collideWorldBounds = true;
	enemy.animations.add('left',[0,1],10,true);
	enemy.animations.add('right',[1,2],10,true);
	enemy.body.velocity.x = 100;
};

Enemy.update = function() {

	game.physics.arcade.collide(enemy, platforms)

	// If hadoken touches enemy, reduce health
  hadokenCollision = game.physics.arcade.collide(enemy, Hadokens);
  if (hadokenCollision === true)
  {
    enemy.enemyHealth--;
  }

	if (enemy.health < 0)
	{
		enemy.destroy(); // Research animation of death
	}

};
