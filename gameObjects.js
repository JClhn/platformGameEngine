//all changes to sprites are communicated through gameObject
var gameObjects = {
	make: function(type,x,y) { //puts an instance of type in the room at coordinates x,y adds it to 
		gameObject= Object.create(this.types[type]); //the list of live objects and if it is visible
		gameObject.x=x;                              // it is added to the render list
		gameObject.y=y;
		gameObject.sprite = sprites.make(this.types[type].sprite);
		if (gameObject.visible=== "yes") {
			game.renderList.push(gameObject);
		};
		game.liveObjects.push(gameObject);
		return gameObject;
	},
	types: []
};
gameObjects.types["generic"]= {
	tag: "generic",
	x: 0,
	y:0,
	visible: "no",
	update: function() {},
	onCreate: function() {},
	destroy: function() {},
};
gameObjects.types["player"]= {
	tag: "player",
	control: "keyboard",
	visible: "yes",
	x: 0,
	y: 0,
	speed:128,
	direction: "right",
	sprite: "blockheadWalkRight",
	update: function(delta) {
			if (keysDown[38]) {
				this.y -= this.speed * delta;
			};
			if (keysDown[40]) {
				this.y += this.speed * delta;
			};
			if (keysDown[37]) {
				this.x -= this.speed * delta;
				if (this.direction==="right") {
					this.sprite= sprites.make("blockheadWalkLeft");
					this.direction="left";
					};
			};
			if (keysDown[39]) {
				this.x += this.speed * delta;
				if (this.direction==="left") {
					this.sprite= sprites.make("blockheadWalkRight");
					this.direction="right";
				};
			};
			
			//console.log(this.tag);
	}
};//end player obj


