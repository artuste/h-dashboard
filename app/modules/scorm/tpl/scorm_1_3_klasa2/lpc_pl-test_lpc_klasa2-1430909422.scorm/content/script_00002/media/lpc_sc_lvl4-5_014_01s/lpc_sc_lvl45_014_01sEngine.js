//namespace
window.lpcsclvl4501401s = window.lpcsclvl4501401s||{};

(function(wnd){
	
	//constructor
	var Engine = function(resource, stage){
		if(ydpjs == null && wnd.lpcsclvl4501401s.ydpjs != undefined){
			ydpjs = wnd.lpcsclvl4501401s.ydpjs;
		}
		
		this.lib = wnd.lpcsclvl4501401s;
		this.initialize(resource, stage);
	}
	
	var p = Engine.prototype;
	
	//ydpjs lib namespace
	var ydpjs = null;
	
	p.stage = null;
	
	//Representative of fla file
	p.resource = null;
	
	//fla graphic library object
	p.lib = null;
	
	p.initialize = function(resource, stage){
		this.resource = resource;
		this.stage = stage;
		this.stage.enableMouseOver();
		Touch.enable(this.stage);
		this.reset=this.resource.reset;
		this.reset = new ydpjs.ButtonDecorator(this.reset);
		this.reset.onPress = ydpjs.Delegate.create(this,this._reset);
		this.blocker=this.resource.blocker;
		this.blocker.visible=false;
		this.b0=this.resource.b0;
		this.drag=this.resource.drag;
		this.b0.id=0;
		this.b0.alpha=0.03;
		this.start0=0;
		this.ob0=this.resource.ob0;
		this.ob0.gotoAndStop(0)
		this.licznik=0;
		this.txt=this.resource.txt;
		this.txt.gotoAndStop(0);
		//this.txt.visible=false;
		this.l0=this.resource.l0;
		this.l0.gotoAndStop(0)
		this.l0.visible=false;
		this.bodyArr=[0,1,2,3,4,5,6]
		this.area=this.resource.area
		this.area.alpha=0.03;
		this.oldV=-1;
			
			this["c" + 0]= this.resource["c" + 0];
			this["c" + 0].alpha=0.03;
			this["c" + 1]= this.resource["c" + 1];
			this["c" + 1].alpha=0.03
			this["s" + 0]= this.resource["s" + 0];
			this["s" + 0].gotoAndStop(0);
			this["s" + 1]= this.resource["s" + 1];
			this["s" + 1].gotoAndStop(0);
			
			this.ob0.startX=this.ob0.x
			this.ob0.startY=this.ob0.y
		
			
		
		
		this["b" + 0].onPress = ydpjs.Delegate.create(this,this._body);	
		
		this["s" + 0].onPress = ydpjs.Delegate.create(this,this._zmianaElementuPlus);
		//this["s" + 0].blok=false;
		this["s" + 0].onMouseOver = ydpjs.Delegate.create(this, this._onButtonMouseOver);
		this["s" + 0].onMouseOut = ydpjs.Delegate.create(this, this._onButtonMouseOut);
		
		this["s" + 1].onMouseOver = ydpjs.Delegate.create(this, this._onButtonMouseOver);
		this["s" + 1].onMouseOut = ydpjs.Delegate.create(this, this._onButtonMouseOut);
		//this["s" + 1].blok=true;
	
		this["s" + 1].onPress = ydpjs.Delegate.create(this,this._zmianaElementuMinus);	
		//this["s" + 1].gotoAndStop(2);
		this.drag.gotoAndStop(0);
	}
	
	p._onButtonMouseOver = function(event) {
		if(event.target.blok==false){
		event.target.gotoAndStop(1);
		}
	}
	
	p._onButtonMouseOut = function(event) {
		if(event.target.blok==false){
		event.target.gotoAndStop(0);
		}
	}
	
	
	p._reset= function(e){
		
		this.bodyArr=[0,1,2,3,4,5,6];
		this.ob0.gotoAndStop(0)
		/*this["s" + 0].gotoAndStop(0);
		this["s" + 1].gotoAndStop(2);
		this["s" + 0].blok=false;
		this["s" + 1].blok=true;*/
		this.licznik=0;
		//this.txt.visible=false;
		this.txt.gotoAndStop(0);
		this.drag.gotoAndStop(0);
		
		this.l0.gotoAndStop(0)
		this.l0.visible=false;
	
		
		
	}
	 p._body= function(e)
    { 
		e.nativeEvent.preventDefault && e.nativeEvent.preventDefault();
		this.drag.x=this.stage.mouseX;
		this.drag.y=this.stage.mouseY;
		//this.drag.gotoAndStop(e.target.id)
		e.onMouseMove = ydpjs.Delegate.create(this, this._onMouseMove,e);
		e.onMouseUp   = ydpjs.Delegate.create(this, this._onMouseUp,e); 
		
	}
	
	
	p._zmianaElementuPlus= function(e)
    { 
		this["s" + 1].gotoAndStop(0);
		this["s" + 1].blok=false;
		this.licznik++
		/*if(this.licznik<=6){
				this.licznik++
				
			}
		if(this.licznik==6){
				
				this.licznik=0;
				
			}*/
			
			if(this.licznik==this.bodyArr.length+1){this.licznik=0}
		this.drag.gotoAndStop(this.bodyArr[this.licznik]);
		this.ob0.gotoAndStop(this.bodyArr[this.licznik]);
	
		
		
	}
	p._zmianaElementuMinus= function(e)
    { 
		this["s" + 0].gotoAndStop(0);
		this["s" + 0].blok=false;
		this.licznik--
		/*if(this.licznik>=0){
				this.licznik--
			}
		if(this.licznik==-1){
				
				this.licznik=6
				
			}*/
		
				if(this.licznik<0){this.licznik=this.bodyArr.length-1}
		this.drag.gotoAndStop(this.bodyArr[this.licznik]);
		this.ob0.gotoAndStop(this.bodyArr[this.licznik]);
			
		
	}
	
	
	
		p._onMouseMove = function(ev,e)
	{
		//this.blocker.visible=true;
		this.drag.visible=true;
		this.drag.x=this.stage.mouseX;
		this.drag.y=this.stage.mouseY;
		this.ob0.visible=false;

			
	}
	p._onMouseUp= function(ev,e)
	{ 
	
	var pt = this.area.globalToLocal(this.stage.mouseX, this.stage.mouseY);

	if(this.area.hitTest(pt.x, pt.y) ){
		this.drag.visible=false;
		this.l0.gotoAndStop(this.bodyArr[this.licznik]);
		this.txt.gotoAndStop(this.bodyArr[this.licznik]+1);
			if(this.oldV!=-1){
				this.bodyArr.push(this.oldV[0])
				}
				
		this.oldV=this.bodyArr.splice(this.licznik,1)
		console.log(this.bodyArr)
		this.txt.visible=true;
		
		this.licznik=0
		
		if(this.bodyArr.length>0){
			
			this.ob0.visible=true;
			this.drag.gotoAndStop(this.bodyArr[0])
			this.ob0.gotoAndStop(this.bodyArr[0]);
			this.l0.visible=true;
			
			
		}
		if(this.bodyArr.length==0){
			
			this.drag.visible=false
			this.ob0.visible=false
		}
	
	}else{
		
		
		Tween.get(this.drag, {loop:false}, true).to({x:this.ob0.startX,y:this.ob0.startY,alpha:1},100) 
		.set({visible:false}, this.drag)
		.set({visible:true}, this.ob0)
		}
		
		
	
		
		
	}
	p.tick = function(){
		//Here place code which will execute in every frame		
		this.stage.update();
	}
	
	wnd.lpcsclvl4501401s.lpc_sc_lvl45_014_01sEngine = Engine;
	
}(window));