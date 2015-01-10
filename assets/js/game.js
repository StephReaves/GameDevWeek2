var playerSprite;
var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {
	game.load.image('megaman', 'assets/imgs/megaman.jpg');
	game.load.image('sky', 'assets/imgs/mmbackground.jpg');
}

function create() {
		game.add.sprite(0, 0, 'sky');
    playerSprite = game.add.sprite(0, 600, 'megaman');
    game.physics.enable(playerSprite, Phaser.Physics.ARCADE);
    playerSprite.body.collideWorldBounds = true;

}

function update() {
	if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
		playerSprite.body.velocity.x = -200;
	} else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
		playerSprite.body.velocity.x = 200;
	}

};