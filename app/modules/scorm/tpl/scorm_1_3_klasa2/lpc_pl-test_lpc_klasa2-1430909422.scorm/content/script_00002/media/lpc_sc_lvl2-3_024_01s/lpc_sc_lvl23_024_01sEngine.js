//namespace
window.lpcsclvl2302401s = window.lpcsclvl2302401s||{};

(function(wnd){
	
	//constructor
	var Engine = function(resource, stage){
		if(ydpjs == null && wnd.lpcsclvl2302401s.ydpjs != undefined){
			ydpjs = wnd.lpcsclvl2302401s.ydpjs;
		}
		
		this.lib = wnd.lpcsclvl2302401s;
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
		this.licznik0=1;
		this.licznik1=1;
		this.panel0=this.resource.panel0;
		this.panel0.gotoAndStop(0);
		this.button0=this.resource.button0;
		this.button1=this.resource.button1;
		this.button0.alpha=0.2;
		this.button1.alpha=0.2;
		this.reset=this.resource.reset;
		this.reset = new ydpjs.ButtonDecorator(this.reset);
		this.reset.onPress = ydpjs.Delegate.create(this,this._reset);
		
		this.button0.onPress = ydpjs.Delegate.create(this,this._choice0);	
		this.button1.onPress = ydpjs.Delegate.create(this,this._choice1);
		for(var i = 0; i < 4; i++){
			this["c"+i]=this.resource["c"+i];
			this["d"+i]=this.resource["d"+i];
			this["b" + i]= this.resource["b" + i];
			this["a" + i]= this.resource["a" + i];
			this["a" + i].id=i;
			this["b" + i].id=i;
			
			this["a" + i].alpha=0.0;
			this["b" + i].alpha=0.0;
			this["a" + i].onPress = ydpjs.Delegate.create(this,this._pressHandler0);	
			 this["b" + i].onPress = ydpjs.Delegate.create(this,this._pressHandler1);	
			
			
			}	
			this["c"+0].gotoAndStop(10)
			this["d"+0].gotoAndStop(10)
			this["c"+1].gotoAndStop(1)
			this["d"+1].gotoAndStop(1)
			this["a" + 1].alpha=0.2;
			this["b" + 1].alpha=0.2;
			for(var i = 0; i < 4; i++){
			
			this["d"+i].visible=false;
			this["b" + i].visible=false;
			
			
			
			
			
			}	
			 
	}
	p._choice0= function(e)
    {
		this.panel0.gotoAndStop(0);
		for(var i = 0; i < 4; i++){
			this["d"+i].visible=false;
			this["b" + i].visible=false;
			this["c"+i].visible=true;
			this["a" + i].visible=true;
			}	
	}
	p._choice1= function(e)
    {
		this.panel0.gotoAndStop(1);
		for(var i = 0; i < 4; i++){
			this["c"+i].visible=false;
			this["a" + i].visible=false;
			this["d"+i].visible=true;
			this["b" + i].visible=true;
			}	
	}
	p._reset= function(e)
    {
		this.panel0.gotoAndStop(0);
		for(var i = 0; i < 4; i++){
			
			this["d"+i].visible=false;
			this["b" + i].visible=false;
			this["c"+i].visible=true;
			this["a" + i].visible=true;
			}	
		for(var i = 0; i < 4; i++){
			this["a" + i].alpha=0.0;
			this["b" + i].alpha=0.0;
			this["c" + i].gotoAndStop(0);
			this["d" + i].gotoAndStop(0);
		}
		this.licznik0=1;
		this.licznik1=1;
		this["c"+0].gotoAndStop(10)
			this["d"+0].gotoAndStop(10)
			this["c"+1].gotoAndStop(1)
			this["d"+1].gotoAndStop(1)
			this["a" + 1].alpha=0.2;
			this["b" + 1].alpha=0.2;
		
		
	}
	p._pressHandler0 = function(event)
	{
		
		this["c"+this.licznik0].gotoAndPlay(2)
		this["a" + this.licznik0].alpha=0.0;
		if(this.licznik0<3){
		this.licznik0++
		this["c"+this.licznik0].gotoAndStop(1)
		this["a" + this.licznik0].alpha=0.2;
		}
	}
	p._pressHandler1 = function(event)
	{
		
		this["d"+this.licznik1].gotoAndPlay(2)
		this["b" + this.licznik1].alpha=0.0;
		if(this.licznik1<3){
		this.licznik1++
		this["d"+this.licznik1].gotoAndStop(1)
		this["b" + this.licznik1].alpha=0.2;
		}
	}
	p.tick = function(){
		//Here place code which will execute in every frame		
		this.stage.update();
	}
	
	wnd.lpcsclvl2302401s.lpc_sc_lvl23_024_01sEngine = Engine;
	
}(window));