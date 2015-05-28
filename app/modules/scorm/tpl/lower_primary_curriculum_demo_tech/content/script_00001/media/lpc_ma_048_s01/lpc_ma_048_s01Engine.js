//namespace
window.lpcma048s01 = window.lpcma048s01||{};

(function(wnd){

	//constructor
	var Engine = function(resource, stage){
		if(ydpjs == null && wnd.lpcma048s01.ydpjs != undefined){
			ydpjs = wnd.lpcma048s01.ydpjs;
		}

		this.lib = wnd.lpcma048s01;
		
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
		this.welldone=false;
		this.reset=this.resource.reset;
		
		this.anim=this.resource.anim;
		this.allok=0;
		this.blocker=this.resource.blocker;
		this.blocker.onPress = ydpjs.Delegate.create(this,this._blok);
		this.blocker.alpha=0.02;
		this.blocker.visible = false;
		
		this.labMC=this.resource.label;
		this.labMC.scaleX = 1.5;
		this.labMC.scaleY = 1.5;
	
		this.label1=this.resource.label.txtNier1;
		this.label1.text="";
		this.label2=this.resource.label.txtNier2;
		this.label2.text="";
		this.label3=this.resource.label.txtNier3;
		this.label3.text="";
		this.label4=this.resource.label.txtNier4;
		this.label4.text="";
		this.label5=this.resource.label.txtNier5;
		this.label5.text="";
		
		this.myarray=[0,1,2,3,4,5,6,7,8,9];
		

		this.butsRow5 = [];
		this.butsRow6 = [];
		this.butsRow7 = [];
		this.butsRow8 = [];
		this.butsRow9 = [];
		
		this.anim.gotoAndStop(0);
		this.reset.onPress = ydpjs.Delegate.create(this,this._reset);
		this.initButs();
				
			
	}
	
	
	p._reset= function(event) {
		
		this.initButs();
			this.welldone=false;
			
		event.onMouseUp   = ydpjs.Delegate.create(this, this._onMouseUp2);
	}
	
	
	p._onMouseUp2= function(e)
	{ 
	this.reset.gotoAndStop(0)
		
	}

	p.shuffleArray= function(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
	}
	
	
	p.initButs = function()
	{
		this.oldX=0;
		this.oldY=0;
		this.rowSel=0;
		this.allok=0;
		
		this.anim.visible = false;
		this.blocker.visible=false;
		this.labMC.gotoAndStop(0);
		
		this.shuffleArray(this.myarray);
		for(var i = 0; i < 10; i++)
		{
			this.butsRow5[this.myarray[i]] = this.resource["d" + (51 + this.myarray[i])];
			this.butsRow5[this.myarray[i]].visible = true;
			this.butsRow5[this.myarray[i]].gotoAndStop(0);
			this.butsRow5[this.myarray[i]].txtNr.text = (51 + this.myarray[i]);
			this.butsRow5[this.myarray[i]].x = 36+72*i;
			this.butsRow5[this.myarray[i]].id=this.myarray[i];
			this.butsRow5[this.myarray[i]].idn=i;
			if (this.myarray[i]==i) 
			{	
				this.butsRow5[this.myarray[i]].gotoAndStop(1);
				this.butsRow5[this.myarray[i]].isCorr = true;
				this.allok++;
			}
			else
			{
				this.butsRow5[this.myarray[i]].isCorr = false;
			}
			this.butsRow5[this.myarray[i]].onPress = ydpjs.Delegate.create(this,this._pressHandler);
//			console.log(this.butsRow5[this.myarray[i]].idn);
			
		}		
			
		this.shuffleArray(this.myarray);
		for(var i = 0; i < 10; i++)
		{
			this.butsRow6[this.myarray[i]] = this.resource["d" + (61 + this.myarray[i])];
			this.butsRow6[this.myarray[i]].visible = true;
			this.butsRow6[this.myarray[i]].gotoAndStop(0);
			this.butsRow6[this.myarray[i]].txtNr.text = (61 + this.myarray[i]);
			this.butsRow6[this.myarray[i]].x = 36+72*i;
			this.butsRow6[this.myarray[i]].id=this.myarray[i];
			this.butsRow6[this.myarray[i]].idn=i;
			if (this.myarray[i]==i) {
				this.butsRow6[this.myarray[i]].gotoAndStop(1);
				this.butsRow6[this.myarray[i]].isCorr = true;
				this.allok++;
				}
			else
			{
				this.butsRow6[this.myarray[i]].isCorr = false;
			}
			this.butsRow6[this.myarray[i]].onPress = ydpjs.Delegate.create(this,this._pressHandler);
		}
		
		
		this.shuffleArray(this.myarray);
		for(var i = 0; i < 10; i++)
		{
			this.butsRow7[this.myarray[i]] = this.resource["d" + (71 + this.myarray[i])];
			this.butsRow7[this.myarray[i]].visible = true;
			this.butsRow7[this.myarray[i]].gotoAndStop(0);
			this.butsRow7[this.myarray[i]].txtNr.text = (71 + this.myarray[i]);
			this.butsRow7[this.myarray[i]].x = 36+72*i;
			this.butsRow7[this.myarray[i]].id=this.myarray[i];
			this.butsRow7[this.myarray[i]].idn=i;
			if (this.myarray[i]==i) {
				this.butsRow7[this.myarray[i]].gotoAndStop(1);
				this.butsRow7[this.myarray[i]].isCorr = true;
				this.allok++;
			}
			else
			{
				this.butsRow7[this.myarray[i]].isCorr = false;
			}
			this.butsRow7[this.myarray[i]].onPress = ydpjs.Delegate.create(this,this._pressHandler);
		}
		
		this.shuffleArray(this.myarray);
		for(var i = 0; i < 10; i++)
		{
			this.butsRow8[this.myarray[i]] = this.resource["d" + (81 + this.myarray[i])];
			this.butsRow8[this.myarray[i]].visible = true;
			this.butsRow8[this.myarray[i]].gotoAndStop(0);
			this.butsRow8[this.myarray[i]].txtNr.text = (81 + this.myarray[i]);
			this.butsRow8[this.myarray[i]].x = 36+72*i;
			this.butsRow8[this.myarray[i]].id=this.myarray[i];
			this.butsRow8[this.myarray[i]].idn=i;
			if (this.myarray[i]==i) {
				this.butsRow8[this.myarray[i]].gotoAndStop(1);
				this.butsRow8[this.myarray[i]].isCorr = true;
				this.allok++;
				}
			else
			{
				this.butsRow8[this.myarray[i]].isCorr = false;
			}
			this.butsRow8[this.myarray[i]].onPress = ydpjs.Delegate.create(this,this._pressHandler);
		}
		
		
		this.shuffleArray(this.myarray);
		for(var i = 0; i < 10; i++)
		{
			this.butsRow9[this.myarray[i]] = this.resource["d" + (91 + this.myarray[i])];
			this.butsRow9[this.myarray[i]].visible = true;
			this.butsRow9[this.myarray[i]].gotoAndStop(0);
			this.butsRow9[this.myarray[i]].txtNr.text = (91 + this.myarray[i]);
			this.butsRow9[this.myarray[i]].x = 36+72*i;
			this.butsRow9[this.myarray[i]].id=this.myarray[i];
			this.butsRow9[this.myarray[i]].idn=i;
			if (this.myarray[i]==i) 
				{
				this.butsRow9[this.myarray[i]].gotoAndStop(1);
				this.butsRow9[this.myarray[i]].isCorr = true;
				this.allok++;
				}
			else
			{
				this.butsRow9[this.myarray[i]].isCorr = false;
			}
			this.butsRow9[this.myarray[i]].onPress = ydpjs.Delegate.create(this,this._pressHandler);
		}
		
		//console.log(this.allok);
		
		
	}
	
	p._pressHandler= function(e)
    { 
		this.stage.removeChild(this.blocker);
		this.stage.addChild(this.blocker);
		this.blocker.visible = true;
		
		this.stage.removeChild(e.target);
		this.stage.addChild(e.target);
		this.oldX=e.target.x;

		if (e.target.y<72) this.rowSel = 1;
		else if (e.target.y>72 && e.target.y<144) this.rowSel = 2;
		else if (e.target.y>144 && e.target.y<216) this.rowSel = 3;
		else if (e.target.y>216 && e.target.y<288) this.rowSel = 4;
		else if (e.target.y>288 && e.target.y<360) this.rowSel = 5;
		
		
//		console.log(this.rowSel);

		e.onMouseMove = ydpjs.Delegate.create(this, this._onMouseMove,e);
		e.onMouseUp   = ydpjs.Delegate.create(this, this._onMouseUp,e); 
		
	
	}
	
	p._onMouseMove = function(ev,e)
	{
		e.target.x=this.stage.mouseX;
		
		switch (this.rowSel) {
		case 1:
			this.dispLabel(ev, this.butsRow5, e);
			break;
		case 2:
			this.dispLabel(ev, this.butsRow6, e);
			break;
		case 3:
			this.dispLabel(ev, this.butsRow7, e);
			break;
		case 4:
			this.dispLabel(ev, this.butsRow8, e);
			break;
		case 5:
			this.dispLabel(ev, this.butsRow9, e);
			break;
		default:
			this.rowSel=0;
			break;
					
		
		}
		
	}
	
	p._onMouseUp= function(ev,e)
	{ 
		
		switch (this.rowSel) {
		case 1:
			this.dragDrop(ev, this.butsRow5, e);
			break;
		case 2:
			this.dragDrop(ev, this.butsRow6, e);
			break;
		case 3:
			this.dragDrop(ev, this.butsRow7, e);
			break;
		case 4:
			this.dragDrop(ev, this.butsRow8, e);
			break;
		case 5:
			this.dragDrop(ev, this.butsRow9, e);
			break;
		default:
			this.rowSel=0;
			break;
		

		}
		
	}
	
	p.dispLabel= function(ev, row, e) {
			var numA = 0;
			var numB = 0;
			for(var i = 0; i <this.myarray.length; i++){
			var pt = row[i].globalToLocal(this.stage.mouseX, this.stage.mouseY);
			
			//if(row[i].hitTest(pt.x,pt.y) ){
			
			if ( Math.abs(row[i].x - e.target.x) < 36 ) {
				if(row[i].idn!=e.target.idn){
					numB = (this.rowSel-1)*10 + row[i].id + 51;
					numA = (this.rowSel-1)*10 + e.target.id + 51;
	
					
					if (numA>numB) 
					this.label3.text=" > ";
					else
					this.label3.text=" < ";
					
					
					if (this.rowSel==5 && e.target.id==9) 
					this.labMC.gotoAndStop(3);
					else if (this.rowSel==5 && row[i].id==9) 
					this.labMC.gotoAndStop(4);
					else if ((e.target.id %9==0 && e.target.id!=0) || (row[i].id %9==0 && row[i].id!=0)) 
					this.labMC.gotoAndStop(1);
					else
					this.labMC.gotoAndStop(2);
					
						if (e.target.id %9==0 && e.target.id!=0) 
						{
							this.label1.text=5 + this.rowSel;
							this.label2.text="0";
//							console.log(e.target.id);
						}
						else
						{
							
							this.label1.text=4 + this.rowSel;
							this.label2.text=e.target.id+1;
						}
						
						
						if (row[i].id %9==0 && row[i].id!=0) 
						{
							
							this.label4.text=5 + this.rowSel;
							this.label5.text="0";
						}
						else
						{
							
							this.label4.text=4 + this.rowSel;
							this.label5.text=row[i].id+1;
						}
														
					
				}
			}
		}
	
	}
	
	p.dragDrop= function(ev, row, e) {
	
		var done=false;
//		var good=0
		var oldIdn
//		var row = [];

		
		for(var i = 0; i <this.myarray.length; i++){
			var pt = row[i].globalToLocal(this.stage.mouseX, this.stage.mouseY);
			//if(row[i].hitTest(pt.x,pt.y) ){
			if ( Math.abs(row[i].x - e.target.x) < 36 ) {
				if(row[i].idn!=e.target.idn){
					
					var oldIdn=row[i].idn;
					row[i].idn=e.target.idn;
					e.target.idn=oldIdn;
					this.stage.removeChild(e.target);
					this.stage.addChild(e.target)
					this.stage.removeChild(row[i])
					this.stage.addChild(row[i])
					
					this.stage.removeChild(this.blocker);
					this.stage.addChild(this.blocker);
					this.blocker.visible = true;
					Tween.get(e.target, {loop:false}, true).to({x:row[i].x,y:(36+72*(this.rowSel-1)),alpha:1},500,Ease.bounceOut)//.set({visible:false},this.blocker) 
					Tween.get(row[i], {loop:false}, true).to({x:this.oldX,y:(36+72*(this.rowSel-1)),alpha:1},500,Ease.bounceOut).set({visible:false},this.blocker) 
					
					if (row[i].id==row[i].idn) {
						row[i].gotoAndStop(1);
						if (row[i].isCorr==false)
							{
								this.allok++;
								row[i].isCorr=true;
							}
						}
						else {
							row[i].gotoAndStop(0);
							if (row[i].isCorr==true)
								{
								this.allok--;
								row[i].isCorr=false;
								}
							}
							
					if (e.target.id==e.target.idn) {
							e.target.gotoAndStop(1);
							if (e.target.isCorr==false)
							{
								this.allok++;
								e.target.isCorr=true;
							}
						}
						else {
							e.target.gotoAndStop(0);
							if (e.target.isCorr==true)
							{
								this.allok--;
								e.target.isCorr=false;
							}
							
							}

					done=true;
					break;
				}
			}
		}
	
			if(done==false){
					this.stage.removeChild(this.blocker);
					this.stage.addChild(this.blocker);
					this.blocker.visible = true;
					Tween.get(e.target, {loop:false}, true).to({x:this.oldX,y:(36+72*(this.rowSel-1)),alpha:1},500,Ease.bounceOut).set({visible:false},this.blocker) 

				}
    this.label1.text="";
	this.label2.text="";
	this.label3.text="";
	this.label4.text="";
	this.label5.text="";
	this.labMC.gotoAndStop(0);
	
    return row;
	}
	
	p._blok= function(){}

	p.tick = function(){
					
		if (this.allok==50&&this.welldone==false){
				
				this.anim.gotoAndPlay();
				this.anim.visible=true;
				this.welldone=true;
				
				this.stage.removeChild(this.blocker)
				this.stage.addChild(this.blocker)
				this.stage.removeChild(this.reset);
				this.stage.addChild(this.reset);
				this.blocker.onPress = ydpjs.Delegate.create(this,this._blok);
				for(var i = 0; i <this.myarray.length; i++){
					this.butsRow5[i].visible = false;
					this.butsRow6[i].visible = false;
					this.butsRow7[i].visible = false;
					this.butsRow8[i].visible = false;
					this.butsRow9[i].visible = false;
				}
				
				}
		this.stage.update();
	}

 	

	wnd.lpcma048s01.lpc_ma_048_s01Engine = Engine;

}(window));