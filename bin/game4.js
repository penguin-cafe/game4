(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.enemy_art = function() {
	this.initialize(img.enemy_art);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,40,40);


(lib.enemy_error = function() {
	this.initialize(img.enemy_error);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,40,40);


(lib.life_art = function() {
	this.initialize(img.life_art);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,40,40);


(lib.player_art = function() {
	this.initialize(img.player_art);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,80,40);


(lib.player_error = function() {
	this.initialize(img.player_error);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,80,40);


(lib.spacer = function() {
	this.initialize(img.spacer);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);// helper functions:

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


(lib.text_mc = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// label
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgPA5IAAhxIAfAAIAABxg");
	this.shape.setTransform(46.4,15.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgZAnQgKgFgFgKQgHgKAAgOQAAgTAMgLQANgMAWAAQARgBAKAGQAKAFAGALQAFAKAAAQIAAADIg/AAQACAHADAFQAEAEAGAAQAGAAADgBIAGgGIAfADQgHANgKAFQgKAGgTgBQgQABgJgFgAgLgSQgCAFgCAHIAfAAQgBgKgEgEQgEgDgHAAQgGAAgFAFg");
	this.shape_1.setTransform(38.4,17.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgNAqIgjhSIAhAAIAQAzIAQgzIAgAAIgjBSg");
	this.shape_2.setTransform(28.2,17.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgZAnQgKgFgFgKQgHgKAAgOQAAgTANgLQAMgMAWAAQARgBAKAGQAKAFAGALQAFAKAAAQIAAADIg+AAQABAHACAFQAFAEAHAAQAEAAAFgBIAFgGIAgADQgIANgKAFQgKAGgTgBQgPABgKgFgAgLgSQgDAFAAAHIAeAAQgBgKgEgEQgEgDgGAAQgHAAgFAFg");
	this.shape_3.setTransform(18,17.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgtA5IAAhxIAkAAIAABVIA2AAIAAAcg");
	this.shape_4.setTransform(7.7,15.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AgZAnQgJgFgHgKQgGgKAAgOQAAgTANgLQAMgMAWAAQARgBAKAGQALAFAFALQAFAKAAAQIAAADIg/AAQABAHADAFQAFAEAHAAQAEAAAFgBIAFgGIAgADQgIANgKAFQgKAGgTgBQgPABgKgFgAgLgSQgCAFgCAHIAfAAQgBgKgEgEQgEgDgGAAQgHAAgFAFg");
	this.shape_5.setTransform(130.3,17.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AAnArIAAgvQAAgFgDgDQgDgFgFAAQgFAAgEAFQgDAEAAAIIAAArIgfAAIAAgtIgBgIQgBgCgCgCQgDgDgDAAQgFAAgEAFQgEADAAAJIAAArIgfAAIAAhSIAdAAIAAALQAHgHAGgDQAHgDAJAAQAKAAAFADQAGAEADAGQAIgHAGgDQAGgDAJAAQANAAAIAHQAHAJAAAQIAAA0g");
	this.shape_6.setTransform(116.9,17.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AgPA5IAAhSIAfAAIAABSgAgPgjIAAgVIAfAAIAAAVg");
	this.shape_7.setTransform(106.2,15.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AgQA5IAAhVIglAAIAAgcIBrAAIAAAcIgkAAIAABVg");
	this.shape_8.setTransform(97.8,15.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AgZAnQgKgFgFgKQgHgKAAgOQAAgTAMgLQANgMAWAAQARgBAKAGQALAFAFALQAFAKAAAQIAAADIg+AAQABAHACAFQAFAEAGAAQAGAAADgBIAGgGIAfADQgHANgKAFQgKAGgTgBQgPABgKgFgAgLgSQgCAFgBAHIAeAAQgBgKgEgEQgEgDgHAAQgGAAgFAFg");
	this.shape_9.setTransform(247.3,17.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AgfArIAAhSIAdAAIAAANQAEgIAEgEQAFgDAGAAQAIgBAIAFIgKAXQgGgDgDAAQgGABgDAFQgFAHAAATIAAAcg");
	this.shape_10.setTransform(239.1,17.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AgfAhQgQgMAAgVQAAgSANgMQANgMAVAAQAZAAANAOQAKAMAAAQQAAATgNAMQgNAMgWAAQgTAAgMgKgAgKgPQgFAFAAAKQAAAMAFAEQAEAGAGAAQAHAAAEgGQAFgEAAgMQAAgKgFgFQgEgFgHAAQgGAAgEAFg");
	this.shape_11.setTransform(229.5,17.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("AgSApQgJgDgGgFQgHgFgDgIQgEgHAAgNQAAgMAEgIQAEgGAFgFQAGgFAGgCQAJgEANAAQAVgBAKAIQALAHAEAOIgeAEQgBgFgEgDQgDgCgHAAQgHAAgEAFQgFAGAAAKQAAALAFAEQAEAGAHAAQAGAAAEgDQAFgEACgGIAeAEQgDAJgFAHQgGAGgJAFQgJADgNAAQgNABgIgDg");
	this.shape_12.setTransform(218.9,17.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AgmAwQgLgLgCgSIAigCQABAIADAFQAFAHAKAAQAHAAAEgEQAFgDAAgFQAAgFgFgDQgDgEgOgDQgXgFgJgIQgKgIAAgOQAAgJAEgHQAGgIAKgFQAKgEARAAQAWAAAMAIQALAIACASIghACQgCgIgDgDQgFgEgGAAQgHAAgDADQgDACAAAEQAAADACACQADACAJACQAWAFALAFQAKAFAEAHQAFAIAAAJQAAALgGAJQgGAKgLAEQgLAFgRAAQgcAAgLgLg");
	this.shape_13.setTransform(207.8,15.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// _txt
	this.time_txt = new cjs.Text("0", "16px 'MS PGothic'", "#FF9900");
	this.time_txt.name = "time_txt";
	this.time_txt.textAlign = "right";
	this.time_txt.lineHeight = 18;
	this.time_txt.lineWidth = 46;
	this.time_txt.parent = this;
	this.time_txt.setTransform(188,7);

	this.level_txt = new cjs.Text("0", "16px 'MS PGothic'", "#FF9900");
	this.level_txt.name = "level_txt";
	this.level_txt.textAlign = "right";
	this.level_txt.lineHeight = 18;
	this.level_txt.lineWidth = 26;
	this.level_txt.parent = this;
	this.level_txt.setTransform(83,7);

	this.score_txt = new cjs.Text("0", "16px 'MS PGothic'", "#FF9900");
	this.score_txt.name = "score_txt";
	this.score_txt.textAlign = "right";
	this.score_txt.lineHeight = 18;
	this.score_txt.lineWidth = 51;
	this.score_txt.parent = this;
	this.score_txt.setTransform(313,7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.score_txt},{t:this.level_txt},{t:this.time_txt}]}).wait(1));

	// back
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(2,1,1).p("AkShjIIlAAIAADHIolAAg");
	this.shape_14.setTransform(287.5,15);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AkSBkIAAjHIIlAAIAADHg");
	this.shape_15.setTransform(287.5,15);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(2,1,1).p("Aj5hjIHzAAIAADHInzAAg");
	this.shape_16.setTransform(165,15);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("Aj5BkIAAjHIHzAAIAADHg");
	this.shape_17.setTransform(165,15);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(2,1,1).p("AiVhjIErAAIAADHIkrAAg");
	this.shape_18.setTransform(70,15);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AiVBkIAAjHIErAAIAADHg");
	this.shape_19.setTransform(70,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]}).wait(1));

	// g
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(2,1,1).p("A4/iVMAx/AAAIAAErMgx/AAAg");
	this.shape_20.setTransform(160,15);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#999999").s().p("A4/CWIAAkrMAx/AAAIAAErg");
	this.shape_21.setTransform(160,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text_mc, new cjs.Rectangle(-1,-1,322,32), null);


(lib.player_error_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// img
	this.instance = new lib.player_error();
	this.instance.parent = this;
	this.instance.setTransform(-40,-20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.player_error_mc, new cjs.Rectangle(-40,-20,80,40), null);


(lib.player_art_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// img
	this.instance = new lib.player_art();
	this.instance.parent = this;
	this.instance.setTransform(-40,-20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.player_art_mc, new cjs.Rectangle(-40,-20,80,40), null);


(lib.play_btn = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// t
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9900").s().p("AgNBHIAAg8Ig1hSIAiAAIAhA5IAhg5IAhAAIg0BTIAAA7g");
	this.shape.setTransform(80.7,21);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9900").s().p("AAoBHIgMggIg4AAIgMAgIgfAAIA4iOIAeAAIA5COgAgTAPIAmAAIgTg0g");
	this.shape_1.setTransform(66.8,21);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF9900").s().p("AgxBHIAAiNIAcAAIAAB1IBHAAIAAAYg");
	this.shape_2.setTransform(54,21);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF9900").s().p("Ag2BHIAAiOIAvAAQAZAAAIADQAMACAJALQAIAMAAAQQAAANgFAKQgFAHgHAFQgHAGgIABQgKACgTAAIgTAAIAAA2gAgZgGIAQAAQAQAAAGgCQAGgDADgEQADgFAAgGQAAgIgEgFQgFgFgHgCQgFgBgPAAIgOAAg");
	this.shape_3.setTransform(41,21);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// g
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(2,1,1).p("AmQjHIMhAAQBSAAA7A7QA7A6AABSQAABTg7A6Qg7A7hSAAIshAAQhTAAg6g7Qg7g6AAhTQAAhSA7g6QA6g7BTAAg");
	this.shape_4.setTransform(60,20,0.999,1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AmPDIQhTAAg7g6Qg7g7AAhTQAAhSA7g7QA7g6BTAAIMgAAQBTAAA6A6QA6A7ABBSQgBBTg6A7Qg6A6hTAAg");
	this.shape_5.setTransform(60,20,0.999,1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AmPDIQhTAAg7g6Qg7g7AAhTQAAhSA7g7QA7g6BTAAIMgAAQBTAAA6A6QA6A7ABBSQgBBTg6A7Qg6A6hTAAg");
	this.shape_6.setTransform(60,20,0.999,1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(2,1,1).p("AmPjHIMfAAQBTAAA7A7QA6A6AABSQAABTg6A6Qg7A7hTAAIsfAAQhTAAg7g7Qg6g6AAhTQAAhSA6g6QA7g7BTAAg");
	this.shape_7.setTransform(60,20);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#666666").s().p("AmPDIQhTAAg7g6Qg6g7AAhTQAAhSA6g7QA7g6BTAAIMfAAQBTAAA7A6QA6A7AABSQAABTg6A7Qg7A6hTAAg");
	this.shape_8.setTransform(60,20);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00FFFF").s().p("AmPDIQhTAAg7g6Qg6g7AAhTQAAhSA6g7QA7g6BTAAIMfAAQBTAAA7A6QA6A7AABSQAABTg6A7Qg7A6hTAAg");
	this.shape_9.setTransform(60,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).to({state:[{t:this.shape_6},{t:this.shape_4}]},1).to({state:[{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_9}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,122,42);


(lib.line_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// g
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).dr(-160,-240,320,480);
	this.shape.setTransform(160,240);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.line_mc, new cjs.Rectangle(-1,-1,322,482), null);


(lib.life_art_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// img
	this.instance = new lib.life_art();
	this.instance.parent = this;
	this.instance.setTransform(-20,-20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.life_art_mc, new cjs.Rectangle(-20,-20,40,40), null);


(lib.level_num_btn = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// g
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s("#FFFFFF").ss(2,1,1).rr(-20,-20,40,40,10);
	this.shape.setTransform(20,20);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s("#FFFFFF").ss(2,1,1).rr(-20,-20,40,40,10);
	this.shape_1.setTransform(20,20);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s("#FFFFFF").ss(2,1,1).rr(-20,-20,40,40,10);
	this.shape_2.setTransform(20,20);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00FFFF").s().rr(-20,-20,40,40,10);
	this.shape_3.setTransform(20,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,42,42);


(lib.level_3_text_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// t
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgwBdQgTgRgDgbIAngFQACAPAJAJQAIAHAMABQAMAAAIgKQAJgKAAgQQAAgQgIgJQgJgJgMAAQgHAAgLADIAFggQAQAAAIgHQAJgJAAgMQAAgLgGgGQgHgHgJAAQgLAAgHAIQgIAHgBAOIgmgHQAEgTAIgLQAIgMAOgHQAOgGASgBQAdABASASQAQAQAAAUQAAAcgfARQASAFALAMQALAOAAAUQAAAcgUATQgVAVgegBQgdAAgTgQg");
	this.shape.setTransform(-0.1,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.level_3_text_mc, new cjs.Rectangle(-10.4,-18.7,20.9,37.5), null);


(lib.level_2_text_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// t
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhHBsQACgWAMgTQAMgUAiggQAbgZAGgJQAJgNAAgMQAAgOgIgHQgHgIgNAAQgMAAgIAIQgHAIgBASIgpgEQADgiAUgPQATgPAcAAQAgAAASARQASARAAAaQAAAOgFAOQgFANgMANQgHAJgUASQgTASgEAGQgGAGgDAGIBRAAIAAAmg");
	this.shape.setTransform(-0.4,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.level_2_text_mc, new cjs.Rectangle(-10.4,-18.7,20.9,37.5), null);


(lib.level_1_text_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// t
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAGBsIAAiaQgVAVgfAKIAAgmQAQgFATgOQASgPAHgUIAhAAIAADXg");
	this.shape.setTransform(-1.3,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.level_1_text_mc, new cjs.Rectangle(-10.4,-18.7,20.9,37.5), null);


(lib.hit_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// g
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FFFF").s().dr(-20,-20,40,40);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.hit_mc, new cjs.Rectangle(-20,-20,40,40), null);


(lib.header_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// t
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9900").s().p("AgLAxQgFgFAAgHQAAgHAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAHQAAAHgFAFQgFAFgHAAQgGAAgFgFgAgIABQgEgHgDgIQgCgJAAgHQAAgJAEgGQAFgIAIAAQAHAAAFAFQAGAHAAAMQAAAIgDAJQgCAJgFAGQgFAIgDAAQgCAAgGgKg");
	this.shape.setTransform(200.2,14.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9900").s().p("AAHAjQAAgBgBAAQAAgBAAAAQgBAAAAAAQAAAAgBAAIgEACQgHAFgKAAQgKAAgGgFQgEgCgDgFQgCgFAAgFQAAgHAGgHQALgJAUAAIAFgBQAAAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAgBQAAgIgBgEQgCgDgDgBQgBAAAAABQgBAAgBAAQAAAAgBAAQAAABgBAAIgEAFQgHAKgIAAQgEAAgCgCQgCgDAAgEQAAgDADgEQADgDAFgDQAOgIAOAAQAOAAAJAHQAFADACAFQACAFAAAJIAAAKQAAAMACAEIACACIADABQAAAAABAAQAAAAABABQAAAAAAABQAAAAAAABQAAAEgDAEQgDAEgEACQgGAEgHAAQgIAAgFgFgAgIAIQgCADAAAEQAAAEABACQACACADAAQAFAAAAgKIAAgGQgBAAAAgBQAAAAAAAAQAAAAgBAAQAAAAgBAAQgDgBgDADg");
	this.shape_1.setTransform(189.2,15.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF9900").s().p("AgJA0QgHgCgIgFIgCAAIgFABIgEABQgFAAgBgDIABgDIACgMIABgYIAAgVQAAgIgBgCQAAAAAAgBQgBAAAAAAQgBgBAAAAQgBAAgBgBIgFgDQAAgBgBAAQAAgBAAAAQAAgBAAAAQgBgBAAgBQAAgFAMgFIAPgEQAJgCAGAAQAEAAABAEIgCAfIAAABQAAABABAAQAAAAAAABQAAAAAAAAQAAAAABAAIACgCQAJgIALAAQAKAAAJAIQALAKgBAPQAAAXgQAOQgMAJgRAAQgHAAgGgCgAgCABQgCACAAAHQAAASACAHQABAFAEAAQAGAAADgEQADgFAAgJQAAgOgFgGQgDgDgEAAQgDAAgCACg");
	this.shape_2.setTransform(179.5,14.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF9900").s().p("AgaAfQgFgFgDgHQgFgIAAgLQAAgMAIgKQAHgJALgFQAHgDAJAAQAOAAALAJQAFAEADAGQAEAGAAAGQAAAFgCADQgCADgDAAIgkAAQgBAAAAAAQgBAAAAAAQAAABAAAAQAAAAAAABQgBAFAGAFQAFAEAGAAIAIgBQAFgCACgCIAFgBQAAAAABAAQAAAAABAAQABAAAAABQABAAAAABQACADAAACQAAAGgHAFQgNAJgQAAQgPAAgMgJgAgEgVQgCADAAADIABAEIAEABIAHAAQAFgBAAgEQAAgEgDgDQgCgDgEAAQgEAAgCAEg");
	this.shape_3.setTransform(170.4,15.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF9900").s().p("AghAzQgFgDgDgDQgDgEAAgFQAAgDACgDQACgCACgBQABAAAAgBQABAAAAAAQAAAAABgBQAAAAAAAAIgCgDQgHgFAAgGQAAgDADgFQADgDAFgBIACgCIgDgEQgIgHAAgKQAAgGADgEQADgFAFgDQANgJAPAAIANACIAJACQAJAAAIgHIADgBQABAAAAAAQABAAAAAAQABAAAAABQAAAAABAAQABADAAADQAAADgCAEQgCAEgDACIgBADIAAACIAAADQAAAJgGAHQgGAFgJAEQgJACgJAAIgFAAIgDAAQgFAAAAADQAAADADACQADABAEAAIAJgBIATgCQAJAAAFADQAEACACAFQADAEAAAFQAAAHgGAIQgHAJgNAEQgLAEgNgBQgRABgLgGgAgVAhQAAAFAFADQAFADAIAAQAGAAAFgCQAEgCAAgFQAAAAAAAAQAAgBAAAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQgBAAAAgBQgBAAgBAAQAAAAgBAAIgDAAIgJABIgIAAIgEgBIgBgBQgBAAAAABQgBAAAAAAQAAAAAAABQAAAAAAABgAgIgkQgDACAAAGQAAAIADAFQACAFAFAAQADAAACgDQADgDAAgFQAAgJgDgFQgDgEgDAAQgEAAgCADg");
	this.shape_4.setTransform(161.5,17.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF9900").s().p("AgTA0IgFgDQAAAAgBgBQAAgBAAAAQAAgBAAAAQgBgBAAgBIABgCIAFgFQACgBABgEIABgNIAAgJIgBgIQAAgCgEgCQgFgCAAgFQAAgEAHgDIASgFQAJgDAGAAQAEAAAAAFIAAAtIABAIQABACADACIADADIABADQAAAKgaAAQgNAAgHgCgAgUgfQgFgCAAgFQAAgIAKgDQAKgEAHAAQAHAAAEACQAEADAAAEQAAAGgGAEQgKAFgMABQgFgBgEgCg");
	this.shape_5.setTransform(150,14.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF9900").s().p("AAFAuIAAgCIADgDQADgFAAgRQAAgLgCgEQgDgFgGAAQgEAAgCABQgCADAAAHIAAAPIABALQAAACAEAEQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAAJgXAAQgbAAAAgJIABgDIAEgEQADgCACgJIABgeIgBgXIgBgDIgEgDQgEgCAAgDQAAgFADgCQAEgDAKgDQAOgDAJAAQAEAAAAADIgBAhQAAAHAEAAQAAAAABgBQAAAAABAAQAAgBAAAAQABgBAAgBQAHgKANgBQAMABAHAHQAEADABAFIACAMIAAAdIABAFIAEAFQABAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAJgaAAQgWAAAAgIg");
	this.shape_6.setTransform(141.7,14.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF9900").s().p("AgYAfQgPgMAAgTQAAgQAOgLQANgMARAAQAOAAALAHQAKAHAAAJQAAAHgFAFQgEAEgGAAQgHgBgDgEIgDgHQgCgHgGAAQgEAAgCADQgDAEAAAGQAAAIAFAHQAGAHAIAAIAHgBIAHgDIACgBQADAAACADQACACAAADQAAAEgDAEQgDAEgFADQgKAGgOAAQgPAAgLgJg");
	this.shape_7.setTransform(132.1,15.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF9900").s().p("AAMAnQAAAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAgBQAAgEgDAAIgBAAIgFADQgHAGgJAAQgPAAgGgJQgFgHAAgRIAAgKIAAgEQAAgHgCgDQgBgDgDgCIgEgDIgBgCQAAgGAJgCQAQgEAPABQAFAAAAADIAAAqQAAANAIAAIAEgBIADgDQACgEAAgMIgBgRIgBgDIgDgCQgFgCAAgEQAAgFAIgCQAPgDAOAAQAIAAAAAIIAAADIgBAKIAAAhQAAADAFACQAEACAAADQAAAIgRADQgKACgJABIgFgBg");
	this.shape_8.setTransform(122.5,15.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// g
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("A4/CWIAAkrMAx/AAAIAAErg");
	this.shape_9.setTransform(160,15);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(1));

}).prototype = getMCSymbolPrototype(lib.header_mc, new cjs.Rectangle(0,0,320,30), null);


(lib.game_over_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// t
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("ACHBkQgZgMgOgZQgPgZAAglQAAg0AegdQAdgeA0AAQA2AAAcAdQAdAcAAA1QAAAkgMAZQgMAXgYAOQgZANgkAAQgkAAgXgLgACfgtQgLAOgBAgQABAgALAOQANAPAUAAQAWAAAMgPQAMgOgBgiQAAgfgMgNQgMgOgVgBQgUABgNAOgAu2BiQgYgNgNgaQgNgZAAgiQAAgiAOgaQAPgaAcgNQAWgLAkAAQAkAAASAGQARAHAMANQAMAOAFAVIhAAMQgDgNgKgHQgJgFgPAAQgWgBgNAPQgNAQABAgQgBAiANAPQANAPAYAAQALAAAKgDQAKgEANgHIAAgVIgsAAIAAgrIBnAAIAABaQgeAUgXAIQgWAHggAAQgmAAgYgNgAOeBsIgjhCQgHgNgGgDQgHgGgIAAIgGAAIAABYIhDAAIAAjWIBvAAQAeAAAQAFQAQAFALAPQAKAOgBAVQAAARgHANQgIANgNAHQgIAFgPADQALAFAGADIAKAMIAKANIAgA/gANZgTIAcAAQAEAAANgDQAGgCAFgFQAEgFAAgIQAAgKgGgGQgHgFgTAAIgcAAgAI8BsIAAjWICyAAIAAAtIhvAAIAAAjIBnAAIAAArIhnAAIAAAqIByAAIAAAxgAGPBsIhRjWIBGAAIAwCZIAwiZIBDAAIhQDWgAjiBsIAAjWICxAAIAAAtIhuAAIAAAjIBmAAIAAArIhmAAIAAAqIByAAIAAAxgAlCBsIAAijIgrCjIgwAAIgqijIAACjIg3AAIAAjWIBYAAIAhCBIAhiBIBYAAIAADWgApXBsIgLgkIhMAAIgKAkIhDAAIBQjWIBJAAIBQDWgAqfAaIAvAAIgXhNg");
	this.shape.setTransform(100.1,11.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(4,1,1).p("AMWBsIAAjWIBvAAQAeAAARAFQAQAFAKAOQAKAPAAAUQAAASgIANQgHANgOAHQgIAGgPADQAMAEAFAEQAEACAHAJQAHAJACAEIAgA/IhLAAIgjhCQgHgNgFgDQgHgFgJAAIgGAAIAABXgANZgTIAcAAQAEAAANgDQAHgBAEgGQAEgGAAgHQAAgKgGgGQgHgFgSAAIgdAAgAI9hqICxAAIAAAuIhvAAIAAAhIBnAAIAAAsIhnAAIAAAqIBzAAIAAAxIi1AAgAE+hqIBGAAIAwCaIAwiaIBDAAIhPDWIhIAAgACUABQAAAgAMAPQAMAOAVAAQAVAAAMgOQAMgOAAgkQAAgegNgNQgMgPgVAAQgUAAgMAPQgMAOAAAggABRABQAAg1AegcQAdgeA0AAQA2AAAdAdQAcAcAAA0QAAAlgMAYQgMAZgYANQgYANgkAAQgkAAgYgLQgYgMgPgZQgPgZAAglgAjihqICyAAIAAAuIhvAAIAAAhIBmAAIAAAsIhmAAIAAAqIByAAIAAAxIi1AAgAn+hqIBYAAIAhCBIAiiBIBXAAIAADWIg2AAIAAijIgrCjIgwAAIgqijIAACjIg3AAgApiBIIhLAAIgKAkIhEAAIBQjWIBJAAIBQDWIhFAAgApwAaIgYhMIgXBMgAt0AeIAAgsIBmAAIAABbQgdAUgWAHQgXAHggAAQglAAgZgNQgXgNgOgZQgNgaAAgiQAAgiAPgaQAOgaAcgNQAVgLAlAAQAkAAASAGQASAHALANQAMAOAFAVIg/ALQgFgMgJgHQgKgGgOAAQgWAAgMAPQgNAPAAAhQAAAjANAOQAMAPAYAAQALAAAKgDQAKgDANgIIAAgUg");
	this.shape_1.setTransform(100.1,11.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ACHBkQgZgMgOgZQgPgZAAglQAAg0AegdQAdgeA0AAQA2AAAcAdQAdAcAAA1QAAAkgMAZQgMAXgYAOQgZANgkAAQgkAAgXgLgACfgtQgLAOgBAgQABAgALAOQANAPAUAAQAWAAAMgPQAMgOgBgiQAAgfgMgNQgMgOgVgBQgUABgNAOgAu2BiQgYgNgNgaQgNgZAAgiQAAgiAOgaQAPgaAcgNQAWgLAkAAQAkAAASAGQARAHAMANQAMAOAFAVIhAAMQgDgNgKgHQgJgFgPAAQgWgBgNAPQgNAQABAgQgBAiANAPQANAPAYAAQALAAAKgDQAKgEANgHIAAgVIgsAAIAAgrIBnAAIAABaQgeAUgXAIQgWAHggAAQgmAAgYgNgAOeBsIgjhCQgHgNgGgDQgHgGgIAAIgGAAIAABYIhDAAIAAjWIBvAAQAeAAAQAFQAQAFALAPQAKAOgBAVQAAARgHANQgIANgNAHQgIAFgPADQALAFAGADIAKAMIAKANIAgA/gANZgTIAcAAQAEAAANgDQAGgCAFgFQAEgFAAgIQAAgKgGgGQgHgFgTAAIgcAAgAI8BsIAAjWICyAAIAAAtIhvAAIAAAjIBnAAIAAArIhnAAIAAAqIByAAIAAAxgAGPBsIhRjWIBGAAIAwCZIAwiZIBDAAIhQDWgAjiBsIAAjWICxAAIAAAtIhuAAIAAAjIBmAAIAAArIhmAAIAAAqIByAAIAAAxgAlCBsIAAijIgrCjIgwAAIgqijIAACjIg3AAIAAjWIBYAAIAhCBIAhiBIBYAAIAADWgApXBsIgLgkIhMAAIgKAkIhDAAIBQjWIBJAAIBQDWgAqfAaIAvAAIgXhNg");
	this.shape_2.setTransform(100.1,11.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.game_over_mc, new cjs.Rectangle(-2,-2,204.2,26.2), null);


(lib.footer_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// t
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9900").s().p("AgaAaQgHgKAAgQQAAgRAJgKQAKgKAOAAQAQAAAJALQAJAKAAAVIgwAAQABAJAFAFQAEAFAFAAQAFAAADgDQADgCABgGIAUADQgEALgIAFQgIAGgMAAQgSAAgJgMgAgJgSQgEAFAAAIIAcAAQgBgJgEgEQgEgEgGAAQgFAAgEAEg");
	this.shape.setTransform(207.9,16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9900").s().p("AgMAzIAAg5IgLAAIAAgOIALAAIAAgGQAAgJABgEQACgFAGgDQAEgDAHAAQAJAAAHADIgCANIgIgBQgFAAgCACQgBACAAAFIAAAGIAOAAIAAAOIgOAAIAAA5g");
	this.shape_1.setTransform(202,14.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF9900").s().p("AgbAgQgGgGAAgKQAAgGADgFQADgEAFgCQAGgCAJgCQANgDAFgCIAAgCQAAgGgDgCQgCgCgHAAQgFAAgDACQgDACgBAFIgSgDQADgLAHgFQAIgFANAAQANAAAFADQAHADACAFQADAEAAANIAAAVIABAPIADAJIgTAAIgBgFIgBgDQgGAFgFACQgFADgGAAQgLAAgHgGgAAAAEIgKAEQgEACAAAEQAAAEADADQADADAFAAQAEAAAFgDQAEgDAAgDIABgKIAAgEIgLADg");
	this.shape_2.setTransform(195.5,16);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF9900").s().p("AgYAcQgJgKAAgSQAAgRAJgKQAKgKAPAAQANAAAIAGQAIAFADAMIgTAEQgBgGgDgDQgEgDgFAAQgGAAgEAFQgFAFAAAMQAAAMAFAFQAEAFAGAAQAGAAADgDQAEgDABgIIATAEQgDANgIAGQgJAHgOAAQgPAAgJgKg");
	this.shape_3.setTransform(187.8,16);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF9900").s().p("AAOAlIAAglQAAgLgBgDQgCgDgDgDQgCgCgEAAQgEABgEACQgEADgBAEQgCAFAAALIAAAhIgTAAIAAhHIASAAIAAAKQAKgMAMAAQAHAAAFACQAGADACADQADAEABAEIABANIAAAsg");
	this.shape_4.setTransform(175.7,16);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF9900").s().p("AgJAyIAAhHIATAAIAABHgAgJgfIAAgSIATAAIAAASg");
	this.shape_5.setTransform(169.4,14.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF9900").s().p("AgVAiQgGgEgDgFQgCgGAAgKIAAgtIATAAIAAAhQAAAOABAEQACAEADACQACACAFAAQAEgBADgCQAEgDABgEQACgEAAgOIAAgfIATAAIAABHIgRAAIAAgLQgFAGgGAEQgGADgGAAQgIAAgGgDg");
	this.shape_6.setTransform(163.2,16.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF9900").s().p("AgYAtQgIgGAAgKIAAgCIAWADQABAEACABQACACAGAAQAHAAADgCQADgCABgDQACgCAAgHIAAgLQgKAMgMAAQgOAAgIgMQgIgKABgNQgBgTAKgJQAIgKANAAQANAAAJAMIAAgKIASAAIAABAQAAANgDAGQgCAGgDAEQgFAEgFACQgHACgKAAQgRAAgIgHgAgKgfQgEAFgBALQABAMAEAEQAEAGAGAAQAHAAAFgGQAFgEAAgLQAAgLgFgGQgFgFgGAAQgHAAgEAFg");
	this.shape_7.setTransform(154.6,17.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF9900").s().p("AAOAlIAAglQAAgLgBgDQgBgDgEgDQgCgCgEAAQgEABgEACQgEADgCAEQgBAFAAALIAAAhIgTAAIAAhHIASAAIAAAKQAJgMANAAQAHAAAGACQAEADAEADQACAEABAEIABANIAAAsg");
	this.shape_8.setTransform(146.3,16);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF9900").s().p("AgaAaQgHgKAAgQQAAgRAJgKQAKgKAOAAQAPAAAKALQAJAKAAAVIgwAAQABAJAFAFQADAFAGAAQAFAAADgDQADgCABgGIATADQgDALgIAFQgIAGgMAAQgSAAgJgMgAgJgSQgEAFAAAIIAbAAQAAgJgDgEQgFgEgFAAQgGAAgEAEg");
	this.shape_9.setTransform(138,16);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF9900").s().p("AgiAzIAAhjIASAAIAAAKQADgFAGgEQAGgDAGAAQANAAAJAKQAIAKABASQgBARgIAKQgJAKgNAAQgFAAgFgDQgFgCgFgGIAAAlgAgLgdQgFAFABALQAAAMAEAFQAFAGAGAAQAHAAAFgGQAEgEAAgMQAAgMgFgFQgEgGgHAAQgGAAgFAGg");
	this.shape_10.setTransform(130.2,17.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF9900").s().p("AggA6QgRgIgIgOQgIgPAAgSQAAgSAJgRQAKgQAPgIQAQgJATAAQASAAANAHQANAHAIAMQAGAMAAAPQAAAQgLAOQgNASgVAAQgFAAgEgCQgDgCAAgEQgHAIgLAAQgLAAgHgIQgIgHAAgNQAAgPAJgOQALgQARAAQALAAAGAJIABgHIASAAIgKAwIgBAGIABACIACABQAEAAAEgEQAIgFAEgJQAEgHAAgKQAAgRgMgLQgMgLgWAAQgSAAgNAHQgNAIgGAOQgHANAAAOQAAAPAIALQAHAMAOAGQANAFAQAAQAQAAALgEQANgFAGgJIAPAAQgHAOgOAIQgQAJgXAAQgWAAgQgIgAgMgUQgEAFgDAIQgDAHABAHQAAAJADAEQADAEAGAAQADAAAEgCIAFgEQADgFACgIQADgHAAgHQAAgHgEgEQgDgFgFAAQgGAAgFAFg");
	this.shape_11.setTransform(115.1,16);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// g
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("A4/CWIAAkrMAx/AAAIAAErg");
	this.shape_12.setTransform(160,15);

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(1));

}).prototype = getMCSymbolPrototype(lib.footer_mc, new cjs.Rectangle(0,0,320,30), null);


(lib.error_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// g
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9900").s().dr(-160,-159.95,320,319.9);
	this.shape.setTransform(160,160);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.error_mc, new cjs.Rectangle(0,0,320,320), null);


(lib.enemy_error_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// img
	this.instance = new lib.enemy_error();
	this.instance.parent = this;
	this.instance.setTransform(-20,-20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.enemy_error_mc, new cjs.Rectangle(-20,-20,40,40), null);


(lib.enemy_art_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// img
	this.instance = new lib.enemy_art();
	this.instance.parent = this;
	this.instance.setTransform(-20,-20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.enemy_art_mc, new cjs.Rectangle(-20,-20,40,40), null);


(lib.control_back_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// g
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s("#000000").ss(3,1,1).rr(-70,-30,140,60,10);
	this.shape.setTransform(70,30);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.control_back_mc, new cjs.Rectangle(-1.5,-1.5,143,63), null);


(lib.close_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// g
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).p("ACWiVIkrEr");
	this.shape.setTransform(15,15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(2,1,1).p("AiViVIErEr");
	this.shape_1.setTransform(15,15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(2,1,1).p("AiViVIErAAIAAErIkrAAg");
	this.shape_2.setTransform(15,15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AiVCWIAAkrIErAAIAAErg");
	this.shape_3.setTransform(15,15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AiVCWIAAkrIErAAIAAErg");
	this.shape_4.setTransform(15,15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#666666").s().p("AiVCWIAAkrIErAAIAAErg");
	this.shape_5.setTransform(15,15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00FFFF").s().p("AiVCWIAAkrIErAAIAAErg");
	this.shape_6.setTransform(15,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_4},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_5},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,32,32);


(lib.back_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// g
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().dr(-160,-240,320,480);
	this.shape.setTransform(160,240);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.back_mc, new cjs.Rectangle(0,0,320,480), null);


(lib.area_mc = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// g
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DEDEDE").s().dr(-160,-159.95,320,319.9);
	this.shape.setTransform(160,160);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.area_mc, new cjs.Rectangle(0,0,320,320), null);


(lib.popup_mc = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// game_over_mc
	this.game_over_mc = new lib.game_over_mc();
	this.game_over_mc.name = "game_over_mc";
	this.game_over_mc.parent = this;
	this.game_over_mc.setTransform(60,20);
	this.game_over_mc.cache(-4,-4,208,30);

	this.timeline.addTween(cjs.Tween.get(this.game_over_mc).wait(1));

	// play_btn
	this.play_btn = new lib.play_btn();
	this.play_btn.name = "play_btn";
	this.play_btn.parent = this;
	this.play_btn.setTransform(100,215);
	new cjs.ButtonHelper(this.play_btn, 0, 1, 2, false, new lib.play_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.play_btn).wait(1));

	// level_num_btn
	this.level_3_text_mc = new lib.level_3_text_mc();
	this.level_3_text_mc.name = "level_3_text_mc";
	this.level_3_text_mc.parent = this;
	this.level_3_text_mc.setTransform(220,170);
	this.level_3_text_mc.cache(-12,-21,25,42);

	this.level_2_text_mc = new lib.level_2_text_mc();
	this.level_2_text_mc.name = "level_2_text_mc";
	this.level_2_text_mc.parent = this;
	this.level_2_text_mc.setTransform(160,170);
	this.level_2_text_mc.cache(-12,-21,25,42);

	this.level_1_text_mc = new lib.level_1_text_mc();
	this.level_1_text_mc.name = "level_1_text_mc";
	this.level_1_text_mc.parent = this;
	this.level_1_text_mc.setTransform(100,170);
	this.level_1_text_mc.cache(-12,-21,25,42);

	this.level_txt = new cjs.Text("0", "bold 30px 'Arial'", "#FFFF00");
	this.level_txt.name = "level_txt";
	this.level_txt.textAlign = "center";
	this.level_txt.lineHeight = 36;
	this.level_txt.lineWidth = 96;
	this.level_txt.parent = this;
	this.level_txt.setTransform(160,102);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgtAsQgMgRAAgaQAAgeAQgRQAQgSAZAAQAbAAAQASQAQATgBAlIhRAAQAAAOAIAIQAHAIALAAQAHAAAGgEQAFgEADgJIAgAFQgGASgOAKQgNAJgVAAQgfAAgQgVgAgQgfQgHAIAAANIAwAAQAAgOgHgHQgHgIgKAAQgKAAgHAIg");
	this.shape.setTransform(231.3,77.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgqBOQgOgKAAgRIAAgFIAmAFQABAHADACQAFAEAJAAQANAAAGgEQAFgDACgGQACgDAAgMIAAgSQgPAVgWAAQgZAAgOgWQgMgRAAgXQAAggAPgQQAPgRAXAAQAWAAAPAVIAAgSIAfAAIAABuQAAAXgEALQgEALgGAGQgHAGgLAEQgLADgRAAQgeAAgNgLgAgSg2QgIAKAAASQAAAUAIAJQAHAJALAAQAMAAAIgJQAIgJAAgTQAAgTgIgJQgIgKgMAAQgLABgHAIg");
	this.shape_1.setTransform(217.2,79.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAYBAIAAhAQAAgTgCgGQgCgGgFgDQgFgDgHAAQgHAAgHAEQgHAFgCAIQgDAIAAATIAAA5IghAAIAAh8IAfAAIAAATQAQgWAYAAQALAAAJAEQAJAEAEAGQAFAHACAHQACAIAAAOIAABNg");
	this.shape_2.setTransform(202.8,77.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AguA3QgMgLABgQQAAgKAEgIQAGgJAJgDQAJgFARgDQAWgEAJgEIAAgDQAAgKgFgEQgEgEgMAAQgKAAgEAEQgFADgDAJIgegGQAFgSAMgIQANgJAYAAQAVAAALAFQALAFAEAJQAEAHAAAWIAAAlQAAARABAIQACAHAFAJIghAAIgDgJIgBgEQgJAIgJAEQgJAEgLAAQgUAAgKgKgAAAAIQgOACgEADQgHAFAAAHQABAHAEAFQAGAFAIAAQAIAAAIgGQAFgEACgHQACgEAAgMIAAgHIgTAGg");
	this.shape_3.setTransform(188.8,77.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAYBWIAAhBQAAgVgCgEQgCgFgFgDQgEgDgIAAQgHAAgGAEQgHAEgDAHQgDAIAAAPIAAA/IghAAIAAirIAhAAIAABAQAQgTAVAAQAMAAAJAEQAJAEAFAHQAEAHACAHQACAIAAAQIAABJg");
	this.shape_4.setTransform(174.8,75.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag0BBQgWgXAAgpQAAgqAWgXQAWgYAkAAQAfAAAUATQALALAGAUIgiAJQgDgOgKgIQgJgHgOAAQgSAAgMANQgMAOAAAfQAAAfAMAOQALAOASAAQAOAAAKgJQAKgJAEgSIAiAKQgIAcgSAOQgSAOgcAAQghAAgWgYg");
	this.shape_5.setTransform(158.7,75.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgPBWIAAirIAgAAIAACrg");
	this.shape_6.setTransform(140.2,75.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgtAsQgMgRAAgaQAAgeAQgRQAQgSAZAAQAbAAAQASQAQATgBAlIhRAAQAAAOAIAIQAHAIALAAQAHAAAGgEQAFgEADgJIAgAFQgGASgOAKQgNAJgVAAQgfAAgQgVgAgQgfQgHAIAAANIAwAAQAAgOgHgHQgHgIgKAAQgKAAgHAIg");
	this.shape_7.setTransform(130,77.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgNA+Igzh7IAjAAIAXA+IAGAWIAEgLIADgLIAYg+IAhAAIgxB7g");
	this.shape_8.setTransform(116.7,77.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgtAsQgMgRAAgaQAAgeAQgRQAQgSAZAAQAbAAAQASQAQATgBAlIhRAAQAAAOAIAIQAHAIALAAQAHAAAGgEQAFgEADgJIAgAFQgGASgOAKQgNAJgVAAQgfAAgQgVgAgQgfQgHAIAAANIAwAAQAAgOgHgHQgHgIgKAAQgKAAgHAIg");
	this.shape_9.setTransform(103.3,77.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag7BVIAAipIAiAAIAACMIBVAAIAAAdg");
	this.shape_10.setTransform(90,75.2);

	this.level_3_btn = new lib.level_num_btn();
	this.level_3_btn.name = "level_3_btn";
	this.level_3_btn.parent = this;
	this.level_3_btn.setTransform(200,150);
	new cjs.ButtonHelper(this.level_3_btn, 0, 1, 2, false, new lib.level_num_btn(), 3);

	this.level_1_btn = new lib.level_num_btn();
	this.level_1_btn.name = "level_1_btn";
	this.level_1_btn.parent = this;
	this.level_1_btn.setTransform(80,150);
	new cjs.ButtonHelper(this.level_1_btn, 0, 1, 2, false, new lib.level_num_btn(), 3);

	this.level_2_btn = new lib.level_num_btn();
	this.level_2_btn.name = "level_2_btn";
	this.level_2_btn.parent = this;
	this.level_2_btn.setTransform(140,150);
	new cjs.ButtonHelper(this.level_2_btn, 0, 1, 2, false, new lib.level_num_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.level_2_btn},{t:this.level_1_btn},{t:this.level_3_btn},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.level_txt},{t:this.level_1_text_mc},{t:this.level_2_text_mc},{t:this.level_3_text_mc}]}).wait(1));

	// area
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(0,0,0,0.698)").s().p("A4/eeMAAAg87MAx/AAAMAAAA87g");
	this.shape_11.setTransform(160,195);

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(1));

}).prototype = getMCSymbolPrototype(lib.popup_mc, new cjs.Rectangle(0,0,320,390), null);


(lib.player_mc = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// player_error_mc
	this.player_error_mc = new lib.player_error_mc();
	this.player_error_mc.name = "player_error_mc";
	this.player_error_mc.parent = this;
	this.player_error_mc.cache(-42,-22,84,44);

	this.timeline.addTween(cjs.Tween.get(this.player_error_mc).wait(1));

	// player_art_mc
	this.player_art_mc = new lib.player_art_mc();
	this.player_art_mc.name = "player_art_mc";
	this.player_art_mc.parent = this;
	this.player_art_mc.cache(-42,-22,84,44);

	this.timeline.addTween(cjs.Tween.get(this.player_art_mc).wait(1));

	// hit_mc
	this.hit_mc = new lib.hit_mc();
	this.hit_mc.name = "hit_mc";
	this.hit_mc.parent = this;
	this.hit_mc.setTransform(0,0,2,1);
	this.hit_mc.alpha = 0.012;
	this.hit_mc.cache(-22,-22,44,44);

	this.timeline.addTween(cjs.Tween.get(this.hit_mc).wait(1));

}).prototype = getMCSymbolPrototype(lib.player_mc, new cjs.Rectangle(-40,-20,80,40), null);


(lib.life_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// life_num_mc
	this.life_3_mc = new lib.life_art_mc();
	this.life_3_mc.name = "life_3_mc";
	this.life_3_mc.parent = this;
	this.life_3_mc.setTransform(110,30);
	this.life_3_mc.cache(-22,-22,44,44);

	this.life_2_mc = new lib.life_art_mc();
	this.life_2_mc.name = "life_2_mc";
	this.life_2_mc.parent = this;
	this.life_2_mc.setTransform(70,30);
	this.life_2_mc.cache(-22,-22,44,44);

	this.life_1_mc = new lib.life_art_mc();
	this.life_1_mc.name = "life_1_mc";
	this.life_1_mc.parent = this;
	this.life_1_mc.setTransform(30,30);
	this.life_1_mc.cache(-22,-22,44,44);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.life_1_mc},{t:this.life_2_mc},{t:this.life_3_mc}]}).wait(1));

	// control_back_mc
	this.control_back_mc = new lib.control_back_mc();
	this.control_back_mc.name = "control_back_mc";
	this.control_back_mc.parent = this;
	this.control_back_mc.cache(-3,-3,147,67);

	this.timeline.addTween(cjs.Tween.get(this.control_back_mc).wait(1));

}).prototype = getMCSymbolPrototype(lib.life_mc, new cjs.Rectangle(-1.5,-1.5,143,63), null);


(lib.L_R_btn = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// g
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AiBBkICBjHICCDHg");
	this.shape.setTransform(0,-2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(3,1,1).p("AC0AAQAABKg1A1Qg0A1hLAAQhKAAg1g1Qg0g1AAhKQAAhJA0g2QA1g0BKAAQBLAAA0A0QA1A2AABJg");
	this.shape_1.setTransform(0,0,1.389,1.389);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#990000").s().p("Ah/B/Qg0g0AAhLQAAhJA0g1QA1g1BKAAQBKAAA1A1QA1A1AABJQAABLg1A0Qg1A1hKAAQhKAAg1g1g");
	this.shape_2.setTransform(0,0,1.389,1.389);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#333333").ss(9,1,1).p("AC0AAQAABKg1A1Qg0A1hLAAQhKAAg1g1Qg0g1AAhKQAAhJA0g2QA1g0BKAAQBLAAA0A0QA1A2AABJg");
	this.shape_3.setTransform(0,0,1.389,1.389);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// hit_mc
	this.hit_mc = new lib.hit_mc();
	this.hit_mc.name = "hit_mc";
	this.hit_mc.parent = this;
	this.hit_mc.setTransform(0,0,1.75,1.75);
	this.hit_mc.alpha = 0.012;
	this.hit_mc.cache(-22,-22,44,44);

	this.timeline.addTween(cjs.Tween.get(this.hit_mc).wait(1));

}).prototype = getMCSymbolPrototype(lib.L_R_btn, new cjs.Rectangle(-35,-35,70,70), null);


(lib.hit_num_mc = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//ルート
		var root = exportRoot;
		//自分
		var this_mc = this;
		//初期位置
		var ini_y_num = this.y;
		//乱数設定
		var random_time_array = [ 0, 16, 12, 8 ];
		//タイマーID
		var timer_id = 0;
		//カウント用
		var count_num = 0;
		var count_max_num = 8;
		//エラー用
		var error_num = 4;
		//速度
		var speed_num = 0;
		//速度係数
		var speed_k_num = 10;
		//速度制限
		var speed_limit_num = 500;
		//毎秒処理
		var lis_obj = null;
		//プレイヤー
		var target_mc = root.game_mc.player_mc;
		//表示非表示
		target_mc.player_art_mc.visible = true;
		target_mc.player_error_mc.visible = false;
		
		//エラー非表示
		this.parent.error_mc.visible = false;
		for ( var i = 1; i <= error_num; i++ ) {
			this.parent[ "error_" + i + "_mc" ].visible = false;
		};
		
		//開始
		this.start_func = function() {
			//リセット
			this_mc.reset_func();
			//ライフがあれば
			if ( root.active_obj.life > 0 ) {
				//乱数発行
				var _num = Math.floor( Math.random() * random_time_array[ root.active_obj.level ] );
				//タイマー
				setTimeout( function() {
					//効果音
					createjs.Sound.play( "enemystart" );
					//イン
					this_mc.in_func();
				}, _num * 500 );
			};
		};
		
		//リセット
		this.reset_func = function() {
			//タイマークリア
			clearInterval( timer_id );
			//カウント用初期化
			count_num = 0;
			//毎秒処理
			createjs.Ticker.removeEventListener( "tick", lis_obj );
			//速度調節
			speed_num = root.in_time_array[ root.active_obj.level ] - ( root.active_obj.score * speed_k_num );
			if ( speed_num < speed_limit_num ) {
				speed_num = speed_limit_num;
			};
			//console.log( speed_num );
			//初期位置
			this.y = ini_y_num;
		};
		
		//イン
		this.in_func = function() {
			//ライフがあれば
			if ( root.active_obj.life > 0 ) {
				//タイマークリア
				clearInterval( timer_id );
				//タイマー発行
				timer_id = setInterval( function() {
					//効果音
					createjs.Sound.play( "enemymove" );
					//カウントアップ
					count_num += 1;
					//移動と回転
					var _mc = this_mc.parent[ "pos_" + this_mc.name.split( "_" )[ 1 ] + "_" + count_num + "_mc" ];
					if ( _mc ) {
						this_mc.y = _mc.y;
						this_mc.rotation = _mc.rotation;
					};
					//毎秒処理
					if ( count_num == count_max_num - 1 ) {
						lis_obj = createjs.Ticker.addEventListener( "tick", this_mc.tick_func );
					};
					//地面と衝突判定
					if ( count_num == count_max_num ) {
						this_mc.hr_hit_func();
					};
				}, speed_num );
			};
			//ライフがなければ
			if ( root.active_obj.life <= 0 ) {
				//タイマークリア
				clearInterval( timer_id );
			};
		};
		
		//毎秒処理
		this.tick_func = function( event ) {
			//console.log( lis_obj );
			//プレイヤーと衝突判定
			this_mc.player_hit_func();
		};
		
		//プレイヤーと衝突判定
		this.player_hit_func = function() {
			//自分から見たプレイヤーのローカル座標を取得
			var point = target_mc.localToLocal( 0, 0, this_mc );
			//判定結果
			var hit_bool = this_mc.hitTest( point.x, point.y );
			//衝突した場合
			if ( hit_bool == true ) {
				//得点計算
				this.score_func( "+" );
				//毎秒処理
				createjs.Ticker.removeEventListener( "tick", lis_obj );
				//再開
				setTimeout( function() {
					this_mc.restart_func();
				}, speed_limit_num / 2 );
			};
		};
		
		//地面と衝突判定
		this.hr_hit_func = function() {
			//自分から見た地面のローカル座標を取得
			var point = this_mc.parent[ "pos_" + this.name.split( "_" )[ 1 ] + "_" + count_max_num + "_mc" ].localToLocal( 0, 0, this_mc );
			//判定結果
			var hit_bool = this_mc.hitTest( point.x, point.y );
			//衝突した場合
			if ( hit_bool == true ) {
				//ライフがあれば
				if ( root.active_obj.life > 0 ) {
					//ライフ計算
					this_mc.life_func( "-" );
					//エラー表示
					this_mc.error_func();
				};
				//再開
				this_mc.restart_func();
			};
		};
		
		//得点計算
		this.score_func = function( _str ) {
			//効果音
			createjs.Sound.play( "score" );
			//加算
			if ( _str == "+" ) {
				root.active_obj.score += 1;
			};
			//減算
			if ( _str == "-" ) {
				root.active_obj.score -= 1;
			};
			//画面表示更新
			root.text_mc.score_txt.text = String( root.active_obj.score );
		};
		
		//ライフ計算
		this.life_func = function( _str ) {
			//加算
			if ( _str == "+" ) {
				root.active_obj.life += 1;
			};
			//減算
			if ( _str == "-" ) {
				root.active_obj.life -= 1;
			};
			//画面表示更新
			root.life_mc.life_1_mc.visible = false;
			root.life_mc.life_2_mc.visible = false;
			root.life_mc.life_3_mc.visible = false;
			for ( var i = 1; i <= root.active_obj.life; i++ ) {
				root.life_mc[ "life_" + i + "_mc" ].visible = true;
			};
		};
		
		//エラー表示
		this.error_func = function() {
			//効果音
			createjs.Sound.play( "error" );
			//オン
			this_mc.parent.error_mc.visible = true;
			this_mc.enemy_art_mc.visible = false;
			this_mc.parent[ "error_" + this_mc.name.split( "_" )[ 1 ] + "_mc" ].visible = true;
			target_mc.player_art_mc.visible = false;
			target_mc.player_error_mc.visible = true;
			//タイマー
			setTimeout( function() {
				//オフ
				this_mc.parent.error_mc.visible = false;
				this_mc.enemy_art_mc.visible = true;
				this_mc.parent[ "error_" + this_mc.name.split( "_" )[ 1 ] + "_mc" ].visible = false;
				target_mc.player_art_mc.visible = true;
				target_mc.player_error_mc.visible = false;
			}, 500 );
		};
		
		//再開
		this.restart_func = function() {
			//ライフがあれば再開
			if ( root.active_obj.life > 0 ) {
				this_mc.start_func();
			};
			//ライフがなければゲーム終了
			if ( root.active_obj.life <= 0 ) {
				root.game_stop_func();
			};
		};
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// enemy_art_mc
	this.enemy_art_mc = new lib.enemy_art_mc();
	this.enemy_art_mc.name = "enemy_art_mc";
	this.enemy_art_mc.parent = this;
	this.enemy_art_mc.setTransform(0.2,0,1,1,0,0,0,0.2,0);
	this.enemy_art_mc.cache(-22,-22,44,44);

	this.timeline.addTween(cjs.Tween.get(this.enemy_art_mc).wait(1));

	// hit_mc
	this.hit_mc = new lib.hit_mc();
	this.hit_mc.name = "hit_mc";
	this.hit_mc.parent = this;
	this.hit_mc.alpha = 0.012;
	this.hit_mc.cache(-22,-22,44,44);

	this.timeline.addTween(cjs.Tween.get(this.hit_mc).wait(1));

}).prototype = getMCSymbolPrototype(lib.hit_num_mc, new cjs.Rectangle(-20,-20,40,40), null);


(lib.game_mc = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A4/ZAMAAAgx/MAx/AAAMAAAAx/g");
	mask.setTransform(160,160);

	// error_num_mc
	this.error_4_mc = new lib.enemy_error_mc();
	this.error_4_mc.name = "error_4_mc";
	this.error_4_mc.parent = this;
	this.error_4_mc.setTransform(280.2,300.1,1,1,20,0,0,0.2,0);
	this.error_4_mc.cache(-22,-22,44,44);

	this.error_3_mc = new lib.enemy_error_mc();
	this.error_3_mc.name = "error_3_mc";
	this.error_3_mc.parent = this;
	this.error_3_mc.setTransform(200.1,299.7,1,1,-60,0,0,0.3,-0.1);
	this.error_3_mc.cache(-22,-22,44,44);

	this.error_2_mc = new lib.enemy_error_mc();
	this.error_2_mc.name = "error_2_mc";
	this.error_2_mc.parent = this;
	this.error_2_mc.setTransform(120.1,300.1,1,1,20,0,0,0.1,0);
	this.error_2_mc.cache(-22,-22,44,44);

	this.error_1_mc = new lib.enemy_error_mc();
	this.error_1_mc.name = "error_1_mc";
	this.error_1_mc.parent = this;
	this.error_1_mc.setTransform(40.2,299.9,1,1,-60,0,0,0.2,0.1);
	this.error_1_mc.cache(-22,-22,44,44);

	var maskedShapeInstanceList = [this.error_4_mc,this.error_3_mc,this.error_2_mc,this.error_1_mc];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.error_1_mc},{t:this.error_2_mc},{t:this.error_3_mc},{t:this.error_4_mc}]}).wait(1));

	// hit_num_mc
	this.hit_4_mc = new lib.hit_num_mc();
	this.hit_4_mc.name = "hit_4_mc";
	this.hit_4_mc.parent = this;
	this.hit_4_mc.setTransform(280.1,-19.8,1,1,0,0,0,0.1,0.2);

	this.hit_3_mc = new lib.hit_num_mc();
	this.hit_3_mc.name = "hit_3_mc";
	this.hit_3_mc.parent = this;
	this.hit_3_mc.setTransform(200.1,-19.8,1,1,0,0,0,0.1,0.2);

	this.hit_2_mc = new lib.hit_num_mc();
	this.hit_2_mc.name = "hit_2_mc";
	this.hit_2_mc.parent = this;
	this.hit_2_mc.setTransform(120.1,-19.8,1,1,0,0,0,0.1,0.2);

	this.hit_1_mc = new lib.hit_num_mc();
	this.hit_1_mc.name = "hit_1_mc";
	this.hit_1_mc.parent = this;
	this.hit_1_mc.setTransform(40.1,-19.8,1,1,0,0,0,0.1,0.2);

	var maskedShapeInstanceList = [this.hit_4_mc,this.hit_3_mc,this.hit_2_mc,this.hit_1_mc];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hit_1_mc},{t:this.hit_2_mc},{t:this.hit_3_mc},{t:this.hit_4_mc}]}).wait(1));

	// player_mc
	this.player_mc = new lib.player_mc();
	this.player_mc.name = "player_mc";
	this.player_mc.parent = this;
	this.player_mc.setTransform(40,280);

	var maskedShapeInstanceList = [this.player_mc];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.player_mc).wait(1));

	// move_num_mc
	this.move_4_mc = new lib.player_art_mc();
	this.move_4_mc.name = "move_4_mc";
	this.move_4_mc.parent = this;
	this.move_4_mc.setTransform(280,280);
	this.move_4_mc.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 0)];
	this.move_4_mc.cache(-42,-22,84,44);

	this.move_3_mc = new lib.player_art_mc();
	this.move_3_mc.name = "move_3_mc";
	this.move_3_mc.parent = this;
	this.move_3_mc.setTransform(200,280);
	this.move_3_mc.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 0)];
	this.move_3_mc.cache(-42,-22,84,44);

	this.move_2_mc = new lib.player_art_mc();
	this.move_2_mc.name = "move_2_mc";
	this.move_2_mc.parent = this;
	this.move_2_mc.setTransform(120,280);
	this.move_2_mc.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 0)];
	this.move_2_mc.cache(-42,-22,84,44);

	this.move_1_mc = new lib.player_art_mc();
	this.move_1_mc.name = "move_1_mc";
	this.move_1_mc.parent = this;
	this.move_1_mc.setTransform(40,280);
	this.move_1_mc.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 0)];
	this.move_1_mc.cache(-42,-22,84,44);

	var maskedShapeInstanceList = [this.move_4_mc,this.move_3_mc,this.move_2_mc,this.move_1_mc];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.move_1_mc},{t:this.move_2_mc},{t:this.move_3_mc},{t:this.move_4_mc}]}).wait(1));

	// pos_num_num_mc
	this.pos_4_8_mc = new lib.enemy_art_mc();
	this.pos_4_8_mc.name = "pos_4_8_mc";
	this.pos_4_8_mc.parent = this;
	this.pos_4_8_mc.setTransform(280,300.4,1,1,20,0,0,0.1,0.3);
	this.pos_4_8_mc.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 0)];
	this.pos_4_8_mc.cache(-22,-22,44,44);

	this.pos_3_8_mc = new lib.enemy_art_mc();
	this.pos_3_8_mc.name = "pos_3_8_mc";
	this.pos_3_8_mc.parent = this;
	this.pos_3_8_mc.setTransform(200.3,300.1,1,1,-60,0,0,0.1,0.3);
	this.pos_3_8_mc.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 0)];
	this.pos_3_8_mc.cache(-22,-22,44,44);

	this.pos_2_8_mc = new lib.enemy_art_mc();
	this.pos_2_8_mc.name = "pos_2_8_mc";
	this.pos_2_8_mc.parent = this;
	this.pos_2_8_mc.setTransform(120,300.4,1,1,20,0,0,0.1,0.3);
	this.pos_2_8_mc.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 0)];
	this.pos_2_8_mc.cache(-22,-22,44,44);

	this.pos_1_8_mc = new lib.enemy_art_mc();
	this.pos_1_8_mc.name = "pos_1_8_mc";
	this.pos_1_8_mc.parent = this;
	this.pos_1_8_mc.setTransform(40.4,300.1,1,1,-60,0,0,0.1,0.4);
	this.pos_1_8_mc.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 0)];
	this.pos_1_8_mc.cache(-22,-22,44,44);

	this.pos_4_7_mc = new lib.enemy_art_mc();
	this.pos_4_7_mc.name = "pos_4_7_mc";
	this.pos_4_7_mc.parent = this;
	this.pos_4_7_mc.setTransform(280.2,260,1,1,-60,0,0,0.1,0.2);
	this.pos_4_7_mc.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 0)];
	this.pos_4_7_mc.cache(-22,-22,44,44);

	this.pos_3_7_mc = new lib.enemy_art_mc();
	this.pos_3_7_mc.name = "pos_3_7_mc";
	this.pos_3_7_mc.parent = this;
	this.pos_3_7_mc.setTransform(200.1,260.3,1,1,20,0,0,0.1,0.2);
	this.pos_3_7_mc.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 0)];
	this.pos_3_7_mc.cache(-22,-22,44,44);

	this.pos_2_7_mc = new lib.enemy_art_mc();
	this.pos_2_7_mc.name = "pos_2_7_mc";
	this.pos_2_7_mc.parent = this;
	this.pos_2_7_mc.setTransform(120.3,260.1,1,1,-60,0,0,0.1,0.3);
	this.pos_2_7_mc.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 0)];
	this.pos_2_7_mc.cache(-22,-22,44,44);

	this.pos_1_7_mc = new lib.enemy_art_mc();
	this.pos_1_7_mc.name = "pos_1_7_mc";
	this.pos_1_7_mc.parent = this;
	this.pos_1_7_mc.setTransform(40,260.5,1,1,20,0,0,0.1,0.4);
	this.pos_1_7_mc.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 0)];
	this.pos_1_7_mc.cache(-22,-22,44,44);

	this.pos_4_6_mc = new lib.enemy_art_mc();
	this.pos_4_6_mc.name = "pos_4_6_mc";
	this.pos_4_6_mc.parent = this;
	this.pos_4_6_mc.setTransform(280,220.4,1,1,20,0,0,0.1,0.3);
	this.pos_4_6_mc.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 0)];
	this.pos_4_6_mc.cache(-22,-22,44,44);

	this.pos_4_5_mc = new lib.enemy_art_mc();
	this.pos_4_5_mc.name = "pos_4_5_mc";
	this.pos_4_5_mc.parent = this;
	this.pos_4_5_mc.setTransform(280.3,180.1,1,1,-60,0,0,0.1,0.3);
	this.pos_4_5_mc.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 0)];
	this.pos_4_5_mc.cache(-22,-22,44,44);

	this.pos_4_4_mc = new lib.enemy_art_mc();
	this.pos_4_4_mc.name = "pos_4_4_mc";
	this.pos_4_4_mc.parent = this;
	this.pos_4_4_mc.setTransform(280.1,140.3,1,1,20,0,0,0.1,0.2);
	this.pos_4_4_mc.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 0)];
	this.pos_4_4_mc.cache(-22,-22,44,44);

	this.pos_4_3_mc = new lib.enemy_art_mc();
	this.pos_4_3_mc.name = "pos_4_3_mc";
	this.pos_4_3_mc.parent = this;
	this.pos_4_3_mc.setTransform(280.2,100,1,1,-60,0,0,0.1,0.1);
	this.pos_4_3_mc.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 0)];
	this.pos_4_3_mc.cache(-22,-22,44,44);

	this.pos_4_2_mc = new lib.enemy_art_mc();
	this.pos_4_2_mc.name = "pos_4_2_mc";
	this.pos_4_2_mc.parent = this;
	this.pos_4_2_mc.setTransform(280.1,60.3,1,1,20,0,0,0.1,0.2);
	this.pos_4_2_mc.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 0)];
	this.pos_4_2_mc.cache(-22,-22,44,44);

	this.pos_4_1_mc = new lib.enemy_art_mc();
	this.pos_4_1_mc.name = "pos_4_1_mc";
	this.pos_4_1_mc.parent = this;
	this.pos_4_1_mc.setTransform(280.2,20,1,1,-60,0,0,0.1,0.2);
	this.pos_4_1_mc.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 0)];
	this.pos_4_1_mc.cache(-22,-22,44,44);

	this.pos_3_6_mc = new lib.enemy_art_mc();
	this.pos_3_6_mc.name = "pos_3_6_mc";
	this.pos_3_6_mc.parent = this;
	this.pos_3_6_mc.setTransform(200.2,220,1,1,-60,0,0,0.1,0.2);
	this.pos_3_6_mc.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 0)];
	this.pos_3_6_mc.cache(-22,-22,44,44);

	this.pos_3_5_mc = new lib.enemy_art_mc();
	this.pos_3_5_mc.name = "pos_3_5_mc";
	this.pos_3_5_mc.parent = this;
	this.pos_3_5_mc.setTransform(200,180.4,1,1,20,0,0,0.1,0.3);
	this.pos_3_5_mc.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 0)];
	this.pos_3_5_mc.cache(-22,-22,44,44);

	this.pos_3_4_mc = new lib.enemy_art_mc();
	this.pos_3_4_mc.name = "pos_3_4_mc";
	this.pos_3_4_mc.parent = this;
	this.pos_3_4_mc.setTransform(200.2,140,1,1,-60,0,0,0.1,0.2);
	this.pos_3_4_mc.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 0)];
	this.pos_3_4_mc.cache(-22,-22,44,44);

	this.pos_3_3_mc = new lib.enemy_art_mc();
	this.pos_3_3_mc.name = "pos_3_3_mc";
	this.pos_3_3_mc.parent = this;
	this.pos_3_3_mc.setTransform(200.1,100.3,1,1,20,0,0,0.1,0.2);
	this.pos_3_3_mc.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 0)];
	this.pos_3_3_mc.cache(-22,-22,44,44);

	this.pos_3_2_mc = new lib.enemy_art_mc();
	this.pos_3_2_mc.name = "pos_3_2_mc";
	this.pos_3_2_mc.parent = this;
	this.pos_3_2_mc.setTransform(200.2,60,1,1,-60,0,0,0.1,0.2);
	this.pos_3_2_mc.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 0)];
	this.pos_3_2_mc.cache(-22,-22,44,44);

	this.pos_3_1_mc = new lib.enemy_art_mc();
	this.pos_3_1_mc.name = "pos_3_1_mc";
	this.pos_3_1_mc.parent = this;
	this.pos_3_1_mc.setTransform(200,20.4,1,1,20,0,0,0.1,0.3);
	this.pos_3_1_mc.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 0)];
	this.pos_3_1_mc.cache(-22,-22,44,44);

	this.pos_2_6_mc = new lib.enemy_art_mc();
	this.pos_2_6_mc.name = "pos_2_6_mc";
	this.pos_2_6_mc.parent = this;
	this.pos_2_6_mc.setTransform(120,220.4,1,1,20,0,0,0.1,0.3);
	this.pos_2_6_mc.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 0)];
	this.pos_2_6_mc.cache(-22,-22,44,44);

	this.pos_2_5_mc = new lib.enemy_art_mc();
	this.pos_2_5_mc.name = "pos_2_5_mc";
	this.pos_2_5_mc.parent = this;
	this.pos_2_5_mc.setTransform(120.2,180,1,1,-60,0,0,0.1,0.2);
	this.pos_2_5_mc.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 0)];
	this.pos_2_5_mc.cache(-22,-22,44,44);

	this.pos_2_4_mc = new lib.enemy_art_mc();
	this.pos_2_4_mc.name = "pos_2_4_mc";
	this.pos_2_4_mc.parent = this;
	this.pos_2_4_mc.setTransform(120,140.4,1,1,20,0,0,0.1,0.3);
	this.pos_2_4_mc.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 0)];
	this.pos_2_4_mc.cache(-22,-22,44,44);

	this.pos_2_3_mc = new lib.enemy_art_mc();
	this.pos_2_3_mc.name = "pos_2_3_mc";
	this.pos_2_3_mc.parent = this;
	this.pos_2_3_mc.setTransform(120.2,100,1,1,-60,0,0,0.1,0.2);
	this.pos_2_3_mc.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 0)];
	this.pos_2_3_mc.cache(-22,-22,44,44);

	this.pos_2_2_mc = new lib.enemy_art_mc();
	this.pos_2_2_mc.name = "pos_2_2_mc";
	this.pos_2_2_mc.parent = this;
	this.pos_2_2_mc.setTransform(120.1,60.3,1,1,20,0,0,0.1,0.2);
	this.pos_2_2_mc.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 0)];
	this.pos_2_2_mc.cache(-22,-22,44,44);

	this.pos_2_1_mc = new lib.enemy_art_mc();
	this.pos_2_1_mc.name = "pos_2_1_mc";
	this.pos_2_1_mc.parent = this;
	this.pos_2_1_mc.setTransform(120.2,19.9,1,1,-60,0,0,0.2,0.1);
	this.pos_2_1_mc.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 0)];
	this.pos_2_1_mc.cache(-22,-22,44,44);

	this.pos_1_6_mc = new lib.enemy_art_mc();
	this.pos_1_6_mc.name = "pos_1_6_mc";
	this.pos_1_6_mc.parent = this;
	this.pos_1_6_mc.setTransform(40.3,220.1,1,1,-60,0,0,0.1,0.3);
	this.pos_1_6_mc.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 0)];
	this.pos_1_6_mc.cache(-22,-22,44,44);

	this.pos_1_5_mc = new lib.enemy_art_mc();
	this.pos_1_5_mc.name = "pos_1_5_mc";
	this.pos_1_5_mc.parent = this;
	this.pos_1_5_mc.setTransform(40,180.4,1,1,20,0,0,0.1,0.3);
	this.pos_1_5_mc.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 0)];
	this.pos_1_5_mc.cache(-22,-22,44,44);

	this.pos_1_4_mc = new lib.enemy_art_mc();
	this.pos_1_4_mc.name = "pos_1_4_mc";
	this.pos_1_4_mc.parent = this;
	this.pos_1_4_mc.setTransform(40.3,140.1,1,1,-60,0,0,0.1,0.3);
	this.pos_1_4_mc.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 0)];
	this.pos_1_4_mc.cache(-22,-22,44,44);

	this.pos_1_3_mc = new lib.enemy_art_mc();
	this.pos_1_3_mc.name = "pos_1_3_mc";
	this.pos_1_3_mc.parent = this;
	this.pos_1_3_mc.setTransform(40,100.4,1,1,20,0,0,0.1,0.3);
	this.pos_1_3_mc.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 0)];
	this.pos_1_3_mc.cache(-22,-22,44,44);

	this.pos_1_2_mc = new lib.enemy_art_mc();
	this.pos_1_2_mc.name = "pos_1_2_mc";
	this.pos_1_2_mc.parent = this;
	this.pos_1_2_mc.setTransform(40.4,60.1,1,1,-60,0,0,0.1,0.4);
	this.pos_1_2_mc.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 0)];
	this.pos_1_2_mc.cache(-22,-22,44,44);

	this.pos_1_1_mc = new lib.enemy_art_mc();
	this.pos_1_1_mc.name = "pos_1_1_mc";
	this.pos_1_1_mc.parent = this;
	this.pos_1_1_mc.setTransform(40.2,20.4,1,1,20,0,0,0.3,0.3);
	this.pos_1_1_mc.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 0)];
	this.pos_1_1_mc.cache(-22,-22,44,44);

	var maskedShapeInstanceList = [this.pos_4_8_mc,this.pos_3_8_mc,this.pos_2_8_mc,this.pos_1_8_mc,this.pos_4_7_mc,this.pos_3_7_mc,this.pos_2_7_mc,this.pos_1_7_mc,this.pos_4_6_mc,this.pos_4_5_mc,this.pos_4_4_mc,this.pos_4_3_mc,this.pos_4_2_mc,this.pos_4_1_mc,this.pos_3_6_mc,this.pos_3_5_mc,this.pos_3_4_mc,this.pos_3_3_mc,this.pos_3_2_mc,this.pos_3_1_mc,this.pos_2_6_mc,this.pos_2_5_mc,this.pos_2_4_mc,this.pos_2_3_mc,this.pos_2_2_mc,this.pos_2_1_mc,this.pos_1_6_mc,this.pos_1_5_mc,this.pos_1_4_mc,this.pos_1_3_mc,this.pos_1_2_mc,this.pos_1_1_mc];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pos_1_1_mc},{t:this.pos_1_2_mc},{t:this.pos_1_3_mc},{t:this.pos_1_4_mc},{t:this.pos_1_5_mc},{t:this.pos_1_6_mc},{t:this.pos_2_1_mc},{t:this.pos_2_2_mc},{t:this.pos_2_3_mc},{t:this.pos_2_4_mc},{t:this.pos_2_5_mc},{t:this.pos_2_6_mc},{t:this.pos_3_1_mc},{t:this.pos_3_2_mc},{t:this.pos_3_3_mc},{t:this.pos_3_4_mc},{t:this.pos_3_5_mc},{t:this.pos_3_6_mc},{t:this.pos_4_1_mc},{t:this.pos_4_2_mc},{t:this.pos_4_3_mc},{t:this.pos_4_4_mc},{t:this.pos_4_5_mc},{t:this.pos_4_6_mc},{t:this.pos_1_7_mc},{t:this.pos_2_7_mc},{t:this.pos_3_7_mc},{t:this.pos_4_7_mc},{t:this.pos_1_8_mc},{t:this.pos_2_8_mc},{t:this.pos_3_8_mc},{t:this.pos_4_8_mc}]}).wait(1));

	// error_mc
	this.error_mc = new lib.error_mc();
	this.error_mc.name = "error_mc";
	this.error_mc.parent = this;
	this.error_mc.cache(-2,-2,324,324);

	this.timeline.addTween(cjs.Tween.get(this.error_mc).wait(1));

	// area_mc
	this.area_mc = new lib.area_mc();
	this.area_mc.name = "area_mc";
	this.area_mc.parent = this;
	this.area_mc.cache(-2,-2,324,324);

	this.timeline.addTween(cjs.Tween.get(this.area_mc).wait(1));

}).prototype = getMCSymbolPrototype(lib.game_mc, new cjs.Rectangle(0,0,320,320), null);


