var Boss = {};
var bossTimer = 0;
var boss;
var boogers;
var die;
// var jump;
// var damage;

Boss.preload = function() {
  game.load.spritesheet('bossWalk', 'assets/boss/walk_mbison.png', 41.5, 50);

  game.load.image('boog', 'assets/boss/attack_mbison.png', 500, 100);

};

Boss.create = function() {

  boss = game.add.sprite(330, game.world.height - 180,'bossWalk');

  boss.enableBody = true;		
  game.physics.arcade.enable(boss);
  boss.body.allowGravity = true;
  boss.body.setSize(20, 32, 5, 16);
  boss.body.collideWorldBounds = true;
  boss.body.velocity.x = 1
  boss.health = 2;

  Boogers = game.add.group();
  Boogers.enableBody = true;
  Boogers.physicsBodyType = Phaser.Physics.ARCADE;
  Boogers.createMultiple(50, 'boog');
  Boogers.setAll('checkWorldBounds', true);
  Boogers.setAll('outOfBoundsKill', true);

  console.log(Boogers)
  boss.body.gravity.y = 200;

  boss.animations.add('run', [0,1,2,3,4], 3, true);

  boss.physicsBodyType = Phaser.Physics.ARCADE;
  boss.anchor.setTo(0.5, 0.5);
  boss.scale.set(1.0, 1.0);

};

Boss.update = function() {
  game.physics.arcade.collide(boss, Hadokens, this.hadokenCollision);

  var that = this;
  if (game.time.now > bossTimer) {
      setInterval(function() {that.flip()}, 3000);
      // setInterval(function() {that.fire(Boogers)}, 1000);
  } 

  if (boss.health <= 0) {
  	boss.destroy();
  	console.log("boss destroyed")
  }

  setInterval(function() {that.fire(Boogers);}, 10000)

}

Boss.hadokenCollision = function() {
  boss.health--;
  console.log(boss.health)
}

Boss.flip = function() {

  arr = [200, -200]
  boss.body.velocity.x = arr[Math.round(Math.random())];
  boss.animations.play('run')
  setTimeout(function() {boss.animations.stop();}, 4000) 
}

Boss.fire = function(Boogers) {
  this.tossBooger(Boogers, Math.round(Math.random())); 
}

Boss.tossBooger = function(boogersGroup, direction) {
  boogers = boogersGroup.getFirstExists(false);
  boogers.reset(boss.x, boss.y)

  if (direction === 0) {
    boogers.body.velocity.x = -400;
    console.log("fire")
  }
  else{
    boogers.body.velocity.x = 400;
    console.log("fire")
  }

}




// var Enemy = {};
// var enemy;

// Enemy.preload = function() {
// 	game.load.image('enemy', 'assets/imgs/enemy.png');
// };

// Enemy.create = function() {
// 	enemy = game.add.group();
// 	enemy.enableBody = true;
// 	enemy.physicsBodyType = Phaser.Physics.ARCADE;
// 	enemy.createMultiple(5, 'enemy');
// 	enemy.setAll('anchor.x',0.5);
// 	enemy.setAll('anchor.y',0.5);
// 	enemy.setAll('scale.x',0.5);
// 	enemy.setAll('scale.y',0.5);
// 	enemy.setAll('checkWorldBounds',true);
// 	enemy.health = 2;

// 	// JIC: Need to figure out how to know each enemy object to kill off the specific ones that get hit instead of killing whole group
// 	this.launchEnemy();
// };

// Enemy.update = function() {

// 	// game.physics.arcade.collide(enemy, platforms)

// 	// If hadoken touches enemy, reduce health
//   game.physics.arcade.collide(enemy, Hadokens, this.hadokenCollision);

// 	if (enemy.health <= 0)
// 	{
// 		enemy.destroy();
// 		console.log("enemy destroyed");
// 	}

// };

// Enemy.hadokenCollision = function() {
// 	enemy.health--;
// 	// Will need to kill hadokens as they hit
// 	// Ryu.Hadokens.kill();
// 	console.log(enemy.health);
// }

// Enemy.launchEnemy = function() {

// 	var guard = enemy.getFirstExists(false);
// 	if (guard) {
// 	    guard.reset(100, game.world.height - 180);
// 	    guard.body.velocity.x = 1
// 	    guard.health = 2;
// 	    game.physics.arcade.enable(guard);
// 	    guard.body.allowGravity = true;
// 	    guard.body.collideWorldBounds = true;
// 	    guard.body.gravity.y = 250;
// 	}
// }
