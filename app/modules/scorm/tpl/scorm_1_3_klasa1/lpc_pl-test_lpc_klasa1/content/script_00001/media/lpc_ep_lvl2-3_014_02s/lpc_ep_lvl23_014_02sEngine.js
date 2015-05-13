//namespace
window.lpceplvl2301402s = window.lpceplvl2301402s||{};

(function(wnd){
	
	//constructor
	var Engine = function(resource, stage){
		if(ydpjs == null && wnd.lpceplvl2301402s.ydpjs != undefined){
			ydpjs = wnd.lpceplvl2301402s.ydpjs;
		}
		
		this.lib = wnd.lpceplvl2301402s;
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
		
		//Here place initialization code
		
		var slider = new ydpjs.Slider(this.resource.sliderClip);
		slider.onChange = ydpjs.Delegate.create(this, this._onSliderChange);
		this.resource.anim.gotoAndStop(0);	
	}
	
	p._onSliderChange = function(event)
	{
		
		var fr = Math.round((200-1) * event.target._value);
		this.resource.anim.gotoAndStop(fr);
	}
	
	p.tick = function(){
		//Here place code which will execute in every frame		
		this.stage.update();
	}
	
	wnd.lpceplvl2301402s.lpc_ep_lvl23_014_02sEngine = Engine;
	
}(window));