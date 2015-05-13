//namespace
window.lpcma083s01 = window.lpcma083s01||{};

(function(wnd){
	
	//constructor
	var Engine = function(resource, stage){
		if(ydpjs == null && wnd.lpcma083s01.ydpjs != undefined){
			ydpjs = wnd.lpcma083s01.ydpjs;
		}
		
		this.lib = wnd.lpcma083s01;
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
		this.blocker=this.resource.blocker;
		this.blocker.visible=false;
		this.blocker.alpha=0.02;
		this.reset=this.resource.reset;
		this.reset = new ydpjs.ButtonDecorator(this.reset);
		this.reset.onPress = ydpjs.Delegate.create(this,this._reset);
		this.drag=this.resource.drag;
		this.drag.visible=false;
		this.area=this.resource.area;
		this.area.alpha=0.01;
		this.licznik=0
		this.b0Arr=[0];
		this.b1Arr=[1];
		this.b2Arr=[2];
		this.b3Arr=[3];
		this.b4Arr=[4];
		this.b5Arr=[5];
		this.b6Arr=[6];
		this.b7Arr=[7];
		this.b8Arr=[8];
		this.b9Arr=[9];
		this.b10Arr=[10];
		
		
		this.d0Arr=[];
		this.d1Arr=[];
		this.d2Arr=[];
		this.d3Arr=[];
		this.d4Arr=[];
		this.d5Arr=[];
		this.d6Arr=[];
		this.d7Arr=[];
		this.d8Arr=[];
		this.d9Arr=[];
		this.d10Arr=[];
		this.txt = new Text("0", " bold 25px Trebuchet MS", "#000000");
		this.txt.x = 655;
		this.txt.y = 278;
		this.txt.textAlign="center"
		this.stage.addChild(this.txt);
		for(var i = 0; i < 10; i++){
			this["a" + i]=this.resource["a" + i];
			this["a" + i].alpha=0.01;
			this["a" + i].id=i;
			this["a" + i].onPress = ydpjs.Delegate.create(this,this._pressHandler1);
			this["b" + i]=this.resource["b" + i];
			this["b" + i].startX=this["b" + i].x
			this["b" + i].startY=this["b" + i].y
			this["c" + i]=this.resource["c" + i];
			this["d" + i]=this.resource["d" + i];
			this["d" + i].visible=false;
			this["b" + i].id=i;
			this["b" + i].alpha=0.01;
			this["b" + i].onPress = ydpjs.Delegate.create(this,this._pressHandler);
			}		
	}
	 p._reset= function(e)
    { 
		this.licznik=0
		this.b0Arr=[0];
		this.b1Arr=[1];
		this.b2Arr=[2];
		this.b3Arr=[3];
		this.b4Arr=[4];
		this.b5Arr=[5];
		this.b6Arr=[6];
		this.b7Arr=[7];
		this.b8Arr=[8];
		this.b9Arr=[9];
		this.b10Arr=[10];
		
		
		this.d0Arr=[];
		this.d1Arr=[];
		this.d2Arr=[];
		this.d3Arr=[];
		this.d4Arr=[];
		this.d5Arr=[];
		this.d6Arr=[];
		this.d7Arr=[];
		this.d8Arr=[];
		this.d9Arr=[];
		this.d10Arr=[];
		this.txt.text="0";
		for(var i = 0; i < 10; i++){
			
			this["a" + i].alpha=0.01;
			this["d" + i].visible=false;
			this["c" + i].visible=true;
			this["b" + i].alpha=0.01;
			
			}		
	}
	 p._pressHandler= function(e)
    { 
		if(this.licznik>0){
		if(this["b"+this.licznik+"Arr"].length!=0&&this["b"+Number(this.licznik-1)+"Arr"].length==0 && e.target.id==this.licznik){
			this.drag.visible=true;
			this.drag.x=this.stage.mouseX;
			this.drag.y=this.stage.mouseY;
			this["c"+this.licznik].visible=false;
			e.onMouseMove = ydpjs.Delegate.create(this, this._onMouseMove,e);
			e.onMouseUp   = ydpjs.Delegate.create(this, this._onMouseUp,e); 
		}
		}
		if(this.licznik==0&& e.target.id==this.licznik){
			this.drag.visible=true;
			this.drag.x=this.stage.mouseX;
			this.drag.y=this.stage.mouseY;
			this["c"+this.licznik].visible=false;
			e.onMouseMove = ydpjs.Delegate.create(this, this._onMouseMove,e);
			e.onMouseUp   = ydpjs.Delegate.create(this, this._onMouseUp,e); 
		}
		
	}
	
	
	 p._pressHandler1= function(e)
    { 
		if(this["d"+1+"Arr"].length!=0&&e.target.id==0){return};
		if(this["d"+3+"Arr"].length!=0&&e.target.id==2){return};
		if(this["d"+5+"Arr"].length!=0&&e.target.id==4){return};
		if(this["d"+7+"Arr"].length!=0&&e.target.id==6){return};
		if(this["d"+9+"Arr"].length!=0&&e.target.id==8){return};
		if(this["d"+e.target.id+"Arr"].length!=0){
			this["d"+e.target.id].visible=false;
			this.drag.visible=true;
			this.drag.x=this.stage.mouseX;
			this.drag.y=this.stage.mouseY;

			e.onMouseMove = ydpjs.Delegate.create(this, this._onMouseMove,e);
			e.onMouseUp   = ydpjs.Delegate.create(this, this._onMouseUp1,e); 
		}
	}
	
	
	p._onMouseMove = function(ev,e)
	{
		this.blocker.visible=true;
		this.drag.visible=true;
		this.drag.x=this.stage.mouseX;
		this.drag.y=this.stage.mouseY;
		
		
	  
	}
	p._onMouseUp1= function(ev,e)
	{ 
		
		this.licznik--
		this.txt.text=this.licznik*100;
		if(this.licznik==0){this.txt.text="0"}
		this["d"+e.target.id+"Arr"].shift();
		this["b"+this.licznik+"Arr"].push(this.licznik)
		Tween.get(this.drag, {loop:false}, true).to({x:this["b" +this.licznik].startX,y:this["b" + this.licznik].startY,alpha:1},100) 
			.set({visible:false},this.drag)
			.set({visible:true},this["c" + this.licznik])
			.set({visible:false},this.blocker)
			
	
	}
	p._onMouseUp= function(ev,e)
	{ 
	var pt = this.area.globalToLocal(this.stage.mouseX, this.stage.mouseY);

	
		if(this.area.hitTest(pt.x, pt.y)){
			this.drag.visible=false;
			this.licznik++
			this.txt.text=this.licznik*100;
			this["b"+e.target.id+"Arr"].shift();
			if(this.d0Arr.length==0){
			this.d0.visible=true;
			this.d0Arr.push(e.target.id)
				
			}else if(this.d1Arr.length==0){
				
			this.d1.visible=true;
			this.d1Arr.push(this.licznik)
			
			}else if(this.d2Arr.length==0){
				
			this.d2.visible=true;
			this.d2Arr.push(e.target.id)
			
			}else if(this.d3Arr.length==0){
				
			this.d3.visible=true;
			this.d3Arr.push(e.target.id)
			
			}else if(this.d4Arr.length==0){
				
			this.d4.visible=true;
			this.d4Arr.push(e.target.id)
			
			}else if(this.d5Arr.length==0){
				
			this.d5.visible=true;
			this.d5Arr.push(e.target.id)
			
			}else if(this.d6Arr.length==0){
				
			this.d6.visible=true;
			this.d6Arr.push(e.target.id)
			
			}else if(this.d7Arr.length==0){
				
			this.d7.visible=true;
			this.d7Arr.push(e.target.id)
			
			}else if(this.d8Arr.length==0){
				
			this.d8.visible=true;
			this.d8Arr.push(e.target.id)
			
			}else if(this.d9Arr.length==0){
				
			this.d9.visible=true;
			this.d9Arr.push(e.target.id)
			
			}else if(this.d10Arr.length==0){
				
			this.d10.visible=true;
			this.d10Arr.push(e.target.id)
			
			}
			
		}else{
			
		Tween.get(this.drag, {loop:false}, true).to({x:this["b" + e.target.id].startX,y:this["b" + e.target.id].startY,alpha:1},100) 
			.set({visible:false},this.drag)
			.set({visible:true},this["c" + e.target.id])
			.set({visible:false},this.blocker)
			
		
		
		}
		
	}
	p.tick = function(){
		//Here place code which will execute in every frame		
		this.stage.update();
	}
	
	wnd.lpcma083s01.lpc_ma_083_s01Engine = Engine;
	
}(window));