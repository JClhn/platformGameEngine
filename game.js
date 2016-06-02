//Create Canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);
//turn off image smoothing
ctx.mozImageSmoothingEnabled= false
// Handle keyboard controls
var keysDown = {};
var keysUp = {};
addEventListener("keydown", function (e) {
	keysDown[e.keyCode] = true;
	keysUp[e.keyCode] = false;
}, false);
addEventListener("keyup", function (e) {
	keysDown[e.keyCode]= false;
	keysUp[e.keyCode]= true;
}, false);

var game = {
	state: "not initialized",
	renderList: [],
	liveObjects: [],
	render: function(delta) { //iterate through sprites in the render list
		ctx.drawImage(images.bg1Image,0,0);
		for (toRender = 0; toRender < game.renderList.length; toRender++) {
			sprites.render(game.renderList[toRender].sprite,game.renderList[toRender].x,game.renderList[toRender].y,delta);
		};
	},
	update: function(delta) {//for each gameObject in the liveObjects array run its update method
		for (toUpdate = 0; toUpdate < game.liveObjects.length; toUpdate++) {	
				game.liveObjects[toUpdate].update(delta);
		};
	},
	init: function(){
		//console.log(game.state)
		//game.renderList[0]= sprites.types["dummy"];
		//game.player1 = Object.create(gameObjects.player);
		gameObjects.make("player",20,20);
		//game.renderList[0] = game.player1;
		//game.liveObjects[0]=game.player1;
		game.state = "initialized";
	}
};


/*

	// collision detect
	if (
		hero.x <= (monster.x + 32)
		&& monster.x <= (hero.x +32)
		&& hero.y <= (monster.y + 32)
		&& monster.y <= (hero.y + 32)
	) {
		++monstersCaught;
		reset();
	}
};*/
// game loop
var mainGameLoop = function () {
	var now = Date.now();
	var delta = (now - then)/1000;
	if (resourcesLoaded===numResources) {
		if (game.state==="not initialized"){
			game.init();		
		};
		if (game.state==="initialized"){	
			game.update(delta);
			game.render(delta);
		};
	};
	then = now;
	requestAnimationFrame(mainGameLoop);
};
var then = Date.now();
loadImages();
mainGameLoop();

