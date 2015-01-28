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
  boss.body.velocity.x = 1;
  boss.health = 2;

  Boogers = game.add.group();
  Boogers.enableBody = true;
  Boogers.physicsBodyType = Phaser.Physics.ARCADE;

  Boogers.createMultiple(50, 'boog');
  Boogers.setAll('checkWorldBounds', true);
  Boogers.setAll('outOfBoundsKill', true);

  boss.body.gravity.y = 200;

  boss.animations.add('run', [0,1,2,3,4], 3, true);

  boss.physicsBodyType = Phaser.Physics.ARCADE;
  boss.anchor.setTo(0.5, 0.5);
  boss.scale.set(1.0, 1.0);

};

Boss.update = function() {
  game.physics.arcade.collide(boss, Hadokens, this.hadokenCollision);
  game.physics.arcade.collide(boss, backgroundLayer);

  var that = this;
  if (game.time.now > bossTimer) {
      setInterval(function() {that.flip()}, 3000);
      // setInterval(function() {that.fire(Boogers)}, 1000);
  }

  if (boss.health <= 0) {
    boss.destroy();
    console.log("boss destroyed");
  }

  setInterval(function() {that.fire(Boogers);}, 10000);

};

Boss.hadokenCollision = function() {
  boss.health--;
  console.log(boss.health);
};

Boss.flip = function() {

  arr = [200, -200]
  boss.body.velocity.x = arr[Math.round(Math.random())];
  boss.animations.play('run');
  setTimeout(function() {boss.animations.stop();}, 4000);

}

Boss.fire = function(Boogers) {
  this.tossBooger(Boogers, Math.round(Math.random()));
  setTimeout(function() {boss.animations.stop();}, 4000);

}

Boss.tossBooger = function(boogersGroup, direction) {
  boogers = boogersGroup.getFirstExists(false);
  boogers.reset(boss.x, boss.y);

  if (direction === 0) {
    boogers.body.velocity.x = -400;
    console.log("fire");
  }
  else{
    boogers.body.velocity.x = 400;
    console.log("fire");
  }

}

Boss.tossBooger = function(boogersGroup, direction) {
  boogers = boogersGroup.getFirstExists(false);
  boogers.reset(boss.x, boss.y);

  if (direction === 0) {
    boogers.body.velocity.x = -400;
    console.log("fire");
  }
  else{
    boogers.body.velocity.x = 400;
    console.log("fire");
  }

};