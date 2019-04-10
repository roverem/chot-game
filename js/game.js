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
    this.load.image('pic', 'assets/pics/taikodrummaster.jpg');
	for (var i = 0;i < 10; i++){
		this.load.image('mask' + i, 'assets/sprites/mask'+ i +'.png');
	}
    this.load.image('logo', 'assets/sprites/phaser.png');
	
	this.load.image('tiles', 'assets/tilemaps/tiles/simples_pimples.png');
    this.load.tilemapTiledJSON('map', 'assets/tilemaps/map.json');
}

function create ()
{
    var pic = this.add.image(509, 346, 'pic');

    this.add.image(100, 60, 'logo');
	
	//var spotlight = this.make.sprite({x: 400, y: 300, key: 'mask1', add: false });
	var spotlight = this.add.container(0, 300);
	
	var masks = [];
	var maskRow = 0;
	var maskColumn = 0;
	for (var i=0; i < 10; i++){
		var mask = this.add.sprite(0, 0, 'mask' + i.toString());
		mask.x = mask.width/2 + maskColumn * mask.width;
		mask.y = mask.height/2 + maskRow * mask.height;
		
		maskColumn++;
		if (i != 0 &&i % 3 == 0){
			maskColumn = 0;
			maskRow++
		}
		masks.push(mask);
	}
	spotlight.add(masks);

    pic.mask = new Phaser.Display.Masks.BitmapMask(this, spotlight);

    this.input.on('pointermove', function (pointer) {

        spotlight.x = pointer.x - 400;
        spotlight.y = pointer.y - 300 ;

    });
	
	var tween = this.tweens.add({
        targets: spotlight,
        alpha: 0,
        duration: 500,
        ease: 'Sine.easeInOut',
        loop: 0,
        yoyo: false
    });
	
	this.input.on('pointerdown', function (pointer) {
		tween.restart();
    });
	

    
	
	graphics = this.add.graphics();
	
	var map = this.make.tilemap({ key: 'map' });
	var tiles = map.addTilesetImage('tiles', 'tiles');
	
	var layer = map.createStaticLayer(0, tiles, 0, 0);
	
	var coins = map.createFromObjects('Object Layer 1', 1, { key: 'mask8' });
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

