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

};

function update() {

};