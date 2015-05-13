//namespace
window.lpcma013s01 = window.lpcma013s01||{};

(function(wnd){
	
	//constructor
	var Engine = function(resource, stage){
		if(ydpjs == null && wnd.lpcma013s01.ydpjs != undefined){
			ydpjs = wnd.lpcma013s01.ydpjs;
		}
		
		this.lib = wnd.lpcma013s01;
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
		Touch.enable(this.stage)

		
		this.blocker=this.resource.blocker;
		this.blocker.visible=false;
		this.blocker.alpha=0.02;
		this.blocker.onPress = ydpjs.Delegate.create(this,this._blok);
		this.reset=this.resource.reset;
		this.reset = new ydpjs.ButtonDecorator(this.reset);
		this.reset.onPress = ydpjs.Delegate.create(this,this._reset);
		this.drag=this.resource.drag;
		this.drag.visible=false;
		this.licznik=0;
		this.licznik2=0;
		
		this.notes = this.resource.notes;
		this.notes.gotoAndStop(19);
		
		for(var i = 0; i < 7; i++){
			this["a" + i]=this.resource["a" + i];
			this["a" + i].alpha=0.02;
			this["a" + i].id=i;
			this["a" + i].onPress = ydpjs.Delegate.create(this,this._pressHandler);
			this["b" + i]=this.resource["b" + i];
			this["b" + i].startX=this["b" + i].x
			this["b" + i].startY=this["b" + i].y
			this["c" + i]=this.resource["c" + i];
			this["c" + i].gotoAndStop(0);
			this["d" + i]=this.resource["d" + i];
			this["d" + i].alpha=0.01;
		}	
		
			this["d" + 7]=this.resource["d" + 7];
			this["d" + 8]=this.resource["d" + 8];
			this["d" + 9]=this.resource["d" + 9];
			this["d" + 7].alpha=0.01;
			this["d" + 8].alpha=0.01;
			this["d" + 9].alpha=0.01;
	}
	
	 p._pressHandler= function(e)
    { 
			this["b"+e.target.id].visible=false;
			this["a"+e.target.id].visible=false;
			this.drag.visible=true;
			this.drag.gotoAndStop(e.target.id);
			this.drag.x=this.stage.mouseX;
			this.drag.y=this.stage.mouseY;
			e.onMouseMove = ydpjs.Delegate.create(this, this._onMouseMove,e);
			e.onMouseUp   = ydpjs.Delegate.create(this, this._onMouseUp,e); 
		
		
		
		
	}
	p._onMouseMove = function(ev,e)
	{
		this.blocker.visible=true;
		this.drag.visible=true;
		this.drag.x=this.stage.mouseX;
		this.drag.y=this.stage.mouseY;
		
		
	}
	p._onMouseUp= function(ev,e){ 
		
	var pt = this["d"+e.target.id].globalToLocal(this.stage.mouseX, this.stage.mouseY);

	
		if(this["d"+e.target.id].hitTest(pt.x, pt.y)){
			
			this.drag.visible=false;
			this.blocker.visible=false;
			
			this.licznik++;
			
			this.notes.gotoAndPlay("f" + this.licznik);
			
			
			this["c" + +e.target.id].gotoAndStop(1);
			/*
			this.licznik2=this.licznik2+2;
			this.licznik++;
			
			this.text01.gotoAndPlay(this.licznik);
			if(this.licznik==7){
				this.pod0.visible=false;
				this.pod2.visible=true;
				
				this.text02.gotoAndPlay(this.licznik);
				this.text01.visible=false;
				this.text02.visible=true;
			}
			*/
		
		}else{
			
		Tween.get(this.drag, {loop:false}, true).to({x:this["b" + e.target.id].startX,y:this["b" + e.target.id].startY,alpha:1},100) 
			.set({visible:false},this.drag)
			.set({visible:true},this["b" + e.target.id])
			.set({visible:true},this["a" + e.target.id])
			.set({visible:false},this.blocker)
		}
		
	}
	
	p._reset= function(e){
		this.licznik=0;
		this.licznik2=0;
		
		for(var i = 0; i < 7; i++){
			this["a" + i].alpha=0.02;
			this["a" + i].visible=true;
			this["c" + i].gotoAndStop(0);
			this["d" + i].visible=true;
			this["b" + i].visible=true;
		}
		
		this.notes.gotoAndStop(19);
	}
	
	p._blok= function(e){}
	
	p.tick = function(){
		//Here place code which will execute in every frame		
		this.stage.update();
	}
	
	wnd.lpcma013s01.lpc_ma_013_s01Engine = Engine;
	
}(window));