var Enemy = {};
var enemy;
var guard;
var damageGuard;

Enemy.preload = function() {
	game.load.image('enemy', 'assets/imgs/enemy.png');
	game.load.audio('damageGuard', ['assets/audio/damage.wav']);
};

Enemy.create = function() {
	enemy = game.add.group();
	enemy.enableBody = true;
	enemy.physicsBodyType = Phaser.Physics.ARCADE;
	enemy.createMultiple(20, 'enemy');
	enemy.setAll('anchor.x',0.5);
	enemy.setAll('anchor.y',0.5);
	enemy.setAll('scale.x',0.5);
	enemy.setAll('scale.y',0.5);
	enemy.setAll('checkWorldBounds',true);
	damageGuard = game.add.audio('damageGuard');

	this.launchGuard(ryu.x+500);
};

Enemy.update = function() {

	// If hadoken touches enemy, reduce health
  game.physics.arcade.overlap(guard, Hadokens, this.hadokenCollision, null, this);
  game.physics.arcade.overlap(guard, redHadokens, this.hadokenCollision, null, this);

	if (guard.health <= 0)
	{
		guard.destroy();
		this.launchGuard(ryu.x+500);	
	}

};


Enemy.hadokenCollision = function() {
	guard.damage(1);
	damageGuard.play();
	hadoken.kill();
	console.log(guard.health);
};

Enemy.launchGuard = function(position) {

	guard = enemy.getFirstExists(false);
	if (guard) {
    guard.reset(position, game.world.height - 180);
    game.physics.arcade.enable(guard);
    guard.body.velocity.x = -30;
    guard.body.allowGravity = true;
    guard.body.collideWorldBounds = true;
    guard.body.gravity.y = 250;
    guard.health = 100;
	}
};


