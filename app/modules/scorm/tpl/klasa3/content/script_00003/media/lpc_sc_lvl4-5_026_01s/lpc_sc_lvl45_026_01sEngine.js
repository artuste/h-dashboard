//namespace
window.lpcsclvl4502601s = window.lpcsclvl4502601s||{};

(function(wnd){
	
	//constructor
	var Engine = function(resource, stage){
		if(ydpjs == null && wnd.lpcsclvl4502601s.ydpjs != undefined){
			ydpjs = wnd.lpcsclvl4502601s.ydpjs;
		}
		
		this.lib = wnd.lpcsclvl4502601s;
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
		this.photo= this.resource.photo;
		this.blocker= this.resource.blocker;
		this.blocker.alpha=0.01;
		this.photo.gotoAndStop(0)
		this.info= this.resource.info;
		this.info.visible=false;
		this.info.close.gotoAndStop(0);
		
		this.info.close = new ydpjs.ButtonDecorator(this.info.close);
		
		this.blocker.visible=false;
		this.blocker.onPress= ydpjs.Delegate.create(this,this._blok);
		this.info.close.onPress= ydpjs.Delegate.create(this,this._close);
		for(var i = 0; i < 6; i++){
			this["a" + i]= this.resource["a" + i];
			this["a" + i].gotoAndStop(0);
			this["b" + i]= this.resource["b" + i];
			this["b" + i].alpha=0.01;
			this["b" + i].id=i
			this["b" + i].onPress = ydpjs.Delegate.create(this,this._cliker);	
		}
		
		for(var i = 0; i < 4; i++){
			this["c" + i]= this.resource["c" + i];
			this["c" + i].alpha=0.01;
			this["c" + i].id=i;
			this["c" + i].onPress = ydpjs.Delegate.create(this,this._cliker1);	
		}
		
		for(var i = 0; i < 5; i++){
			this["d" + i]= this.resource["d" + i];
			this["d" + i].gotoAndStop(1);
		}
		
		this["a" +0].gotoAndStop(1)
		
		//Here place initialization code	
	}
	p._blok = function(e){}
	p._close = function(e){
		this.info.visible=false;
		this.blocker.visible=false;
	}
	p._cliker = function(e){
		for(var i = 0; i < 6; i++){
			this["a" +i].gotoAndStop(0)
		}
		for(var i = 0; i < 5; i++){
			this["d" + i].gotoAndStop(Number(e.target.id)+1)
		}
		this["a" +e.target.id].gotoAndStop(1)
		this.photo.gotoAndStop(e.target.id)
	}
	p._cliker1 = function(e){
		this.info.visible=true;
		this.info.gotoAndStop(e.target.id)
		this.blocker.visible=true;
	}
	p.tick = function(){
		//Here place code which will execute in every frame		
		this.stage.update();
	}
	
	wnd.lpcsclvl4502601s.lpc_sc_lvl45_026_01sEngine = Engine;
	
}(window));