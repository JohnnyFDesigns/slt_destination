(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.front = function() {
	this.initialize(img.front);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,625);


(lib.isleofskye = function() {
	this.initialize(img.isleofskye);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,365);


(lib.jurassic = function() {
	this.initialize(img.jurassic);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,365);


(lib.london = function() {
	this.initialize(img.london);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,365);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.london();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,400,365), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.isleofskye();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,400,365), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.jurassic();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,400,365), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.london();
	this.instance.parent = this;
	this.instance.setTransform(-1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-1,0,400,365), null);


// stage content:
(lib.sltanimation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.front();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(180));

	// Layer_4
	this.instance_1 = new lib.Symbol1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(201,182.5,1,1,0,0,0,200,182.5);

	this.instance_2 = new lib.Symbol4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(600,182.5,1,1,0,0,0,200,182.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:199,x:200},0).wait(47).to({x:166.8},0).wait(1).to({x:133.5},0).wait(1).to({x:100.3},0).wait(1).to({x:67},0).wait(1).to({x:33.8},0).wait(1).to({x:0.5},0).wait(1).to({x:-32.8},0).wait(1).to({x:-66},0).wait(1).to({x:-99.3},0).wait(1).to({x:-132.5},0).wait(1).to({x:-165.8},0).wait(1).to({x:-199.1},0).to({_off:true},1).wait(120));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(167).to({_off:false},0).wait(1).to({x:566.7},0).wait(1).to({x:533.3},0).wait(1).to({x:500},0).wait(1).to({x:466.7},0).wait(1).to({x:433.3},0).wait(1).to({x:400},0).wait(1).to({x:366.7},0).wait(1).to({x:333.3},0).wait(1).to({x:300},0).wait(1).to({x:266.7},0).wait(1).to({x:233.3},0).wait(1).to({x:200},0).wait(1));

	// Layer_3
	this.instance_3 = new lib.Symbol2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(600,182.5,1,1,0,0,0,200,182.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(47).to({_off:false},0).wait(1).to({x:566.7},0).wait(1).to({x:533.3},0).wait(1).to({x:500},0).wait(1).to({x:466.6},0).wait(1).to({x:433.3},0).wait(1).to({x:400},0).wait(1).to({x:366.6},0).wait(1).to({x:333.3},0).wait(1).to({x:299.9},0).wait(1).to({x:266.6},0).wait(1).to({x:233.2},0).wait(1).to({x:199.9},0).wait(49).to({x:166.6},0).wait(1).to({x:133.3},0).wait(1).to({x:100},0).wait(1).to({x:66.6},0).wait(1).to({x:33.3},0).wait(1).to({x:0},0).wait(1).to({x:-33.3},0).wait(1).to({x:-66.7},0).wait(1).to({x:-100},0).wait(1).to({x:-133.3},0).wait(1).to({x:-166.6},0).wait(1).to({x:-200},0).to({_off:true},1).wait(60));

	// Layer_2
	this.instance_4 = new lib.Symbol3();
	this.instance_4.parent = this;
	this.instance_4.setTransform(600,182.5,1,1,0,0,0,200,182.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(107).to({_off:false},0).wait(1).to({x:566.7},0).wait(1).to({x:533.3},0).wait(1).to({x:500},0).wait(1).to({x:466.7},0).wait(1).to({x:433.3},0).wait(1).to({x:400},0).wait(1).to({x:366.7},0).wait(1).to({x:333.3},0).wait(1).to({x:300},0).wait(1).to({x:266.7},0).wait(1).to({x:233.3},0).wait(1).to({x:200},0).wait(49).to({x:166.7},0).wait(1).to({x:133.4},0).wait(1).to({x:100},0).wait(1).to({x:66.7},0).wait(1).to({x:33.4},0).wait(1).to({x:0},0).wait(1).to({x:-33.3},0).wait(1).to({x:-66.6},0).wait(1).to({x:-100},0).wait(1).to({x:-133.3},0).wait(1).to({x:-166.6},0).wait(1).to({x:-200},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(200,312.5,400,625);
// library properties:
lib.properties = {
	id: '3699607A0F5C42C3BB9774089419E814',
	width: 400,
	height: 625,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/front.png", id:"front"},
		{src:"images/isleofskye.jpg", id:"isleofskye"},
		{src:"images/jurassic.jpg", id:"jurassic"},
		{src:"images/london.jpg", id:"london"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['3699607A0F5C42C3BB9774089419E814'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;