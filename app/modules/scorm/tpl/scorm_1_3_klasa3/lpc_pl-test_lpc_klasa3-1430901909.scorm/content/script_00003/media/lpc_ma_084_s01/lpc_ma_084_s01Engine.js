//namespace
window.lpcma084s01 = window.lpcma084s01||{};

(function(wnd){
	
	//constructor
	var Engine = function(resource, stage){
		if(ydpjs == null && wnd.lpcma084s01.ydpjs != undefined){
			ydpjs = wnd.lpcma084s01.ydpjs;
		}
		
		this.lib = wnd.lpcma084s01;
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
		this.next=this.resource.next;
		this.next.visible=false;
		this.reset=this.resource.reset;
		this.reset = new ydpjs.ButtonDecorator(this.reset);
		this.reset.onPress = ydpjs.Delegate.create(this,this._reset);
		this.drag=this.resource.drag;
		this.drag.visible=false;
		this.blocker=this.resource.blocker;
		this.blocker.visible=false;
		this.blocker.alpha=0.02;
		this.next=this.resource.next;
		this.next.visible=false;
		//this.next = new ydpjs.ButtonDecorator(this.next);
		this.next.onPress = ydpjs.Delegate.create(this,this._next);
		this.step=0;
		this.wariant=0;
		for(var i = 0; i < 4; i++){
			this["n"+i]=this.resource["n"+i];
			this["n"+i].visible=false;
			this["n"+i].gotoAndStop(0);
		}
		
		
		
		
		for(var i = 0; i < 36; i++){
			this["a"+i]=this.resource["a"+i];
			this["b"+i]=this.resource["b"+i];
			this["c"+i]=this.resource["c"+i];
			this["ar"+i]=this.resource["ar"+i];
			this["c"+i].id=i;
			this["c" + i].startX=this["c" + i].x
			this["c" + i].startY=this["c" + i].y
			this["c" + i].onPress = ydpjs.Delegate.create(this,this._pressHandler);
			
			this["a"+i].visible=false;
			this["b"+i].visible=false;
			this["c"+i].visible=false;
			this["ar"+i].visible=false;
			
		}	
		this["n"+0].visible=true;
		for(var i = 0; i < 9; i++){
			this["a"+i].visible=false;
			this["b"+i].visible=true;
			this["c"+i].visible=true;
			this["ar"+i].visible=true;
			this["ar"+i].alpha=0.02;
			this["c"+i].alpha=0.02
		}
		this.blocker.onPress = ydpjs.Delegate.create(this,this._blok);	
	}
	 p._blok= function(e){ }
	/*  p._reset= function(e)
    {
		this.step=0;
		this.wariant=0;
		this.next.visible=false;
		for(var i = 0; i < 4; i++){
			this["n"+i]=this.resource["n"+i];
			this["n"+i].visible=false;
			this["n"+i].gotoAndStop(0);
		}
		
		
		
		
		for(var i = 0; i < 36; i++){
			this["a"+i]=this.resource["a"+i];
			this["b"+i]=this.resource["b"+i];
			this["c"+i]=this.resource["c"+i];
			this["ar"+i]=this.resource["ar"+i];
			this["c"+i].id=i;
			this["c" + i].startX=this["c" + i].x
			this["c" + i].startY=this["c" + i].y
			this["c" + i].onPress = ydpjs.Delegate.create(this,this._pressHandler);
			
			this["a"+i].visible=false;
			this["b"+i].visible=false;
			this["c"+i].visible=false;
			this["ar"+i].visible=false;
			
		}	
		this["n"+0].visible=true;
		for(var i = 0; i < 9; i++){
			this["a"+i].visible=false;
			this["b"+i].visible=true;
			this["c"+i].visible=true;
			this["ar"+i].visible=true;
			this["ar"+i].alpha=0.02;
			this["c"+i].alpha=0.02
		}
		
	}*/
	 p._reset= function(e)
    {
		this.wariant++
		if(this.wariant==4){
			this.wariant=0;
			}
		this.next.visible=false;
		
		this.step=0;
		for(var i = 0; i < 36; i++){
			
			this["a"+i].visible=false;
			this["b"+i].visible=false;
			this["c"+i].visible=false;
			this["ar"+i].visible=false;
			
		}	
		for(var i = 0; i < 4; i++){
			this["n"+i].gotoAndStop(0)
			this["n"+i].visible=false;
		}
		this["n"+this.wariant].visible=true;
		
		if(this.wariant==0){
			for(var i = 0; i < 9; i++){
				this["a"+i].visible=false;
				this["b"+i].visible=true;
				this["c"+i].visible=true;
				this["ar"+i].visible=true;
				this["ar"+i].alpha=0.02;
				this["c"+i].alpha=0.02
			}
		}
		
		if(this.wariant==1){
			for(var i = 9; i < 18; i++){
				this["a"+i].visible=false;
				this["b"+i].visible=true;
				this["c"+i].visible=true;
				this["ar"+i].visible=true;
				this["ar"+i].alpha=0.02;
				this["c"+i].alpha=0.02
			}
		}
		if(this.wariant==2){
			for(var i = 18; i < 27; i++){
				this["a"+i].visible=false;
				this["b"+i].visible=true;
				this["c"+i].visible=true;
				this["ar"+i].visible=true;
				this["ar"+i].alpha=0.02;
				this["c"+i].alpha=0.02
			}
		}
		if(this.wariant==3){
			for(var i = 27; i < 36; i++){
				this["a"+i].visible=false;
				this["b"+i].visible=true;
				this["c"+i].visible=true;
				this["ar"+i].visible=true;
				this["ar"+i].alpha=0.02;
				this["c"+i].alpha=0.02
			}
		}
	}
	 p._pressHandler= function(e)
    { 
			this.drag.visible=true;
			this.drag.gotoAndStop(e.target.id)
			this.drag.x=this.stage.mouseX;
			this.drag.y=this.stage.mouseY;
			this["b"+e.target.id].visible=false;
			e.target.visible=false;
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
	
	
	p._onMouseUp= function(ev,e)
	{ 
		for(var i = 0; i < 36; i++){
			this["pt"+i] = this["ar"+i].globalToLocal(this.stage.mouseX, this.stage.mouseY);
		}
		if(this["ar"+e.target.id].hitTest(this["pt"+e.target.id].x, this["pt"+e.target.id].y)){
			this.drag.visible=false;
			this.blocker.visible=false;
			this["a"+e.target.id].visible=true;
			this.step++
		}else{
		Tween.get(this.drag, {loop:false}, true).to({x:this["c" + e.target.id].startX,y:this["c" + e.target.id].startY,alpha:1},100) 
			.set({visible:true},this["b" + e.target.id])
			.set({visible:false},this.blocker)
			.set({visible:false},this.drag)
			.set({visible:true},e.target)
		}
		
		if(this.step==9){
			//this.next.visible=true;
			for(var i = 0; i < 36; i++){
			
				this["a"+i].visible=false;
				this["b"+i].visible=false;
				this["c"+i].visible=false;
				this["ar"+i].visible=false;
			
			}
			this["n"+this.wariant].gotoAndStop(1);
			//this.wariant++
		}
	}
	p.tick = function(){
		//Here place code which will execute in every frame		
		this.stage.update();
	}
	
	wnd.lpcma084s01.lpc_ma_084_s01Engine = Engine;
	
}(window));