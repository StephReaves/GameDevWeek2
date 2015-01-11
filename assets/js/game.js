var playerSprite;

var game = new Phaser.Game(
		800, 600, Phaser.AUTO, '',
		{ preload: preload, create: create, update: update }

	);

function preload() {
	game.load.image('megaman', 'assets/megaman.jpg')
};

function create() {
		game.add.sprite(0, 0, 'sky');
    playerSprite = game.add.sprite(0, 600, 'megaman');
    game.physics.enable(playerSprite, Phaser.Physics.ARCADE);
    playerSprite.body.collideWorldBounds = true;
    playerSprite.body.drag.x = 300;

};

function update() {
	if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
		playerSprite.body.velocity.x = -200;
		playerSprite.scale.x = -1;
	} else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
		playerSprite.body.velocity.x = 200;
		playerSprite.scale.x = 1;
	}
};