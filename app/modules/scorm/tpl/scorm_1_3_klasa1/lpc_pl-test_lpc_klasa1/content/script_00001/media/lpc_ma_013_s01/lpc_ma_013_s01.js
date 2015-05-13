if (!window.lpcma013s01) { window.lpcma013s01 = {}; }

var p; // shortcut to reference prototypes

// stage content:
(window.lpcma013s01.lpc_ma_013_s01 = function() {
	this.initialize();

	// reset
	this.reset = new window.lpcma013s01.btn_reset();
	this.reset.setTransform(681,404,1,1,0,0,0,24,24);

	// notes
	this.notes = new window.lpcma013s01.notesss();
	this.notes.setTransform(343.5,202.5);

	// bloker
	this.blocker = new window.lpcma013s01.Symbol10();
	this.blocker.setTransform(360,225,1,1,0,0,0,360,225);

	// Warstwa 6
	this.a6 = new window.lpcma013s01.Symbol7();
	this.a6.setTransform(464.2,184.7,1,1,0,0,0,41.2,27.7);

	this.a4 = new window.lpcma013s01.Symbol7();
	this.a4.setTransform(567.2,100.6,1,1,0,0,0,41.2,27.7);

	this.a3 = new window.lpcma013s01.Symbol7();
	this.a3.setTransform(454,107.1,1,1,0,0,0,41.2,27.7);

	this.a5 = new window.lpcma013s01.Symbol7();
	this.a5.setTransform(346.3,188.7,1,1,0,0,0,41.2,27.7);

	this.a2 = new window.lpcma013s01.Symbol7();
	this.a2.setTransform(223.6,188.7,1,1,0,0,0,41.2,27.7);

	this.a1 = new window.lpcma013s01.Symbol7();
	this.a1.setTransform(105.9,194.2,1,1,0,0,0,41.2,27.7);

	this.a0 = new window.lpcma013s01.Symbol7();
	this.a0.setTransform(171.1,103.7,1,1,0,0,0,41.2,27.7);

	// Warstwa 7
	this.d8 = new window.lpcma013s01.Symbol6();
	this.d8.setTransform(461.2,299.4,1,1,0,0,0,47.2,15);

	this.d9 = new window.lpcma013s01.Symbol6();
	this.d9.setTransform(461.2,349.4,1,1,0,0,0,47.2,15);

	this.d6 = new window.lpcma013s01.Symbol6();
	this.d6.setTransform(358.6,351.4,1,1,0,0,0,47.2,15);

	this.d4 = new window.lpcma013s01.Symbol6();
	this.d4.setTransform(361.2,299.4,1,1,0,0,0,47.2,15);

	this.d7 = new window.lpcma013s01.Symbol6();
	this.d7.setTransform(260,349.4,1,1,0,0,0,47.2,15);

	this.d3 = new window.lpcma013s01.Symbol6();
	this.d3.setTransform(258.6,301.4,1,1,0,0,0,47.2,15);

	this.d0 = new window.lpcma013s01.Symbol6();
	this.d0.setTransform(161.2,301.4,1,1,0,0,0,47.2,15);

	this.d5 = new window.lpcma013s01.Symbol6();
	this.d5.setTransform(161.2,349.4,1,1,0,0,0,47.2,15);

	this.d1 = new window.lpcma013s01.Symbol6();
	this.d1.setTransform(59.6,351.4,1,1,0,0,0,47.2,15);

	this.d2 = new window.lpcma013s01.Symbol6();
	this.d2.setTransform(59.6,301.4,1,1,0,0,0,47.2,15);

	// Warstwa 1
	this.drag = new window.lpcma013s01.Symbol9();
	this.drag.setTransform(359.7,-36.7,1,1,0,0,0,43.4,28.4);

	this.b1 = new window.lpcma013s01.Symbol1kopia3();
	this.b1.setTransform(106.4,177.1,0.532,0.532,0,0,0,78.5,82.5);

	this.b5 = new window.lpcma013s01.Symbol1kopia();
	this.b5.setTransform(346.8,171.7,0.532,0.532,0,0,0,78.5,82.5);

	this.b6 = new window.lpcma013s01.Symbol1kopia10();
	this.b6.setTransform(464.8,167.6,0.532,0.532,0,0,0,78.5,82.5);

	this.b4 = new window.lpcma013s01.Symbol1kopia9();
	this.b4.setTransform(567.8,83.6,0.532,0.532,0,0,0,78.6,82.5);

	this.b3 = new window.lpcma013s01.Symbol1kopia8();
	this.b3.setTransform(454.5,90,0.532,0.532,0,0,0,78.5,82.5);

	this.b2 = new window.lpcma013s01.Symbol1();
	this.b2.setTransform(224.1,171.7,0.532,0.532,0,0,0,78.5,82.5);

	this.b0 = new window.lpcma013s01.Symbol1kopia4();
	this.b0.setTransform(171.6,86.6,0.532,0.532,0,0,0,78.5,82.6);

	this.c9 = new window.lpcma013s01.podstawekkopia10();
	this.c9.setTransform(460.5,350,0.748,0.748,0,0,0,63.2,18.2);

	this.c5 = new window.lpcma013s01.podstawekkopia2();
	this.c5.setTransform(112.6,336.4,0.748,0.748);

	this.c6 = new window.lpcma013s01.podstawekkopia8();
	this.c6.setTransform(360.3,350,0.748,0.748,0,0,0,63.1,18.2);

	this.c7 = new window.lpcma013s01.podstawekkopia9();
	this.c7.setTransform(260,350,0.748,0.748,0,0,0,63.1,18.2);

	this.c1 = new window.lpcma013s01.podstawekkopia();
	this.c1.setTransform(59.6,350,0.748,0.748,0,0,0,63.1,18.2);

	this.c8 = new window.lpcma013s01.podstawek();
	this.c8.setTransform(460.5,300,0.748,0.748,0,0,0,63.2,18.2);

	this.c0 = new window.lpcma013s01.podstawekkopia5();
	this.c0.setTransform(159.8,300,0.748,0.748,0,0,0,63.1,18.2);

	this.c4 = new window.lpcma013s01.podstawekkopia7();
	this.c4.setTransform(360.3,300,0.748,0.748,0,0,0,63.1,18.2);

	this.c3 = new window.lpcma013s01.podstawekkopia6();
	this.c3.setTransform(260,300,0.748,0.748,0,0,0,63.1,18.2);

	this.c2 = new window.lpcma013s01.podstawekkopia3();
	this.c2.setTransform(59.6,300,0.748,0.748,0,0,0,63.1,18.2);

	// bg1
	this.instance = new window.lpcma013s01.Symbol8kopia();
	this.instance.setTransform(354.6,150.9,2.174,2.173,0,0,0,138.1,63.2);

	this.shape = new Shape();
	this.shape.graphics.f("#00b69b").p("EA4QADSMhwfAAAIAAenMBwfAAAIAA+n").f();
	this.shape.setTransform(360,233.1);

	// bg2
	this.shape_1 = new Shape();
	this.shape_1.graphics.f("#6591b8").p("EA4QgT2MhwfAAAMAAAAntMBwfAAAMAAAgnt").f();
	this.shape_1.setTransform(360,127.1);

	this.addChild(this.shape_1,this.shape,this.instance,this.c2,this.c3,this.c4,this.c0,this.c8,this.c1,this.c7,this.c6,this.c5,this.c9,this.b0,this.b2,this.b3,this.b4,this.b6,this.b5,this.b1,this.drag,this.d2,this.d1,this.d5,this.d0,this.d3,this.d7,this.d4,this.d6,this.d9,this.d8,this.a0,this.a1,this.a2,this.a5,this.a3,this.a4,this.a6,this.blocker,this.notes,this.reset);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,-65.2,720,527.3);


// symbols:
(window.lpcma013s01.btn_reset = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(Tween.get(this).wait(0).call(this.frame_0).wait(2));

	// Layer 5
	this.shape = new Shape();
	this.shape.graphics.f("#ffffff").p("AANhAIBDDFIDDhlIhkgjQADgQgCgZQgDgagIgZQgTg2hBgrQhXg5hnAeQh6AjggCAQgWBXAUBGQASBDBPA+IBLh1Qg3g7gRg7QgOg2AVgpQAWgsA8gWQBVgfBBBJQAYAbAMAgQAKAegIAMIhjgp").f();
	this.shape.setTransform(14,36.9);

	this.timeline.addTween(Tween.get({}).to({state:[{t:this.shape}]}).to({state:[]},1).wait(1));

	// Layer 2
	this.shape_1 = new Shape();
	this.shape_1.graphics.f("#c0850c").p("AhtjbQh6AjggCAQgWBXAUBGQASBDBPA+IBLh1Qg3g7gRg7QgOg2AVgpQAWgsA8gWQBVgfBBBJQAYAbAMAgQAKAegIAMIhjgpIBDDFIDDhlIhkgjQADgQgDgZQgCgagIgZQgTg2hBgrQhXg5hnAe").f();
	this.shape_1.setTransform(15,39.9);

	this.shape_2 = new Shape();
	this.shape_2.graphics.f("#ffffff").p("ABwgXIhjgpIBDDFIDDhlIhkgjQADgQgDgZQgCgagIgZQgTg2hBgrQhXg5hnAeQh6AjggCAQgWBXAUBGQASBDBPA+IBLh1Qg3g7gRg7QgOg2AVgpQAWgsA8gWQBVgfBBBJQAYAbAMAgQAKAegIAM").f();
	this.shape_2.setTransform(15,39.9);

	this.timeline.addTween(Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},1).wait(1));

	// Layer 4
	this.shape_3 = new Shape();
	this.shape_3.graphics.f("#ffffff").p("AgJjcQgFAFAAAGIAAA8QAAAGAFAEQAEAFAFAAQAGAAAEgFQAFgEAAgGIAAg8QAAgGgFgFQgEgEgGAAQgFAAgEAE").p("AAAhoQgFAAgEAEQgFAFAAAGIAAA8QAAAGAFAEQAEAFAFAAQAGAAAEgFQAFgEAAgGIAAg8QAAgGgFgFQgEgEgGAA").p("AAKAUQgEgFgGAAQgFAAgEAFQgFAEAAAGIAAA8QAAAGAFAEQAEAFAFAAQAGAAAEgFQAFgEAAgGIAAg8QAAgGgFgE").p("AAKCMQgEgFgGAAQgFAAgEAFQgFAEAAAGIAAA8QAAAGAFAEQAEAFAFAAQAGAAAEgFQAFgEAAgGIAAg8QAAgGgFgE").f();
	this.shape_3.setTransform(54.5,40);

	this.timeline.addTween(Tween.get({}).to({state:[{t:this.shape_3}]}).wait(2));

	// Layer 1
	this.shape_4 = new Shape();
	this.shape_4.graphics.f("#ffb111").p("AH0jxIvnhsIBaK7IONAAIAApP").f();
	this.shape_4.setTransform(13,35);

	this.timeline.addTween(Tween.get({}).to({state:[{t:this.shape_4}]}).wait(2));

}).prototype = p = new MovieClip();
p.nominalBounds = new Rectangle(-36.9,0,100,70);


