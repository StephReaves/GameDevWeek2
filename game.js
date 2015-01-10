var playerImage;

var game = new Phaser.Game(
		800, 600, Phaser.AUTO, '',
		{ preload: preload, create: create, update: update }

	);

function preload() {
game.load.image('playerImage', 'assets/megaman.gif')
}

function create() {

}

function update() {

}