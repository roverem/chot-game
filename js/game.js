var config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 1018,
    height: 693,
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    /*this.load.image('pic', 'assets/pics/taikodrummaster.jpg');
	for (var i = 0;i < 10; i++){
		this.load.image('mask' + i, 'assets/sprites/mask'+ i +'.png');
	}*/
    this.load.image('logo', 'assets/sprites/phaser.png');
	
	this.load.image('tiles', 'assets/tilemaps/tiles/DeepForestTileset.png');
    this.load.tilemapTiledJSON('map', 'assets/tilemaps/map.json');
	this.load.image('fer', 'assets/sprites/background_test.png');
}

function create ()
{
    //var pic = this.add.image(509, 346, 'pic');

    this.add.image(100, 60, 'logo');
	this.add.image(0, 0, 'fer');    
	
	graphics = this.add.graphics();
	
	var map = this.make.tilemap({ key: 'map' });
	var tiles = map.addTilesetImage('DeepForestTileset', 'tiles');
	
	var layer = map.createStaticLayer(0, tiles, 0, 0);
	
	//var coins = map.createFromObjects('Object Layer 1', 1, { key: 'mask8' });
	 // We convert all of the Tiled objects with an ID of 26 into sprites. They will get their width
    // & height from the Tiled tile object. Any custom properties on the tile object will also be
    // passed to the sprite creator (e.g. one of the tile object's has an alpha of 0.5).
    //var coins = map.createFromObjects('Coin Object Layer', 26, { key: 'coin' });

}

var graphics;
function update ()
{
	
    graphics.clear();

    graphics.lineStyle(2, 0xffffff, 1);

    curve.draw(graphics, 64);

    curve.getPoint(200, 200);

    graphics.fillStyle(0xffff00, 1);
    graphics.fillCircle(200, 200, 8);
}