(lib.control_mc = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//動かす対象
		var target_mc = exportRoot.game_mc.player_mc;
		
		//左右ボタン
		this.L_btn.cursor = this.R_btn.cursor = "pointer";
		this.L_btn.addEventListener( "mousedown", click_func );
		this.R_btn.addEventListener( "mousedown", click_func );
		//クリック
		function click_func( event ) {
			move_func( event.currentTarget.name.split( "_" )[ 0 ] );
		};
		
		//キーボード入力
		document.addEventListener( "keydown", key_func );
		//キー取得
		function key_func( event ) {
			if ( event.keyCode == 37 ) {
				move_func( "L" );
			};
			if ( event.keyCode == 39 ) {
				move_func( "R" );
			};
		};
		
		//移動
		function move_func( _str ) {
			createjs.Sound.play( "playermove" );
			if ( _str == "L" ) {
				if ( target_mc.x > 40 ) {
					target_mc.x -= 80;
				};
			} else if ( _str == "R" ) {
				if ( target_mc.x < 280 ) {
					target_mc.x += 80;
				};
			};
		};
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// btn
	this.R_btn = new lib.L_R_btn();
	this.R_btn.name = "R_btn";
	this.R_btn.parent = this;
	this.R_btn.setTransform(285,35,1,1,90);
	this.R_btn.cache(-37,-37,74,74);

	this.L_btn = new lib.L_R_btn();
	this.L_btn.name = "L_btn";
	this.L_btn.parent = this;
	this.L_btn.setTransform(35,35,1,1,-90);
	this.L_btn.cache(-37,-37,74,74);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.L_btn},{t:this.R_btn}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.control_mc, new cjs.Rectangle(0,0,320,70), null);


