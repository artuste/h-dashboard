//namespace
window.lpcll1601s = window.lpcll1601s||{};

(function(wnd){
	
	//constructor
	var Engine = function(resource, stage){
		if(ydpjs == null && wnd.lpcll1601s.ydpjs != undefined){
			ydpjs = wnd.lpcll1601s.ydpjs;
		}
		
		this.lib = wnd.lpcll1601s;
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
		this.arr =[0,1,2,3,4,5,6,7,8,9,10,11];
		this._shuffle(this.arr);
		this.openCard=0;
		this.wait=0;
		this.arrCard=[[],[]];
		this.reset=this.resource.reset;
		this.reset = new ydpjs.ButtonDecorator(this.reset);
		this.reset.onPress = ydpjs.Delegate.create(this,this._reset);
		this.step=0;
		this.last=this.resource.last;
		this.last.visible=false;
		this.blocker= this.resource.blocker;
		this.blocker.alpha=0.02;
		this.blocker.visible=false;
		this.timerStart=false;
		this.blocker.onPress= ydpjs.Delegate.create(this,this._blok);
		
	
		
		for(var i = 0; i < 12; i++){
			this["a" + i]=this.resource["a" + i];
			this["b" + i]=this.resource["b" + i];
			this["b" + i].pressed=false;
			this["b" + i].onPress = ydpjs.Delegate.create(this, this.fPress);
			this["b" + i].onMouseOver = ydpjs.Delegate.create(this, this.fOver);
			this["b" + i].onMouseOut = ydpjs.Delegate.create(this, this.fOut);
			this["b" + i].alpha=0.02;
			this["b" + i].id=i
			this["a" + i].id=Number(this.arr[i]+3)
			if(Number(this.arr[i]+3)<9){
				this["a" + i].gotoAndStop(0)
			}else{
				this["a" + i].gotoAndStop(1)
			}
			
			
			}
	}
	p._blok = function(e){
		
		}
	p._cliker=function(){
		this.anim.visible=false;
		this.blocker.visible=false;
	}
	p._check=function(){
		
		
		if(Math.abs(this.arrCard[0][1]-this.arrCard[1][1])==6){
			this["a" +this.arrCard[0][0]].visible=false;
			this["a" +this.arrCard[1][0]].visible=false;
			this["b" +this.arrCard[0][0]].visible=false;
			this["b" +this.arrCard[1][0]].visible=false;
			//this.anim.visible=true;
			this.openCard=0;
			
			this.arrCard=[[],[]];
			this.step++;
			if(this.step==6){
				this.last.visible=true;
			
			}
			var instance = SoundJS.play("ok", SoundJS.INTERRUPT_EARLY, 0,0, 0);
		}else{
			if(this.arrCard[0][1]<9){
				this["a" +this.arrCard[0][0]].gotoAndStop(0)
				
			}else{
				this["a" +this.arrCard[0][0]].gotoAndStop(1)
			}
			if(this.arrCard[1][1]<9){
				this["a" +this.arrCard[1][0]].gotoAndStop(0)
			}else{
				this["a" +this.arrCard[1][0]].gotoAndStop(1)
			}
			this["b" +this.arrCard[0][0]].pressed=false;
			this["b" +this.arrCard[1][0]].pressed=false;
			this.openCard=0;
			this.arrCard=[[],[]]
			var instance = SoundJS.play("wrong", SoundJS.INTERRUPT_EARLY, 0,0, 0);
			this.blocker.visible=false;
		}
		
	}
	p.fPress = function(e) {
		if(e.target.pressed==false){
			e.target.pressed=true
			this["a" + e.target.id].gotoAndStop(this["a" + e.target.id].id)
			this.arrCard[this.openCard][0]= e.target.id
			this.arrCard[this.openCard][1]= this["a" + e.target.id].id
			this.openCard++
		}
		else if(e.target.pressed==true){
			e.target.pressed=false;
			if(Number((this["a" + e.target.id].id))<9){
				this["a" + e.target.id].gotoAndStop(0)
			}else{
				this["a" + e.target.id].gotoAndStop(1)
			}
			this.openCard--
			
		}
	
		if(this.openCard==2){
		this.blocker.visible=true;
		this.timerStart=true;
		
		}
	}
	p.fOver = function(e) {
		if(e.target.pressed==false){
		this["a" + e.target.id].gotoAndStop(2);
		}
	}
	
	p.fOut = function(e) {
		if(e.target.pressed==false){
		if(Number((this["a" + e.target.id].id))<9){
				this["a" + e.target.id].gotoAndStop(0)
			}else{
				this["a" + e.target.id].gotoAndStop(1)
			}
		}
		
	}
	p._reset= function(event) {
		this.arr =[0,1,2,3,4,5,6,7,8,9,10,11];
		this._shuffle(this.arr);
		this.openCard=0;
		this.wait=0;
		this.arrCard=[[],[]];
		this.last.visible=false;
		this.step=0;
		for(var i = 0; i < 12; i++){
			this["b" + i].visible=true;
			this["a" + i].visible=true
			this["b" + i].pressed=false;
			this["b" + i].alpha=0.02;
			this["b" + i].id=i
			this["a" + i].id=Number(this.arr[i]+3)
			if(Number(this.arr[i]+3)<9){
				this["a" + i].gotoAndStop(0)
			}else{
				this["a" + i].gotoAndStop(1)
			}
		
		}
		
	}
	p._shuffle =function(array) {
    var counter = array.length, temp, index;
		while (counter > 0) {
			index = Math.floor(Math.random() * counter);
			counter--
			temp = array[counter];
			array[counter] = array[index];
			array[index] = temp;
		}

		return array;
	}
	p.tick = function(){
		if(this.timerStart==true){
			this.wait++;
			if(this.wait==15){
			this.wait=0;
			this.blocker.visible=false;
			this.timerStart=false;
				this._check();
			}
		}
		this.stage.update();
		
	}
	
	wnd.lpcll1601s.lpc_ll_16_01sEngine = Engine;
	
}(window));