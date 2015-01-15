var Boss = {};
// var jumpTimer = 0;
var boss;
var attack;
var die;
// var jump;
// var damage;

Boss.preload = function() {
  game.load.spritesheet('bossWalk', 'assets/boss/walk_mbison.png', 25.5, 40);
  game.load.image('bossFire', 'assets/boss/attack_mbison.png');
};

Boss.create = function() {
  boss = game.add.sprite(200, game.world.height - 180,'bossWalk');
  game.physics.arcade.enable(boss);
  boss.anchor.setTo(.5, .5);
  boss.body.allowGravity = true;
  boss.body.setSize(20, 32, 5, 16);
  boss.body.collideWorldBounds = true;

  Boogers = game.add.group();
  Boogers.enableBody = true;

  boss.body.gravity.y = 200;

  boss.animations.add('bossWalk', [0,1,2,3,4], 7, true);
  // attack= game.add.audio('attack');
  // jump = game.add.audio('jump');
  // damage = game.add.audio('damage');
  // music.play('',0,1,true);
};

Boss.update = function() {

}