(window.lpcma013s01.notesss = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{f0:1,f1:20,f2:50,f3:80,f4:110,f5:140,f6:170,f7:200},true);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}
	this.frame_49 = function() {
		this.stop();
	}
	this.frame_79 = function() {
		this.stop();
	}
	this.frame_109 = function() {
		this.stop();
	}
	this.frame_139 = function() {
		this.stop(); 
	}
	this.frame_169 = function() {
		this.stop(); 
	}
	this.frame_199 = function() {
		this.stop(); 
	}
	this.frame_409 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(Tween.get(this).wait(0).call(this.frame_0).wait(19).call(this.frame_19).wait(30).call(this.frame_49).wait(30).call(this.frame_79).wait(30).call(this.frame_109).wait(30).call(this.frame_139).wait(30).call(this.frame_169).wait(30).call(this.frame_199).wait(210).call(this.frame_409).wait(1));

	// kulki
	this.instance = new window.lpcma013s01.numberball("synched",0);
	this.instance.setTransform(221,133.5,1,1,0,0,0,9,9);

	this.instance_1 = new window.lpcma013s01.numberball("synched",0);
	this.instance_1.setTransform(221,133.5,1,1,0,0,0,9,9);

	this.instance_2 = new window.lpcma013s01.numberball("synched",0);
	this.instance_2.setTransform(221,133.5,1,1,0,0,0,9,9);

	this.instance_3 = new window.lpcma013s01.numberball("synched",0);
	this.instance_3.setTransform(221,133.5,1,1,0,0,0,9,9);

	this.instance_4 = new window.lpcma013s01.numberball("synched",0);
	this.instance_4.setTransform(221,133.5,1,1,0,0,0,9,9);

	this.instance_5 = new window.lpcma013s01.numberball("synched",0);
	this.instance_5.setTransform(221,133.5,1,1,0,0,0,9,9);

	this.instance_6 = new window.lpcma013s01.numberball("synched",0);
	this.instance_6.setTransform(221,133.5,1,1,0,0,0,9,9);

	this.timeline.addTween(Tween.get({}).to({state:[]}).to({state:[{t:this.instance,p:{x:221,y:133.5}}]},39).to({state:[{t:this.instance_1,p:{x:221,y:133.5}},{t:this.instance,p:{x:243,y:133.5}}]},30).to({state:[{t:this.instance_2,p:{x:221}},{t:this.instance_1,p:{x:243,y:133.5}},{t:this.instance,p:{x:265,y:133.5}}]},30).to({state:[{t:this.instance_3,p:{x:221}},{t:this.instance_2,p:{x:243}},{t:this.instance_1,p:{x:265,y:133.5}},{t:this.instance,p:{x:287,y:133.5}}]},30).to({state:[{t:this.instance_4,p:{x:221}},{t:this.instance_3,p:{x:243}},{t:this.instance_2,p:{x:265}},{t:this.instance_1,p:{x:287,y:133.5}},{t:this.instance,p:{x:309,y:133.5}}]},30).to({state:[{t:this.instance_5,p:{x:221}},{t:this.instance_4,p:{x:243}},{t:this.instance_3,p:{x:265}},{t:this.instance_2,p:{x:287}},{t:this.instance_1,p:{x:309,y:133.5}},{t:this.instance,p:{x:221,y:155.5}}]},30).to({state:[{t:this.instance_6},{t:this.instance_5,p:{x:243}},{t:this.instance_4,p:{x:265}},{t:this.instance_3,p:{x:287}},{t:this.instance_2,p:{x:309}},{t:this.instance_1,p:{x:221,y:155.5}},{t:this.instance,p:{x:243,y:155.5}}]},30).to({state:[]},11).to({state:[]},75).wait(105));

	// 7
	this.instance_7 = new window.lpcma013s01.nr7("single",0);
	this.instance_7.setTransform(258.2,40,0.682,0.683,0,0,0,26.6,47.5);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(Tween.get(this.instance_7).wait(209).to({_off:false},0).to({alpha:1},20).to({scaleX:1,scaleY:1,x:-8.9,y:-21.8,mode:"synched",loop:false},20).wait(161));

	// 6
	this.instance_8 = new window.lpcma013s01.number6("synched",0);
	this.instance_8.setTransform(266.6,55,1,1,0,0,0,26.6,47.5);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(Tween.get(this.instance_8).wait(179).to({_off:false},0).to({alpha:1},20).to({alpha:0},20).to({_off:true},1).wait(190));

	// 5
	this.instance_9 = new window.lpcma013s01.number5("synched",0);
	this.instance_9.setTransform(266.6,55,1,1,0,0,0,26.6,47.5);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(Tween.get(this.instance_9).wait(149).to({_off:false},0).to({alpha:1},20).to({alpha:0},20).to({_off:true},1).wait(220));

	// 4
	this.instance_10 = new window.lpcma013s01._4("synched",0);
	this.instance_10.setTransform(261.2,45,0.683,0.683,0,0,0,26.6,47.5);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(Tween.get(this.instance_10).wait(119).to({_off:false},0).to({alpha:1},20).to({alpha:0},20).to({_off:true},1).wait(250));

	// 3
	this.instance_11 = new window.lpcma013s01.number3("synched",0);
	this.instance_11.setTransform(266.6,55,1,1,0,0,0,26.6,47.5);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(Tween.get(this.instance_11).wait(89).to({_off:false},0).to({alpha:1},20).to({alpha:0},20).to({_off:true},1).wait(280));

	// 2
	this.instance_12 = new window.lpcma013s01.number2("synched",0);
	this.instance_12.setTransform(267.2,55,1,1,0,0,0,27.2,47.5);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(Tween.get(this.instance_12).wait(59).to({_off:false},0).to({alpha:1},20).to({alpha:0},20).to({_off:true},1).wait(310));

	// 1
	this.instance_13 = new window.lpcma013s01.number1("synched",0);
	this.instance_13.setTransform(269.4,55,1,1,0,0,0,10.4,47.5);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(Tween.get(this.instance_13).wait(29).to({_off:false},0).to({alpha:1},20).to({alpha:0},20).to({_off:true},1).wait(340));

	// 0
	this.instance_14 = new window.lpcma013s01.number0("synched",0);
	this.instance_14.setTransform(267.8,55,1,1,0,0,0,31.8,47.5);
	this.instance_14.alpha = 0;

	this.timeline.addTween(Tween.get(this.instance_14).to({alpha:1},19).to({alpha:0},20).to({_off:true},1).wait(370));

	// Layer 9
	this.instance_15 = new window.lpcma013s01.paper();
	this.instance_15.setTransform(170,-62.4);

	this.timeline.addTween(Tween.get(this.instance_15).wait(229).to({scaleX:1.5,scaleY:1.5,x:-139.2,y:-192.8},20).wait(161));

}).prototype = p = new MovieClip();
p.nominalBounds = new Rectangle(161,-62.4,215.6,322);


