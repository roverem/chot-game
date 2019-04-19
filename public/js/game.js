var config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 512,
    height: 256,
    zoom: 2.6,
	physics: {
        default: 'impact',
        impact: { gravity: 200 }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload ()
{
	//this.load.multiatlas('player_animation', 'assets/atlas/player_animation.json', 'assets/atlas');
	//this.load.atlas('player_animation', 'assets/atlas/goblin.json', 'assets/atlas');
	
	this.load.atlas({
        key: 'megaset',
        textureURL: 'assets/atlas/megaset-0.png',
        atlasURL: 'assets/atlas/megaset-0.json'
    });
	
	this.load.image("villageBG", "assets/sprites/villageBG.png")
	this.load.image("villageBG_night", "assets/sprites/villageBG_night.png")
	
	
    //this.load.image('logo', 'assets/sprites/phaser.png');
	//this.load.image('tiles', 'assets/tilemaps/tiles/DeepForestTileset.png');
	//this.load.image('fer', 'assets/sprites/background_test.png');
    this.load.tilemapTiledJSON('map', 'assets/tilemaps/map.json');
}

var walk;
var player;
var bground_day, bground_night;
function create ()
{
	//this.add.image(0, 200, 'fer');    
    //this.add.image(100, 60, 'logo');
	bground_day = this.add.image(256,128, "villageBG_night");
	bground_night = this.add.image(256, 128, "villageBG");
	
	graphics = this.add.graphics();
	
	var map = this.make.tilemap({ key: 'map' });
	
	/*var tiles = map.addTilesetImage('DeepForestTileset', 'tiles');
	var layer = map.createStaticLayer(0, tiles, 0, 0);
	var layer2 = map.createStaticLayer(1, tiles, 0, 0);*/
	
	//var atlasTexture = this.textures.get('player_animation');
	//var frames = atlasTexture.getFrameNames();
	
	player = this.add.sprite(0, 190, 'megaset', 'advanced_wars_tank');
    //var frameNames = this.anims.generateFrameNames('player_animation', { start: 1, end: 8, zeroPad: 2, prefix:'walk/', suffix:'.png' });
	//this.anims.create({ key: 'walk', frames: frameNames, frameRate: 10, repeat: -1 });
	//player.anims.play('walk');

	//player = this.add.sprite(0, 190, 'player_animation', "goblin_attack_001.png");//.play('walk')//.setDisplaySize(192, 192);
	
	/*var frameNames = this.anims.generateFrameNames('player_animation', {
			start: 1, end: 8, zeroPad: 2,
			prefix: "goblin_die_", suffix: ".png"
	})*/
	
	//this.anims.create({ key: 'goblin_walk', frames: frames, frameRate: 10, repeat: -1 });
	
	
	
	//var coins = map.createFromObjects('Object Layer 1', 1, { key: 'mask8' });
	 // We convert all of the Tiled objects with an ID of 26 into sprites. They will get their width
    // & height from the Tiled tile object. Any custom properties on the tile object will also be
    // passed to the sprite creator (e.g. one of the tile object's has an alpha of 0.5).
    //var coins = map.createFromObjects('Coin Object Layer', 26, { key: 'coin' });
	this.input.on('pointerdown', function (pointer) {
		console.log("CLICK");
		player.x+=2;
		
	}, this);
}

var graphics;
var sunHeight= 60;
var done = false;
function update ()
{
	
	//player.anims.play('goblin_walk');
	
    graphics.clear();

    graphics.lineStyle(2, 0xffffff, 1);

    //curve.draw(graphics, 64);

    //curve.getPoint(200, 200);

    graphics.fillStyle(0xffff00, 1);
    graphics.fillCircle(300, sunHeight, 20);
	
	player.x++;
	sunHeight--;
	
	if (!done && sunHeight < -60){
		//bground_night.depth = 0;
		bground_day.depth = 1;
		player.depth = 2;
		done = true;
	}
	
}

