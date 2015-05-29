//namespace
window.lpcma045s01 = window.lpcma045s01||{};

(function(wnd){
	
	//constructor
	var Engine = function(resource, stage){
		if(ydpjs == null && wnd.lpcma045s01.ydpjs != undefined){
			ydpjs = wnd.lpcma045s01.ydpjs;
		}
		
		this.lib = wnd.lpcma045s01;
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
		this.reset=this.resource.reset;
		this.reset = new ydpjs.ButtonDecorator(this.reset);
		this.reset.onPress = ydpjs.Delegate.create(this,this._reset);
		this.blocker.visible=false;
		this.blocker.alpha=0.03;
		this.area1=this.resource.area1;
		this.area1.alpha=0.03;
		this.waga0=this.resource.waga0;
		this.waga1=this.resource.waga1;
		this.waga1.visible=false
		this.waga0.gotoAndStop(0)
		this.waga1.gotoAndStop(0)
		this.waga0.material.gotoAndStop(0)
		this.waga1.material.gotoAndStop(0)
		this.ety=this.resource.etykieta;
		this.th; //obejscie do Delegata;
		this.step=0;// etap na którym jest symulacja
		this.blocker.onPress = ydpjs.Delegate.create(this,this._block);
		this.ety.visible=false;
		
		/*this.myArr=["It weighs         .","It weighs           than         .","It weighs           than         .","less","more","1 kg"]
	

		this.txt1 = new Text("", " bold 22px Arial", "#000000");
		this.stage.addChild(this.txt1);
		this.txt1.x=355;
		this.txt1.y=40;
		this.txt1.textAlign = "center";
		
		this.txt2 = new Text("", " bold 22px Arial", "#CC0000");
		this.stage.addChild(this.txt2);
		this.txt2.x=328;
		this.txt2.y=40;
		//this.txt2.textAlign = "center";
		
		this.txt3 = new Text("", " bold 22px Arial", "#CC0000");
		this.stage.addChild(this.txt3);
		this.txt3.x=325;
		this.txt3.y=40;
		//this.txt3.textAlign = "center";
		
		this.txt4= new Text("", " bold 22px Arial", "#CC0000");
		this.stage.addChild(this.txt4);
		this.txt4.x=458;
		this.txt4.y=40;
		this.txt4.textAlign = "center";
		
		
		this.txt5= new Text("", " bold 22px Arial", "#CC0000");
		this.stage.addChild(this.txt5);
		this.txt5.x=400;
		this.txt5.y=40;
		this.txt5.textAlign = "center";*/
		
		
		for(var i = 0; i < 5; i++){
			this["drag" + i]= this.resource["drag" + i];
			this["drag" + i].visible=false;
			this["b" + i]= this.resource["b" + i];
			this["b" + i].id=i;
			this["b" + i].alpha=0.02;
			this["ob" + i]= this.resource["ob" + i];
			this["ob" + i].startX=this["ob" + i].x
			this["ob" + i].startY=this["ob" + i].y
			this["b" + i].onPress = ydpjs.Delegate.create(this,this._pressHandler);	
		}
		
		//Here place initialization code	
	}
	p._reset= function(e){
		for(var i = 0; i < 5; i++){
			this["ob" + i].visible=true;
			this["drag" + i].visible=false;
			this["b" + i].visible=true;
		}
		this.waga0.gotoAndStop(0);
		this.waga1.gotoAndStop(0);
		this.waga0.material.gotoAndStop(0);
		this.waga1.material.gotoAndStop(0);
		this.ety.visible=false;
		/*this.txt1.text=""
		this.txt2.text=""
		this.txt3.text=""
		this.txt4.text=""
		this.txt5.text=""*/
		this.blocker.visible=false;
	}
	p._block= function(e){}
	
	 p._pressHandler= function(e)
    { 
		/*this.txt1.text=""
		this.txt2.text=""
		this.txt3.text=""
		this.txt4.text=""
		this.txt5.text=""*/
		this.ety.visible=false;
		for(var i = 0; i < 5; i++){
			this["ob" + i].visible=true;
			this["drag" + i].visible=false;
			this["b" + i].visible=true;
		}
		this.waga0.gotoAndStop(0);
		this.waga1.gotoAndStop(0);
		this.waga0.material.gotoAndStop(0);
		this.waga1.material.gotoAndStop(0);
		this.blocker.visible=false;
		this["drag"+e.target.id].x=this.stage.mouseX;
		this["drag"+e.target.id].y=this.stage.mouseY;
		e.onMouseMove = ydpjs.Delegate.create(this, this._onMouseMove,e);
		e.onMouseUp   = ydpjs.Delegate.create(this, this._onMouseUp,e); 
		
	}
	
	p._onMouseMove = function(ev,e)
	{
		this.blocker.visible=true;
		this["drag"+e.target.id].visible=true;
		if(this["drag"+e.target.id].x<720){
		this["drag"+e.target.id].x=this.stage.mouseX;
		}else{
		this["drag"+e.target.id].x=700
		}
		this["drag"+e.target.id].y=this.stage.mouseY;
		
		this["ob" + e.target.id].visible=false;
		var pt = this.area1.globalToLocal(this.stage.mouseX, this.stage.mouseY);
        if(this.area1.hitTest(pt.x, pt.y)){
			
		}
	  
	}

	p._onMouseUp= function(ev,e)
	{ 
	var pt = this.area1.globalToLocal(this.stage.mouseX, this.stage.mouseY);
		if(this.area1.hitTest(pt.x, pt.y)){
			this.waga0.visible=false;
			this.waga1.visible=false;
			this.ety.visible=true;
				if(e.target.id<=1){
					this.ety.gotoAndStop(0)
				/*this.txt1.text=this.myArr[2]
				this.txt2.text=""
				this.txt3.text=""
				this.txt4.text=""
				this.txt5.text=this.myArr[5]*/
				this.blocker.visible=true;
				this.waga0.visible=true;
				this.waga0.gotoAndPlay(0);
				this.waga0.material.gotoAndStop(e.target.id+1);
				this["drag"+e.target.id].visible=false
				this["ob" + e.target.id].visible=false;
				this["b" + e.target.id].visible=false;
			//	this.txt1.text=this.myArr[0]
				}
				
				if(e.target.id>1&&e.target.id<4){
					this.ety.gotoAndStop(2)
				this.blocker.visible=false;
				this.waga0.visible=true;
				/*this.txt1.text=this.myArr[2]
				this.txt2.text=this.myArr[3]
				this.txt3.text=""
				this.txt4.text=this.myArr[5]
				this.txt5.text=""*/
				this.waga0.material.gotoAndStop(e.target.id+1);
				this.waga0.gotoAndStop(0);
				this["drag"+e.target.id].visible=false
				this["ob" + e.target.id].visible=false;
				this["b" + e.target.id].visible=false;
				}
				
				if(e.target.id>=4){
					this.ety.gotoAndStop(1)
					/*this.txt1.text=this.myArr[1]
					this.txt2.text="";
					this.txt3.text=this.myArr[4]
					this.txt4.text=this.myArr[5]
					this.txt5.text=""*/
				this.blocker.visible=true;
				this.waga1.visible=true;
				this.waga1.gotoAndPlay(0);
				this.waga1.material.gotoAndStop(e.target.id+1);
				this["drag"+e.target.id].visible=false
				this["ob" + e.target.id].visible=false;
				this["b" + e.target.id].visible=false;
				}
			
		}else{
		Tween.get(this["drag"+e.target.id], {loop:false}, true).to({x:this["ob" + e.target.id].startX,y:this["ob" + e.target.id].startY,alpha:1},1000,Ease.bounceOut) 
			.set({visible:false},this["drag"+e.target.id])
			.set({visible:true},this["ob" + e.target.id])
			.set({visible:true},this["b" + e.target.id])
			.set({visible:false},this.blocker);
		
		
		
		}
		
	}
	
	p.tick = function(){
				if(this.blocker.visible==true){
					this.reset.alpha=0.2;
					for(var i = 0; i < 5; i++){
					this["ob" + i].alpha=0.2;
					}
				
				}else{
					this.reset.alpha=1;
					for(var i = 0; i < 5; i++){
					this["ob" + i].alpha=1;
					}
				}
		this.stage.update();
	}
	
	wnd.lpcma045s01.lpc_ma_045_s01Engine = Engine;
	
}(window));