(window.lpcma013s01.numberball = function() {
	this.initialize();

	// Layer 1
	this.shape = new Shape();
	this.shape.graphics.f("rgba(255,255,255,0.698)").p("AAXgVIADgFQAAgBAAgBQgBgCgBgCQgQgEgNALQgOALgEAQQgEAQAFAQQAKgaAUgRQAHgIAIgE").f();
	this.shape.setTransform(4.4,6);

	this.shape_1 = new Shape();
	this.shape_1.graphics.f("#00cffa").p("AA7gqQgMgOgTgEQgTgDgiAOIgKAEQgOAMgIATQAAABgBABQgBAFgBAEQgBABAAABQgGAaAJAVQAAABAAAAQAFALAJACQAKAEAWgKQAmgQAXghQAYghgOgO").f();
	this.shape_1.setTransform(6.4,7.2);

	this.shape_2 = new Shape();
	this.shape_2.graphics.f("#0099cc").p("AAihSQgigOgiAOQgPAHgLAJQgPAOgIATQAAABgBACQgBAEgBAEQgBACAAAAQgGAbAJAVQAAAAAAAAQABAEACAEQAOAiAiANQAiAOAjgOQAigOANgjQAOgigOgiQgPgjgigN").f();
	this.shape_2.setTransform(9,9);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,0,18,18);


(window.lpcma013s01.nr7 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{},true);

	// Layer 7
	this.instance = new window.lpcma013s01.Symbol47("synched",9);
	this.instance.setTransform(41.9,148.9,1,1,0,0,0,26.9,18.9);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(Tween.get(this.instance).wait(140).to({_off:false},0).to({alpha:1},11).wait(4));

	// arrow1
	this.instance_1 = new window.lpcma013s01.Symbol46("synched",15);
	this.instance_1.setTransform(63.8,46.1,1,1,-26.3,0,0,6.5,6.6);
	this.instance_1._off = true;

	this.timeline.addTween(Tween.get(this.instance_1).wait(70).to({_off:false},0).to({regX:6.6,x:61.4,y:53.1},14).to({regX:6.5,x:63.8,y:46.1},12).wait(10).to({alpha:0},6).to({_off:true},1).wait(42));

	// arrow
	this.instance_2 = new window.lpcma013s01.Symbol46("synched",15);
	this.instance_2.setTransform(33.5,-8.9,1,1,-131.4,0,0,6.6,6.6);
	this.instance_2._off = true;

	this.timeline.addTween(Tween.get(this.instance_2).wait(29).to({_off:false},0).to({x:53.5},10).to({x:33.5},12).wait(10).to({alpha:0},10).to({_off:true},1).wait(40).to({x:18.2,y:54.5,alpha:1,_off:false},0).to({x:23.2},11).to({x:18.2},9).wait(3).to({alpha:0},6).wait(14));

	// Layer 6
	this.shape = new Shape();
	this.shape.graphics.f().s("#058cd2").ss(11,1,1,3).p("AAKgCIgTAF");
	this.shape.setTransform(16.4,69.8);

	this.shape_1 = new Shape();
	this.shape_1.graphics.f().s("#058cd2").ss(11,1,1,3).p("AgSADIAmgF");
	this.shape_1.setTransform(17.5,69.8);

	this.shape_2 = new Shape();
	this.shape_2.graphics.f().s("#058cd2").ss(11,1,1,3).p("AgcACIA6gD");
	this.shape_2.setTransform(18.5,69.8);

	this.shape_3 = new Shape();
	this.shape_3.graphics.f().s("#058cd2").ss(11,1,1,3).p("AgnACIBOgD");
	this.shape_3.setTransform(19.6,69.8);

	this.shape_4 = new Shape();
	this.shape_4.graphics.f().s("#058cd2").ss(11,1,1,3).p("AgwACIBhgC");
	this.shape_4.setTransform(20.7,69.8);

	this.shape_5 = new Shape();
	this.shape_5.graphics.f().s("#058cd2").ss(11,1,1,3).p("Ag6ACIB1gC");
	this.shape_5.setTransform(21.7,69.8);

	this.shape_6 = new Shape();
	this.shape_6.graphics.f().s("#058cd2").ss(11,1,1,3).p("AhEABICJgB");
	this.shape_6.setTransform(22.8,69.8);

	this.shape_7 = new Shape();
	this.shape_7.graphics.f().s("#058cd2").ss(11,1,1,3).p("AhOABICcgB");
	this.shape_7.setTransform(23.9,69.8);

	this.shape_8 = new Shape();
	this.shape_8.graphics.f().s("#058cd2").ss(11,1,1,3).p("AhXABICwgB");
	this.shape_8.setTransform(24.9,69.8);

	this.shape_9 = new Shape();
	this.shape_9.graphics.f().s("#058cd2").ss(11,1,1,3).p("AhhAAIDDAA");
	this.shape_9.setTransform(26,69.8);

	this.shape_10 = new Shape();
	this.shape_10.graphics.f().s("#058cd2").ss(11,1,1,3).p("AhrAAIDXAA");
	this.shape_10.setTransform(27.1,69.8);

	this.shape_11 = new Shape();
	this.shape_11.graphics.f().s("#058cd2").ss(11,1,1,3).p("Ah1AAIDrAA");
	this.shape_11.setTransform(28.1,69.8);

	this.shape_12 = new Shape();
	this.shape_12.graphics.f().s("#058cd2").ss(11,1,1,3).p("Ah+AAID+AA");
	this.shape_12.setTransform(29.2,69.8);

	this.shape_13 = new Shape();
	this.shape_13.graphics.f().s("#058cd2").ss(11,1,1,3).p("AiIAAIERAA");
	this.shape_13.setTransform(30.3,69.8);

	this.shape_14 = new Shape();
	this.shape_14.graphics.f().s("#058cd2").ss(11,1,1,3).p("AiSAAIElAA");
	this.shape_14.setTransform(31.3,69.8);

	this.shape_15 = new Shape();
	this.shape_15.graphics.f().s("#058cd2").ss(11,1,1,3).p("AicAAIE5AB");
	this.shape_15.setTransform(32.4,69.8);

	this.shape_16 = new Shape();
	this.shape_16.graphics.f().s("#058cd2").ss(11,1,1,3).p("AimAAIFNAB");
	this.shape_16.setTransform(33.5,69.8);

	this.shape_17 = new Shape();
	this.shape_17.graphics.f().s("#058cd2").ss(11,1,1,3).p("AivAAIFgAB");
	this.shape_17.setTransform(34.5,69.8);

	this.shape_18 = new Shape();
	this.shape_18.graphics.f().s("#058cd2").ss(11,1,1,3).p("Ai5AAIF0AC");
	this.shape_18.setTransform(35.6,69.8);

	this.shape_19 = new Shape();
	this.shape_19.graphics.f().s("#058cd2").ss(11,1,1,3).p("AjDAAIGHAC");
	this.shape_19.setTransform(36.7,69.8);

	this.shape_20 = new Shape();
	this.shape_20.graphics.f().s("#058cd2").ss(11,1,1,3).p("AjNgBIGaAD");
	this.shape_20.setTransform(37.7,69.8);

	this.shape_21 = new Shape();
	this.shape_21.graphics.f().s("#058cd2").ss(11,1,1,3).p("AjWgBIGtAD");
	this.shape_21.setTransform(38.8,69.8);

	this.shape_22 = new Shape();
	this.shape_22.graphics.f().s("#058cd2").ss(11,1,1,3).p("AjggCIHCAF");
	this.shape_22.setTransform(39.8,69.8);

	this.shape_23 = new Shape();
	this.shape_23.graphics.f().s("#058cd2").ss(11,1,1,3).p("AjqgCIHVAF");
	this.shape_23.setTransform(40.9,69.8);

	this.timeline.addTween(Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},112).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).wait(20));

	// Warstwa 2
	this.shape_24 = new Shape();
	this.shape_24.graphics.f().s("#058cd2").ss(11,1,1,3).p("AAeg6Ig7B2");
	this.shape_24.setTransform(61.4,10.9);

	this.shape_25 = new Shape();
	this.shape_25.graphics.f().s("#058cd2").ss(11,1,1,3).p("AgkBMQAihKAmhN");
	this.shape_25.setTransform(60.7,12.5);

	this.shape_26 = new Shape();
	this.shape_26.graphics.f().s("#058cd2").ss(11,1,1,3).p("AgqBdQAmhaAvhe");
	this.shape_26.setTransform(60.1,14.1);

	this.shape_27 = new Shape();
	this.shape_27.graphics.f().s("#058cd2").ss(11,1,1,3).p("AgwBtQAohpA5hw");
	this.shape_27.setTransform(59.4,15.8);

	this.shape_28 = new Shape();
	this.shape_28.graphics.f().s("#058cd2").ss(11,1,1,3).p("Ag3B+QAth4BCiC");
	this.shape_28.setTransform(58.7,17.4);

	this.shape_29 = new Shape();
	this.shape_29.graphics.f().s("#058cd2").ss(11,1,1,3).p("Ag+COQAyiIBLiT");
	this.shape_29.setTransform(58.1,19.1);

	this.shape_30 = new Shape();
	this.shape_30.graphics.f().s("#058cd2").ss(11,1,1,3).p("AhECeQA1iWBUil");
	this.shape_30.setTransform(57.4,20.7);

	this.shape_31 = new Shape();
	this.shape_31.graphics.f().s("#058cd2").ss(11,1,1,3).p("AhHCqQAzigBciz");
	this.shape_31.setTransform(57.1,21.9);

	this.shape_32 = new Shape();
	this.shape_32.graphics.f().s("#058cd2").ss(11,1,1,3).p("AhKC2QAzirBijA");
	this.shape_32.setTransform(56.8,23.1);

	this.shape_33 = new Shape();
	this.shape_33.graphics.f().s("#058cd2").ss(11,1,1,3).p("AhNDCQAxi1BqjO");
	this.shape_33.setTransform(56.5,24.3);

	this.shape_34 = new Shape();
	this.shape_34.graphics.f().s("#058cd2").ss(11,1,1,3).p("ABRjMQhxDagwDA");
	this.shape_34.setTransform(56.2,25.5);

	this.shape_35 = new Shape();
	this.shape_35.graphics.f().s("#058cd2").ss(11,1,1,3).p("AhWDgQA1jXB4jo");
	this.shape_35.setTransform(55.7,27.3);

	this.shape_36 = new Shape();
	this.shape_36.graphics.f().s("#058cd2").ss(11,1,1,3).p("AhcDyQA8juB9j1");
	this.shape_36.setTransform(55.1,29.1);

	this.shape_37 = new Shape();
	this.shape_37.graphics.f().s("#058cd2").ss(11,1,1,3).p("AhiEEQBAkDCEkD");
	this.shape_37.setTransform(54.5,30.8);

	this.shape_38 = new Shape();
	this.shape_38.graphics.f().s("#058cd2").ss(11,1,1,3).p("AhnEWQBFkaCKkQ");
	this.shape_38.setTransform(53.9,32.6);

	this.shape_39 = new Shape();
	this.shape_39.graphics.f().s("#058cd2").ss(11,1,1,3).p("AhrEoQBGkwCRke");
	this.shape_39.setTransform(53.6,34.4);

	this.shape_40 = new Shape();
	this.shape_40.graphics.f().s("#058cd2").ss(11,1,1,3).p("AhvE5QBHlGCXkr");
	this.shape_40.setTransform(53.2,36.2);

	this.shape_41 = new Shape();
	this.shape_41.graphics.f().s("#058cd2").ss(11,1,1,3).p("AhyFLQBHldCek4");
	this.shape_41.setTransform(52.9,38);

	this.shape_42 = new Shape();
	this.shape_42.graphics.f().s("#058cd2").ss(11,1,1,3).p("Ah1FWQBJlqChlB");
	this.shape_42.setTransform(52.6,39.1);

	this.shape_43 = new Shape();
	this.shape_43.graphics.f().s("#058cd2").ss(11,1,1,3).p("Ah3FhQBJl3CmlL");
	this.shape_43.setTransform(52.4,40.3);

	this.shape_44 = new Shape();
	this.shape_44.graphics.f().s("#058cd2").ss(11,1,1,3).p("Ah5FtQBJmFCqlU");
	this.shape_44.setTransform(52.2,41.4);

	this.shape_45 = new Shape();
	this.shape_45.graphics.f().s("#058cd2").ss(11,1,1,3).p("Ah7F5QBKmUCtlc");
	this.shape_45.setTransform(51.9,42.5);

	this.shape_46 = new Shape();
	this.shape_46.graphics.f().s("#058cd2").ss(11,1,1,3).p("Ah9GEQBJmhCzlm");
	this.shape_46.setTransform(51.7,43.7);

	this.shape_47 = new Shape();
	this.shape_47.graphics.f().s("#058cd2").ss(11,1,1,3).p("AiAGPQBLmvC2lu");
	this.shape_47.setTransform(51.4,44.8);

	this.shape_48 = new Shape();
	this.shape_48.graphics.f().s("#058cd2").ss(11,1,1,3).p("AiDGdQBMnAC7l5");
	this.shape_48.setTransform(51.2,46.2);

	this.shape_49 = new Shape();
	this.shape_49.graphics.f().s("#058cd2").ss(11,1,1,3).p("AiFGrQBKnRDBmD");
	this.shape_49.setTransform(51,47.5);

	this.shape_50 = new Shape();
	this.shape_50.graphics.f().s("#058cd2").ss(11,1,1,3).p("AiIG5QBKniDGmO");
	this.shape_50.setTransform(50.7,48.9);

	this.shape_51 = new Shape();
	this.shape_51.graphics.f().s("#058cd2").ss(11,1,1,3).p("AiKHGQBKnyDLmZ");
	this.shape_51.setTransform(50.5,50.3);

	this.shape_52 = new Shape();
	this.shape_52.graphics.f().s("#058cd2").ss(11,1,1,3).p("ACNnTQjPGjhKIE");
	this.shape_52.setTransform(50.2,51.7);

	this.shape_53 = new Shape();
	this.shape_53.graphics.f().s("#058cd2").ss(11,1,1,3).p("AiOHfQBOobDPmj");
	this.shape_53.setTransform(50,52.9);

	this.shape_54 = new Shape();
	this.shape_54.graphics.f().s("#058cd2").ss(11,1,1,3).p("AiQHrQBSoyDPmj");
	this.shape_54.setTransform(49.8,54);

	this.shape_55 = new Shape();
	this.shape_55.graphics.f().s("#058cd2").ss(11,1,1,3).p("AiTH3QBXpKDPmj");
	this.shape_55.setTransform(49.6,55.2);

	this.shape_56 = new Shape();
	this.shape_56.graphics.f().s("#058cd2").ss(11,1,1,3).p("AiUIDQBapiDPmj");
	this.shape_56.setTransform(49.4,56.4);

	this.shape_57 = new Shape();
	this.shape_57.graphics.f().s("#058cd2").ss(11,1,1,3).p("AiXIOQBfp4DQmj");
	this.shape_57.setTransform(49.2,57.5);

	this.shape_58 = new Shape();
	this.shape_58.graphics.f().s("#058cd2").ss(11,1,1,3).p("ACaoZQjQGjhjKQ");
	this.shape_58.setTransform(49,58.7);

	this.shape_59 = new Shape();
	this.shape_59.graphics.f().s("#058cd2").ss(11,1,1,3).p("AibIsQBiq0DVmj");
	this.shape_59.setTransform(48.8,60.5);

	this.shape_60 = new Shape();
	this.shape_60.graphics.f().s("#058cd2").ss(11,1,1,3).p("AidI+QBjrZDYmi");
	this.shape_60.setTransform(48.6,62.3);

	this.shape_61 = new Shape();
	this.shape_61.graphics.f().s("#058cd2").ss(11,1,1,3).p("AifJQQBjr9Dcmi");
	this.shape_61.setTransform(48.3,64.1);

	this.shape_62 = new Shape();
	this.shape_62.graphics.f().s("#058cd2").ss(11,1,1,3).p("AihJiQBisiDhmh");
	this.shape_62.setTransform(48.1,65.9);

	this.shape_63 = new Shape();
	this.shape_63.graphics.f().s("#058cd2").ss(11,1,1,3).p("AikJ0QBjtHDlmg");
	this.shape_63.setTransform(47.9,67.7);

	this.shape_64 = new Shape();
	this.shape_64.graphics.f().s("#058cd2").ss(11,1,1,3).p("AimKGQBjtsDpmf");
	this.shape_64.setTransform(47.7,69.5);

	this.shape_65 = new Shape();
	this.shape_65.graphics.f().s("#058cd2").ss(11,1,1,3).p("ACpqXQjuGfhjOQ");
	this.shape_65.setTransform(47.5,71.3);

	this.timeline.addTween(Tween.get({}).to({state:[]}).to({state:[{t:this.shape_24}]},71).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).wait(43));

	// Warstwa 3
	this.shape_66 = new Shape();
	this.shape_66.graphics.f().s("#058cd2").ss(11,1,1,3).p("AgZgFIAzAL");
	this.shape_66.setTransform(18.5,6.5);

	this.shape_67 = new Shape();
	this.shape_67.graphics.f().s("#058cd2").ss(11,1,1,3).p("AgfgIIBAAR");
	this.shape_67.setTransform(19.2,6.7);

	this.shape_68 = new Shape();
	this.shape_68.graphics.f().s("#058cd2").ss(11,1,1,3).p("AgngLIBOAY");
	this.shape_68.setTransform(19.9,6.9);

	this.shape_69 = new Shape();
	this.shape_69.graphics.f().s("#058cd2").ss(11,1,1,3).p("AgtgOIBbAd");
	this.shape_69.setTransform(20.5,7.1);

	this.shape_70 = new Shape();
	this.shape_70.graphics.f().s("#058cd2").ss(11,1,1,3).p("AgzgRIBoAj");
	this.shape_70.setTransform(21.2,7.3);

	this.shape_71 = new Shape();
	this.shape_71.graphics.f().s("#058cd2").ss(11,1,1,3).p("Ag6gVIB1Aq");
	this.shape_71.setTransform(21.8,7.5);

	this.shape_72 = new Shape();
	this.shape_72.graphics.f().s("#058cd2").ss(11,1,1,3).p("AhBgYICDAw");
	this.shape_72.setTransform(22.5,7.7);

	this.shape_73 = new Shape();
	this.shape_73.graphics.f().s("#058cd2").ss(11,1,1,3).p("AhHgbICQA3");
	this.shape_73.setTransform(23.2,7.9);

	this.shape_74 = new Shape();
	this.shape_74.graphics.f().s("#058cd2").ss(11,1,1,3).p("AhNgdQBNAhBOAZ");
	this.shape_74.setTransform(23.7,8);

	this.shape_75 = new Shape();
	this.shape_75.graphics.f().s("#058cd2").ss(11,1,1,3).p("AhSgeQBSAmBTAY");
	this.shape_75.setTransform(24.2,8.1);

	this.shape_76 = new Shape();
	this.shape_76.graphics.f().s("#058cd2").ss(11,1,1,3).p("AhYggQBYArBZAW");
	this.shape_76.setTransform(24.8,8.3);

	this.shape_77 = new Shape();
	this.shape_77.graphics.f().s("#058cd2").ss(11,1,1,3).p("AhdgiQBbAxBhAU");
	this.shape_77.setTransform(25.3,8.5);

	this.shape_78 = new Shape();
	this.shape_78.graphics.f().s("#058cd2").ss(11,1,1,3).p("AhjgkQBgA3BmAS");
	this.shape_78.setTransform(25.9,8.6);

	this.shape_79 = new Shape();
	this.shape_79.graphics.f().s("#058cd2").ss(11,1,1,3).p("AhogmQBlA9BsAQ");
	this.shape_79.setTransform(26.4,8.7);

	this.shape_80 = new Shape();
	this.shape_80.graphics.f().s("#058cd2").ss(11,1,1,3).p("AhtgmQB0BDBoAK");
	this.shape_80.setTransform(27,8.8);

	this.shape_81 = new Shape();
	this.shape_81.graphics.f().s("#058cd2").ss(11,1,1,3).p("Ah0gnQCGBJBjAF");
	this.shape_81.setTransform(27.6,8.8);

	this.shape_82 = new Shape();
	this.shape_82.graphics.f().s("#058cd2").ss(11,1,1,3).p("Ah5gnQCVBQBfgB");
	this.shape_82.setTransform(28.1,8.8);

	this.shape_83 = new Shape();
	this.shape_83.graphics.f().s("#058cd2").ss(11,1,1,3).p("Ah+goQCmBWBYgG");
	this.shape_83.setTransform(28.7,8.9);

	this.shape_84 = new Shape();
	this.shape_84.graphics.f().s("#058cd2").ss(11,1,1,3).p("AiFgoQC3BcBUgM");
	this.shape_84.setTransform(29.3,9);

	this.shape_85 = new Shape();
	this.shape_85.graphics.f().s("#058cd2").ss(11,1,1,3).p("AiKgpQDHBiBPgR");
	this.shape_85.setTransform(29.8,9.1);

	this.shape_86 = new Shape();
	this.shape_86.graphics.f().s("#058cd2").ss(11,1,1,3).p("AiQgqQDYBoBJgX");
	this.shape_86.setTransform(30.4,9.2);

	this.shape_87 = new Shape();
	this.shape_87.graphics.f().s("#058cd2").ss(11,1,1,3).p("AiagpQBcAsBFAWQBjAcAwgT");
	this.shape_87.setTransform(31.4,9.1);

	this.shape_88 = new Shape();
	this.shape_88.graphics.f().s("#058cd2").ss(11,1,1,3).p("AijgoQBhAwBKAWQBoAXA0gZ");
	this.shape_88.setTransform(32.3,8.9);

	this.shape_89 = new Shape();
	this.shape_89.graphics.f().s("#058cd2").ss(11,1,1,3).p("AisgoQBlAyBQAYQBsASA4ge");
	this.shape_89.setTransform(33.2,8.9);

	this.shape_90 = new Shape();
	this.shape_90.graphics.f().s("#058cd2").ss(11,1,1,3).p("Ai2gnQBrA0BVAYQBwANA9gi");
	this.shape_90.setTransform(34.2,8.9);

	this.shape_91 = new Shape();
	this.shape_91.graphics.f().s("#058cd2").ss(11,1,1,3).p("Ai/goQBwA3BaAYQB1AJBAgo");
	this.shape_91.setTransform(35.1,8.9);

	this.shape_92 = new Shape();
	this.shape_92.graphics.f().s("#058cd2").ss(11,1,1,3).p("AjIgpQB0A6BfAYQB6AEBFgt");
	this.shape_92.setTransform(36,9.1);

	this.shape_93 = new Shape();
	this.shape_93.graphics.f().s("#058cd2").ss(11,1,1,3).p("AjOgpQB4A9BmAWQB7ABBFgv");
	this.shape_93.setTransform(36.6,9);

	this.shape_94 = new Shape();
	this.shape_94.graphics.f().s("#058cd2").ss(11,1,1,3).p("AjUgpQB8BABtATQB7gDBFgx");
	this.shape_94.setTransform(37.2,9);

	this.shape_95 = new Shape();
	this.shape_95.graphics.f().s("#058cd2").ss(11,1,1,3).p("AjagpQCBBDBzAQQB9gFBEg1");
	this.shape_95.setTransform(37.8,9);

	this.shape_96 = new Shape();
	this.shape_96.graphics.f().s("#058cd2").ss(11,1,1,3).p("AAfAqQB+gIBEg4").p("AAfAqQh5gOiGhF");
	this.shape_96.setTransform(38.4,9);

	this.shape_97 = new Shape();
	this.shape_97.graphics.f().s("#058cd2").ss(11,1,1,3).p("AAkAqQB/gLBEg8").p("AAkAqQiAgLiKhI");
	this.shape_97.setTransform(39,9);

	this.shape_98 = new Shape();
	this.shape_98.graphics.f().s("#058cd2").ss(11,1,1,3).p("AApAqQB/gOBFg+").p("AApAqQiGgIiPhK");
	this.shape_98.setTransform(39.6,9);

	this.shape_99 = new Shape();
	this.shape_99.graphics.f().s("#058cd2").ss(11,1,1,3).p("AAtAqQCBgRBFhB").p("AAtAqQiMgGiThM");
	this.shape_99.setTransform(40.2,9);

	this.timeline.addTween(Tween.get({}).to({state:[]}).to({state:[{t:this.shape_66}]},35).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).wait(87));

	// Layer 4
	this.shape_100 = new Shape();
	this.shape_100.graphics.f().s("#058cd2").ss(11,1,1,3).p("AgJAOQAJgOAJgN");
	this.shape_100.setTransform(6.2,17);

	this.shape_101 = new Shape();
	this.shape_101.graphics.f().s("#058cd2").ss(11,1,1,3).p("AgPAXQAKgPAHgLQAHgLAIgJ");
	this.shape_101.setTransform(6.9,16.1);

	this.shape_102 = new Shape();
	this.shape_102.graphics.f().s("#058cd2").ss(11,1,1,3).p("AgWAhQAOgVAKgRQAKgPAMgM");
	this.shape_102.setTransform(7.6,15.2);

	this.shape_103 = new Shape();
	this.shape_103.graphics.f().s("#058cd2").ss(11,1,1,3).p("AgdAqQASgcANgUQAOgVAOgO");
	this.shape_103.setTransform(8.3,14.3);

	this.shape_104 = new Shape();
	this.shape_104.graphics.f().s("#058cd2").ss(11,1,1,3).p("AgkAzQAXgiAPgZQARgZASgR");
	this.shape_104.setTransform(9,13.3);

	this.shape_105 = new Shape();
	this.shape_105.graphics.f().s("#058cd2").ss(11,1,1,3).p("AgrA8QAbgpATgdQATgeAWgU");
	this.shape_105.setTransform(9.6,12.4);

	this.timeline.addTween(Tween.get({}).to({state:[]}).to({state:[{t:this.shape_100}]},29).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).wait(121));

	// Layer 1
	this.instance_3 = new window.lpcma013s01.Symbol13("synched",0);
	this.instance_3.setTransform(35.8,69.5,1,1,0,0,0,35.8,69.5);

	this.timeline.addTween(Tween.get(this.instance_3).to({alpha:0.19},19).wait(136));

}).prototype = p = new MovieClip();
p.nominalBounds = new Rectangle(-0.4,-0.6,70.5,140.2);


