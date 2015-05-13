//namespace
window.lpcma018s01 = window.lpcma018s01||{};

(function(wnd){
	
	//constructor
	var Engine = function(resource, stage){
		if(ydpjs == null && wnd.lpcma018s01.ydpjs != undefined){
			ydpjs = wnd.lpcma018s01.ydpjs;
		}
		
		this.lib = wnd.lpcma018s01;
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
		this.karton= this.resource.karton;
		this.karton.gotoAndStop(0);
		this.licznik=0;
		this.text01= this.resource.text01;
		this.text01.visible=false
		this.text01.gotoAndStop(9);
		this.text02= this.resource.text02;
		this.text02.gotoAndStop(9);
		this.one= this.resource.one;
		this.zero= this.resource.zero;
		
		this.one.visible=false;
		this.zero.visible=false;
		
		this.reset=this.resource.reset;
		this.reset = new ydpjs.ButtonDecorator(this.reset);
		this.reset.onPress = ydpjs.Delegate.create(this,this._reset);
		for(var i = 0; i < 10; i++){
			this["a" + i]= this.resource["a" + i];
			this["b" + i]= this.resource["b" + i];
			this["b" + i].onPress = ydpjs.Delegate.create(this,this._cliker);
			this["b" + i].alpha=0.02;
			this["b" + i].id=i;
			this["b" + i].clik=false;
			
			
		}
	}
	 p._reset= function(e)
    {
		this.karton.gotoAndStop(0);
		this.text01.gotoAndStop(9);
		this.text02.gotoAndStop(9);
		for(var i = 0; i < 10; i++){
			this["a" + i].visible=true;
			this["b" + i].visible=true;
			
		}
		this.licznik=0;
		this.one.visible=false;
		this.zero.visible=false;
		this.text01.visible=false
	}
	p._cliker = function(e){
		this.text02.gotoAndStop(this.licznik);
		if(this.licznik==9){
			this.text01.gotoAndStop(0)}
		this.licznik++;
		
		this["a" + e.target.id].visible=false;
		this["b" + e.target.id].visible=false;
		this.karton.gotoAndStop(this.licznik);
		if(this.licznik==10){
			this.text01.visible=true;
			this.one.visible=true;
		this.zero.visible=true;
			this.karton.gotoAndPlay(this.licznik+1)}
	}
	p.tick = function(){
		//Here place code which will execute in every frame		
		this.stage.update();
	}
	
	wnd.lpcma018s01.lpc_ma_018_s01Engine = Engine;
	
}(window));