// stage content:
(lib.game4 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//停止
		this.stop();
		
		//マウスオン
		stage.enableMouseOver( lib.properties.fps );
		
		//タッチイベントオン
		if ( createjs.Touch.isSupported() ) {
			createjs.Touch.enable( stage );
		};
		
		//名前設定
		this.name = "root_mc";
		
		//ルート参照用
		var root = exportRoot;
		//現在参照用
		this.active_obj = { level : 0, time : 0, score : 0, life : 0 };
		
		//開始時間
		this.start_time_num = 0;
		//経過時間
		this.play_time_num = 0;
		//速度
		this.in_time_num = 0;
		this.in_time_array = [ 0, 1000, 750, 500 ];
		
		//メインループリスナー
		this.roop_lis = null;
		
		//効果音設定
		createjs.Sound.registerSound( "sounds/bgm.mp3", "bgm" );
		createjs.Sound.registerSound( "sounds/enemymove.mp3", "enemymove" );
		createjs.Sound.registerSound( "sounds/enemystart.mp3", "enemystart" );
		createjs.Sound.registerSound( "sounds/error.mp3", "error" );
		createjs.Sound.registerSound( "sounds/gameover.mp3", "gameover" );
		createjs.Sound.registerSound( "sounds/gamestart.mp3", "gamestart" );
		createjs.Sound.registerSound( "sounds/level.mp3", "level" );
		createjs.Sound.registerSound( "sounds/playermove.mp3", "playermove" );
		createjs.Sound.registerSound( "sounds/score.mp3", "score" );
		
		//ポップアップ画面
		this.popup_mc.mouseEnabled = true;
		this.popup_mc.cursor = "default";
		//ゲームオーバー
		this.popup_mc.game_over_mc.visible = false;
		
		//ボタン動作
		this.btn_click_func = function( btn_mc ) {
			//console.log( btn_mc.name );
			if ( btn_mc.parent.Act_Btn ) {
				btn_mc.parent.Act_Btn.mouseEnabled = true;
				btn_mc.parent.Act_Btn.gotoAndStop( 0 );
			};
			btn_mc.mouseEnabled = false;
			btn_mc.gotoAndStop( 1 );
			btn_mc.parent.Act_Btn = btn_mc;
			this.activeData_obj[ btn_mc.parent.category ] = btn_mc.name;
		};
		
		//閉じるボタン
		this.close_btn.on( "click", function() {
			window.close();
		} );
		
		//プレイボタン
		this.popup_mc.play_btn.on( "click", function() {
			//ゲーム開始
			createjs.Sound.play( "gamestart" );
			root.game_init_func();
			root.game_start_func();
		} );
		
		//レベル切替ボタン
		this.popup_mc.level_1_btn.on( "click", function() { root.level_change_func( this ); } );
		this.popup_mc.level_2_btn.on( "click", function() { root.level_change_func( this ); } );
		this.popup_mc.level_3_btn.on( "click", function() { root.level_change_func( this ); } );
		
		this.popup_mc.level_1_text_mc.mouseEnabled = false;
		this.popup_mc.level_2_text_mc.mouseEnabled = false;
		this.popup_mc.level_3_text_mc.mouseEnabled = false;
		
		this.level_change_func = function( _mc ) {
			createjs.Sound.play( "level" );
			this.popup_mc.level_txt.text = String( _mc.name.split( "_" )[ 1 ] );
			this.active_obj.level = Number( _mc.name.split( "_" )[ 1 ] );
		};
		
		this.text_mc.level_txt.text = this.popup_mc.level_txt.text = this.active_obj.level = 1;
		
		//ゲーム初期化
		this.game_init_func = function() {
			//現在参照用と画面表示用テキスト
			this.text_mc.level_txt.text = this.active_obj.level;
			this.text_mc.time_txt.text = this.active_obj.time = 0;
			this.text_mc.score_txt.text = this.active_obj.score = 0;
			//開始時間
			this.start_time_num = 0;
			//経過時間
			this.play_time_num = 0;
			//ライフ
			this.active_obj.life = 3;
			this.life_mc.life_1_mc.visible = true;
			this.life_mc.life_2_mc.visible = true;
			this.life_mc.life_3_mc.visible = true;
		};
		
		//ゲーム開始
		this.game_start_func = function() {
			//ポップアップ非表示
			createjs.Tween.get( this.popup_mc ).to( { alpha : 0.0 }, 500, createjs.Ease.linear ).call( function() {
				this.visible = false;
				//BGM再生
				root.bgm_start_func();
				//開始時間
				root.start_time_num = new Date();
				//メインループ再生
				root.roop_lis = createjs.Ticker.on( "tick", root.main_roop_func, root );
				//プレイヤーを初期位置に戻す
				root.game_mc.player_mc.x = 40;
				//敵開始
				root.in_time_num = root.in_time_array[ root.active_obj.level ];
				for ( var i in root.game_mc ) {
					if ( i.indexOf( "hit_" ) != -1 ) {
						root.game_mc[ i ].start_func();
					};
				};
			} );
		};
		
		//ゲーム終了
		this.game_stop_func = function() {
			//BGM停止
			root.bgm_stop_func();
			//メインループ停止
			createjs.Ticker.off( "tick", root.roop_lis );
			//敵終了
			for ( var i in root.game_mc ) {
				if ( i.indexOf( "hit_" ) != -1 ) {
					root.game_mc[ i ].reset_func();
				};
			};
			//ポップアップ表示
			this.popup_mc.visible = true;
			createjs.Tween.get( this.popup_mc ).to( { alpha : 1.0 }, 500, createjs.Ease.linear ).call( function() {
				//ゲームオーバー
				root.popup_mc.game_over_mc.visible = true;
				//効果音
				createjs.Sound.play( "gameover" );
				//タイマー
				setTimeout( function() {
					//効果音全部消す
					//createjs.Sound.removeAllSounds();
				}, 1500 );
			} );
		};
		
		//メインループ
		this.main_roop_func = function( event ) {
			//経過時間
			this.play_time_num = Math.floor( ( new Date() - this.start_time_num ) / 1000 );
			this.text_mc.time_txt.text = String( this.play_time_num );
		};
		
		//BGM設定
		this.bgm_id = 0;
		this.sound_time_array = [ 0, 1000, 750, 500 ];
		this.bgm_start_func = function() {
			clearInterval( this.bgm_id );
			this.bgm_id = setInterval( function() {
				createjs.Sound.play( "bgm" );
			}, this.sound_time_array[ this.active_obj.level ] );
		};
		this.bgm_stop_func = function() {
			clearInterval( this.bgm_id );
		};
		//エントリーポイント
		function entry_point_func( event ) {
			createjs.Ticker.removeEventListener( "tick", entry_point_func );
			//リクエストアニメーションフレームレート
			createjs.Ticker.useRAF = true;
			createjs.Ticker.timingMode = createjs.Ticker.RAF;
			//ゲーム初期化
			root.game_init_func();
		};
		
		//初回実行
		createjs.Ticker.addEventListener( "tick", entry_point_func );
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// line_mc
	this.line_mc = new lib.line_mc();
	this.line_mc.name = "line_mc";
	this.line_mc.parent = this;
	this.line_mc.cache(-3,-3,326,486);

	this.timeline.addTween(cjs.Tween.get(this.line_mc).wait(1));

	// popup_mc
	this.popup_mc = new lib.popup_mc();
	this.popup_mc.name = "popup_mc";
	this.popup_mc.parent = this;
	this.popup_mc.setTransform(0,60);

	this.timeline.addTween(cjs.Tween.get(this.popup_mc).wait(1));

	// text_mc
	this.text_mc = new lib.text_mc();
	this.text_mc.name = "text_mc";
	this.text_mc.parent = this;
	this.text_mc.setTransform(0,30);

	this.timeline.addTween(cjs.Tween.get(this.text_mc).wait(1));

	// life_mc
	this.life_mc = new lib.life_mc();
	this.life_mc.name = "life_mc";
	this.life_mc.parent = this;
	this.life_mc.setTransform(90,385);

	this.timeline.addTween(cjs.Tween.get(this.life_mc).wait(1));

	// control_mc
	this.control_mc = new lib.control_mc();
	this.control_mc.name = "control_mc";
	this.control_mc.parent = this;
	this.control_mc.setTransform(0,380);

	this.timeline.addTween(cjs.Tween.get(this.control_mc).wait(1));

	// game_mc
	this.game_mc = new lib.game_mc();
	this.game_mc.name = "game_mc";
	this.game_mc.parent = this;
	this.game_mc.setTransform(0,60);

	this.timeline.addTween(cjs.Tween.get(this.game_mc).wait(1));

	// close_btn
	this.close_btn = new lib.close_btn();
	this.close_btn.name = "close_btn";
	this.close_btn.parent = this;
	this.close_btn.setTransform(295.1,5.1,0.667,0.667,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.close_btn, 0, 1, 2, false, new lib.close_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.close_btn).wait(1));

	// header_mc
	this.header_mc = new lib.header_mc();
	this.header_mc.name = "header_mc";
	this.header_mc.parent = this;
	this.header_mc.cache(-2,-2,324,34);

	this.timeline.addTween(cjs.Tween.get(this.header_mc).wait(1));

	// footer_mc
	this.footer_mc = new lib.footer_mc();
	this.footer_mc.name = "footer_mc";
	this.footer_mc.parent = this;
	this.footer_mc.setTransform(0,450);
	this.footer_mc.cache(-2,-2,324,34);

	this.timeline.addTween(cjs.Tween.get(this.footer_mc).wait(1));

	// back_mc
	this.back_mc = new lib.back_mc();
	this.back_mc.name = "back_mc";
	this.back_mc.parent = this;
	this.back_mc.cache(-2,-2,324,484);

	this.timeline.addTween(cjs.Tween.get(this.back_mc).wait(1));

	// img
	this.instance = new lib.spacer();
	this.instance.parent = this;
	this.instance.setTransform(-100,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(60,239,421,482);
// library properties:
lib.properties = {
	id: 'AD48DCE78233C84B8D21EE6D0024CD62',
	width: 320,
	height: 480,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"./images/enemy_art.png", id:"enemy_art"},
		{src:"./images/enemy_error.png", id:"enemy_error"},
		{src:"./images/life_art.png", id:"life_art"},
		{src:"./images/player_art.png", id:"player_art"},
		{src:"./images/player_error.png", id:"player_error"},
		{src:"./images/spacer.png", id:"spacer"}
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
an.compositions['AD48DCE78233C84B8D21EE6D0024CD62'] = {
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