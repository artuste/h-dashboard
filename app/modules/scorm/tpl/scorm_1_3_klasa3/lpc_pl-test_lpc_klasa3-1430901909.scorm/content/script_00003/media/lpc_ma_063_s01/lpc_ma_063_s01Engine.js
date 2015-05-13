//namespace
window.lpcma063s01 = window.lpcma063s01||{};

(function(wnd){
	
	//constructor
	var Engine = function(resource, stage){
		if(ydpjs == null && wnd.lpcma063s01.ydpjs != undefined){
			ydpjs = wnd.lpcma063s01.ydpjs;
		}
		
		this.lib = wnd.lpcma063s01;
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
		
		this.reset=this.resource.reset;
		
		this.label=this.resource.label;
		this.label.gotoAndStop(0);
		this.label.labTxt.visible = false;
		
		this.count = 0;
		
		this.blocker=this.resource.blocker;
		this.blocker.onPress = ydpjs.Delegate.create(this,this._blok);
		this.blocker.alpha=0.02;
		this.blocker.visible = false;
		
		for(var i = 0; i < 10; i++)
		{
			this["ht" + i] = this.resource["ht" + i];
			this["hu" + i] = this.resource["hu" + i];
			this["hu" + i].inner.gotoAndStop(0);
			this["hu" + i].isFull = false;
			this["d" + i] = this.resource["d" + i];
			this["p" + i] = this.resource["p" + i];
			this["p" + i].gotoAndStop(0);
			this["p" + i].startX = this["p" + i].x;
			this["p" + i].startY = this["p" + i].y;
			this["d" + i].startX = this["d" + i].x;
			this["d" + i].startY = this["d" + i].y;
			this["d" + i].id = i;
			this["d" + i].onPress = ydpjs.Delegate.create(this,this._pressHandler);
			
		}
		
		this.reset.onPress = ydpjs.Delegate.create(this,this._reset);
	}
	
	
	p._reset= function(event) {
		
		this.label.gotoAndStop(0);
		this.label.labTxt.visible = false;
		
		this.blocker.visible = false;
		
		this.count = 0;
		
		for(var i = 0; i < 10; i++)
		{
			this["hu" + i].inner.gotoAndStop(0);
			this["hu" + i].isFull = false;
			this["p" + i].visible = true;
			this["d" + i].visible = true;
			this["p" + i].gotoAndStop(0);
			this["p" + i].x = this["p" + i].startX;
			this["p" + i].y = this["p" + i].startY;
			this["d" + i].x = this["d" + i].startX;
			this["d" + i].y = this["d" + i].startY;
		}

		event.onMouseUp   = ydpjs.Delegate.create(this, this._onMouseUp2);
	}
	
	
	p._onMouseUp2= function(e)
	{ 
	this.reset.gotoAndStop(0)
		
	}
	
	p._pressHandler= function(e)
    { 
		this.stage.removeChild(this.blocker);
		this.stage.addChild(this.blocker);
		this.blocker.visible = true;
		
		this.stage.removeChild(this["p" + e.target.id]);
		this.stage.addChild(this["p" + e.target.id]);	
		this.stage.removeChild(e.target);
		this.stage.addChild(e.target);		

		e.onMouseMove = ydpjs.Delegate.create(this, this._onMouseMove,e);
		e.onMouseUp   = ydpjs.Delegate.create(this, this._onMouseUp,e); 
			
	}
	
	p._onMouseMove = function(ev,e)
	{
	
		e.target.x=this.stage.mouseX;
		e.target.y=this.stage.mouseY;
		this["p" + e.target.id].gotoAndStop(1);
		this["p" + e.target.id].x=e.target.x
		this["p" + e.target.id].y=e.target.y
		
	}
	
	p._onMouseUp= function(ev,e)
	{ 
		var done=false;
		
		for(var i = 0; i <10; i++){
			var pt = this["ht" + i].globalToLocal(this.stage.mouseX, this.stage.mouseY);
			if(this["ht" + i].hitTest(pt.x,pt.y) && this["hu" + i].isFull==false)
			{
				this.stage.removeChild(this.blocker);
				this.stage.addChild(this.blocker);
				this.blocker.visible = true;
				
				this["p" + e.target.id].visible = false;
				e.target.visible = false;
				this["hu" + i].inner.gotoAndStop(1);
				this["hu" + i].inner.innerBird.gotoAndStop(0);
				
				this.count++;
				this.label.labTxt.visible = true;
				this.label.gotoAndStop(this.count-1);
				
				this["hu" + i].isFull = true;
				this.blocker.visible = false;
				done=true;
			}
		}
		
		if(done==false){
					
					
					e.target.x = e.target.startX;
					e.target.y = e.target.startY;
					this["p" + e.target.id].x = this["p" + e.target.id].startX;
					this["p" + e.target.id].y = this["p" + e.target.id].startY;
					this.blocker.visible = false;

				}
		
	}
	
	p._blok= function(){}
	
	p.tick = function(){
		//Here place code which will execute in every frame		
		this.stage.update();
	}
	
	wnd.lpcma063s01.lpc_ma_063_s01Engine = Engine;
	
}(window));