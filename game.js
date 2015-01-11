var playerSprite;

var game = new Phaser.Game(
		800, 600, Phaser.AUTO, '',
		{ preload: preload, create: create, update: update }

	);

function preload() {

	game.load.image('megaman', 'assets/megaman.jpg')
};

function create() {
	playerSprite = game.add.sprite(game.world.centerX, 0, 'megaman');
	playerSprite.acceleration.y = 200;
	playerSprite.acceleration.x = 100;
  playerSprite = game.add.sprite(0, 0, 'megaman');
  game.physics.enable(playerSprite, Phaser.Physics.ARCADE);
  playerSprite.body.collideWorldBounds = true;

};

function update() {
	if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
		playerSprite.body.velocity.x = -200;
	} else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
		playerSprite.body.velocity.x = 200;
	}
};