var sprites = {
	//there is the possibility that the game is running slowly enough that more than
	//one frame of animation should have passed. These functions do not take that
	//into account.
	//if a sprite has no animation, set speed to 0
	// a sprite has tag: a name
	//		strip: the name of an image resource
	//		width: in pixels
	//		height: in pixels
	//		speed: in frames per second
	//		direction: 1 is forward -1 is reverse
	//		numFrames: how many frames in the animation
	//		timeSinceLastFrame: used to calculate when we need a new frame
	//		frame: the frame we are currently showing
	testFunc: function() {cole.log(this)},
	make: function(type) {
		console.log(type);
		var sprite= Object.create(sprites.types[type]);
		sprite.timeSinceLastFrame= 0;
		sprite.frame= 0;
		//console.log(sprite.tag);
		return sprite;
	},
	render: function(sprite,x,y,delta) {
			if (sprite.tag !="dummy") {
				//if sprite is animated
				if (sprite.speed > 0) {
				//check to see if it's time to change frames
					var newTime = delta + sprite.timeSinceLastFrame;
					sprite.timeSinceLastFrame = newTime;
					if (newTime >= 1/sprite.speed) {
						sprite.timeSinceLastFrame=0;
						//if it is, get the frame number
						sprite.frame  += sprite.direction;
						if (sprite.frame > (sprite.numFrames-1)){
							sprite.frame = 0
						};
						if (sprite.frame < 0) {
							sprite.frame = (sprite.numFrames-1)
						};
					};
				};
				//console.log(sprite.tag);
				ctx.drawImage(images[sprite.strip],sprite.frame*sprite.width,0,sprite.width,sprite.height,x,y,sprite.width*3,sprite.height*3);
				
			};
	},
	types: []

};
sprites.types["dummy"]= {
		tag: "dummy",
		strip: "none",
		width: 36,
		height:36,
		speed: 10,
		timeSinceLastFrame: 0,
		numFrames: 8,
		frame: 0,
		direction: 1
		};
sprites.types["blockheadWalkRight"]= {
		tag: "blockheadWalkRight",
		strip: "blockheadWalkRight",
		width: 36,
		height:36,
		speed: 12,
		numFrames: 8,
		direction: 1
		};
sprites.types["blockheadWalkLeft"]= {
		tag: "blockheadWalkLeft",
		strip: "blockheadWalkLeft",
		width: 36,
		height:36,
		speed: 12,
		numFrames: 8,
		direction: -1
		};
//console.log(sprites.types["blockheadWalkRight"]);

			
