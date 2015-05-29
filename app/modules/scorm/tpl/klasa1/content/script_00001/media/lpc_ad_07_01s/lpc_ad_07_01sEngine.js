//namespace
window.lpcad0701s = window.lpcad0701s||{};

(function(wnd){
	
	//constructor
	var Engine = function(resource, stage){
		if(ydpjs == null && wnd.lpcad0701s.ydpjs != undefined){
			ydpjs = wnd.lpcad0701s.ydpjs;
		}
		
		this.lib = wnd.lpcad0701s;
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
		
		this.resource.gotoAndStop(0);
		
		this.arr = [];
		this.obrazy = [[1,3,5,7],[0,2,4,6]];
		
		for(var i=0; i<8; i++){
			this.arr.push({mc:this.resource['mc' + i], btn:this.resource['btn' + i], pic:this.resource['pic' + i]});
			this.arr[i].btn.sx = this.arr[i].btn.x;
			this.arr[i].btn.sy = this.arr[i].btn.y;
			this.arr[i].mc.sx = this.arr[i].mc.x;
			this.arr[i].mc.sy = this.arr[i].mc.y;
			this.arr[i].btn.id = i;
			this.arr[i].btn.onPress = ydpjs.Delegate.create(this, this._pressHandler);
		}
		
		this.reset=this.resource.reset;
		this.reset = new ydpjs.ButtonDecorator(this.reset);
		this.reset.onPress = ydpjs.Delegate.create(this,this._reset);
		
		this._reset();
		
		//Here place initialization code	
	}
	
	p._pressHandler = function(e){
		this.btn = e.target;
		e.nativeEvent.preventDefault && e.nativeEvent.preventDefault();
		e.onMouseMove = ydpjs.Delegate.create(this, this._onMouseMove);
		e.onMouseUp   = ydpjs.Delegate.create(this, this._onMouseUp); 
	}
	
	p._onMouseMove = function(e){
		this.btn.x = this.stage.mouseX;
		this.btn.y = this.stage.mouseY;
		this.arr[this.btn.id].mc.x = this.arr[this.btn.id].mc.sx + this.btn.x - this.btn.sx;
		this.arr[this.btn.id].mc.y = this.arr[this.btn.id].mc.sy + this.btn.y - this.btn.sy;
	}

	p._onMouseUp = function(e){
		this.btn.x = this.btn.sx;
		this.btn.y = this.btn.sy;
		this.arr[this.btn.id].mc.x = this.arr[this.btn.id].mc.sx;
		this.arr[this.btn.id].mc.y = this.arr[this.btn.id].mc.sy;
		
		for(var i=0; i<2; i++){
			var obraz = this.resource['obraz' + i];
			if(this.stage.mouseX > obraz.x - 110 && this.stage.mouseY > obraz.y - 130 && this.stage.mouseX < obraz.x + 110 && this.stage.mouseY < obraz.y + 130){
				if(this.obrazy[i].indexOf(this.btn.id) != -1){
					this.btn.visible = false;
					this.arr[this.btn.id].mc.visible = false;
					this.arr[this.btn.id].pic.visible = true;
				}
			}
		}
		
		var bool = true;
		for(i=0; i<this.arr.length; i++){
			if(!this.arr[i].pic.visible) bool = false;
		}
		
		if(bool) playSound("GOOD");
	}
	
	p._reset = function(e){
		for(var i=0; i<this.arr.length; i++){
			this.arr[i].mc.visible = true;
			this.arr[i].btn.visible = true;
			this.arr[i].pic.visible = false;
		}
	}
	
	p.tick = function(){
		//Here place code which will execute in every frame		
		this.stage.update();
	}
	
	
	
	wnd.lpcad0701s.lpc_ad_07_01sEngine = Engine;
	
}(window));