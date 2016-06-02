var numResources=3;
var resourcesLoaded=0;
var images=[];

var loadImages = function(){
	images["blockheadWalkRight"]= new Image();
	images["blockheadWalkRight"].onload = function () {
	resourcesLoaded++;
	};
	images["blockheadWalkRight"].src = "images/blockheadWalkRight.png";

	images["blockheadWalkLeft"]= new Image();
	images["blockheadWalkLeft"].onload = function () {
	resourcesLoaded++;
	};
	images["blockheadWalkLeft"].src = "images/blockheadWalkLeft.png";

	images.bg1Image = new Image();
	images.bg1Image.onload = function () {
	resourcesLoaded++;
	};
	images.bg1Image.src = "images/factoryTiles1.png";
};
	