(window.lpcma013s01.Symbol47 = function() {
	this.initialize();

	// Layer 1
	this.text = new Text("siedem", "bold 45px Trebuchet MS", "#000000");
	this.text.textAlign = "center";
	this.text.textBaseline = "top";
	this.text.lineHeight = 45;
	this.text.setTransform(22.9,23);

	this.addChild(this.text);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(-53.8,23,153.5,56.3);


(window.lpcma013s01.Symbol46 = function() {
	this.initialize();

	// Layer 1
	this.shape = new Shape();
	this.shape.graphics.f("#000000").p("AgfgZIgdBeIBZglIgegeIgegb").f().s("#000000").ss(1,1,1,3).p("AgBACIA+hG");
	this.shape.setTransform(6.6,6.9);

	this.addChild(this.shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0.4,0,12.3,13.7);


(window.lpcma013s01.Symbol13 = function() {
	this.initialize();

	// Layer 1
	this.shape = new Shape();
	this.shape.graphics.f("#000000").p("AFNqtQgOgNgTgCQgUAAgQALQioByiJhGQiFhFgzAgIgBAAQgmAMhPB+QgMAVAFAWQAFAYAUAMQAUAMAXgFQAXgFANgUQAyhRARgOQAUAABBAiQB8BFCPgrQhXDJg/EJIjEAAQgYAAgQARQgRARAAAXQAAAXARARQAQAQAYAAICrAAQg4EIgiE5QgDAXAQASQAOATAYADQAWADATgPQAQgQAEgXQAilAA7kNICvAAQAXAAARgQQARgRAAgXQAAgXgRgRQgRgRgXAAIiVAAQBUlSB7jhQAJgSgDgUQgEgTgPgN").f();
	this.shape.setTransform(34.8,69.4);

	this.addChild(this.shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(-0.4,-0.6,70.5,140.2);


(window.lpcma013s01.number6 = function() {
	this.initialize();

	// Layer 1
	this.shape = new Shape();
	this.shape.graphics.f("#000000").p("ACCmuIgBAAQgzgwhAAAQhggChABpQhPB+AAEbQAAEWBXBmQA1BABYABQBMAAA6gxQBYhIAAipQAAiqhHhIQg2g5hWAAQhcAAg8AyQgEACgCADQAKi6A3hdQAng/A2gDQAiABAbAZIABABQAYAYASAmQAGAOAQAGQAPAGAOgHQAPgGAGgPQAFgQgGgPQgYg0gjgi").p("ABhAAQAzA6AACDQAAB+g+A4QgkAegvAAQgyAAgfglQg5hJgJi0QABgFABgGQAKhBArgjQApghA+AAQAzAAAhAhIgBAA").f();
	this.shape.setTransform(27.8,47.9);

	this.addChild(this.shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(5.2,0,45.1,95.7);


(window.lpcma013s01.number5 = function() {
	this.initialize();

	// Layer 1
	this.shape = new Shape();
	this.shape.graphics.f("#000000").p("ACVhDQg5g+hTAAQhMAAguAeIABAAQgKAFgIAGIAAkWQA8AbBFgBQBjgBBng8QAOgJAEgPQAEgQgJgOQgIgOgPgEQgQgEgNAJQhUAwhRACQhPABg/gxQgMgJgPABQgPABgKAMQgLALAAAPIAAHjQAAAOAKAMQAKALAOACQAPACAMgIQALgJAFgNQAShCApgaQAggTAxAAQAxAAAhAmQAzA4AAB7QAAB+g0BAIgBABQgmAqg1AAQg3AAgpgkQgrgnAAg6QAAgQgLgLQgMgMgQAAQgQAAgLAMQgMALAAAQQAABeBFA9IAAAAQA/A4BVAAQBYABA+hHQBIhQAAihQAAighIhIIABAA").f();
	this.shape.setTransform(29.8,47.6);

	this.addChild(this.shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(7.8,0,44,95.2);


(window.lpcma013s01._4 = function() {
	this.initialize();

	// Layer 1
	this.shape = new Shape();
	this.shape.graphics.f("#000000").p("AgHrJQgXALgHAXIk2N2QgHARAGAUQAGASAQAMQAPAKAUAAIGhAAIAAF6QAAAXARASQARARAZAAQAXAAASgRQARgSAAgXIAAl6IAyAAQAYAAASgQQARgSAAgZQAAgYgRgRQgSgRgYAAIgyAAIAAiHQAAgYgRgQQgSgRgXAAQgZAAgRARQgRAQAAAYIAACHIlPAAIEZsoQAJgXgLgVQgLgXgXgHQgWgJgVAL").f();
	this.shape.setTransform(27.8,60.7);

	this.addChild(this.shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(-7.3,-11.3,70.3,144);


(window.lpcma013s01.number3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new Shape();
	this.shape.graphics.f("#000000").p("ACHmiQgzg5hhAAQhXgBg6BZIAAAAQgmA6gRBcQgDAPAKAOQAJAOAPACQAQADAOgJQANgJADgQQAOhLAegvQAggyAvgCQA7AAAgAgQAeAjAABDQAABMgoAyQgxA6hlAQQgQADgJAMQgKANACAPQABAPALAJQALAKAPAAQB5AAA5A8IAAAAQAtAygEBTQgEBXgjA1QgkAzhFgBQhJAAgkgxQgZgmgFg9QgCgPgMgKQgMgLgQABQgQACgKAMQgLANACAQQAGBTAkA0QA5BUB1AAQBugBA7hTIABgBQAvhDAFhyQAFh0hDhJQghglg0gWQAggVAXgdQA7hFAAhqQAAhmg0g0IAAgB").f();
	this.shape.setTransform(25.7,46.4);

	this.addChild(this.shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(3.8,-1.1,44,95.1);


(window.lpcma013s01.number2 = function() {
	this.initialize();

	// shapes
	this.shape = new Shape();
	this.shape.graphics.f("#000000").p("ACbmDIgBAAQgxhWhrgCQhcAAhABDQAAAAAAAAQg/A+gOBpQgCAQAKAOQAJANAQACQAQABANgJQANgKACgQQAKhNAtgvIABAAQAqgrA6AAQA9gBAbAxIAAgBQAZAxgLBBQgPBSiHDuQhLCEh0DJQgHANACAOQACANALAJQALAKAOAAQAOAAALgJQBEg3A3gHQAegDAQAQQA6BCBDgJIABAAQBFgEA8haQAJgOgDgQQgDgPgOgJQgNgJgQADQgQADgIANQglA2gkAHQgfAAgeggIAAABQgnguhIAHIAAAAQgRABgSAFQBGh6AxhZQCTkBAOhYQARhggnhF").f();
	this.shape.setTransform(26.8,47.6);

	this.addChild(this.shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(2,0,49.5,95.2);


(window.lpcma013s01.number1 = function() {
	this.initialize();

	// shapes
	this.shape = new Shape();
	this.shape.graphics.f("#000000").p("AAbkwQAMgMALgOIAAMFQAAAQAMAMQALALAQAAQAQAAAMgLQALgMAAgQIAAt0QAAgMgHgKQgIgKgMgEQgMgFgLAFQgNADgHALQgnA1gxA2IAAAAQgdAgg4A4QgMAMAAAPQAAAQAMAMQALAMAQAAQAQAAAMgLQA5g7AeggIAAgB").f();
	this.shape.setTransform(-0.2,48.3);

	this.addChild(this.shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(-13,0.2,25.6,96.3);


(window.lpcma013s01.number0 = function() {
	this.initialize();

	// shapes
	this.shape = new Shape();
	this.shape.graphics.f("#000000").p("AiTmRQhbBwAAEXQAAEaBPB0QA8BbBjAAQBkAAA8hbQBPh0AAkaQAAkXhbhwQg/hOhVABQhVgBg+BO").p("ABWlgQBMBjAADzQAAD7hDBpQgkA2g7ABQg6gBgkg2QhDhpAAj7QAAjzBMhjQAkgvAxgBQAyABAkAv").f();
	this.shape.setTransform(29.3,51.4);

	this.addChild(this.shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(5.4,3.5,47.8,95.7);


(window.lpcma013s01.paper = function() {
	this.initialize();

	// Layer 6
	this.shape = new Shape();
	this.shape.graphics.f("#ffd24a").p("ALuulQgKAEgMAAQgeAAgUgVQgWgUAAgeQAAgdAWgUQAUgVAeAAQAMAAAKADIAAg5I3bAUIADFAIABAAIAAgDIFhgQIR2hHIAAg7").p("AGTvgQAAgZAXgSQAXgTAgAAQAhAAAWATQAXASAAAZQAAAZgXASQgWASghAAQggAAgXgSQgXgSAAgZ").p("AgMwHQASAOAAAVQAAAUgSAOQgSAOgbAAQgbAAgSgOQgTgOAAgUQAAgVATgOQASgOAbAAQAbAAASAO").p("AB1vcQAAgeAWgWQAVgWAfAAQAfAAAVAWQAVAWAAAeQAAAdgVAWQgVAWgfAAQgfAAgVgWQgWgWAAgd").p("An7uYQgXAXghAAQghAAgXgXQgYgYAAggQAAghAYgWQAXgYAhAAQAhAAAXAYQAYAWAAAhQAAAggYAY").p("AmMvYQAAgdAVgVQAVgVAdAAQAdAAAVAVQAVAVAAAdQAAAcgVAVQgVAVgdAAQgdAAgVgVQgVgVAAgc").f("#ffffff").p("ArpsQIALWfIABAAIAFHTIXGADIAA/PIx2BHIlhAQIAAAD").f();
	this.shape.setTransform(93.6,134.8);

	this.shape_1 = new Shape();
	this.shape_1.graphics.f("#ffd24a").p("AAVBMQBDgUgDg6QgCg6g+gQQgRgDgHAAQgiAAgXAYQgYAXAAAgQAAAhAYAWQAXAYAiAAQAMAAAMgD").f();
	this.shape_1.setTransform(189,34);

	// Layer 2
	this.shape_2 = new Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.2)").p("ALsw/IAAg+I3bA5MABKAjCIWWgoMgAFggiQgDABgDABQhYAZgNhVQAGgHAGgIQAwg6AvAQ").p("AHkwyQAlgCAaAZQAPBFhGAXQg7AVgkg1QgEhWBbAD").p("AhrwGQAPgSAZgDQAwgIAUAsQgSAzg1AIQhWgKAxhA").p("ABywKIBEglQALAAAMAAQAPAAAIAKQBJBDhWAyQgjAUgggTQg0ggASg7").p("AnmvKQggByhng5QgRgKgCgVQgShxB3AJQA2AEAAA3QAAAKgBAJ").p("Al8wLQAXgNAbgDIACgCIABAFQBnAOgyBfQgFALgPAEQhvAeAGhzQABgQASgK").f();
	this.shape_2.setTransform(97.8,141);

	// Layer 8
	this.shape_3 = new Shape();
	this.shape_3.graphics.f("#b3dd4d").p("Ar01jMgDVArHIb9AAMACWgpZI6+hu").f();
	this.shape_3.setTransform(88,184);

	// Layer 4
	this.shape_4 = new Shape();
	this.shape_4.graphics.f("#058cd2").p("AtRUeIajAAMAAAgnJI40hyMgBvAo7").f();
	this.shape_4.setTransform(121.6,131);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(-8.9,0,215.6,322);


(window.lpcma013s01.Symbol10 = function() {
	this.initialize();

	// Warstwa 1
	this.shape = new Shape();
	this.shape.graphics.f("#ffffff").p("EA4QgjJMhwfAAAMAAABGTMBwfAAAMAAAhGT").f();
	this.shape.setTransform(360,225);

	this.addChild(this.shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,0,720,450);


(window.lpcma013s01.Symbol7 = function() {
	this.initialize();

	// Warstwa 1
	this.shape = new Shape();
	this.shape.graphics.f("#ffffff").p("AGcBiQgBAAAAABQAAAAACAAIgBgB").p("AGRi5QAAgBAAgBQACgQgKgKQAAgBAAAAQgFgFgIgDQiJg5iXADQgCABgCAAQi1gGicBKQgLAEgKAGQAAABAAACQAAAAAAABQgBgBgBAAQgBgFgCgDIAAAAQAAAEABAEQAAADABAEQAAABAAAAQgBAIAAAHQAAACAAAAIAAACQgNgJgQgDQgBAAgCAAQgNgBgMADQgXAFgSAQQgaAWgJAhQgJAkAKAhQACAEACAFQABAEACAEQADAFADAEQAEAGAEAHQASAXAcAOQANAGAOAEQAmAJAkgMQAOgFAKgKQABABABACQADAEAEAFIAAAAQAAgBABgBQAGAJAHAIQAeAlAqAfQAAACABACIACAFQABADACAEQADAHAEAGIAAAAQgFACgEACQAKADAOAEIALADQADABAEABQAqALAfAFQAZAEATAAQAaAAAXgBQAvgHAxgVQADgCADgBIADgBQAUgLAQgPQABgNgCgNQgDACgBABQAJgIAJgGQAJgJAJgHQAFgEAFgFQABgBAAgBIAAAAQACgCADgCIAOgPQARgTAQgUQAAAAAAgBIAAgBQAAAAAAAAQAFgBAQgcQABgCABgBQASgeAOghQAAAAABgBQAEgJADgIQAPgtgGgnQAAAAABgB").p("AjzjAIgBADQgCAAgBAAQACgCACgB").p("AlVh7QACgCACgBQAGgDAGgCQAbgJAbAOQAAACABADQABABABABIAAAAQgBAAgBAAQAGAeADAHQAFAUAGAQQACAKAFALQADAIAEAIQgBAAAAABQgDABgCAAQgDABgCABQgMADgLABIgmgEQgCgBgBgBIgBAAQgWgIgRgWQAAAAAAAAQgJgPgHgPQAAgKABgKIAAAAIABgFQAAgCABgCQABgBAAgCQABAAAAgBIAAAAQABgBAAgBQAAgBABgBIARgSQABAAABgB").p("AjiALIgBABIgBgEQABABABAC").p("AGdEVIgCAAQAAAAACAAIAAAA").p("AFmCHIAAAAIAAAAQgBAAgBABIAAAAIACgB").f();
	this.shape.setTransform(41.2,27.7);

	this.addChild(this.shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,0,82.5,55.4);


(window.lpcma013s01.Symbol6 = function() {
	this.initialize();

	// Warstwa 2
	this.shape = new Shape();
	this.shape.graphics.f("#ffffff").p("AkyizQgNgBgMACQgXAFgSARQgaAWgJAhQgJAjAKAhQACAFACAEQABAEACAEQADAFADAFQAEAGAEAGQASAYAcAOQANAFAOAFQAmAJAkgMQAOgFAKgKQABABABACQADAEAEAFIAAAAQAAgBABgBQAGAIAHAJQAeAlAqAfQAAACABACIACAFQABADACAEQADAHAEAGIAAAAQgFACgEACQAKADAOADIALAEQADABAEABQAqALAfAFQAZADATAAQAaAAAXAAQAvgHAxgVQADgCADgBIADgBQAUgLAQgPQABgNgCgNQgDACgBABQAJgIAJgGQAJgIAJgIQAFgEAFgFQABgBAAgBIAAAAQACgCADgCIAOgPQARgTAQgUQAAgBAAAAIAAgBQAAAAAAAAQAFgCAQgbQABgCABgCQASgdAOghQAAgBABAAQAEgJADgJQAPgsgGgnQAAAAABgBQAAgBAAgBQACgQgKgKQAAgBAAAAQgFgFgIgEQiJg3iXACQgCABgCAAQi1gGicBJQgLAFgKAFQAAACAAACQAAAAAAABQgBgBgBAAQgBgFgCgEIAAABQAAAEABAEQAAADABAEQAAABAAAAQgBAIAAAHQAAACAAAAIAAABQgNgIgQgDQgBAAgCAA").p("Aj0i9QgCAAgBAAQACgCACgBIgBAD").p("AkMh3QgBAAgBAAQAGAeADAHQAFAUAGAQQACAKAFALQADAIAEAIQgBAAAAAAQgDACgCAAQgDABgCAAQgMADgLACIgmgEQgCgBgBgBIgBAAQgWgIgRgWQAAAAAAgBQgJgPgHgPQAAgKABgJIAAgBIABgEQAAgCABgCQABgCAAgBQABAAAAgBIAAgBQABAAAAgBQAAgBABgBIARgSQABgBABAAQACgCACgBQAGgDAGgCQAbgJAbANQAAADABADQABAAABACIAAAA").p("AjkAIQABABABACIgBAAIgBgD").p("AGbEVQAAAAACAAIAAAAIgCAA").p("AGbBjQAAAAACAAIgBgBQgBAAAAAB").p("AFmCHIAAAAQgBAAgBABIAAAAIACgBIAAAA").f();
	this.shape.setTransform(44.2,-7.3);

	// Warstwa 1
	this.shape_1 = new Shape();
	this.shape_1.graphics.f("#ffffff").p("AHFgyQhchDhqgOQihgViiADQigADicA0QgvAQggAuQgMATAGANQgIATATAPQBbBCBoAPQAKABALABQAIABAIABQACAAABAAQARAHANAGQCqAjDIgeIAzgSQADgBAEAAQBMgKBNgSQAtgKAcgtQAPgYgFgRQAHgagZgS").f();
	this.shape_1.setTransform(47.2,15);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,-34.9,94.5,65.1);


(window.lpcma013s01.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// b1
	this.b0 = new window.lpcma013s01.Symbol1kopia4();
	this.b0.setTransform(41.7,10.7,0.532,0.532,0,0,0,78.5,82.6);

	this.b1 = new window.lpcma013s01.Symbol1kopia3();
	this.b1.setTransform(41.7,10.7,0.532,0.532,0,0,0,78.5,82.5);

	this.b2 = new window.lpcma013s01.Symbol1();
	this.b2.setTransform(41.7,10.7,0.532,0.532,0,0,0,78.5,82.5);

	this.b3 = new window.lpcma013s01.Symbol1kopia8();
	this.b3.setTransform(41.7,10.7,0.532,0.532,0,0,0,78.5,82.5);

	this.b4 = new window.lpcma013s01.Symbol1kopia9();
	this.b4.setTransform(41.8,10.7,0.532,0.532,0,0,0,78.6,82.5);

	this.b5 = new window.lpcma013s01.Symbol1kopia();
	this.b5.setTransform(41.7,10.7,0.532,0.532,0,0,0,78.5,82.5);

	this.b6 = new window.lpcma013s01.Symbol1kopia10();
	this.b6.setTransform(41.7,10.7,0.532,0.532,0,0,0,78.5,82.5);

	this.timeline.addTween(Tween.get({}).to({state:[{t:this.b0}]}).to({state:[{t:this.b1}]},1).to({state:[{t:this.b2}]},1).to({state:[{t:this.b3}]},1).to({state:[{t:this.b4}]},1).to({state:[{t:this.b5}]},1).to({state:[{t:this.b6}]},1).wait(1));

}).prototype = p = new MovieClip();
p.nominalBounds = new Rectangle(0,0,82.4,55.3);


(window.lpcma013s01.Symbol1kopia4 = function() {
	this.initialize();

	// Warstwa 1
	this.instance = new window.lpcma013s01.Bitmapa3();
	this.instance.setTransform(0,62.6);

	this.addChild(this.instance);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,62.6,155,104);


(window.lpcma013s01.Bitmapa3 = function() {
	this.initialize(images.lpcma013s01.Bitmapa3);
}).prototype = new Bitmap();
p.nominalBounds = new Rectangle(0,0,155,104);


(window.lpcma013s01.Symbol1kopia3 = function() {
	this.initialize();

	// Warstwa 1
	this.instance = new window.lpcma013s01.Bitmapa2();
	this.instance.setTransform(0,62.6);

	this.addChild(this.instance);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,62.6,155,104);


(window.lpcma013s01.Bitmapa2 = function() {
	this.initialize(images.lpcma013s01.Bitmapa2);
}).prototype = new Bitmap();
p.nominalBounds = new Rectangle(0,0,155,104);


(window.lpcma013s01.Symbol1 = function() {
	this.initialize();

	// Warstwa 1
	this.instance = new window.lpcma013s01.Bitmapa1();
	this.instance.setTransform(0,62.6);

	this.addChild(this.instance);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,62.6,155,104);


(window.lpcma013s01.Bitmapa1 = function() {
	this.initialize(images.lpcma013s01.Bitmapa1);
}).prototype = new Bitmap();
p.nominalBounds = new Rectangle(0,0,155,104);


(window.lpcma013s01.Symbol1kopia8 = function() {
	this.initialize();

	// Warstwa 1
	this.instance = new window.lpcma013s01.Bitmapa4();
	this.instance.setTransform(0,62.6);

	this.addChild(this.instance);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,62.6,155,104);


(window.lpcma013s01.Bitmapa4 = function() {
	this.initialize(images.lpcma013s01.Bitmapa4);
}).prototype = new Bitmap();
p.nominalBounds = new Rectangle(0,0,155,104);


(window.lpcma013s01.Symbol1kopia9 = function() {
	this.initialize();

	// Warstwa 1
	this.instance = new window.lpcma013s01.Bitmapa6();
	this.instance.setTransform(0,62.6);

	this.addChild(this.instance);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,62.6,155,104);


(window.lpcma013s01.Bitmapa6 = function() {
	this.initialize(images.lpcma013s01.Bitmapa6);
}).prototype = new Bitmap();
p.nominalBounds = new Rectangle(0,0,155,104);


(window.lpcma013s01.Symbol1kopia = function() {
	this.initialize();

	// Warstwa 1
	this.instance = new window.lpcma013s01.Bitmapa5();
	this.instance.setTransform(0,62.6);

	this.addChild(this.instance);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,62.6,155,104);


(window.lpcma013s01.Bitmapa5 = function() {
	this.initialize(images.lpcma013s01.Bitmapa5);
}).prototype = new Bitmap();
p.nominalBounds = new Rectangle(0,0,155,104);


(window.lpcma013s01.Symbol1kopia10 = function() {
	this.initialize();

	// Warstwa 1
	this.instance = new window.lpcma013s01.Bitmapa7();
	this.instance.setTransform(0,62.6);

	this.addChild(this.instance);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,62.6,155,104);


(window.lpcma013s01.Bitmapa7 = function() {
	this.initialize(images.lpcma013s01.Bitmapa7);
}).prototype = new Bitmap();
p.nominalBounds = new Rectangle(0,0,155,104);


(window.lpcma013s01.podstawekkopia10 = function() {
	this.initialize();

	// Layer 2
	this.instance = new window.lpcma013s01.Bitmapa18();

	this.addChild(this.instance);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,0,126,40);


(window.lpcma013s01.Bitmapa18 = function() {
	this.initialize(images.lpcma013s01.Bitmapa18);
}).prototype = new Bitmap();
p.nominalBounds = new Rectangle(0,0,126,40);


(window.lpcma013s01.podstawekkopia2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Warstwa 2
	this.instance = new window.lpcma013s01.Bitmapa26();

	this.instance_1 = new window.lpcma013s01.Bitmapa25();
	this.instance_1.setTransform(0,-42.6);

	this.timeline.addTween(Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new MovieClip();
p.nominalBounds = new Rectangle(0,0,126,40);


(window.lpcma013s01.Bitmapa26 = function() {
	this.initialize(images.lpcma013s01.Bitmapa26);
}).prototype = new Bitmap();
p.nominalBounds = new Rectangle(0,0,126,40);


(window.lpcma013s01.Bitmapa25 = function() {
	this.initialize(images.lpcma013s01.Bitmapa25);
}).prototype = new Bitmap();
p.nominalBounds = new Rectangle(0,0,126,83);


(window.lpcma013s01.podstawekkopia8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Warstwa 2
	this.instance = new window.lpcma013s01.Bitmapa16();

	this.instance_1 = new window.lpcma013s01.Bitmapa17();
	this.instance_1.setTransform(-3.1,-46.6);

	this.timeline.addTween(Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new MovieClip();
p.nominalBounds = new Rectangle(0,0,126,40);


(window.lpcma013s01.Bitmapa16 = function() {
	this.initialize(images.lpcma013s01.Bitmapa16);
}).prototype = new Bitmap();
p.nominalBounds = new Rectangle(0,0,126,40);


(window.lpcma013s01.Bitmapa17 = function() {
	this.initialize(images.lpcma013s01.Bitmapa17);
}).prototype = new Bitmap();
p.nominalBounds = new Rectangle(0,0,129,87);


(window.lpcma013s01.podstawekkopia9 = function() {
	this.initialize();

	// Layer 2
	this.instance = new window.lpcma013s01.Bitmapa29();

	this.addChild(this.instance);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,0,126,40);


(window.lpcma013s01.Bitmapa29 = function() {
	this.initialize(images.lpcma013s01.Bitmapa29);
}).prototype = new Bitmap();
p.nominalBounds = new Rectangle(0,0,126,40);


(window.lpcma013s01.podstawekkopia = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Warstwa 2
	this.instance = new window.lpcma013s01.Bitmapa27();
	this.instance.setTransform(-6.4,-42.5);
	this.instance._off = true;

	this.timeline.addTween(Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Layer 2
	this.instance_1 = new window.lpcma013s01.Bitmapa28();

	this.timeline.addTween(Tween.get(this.instance_1).to({_off:true},1).wait(1));

}).prototype = p = new MovieClip();
p.nominalBounds = new Rectangle(0,0,126,40);


(window.lpcma013s01.Bitmapa27 = function() {
	this.initialize(images.lpcma013s01.Bitmapa27);
}).prototype = new Bitmap();
p.nominalBounds = new Rectangle(0,0,132,83);


(window.lpcma013s01.Bitmapa28 = function() {
	this.initialize(images.lpcma013s01.Bitmapa28);
}).prototype = new Bitmap();
p.nominalBounds = new Rectangle(0,0,126,40);


(window.lpcma013s01.podstawek = function() {
	this.initialize();

	// Layer 2
	this.instance = new window.lpcma013s01.Bitmapa19();

	this.addChild(this.instance);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,0,126,40);


(window.lpcma013s01.Bitmapa19 = function() {
	this.initialize(images.lpcma013s01.Bitmapa19);
}).prototype = new Bitmap();
p.nominalBounds = new Rectangle(0,0,126,40);


(window.lpcma013s01.podstawekkopia5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Layer 2
	this.instance = new window.lpcma013s01.Bitmapa14();

	this.instance_1 = new window.lpcma013s01.Bitmapa32();
	this.instance_1.setTransform(-2.7,-39.6);

	this.timeline.addTween(Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new MovieClip();
p.nominalBounds = new Rectangle(0,0,126,40);


(window.lpcma013s01.Bitmapa14 = function() {
	this.initialize(images.lpcma013s01.Bitmapa14);
}).prototype = new Bitmap();
p.nominalBounds = new Rectangle(0,0,126,40);


(window.lpcma013s01.Bitmapa32 = function() {
	this.initialize(images.lpcma013s01.Bitmapa32);
}).prototype = new Bitmap();
p.nominalBounds = new Rectangle(0,0,129,81);


(window.lpcma013s01.podstawekkopia7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Warstwa 2
	this.instance = new window.lpcma013s01.Bitmapa20();

	this.instance_1 = new window.lpcma013s01.Bitmapa21();
	this.instance_1.setTransform(-5.7,-46.6);

	this.timeline.addTween(Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new MovieClip();
p.nominalBounds = new Rectangle(0,0,126,40);


(window.lpcma013s01.Bitmapa20 = function() {
	this.initialize(images.lpcma013s01.Bitmapa20);
}).prototype = new Bitmap();
p.nominalBounds = new Rectangle(0,0,126,40);


(window.lpcma013s01.Bitmapa21 = function() {
	this.initialize(images.lpcma013s01.Bitmapa21);
}).prototype = new Bitmap();
p.nominalBounds = new Rectangle(0,0,132,87);


(window.lpcma013s01.podstawekkopia6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Warstwa 2
	this.instance = new window.lpcma013s01.Bitmapa33();

	this.instance_1 = new window.lpcma013s01.Bitmapa34();
	this.instance_1.setTransform(-3.9,-43.6);

	this.timeline.addTween(Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new MovieClip();
p.nominalBounds = new Rectangle(0,0,126,40);


(window.lpcma013s01.Bitmapa33 = function() {
	this.initialize(images.lpcma013s01.Bitmapa33);
}).prototype = new Bitmap();
p.nominalBounds = new Rectangle(0,0,126,40);


(window.lpcma013s01.Bitmapa34 = function() {
	this.initialize(images.lpcma013s01.Bitmapa34);
}).prototype = new Bitmap();
p.nominalBounds = new Rectangle(0,0,130,84);


(window.lpcma013s01.podstawekkopia3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Layer 2
	this.instance = new window.lpcma013s01.Bitmapa31();

	this.instance_1 = new window.lpcma013s01.Bitmapa30();
	this.instance_1.setTransform(0,-39);

	this.timeline.addTween(Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new MovieClip();
p.nominalBounds = new Rectangle(0,0,126,40);


(window.lpcma013s01.Bitmapa31 = function() {
	this.initialize(images.lpcma013s01.Bitmapa31);
}).prototype = new Bitmap();
p.nominalBounds = new Rectangle(0,0,126,40);


(window.lpcma013s01.Bitmapa30 = function() {
	this.initialize(images.lpcma013s01.Bitmapa30);
}).prototype = new Bitmap();
p.nominalBounds = new Rectangle(0,0,126,79);


(window.lpcma013s01.Symbol8kopia = function() {
	this.initialize();

	// Warstwa 1
	this.shape = new Shape();
	this.shape.graphics.f("#bb8f64").p("AUEllMgowAAFIANEmMAoegAQIALgFIgGkW").p("ATyBIMgoLAALIALDxMAoNgAMIgOgOIABji").f("#d0b193").p("AUKhPIgLAFMgoeAAQIADBIMApwgAOIhKhP").p("AURneMgoxgACQgHAggGAgMAqAgAQIhCgu").p("AT/E4MgoNAAMIAEBJMAphAAJIhYhe").f("#eedac4").p("AVUAAMgpwAAOIg4AAIABBFIA6AAMAoLgALIBugBIAAhJIgMAC").p("AVTmwMgqAAAQIgxABIABA/IAxAAMAowgAFIBXAAIgBhLIgHAA").p("AVXGWMgphgAJIhAAAIABBSMAqnAADIgChMIgFAA").f();
	this.shape.setTransform(138.2,49.5);

	// Warstwa 2
	this.instance = new window.lpcma013s01.Bitmapa37();
	this.instance.setTransform(-3.7,11.1);

	this.addChild(this.instance,this.shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(-3.7,1.4,279.5,105.7);


(window.lpcma013s01.Bitmapa37 = function() {
	this.initialize(images.lpcma013s01.Bitmapa37);
}).prototype = new Bitmap();
p.nominalBounds = new Rectangle(0,0,275,96);