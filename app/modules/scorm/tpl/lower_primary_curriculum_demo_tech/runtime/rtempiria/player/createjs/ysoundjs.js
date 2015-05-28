/**
* SoundJS
* Visit http://createjs.com/ for documentation, updates and examples.
*
* Copyright (c) 2011 gskinner.com, inc.
* 
* Distributed under the terms of the MIT license.
* http://www.opensource.org/licenses/mit-license.html
*
* This notice shall be included in all copies or substantial portions of the Software.
*
* ver. 1.3.0-151 created from release_v0.2.0
**/
(function(e){function a(){throw"SoundJS cannot be instantiated";}a.DELIMITER="|";a.activePlugin=null;a.idHash={};a.registerPlugins=function(b){for(var f=0,c=b.length;f<c;f++){var d=b[f];if(d!=null&&d.isSupported())return a.activePlugin=new d,true}return false};a.registerPlugin=function(b){return b.isSupported()?(a.activePlugin=new b,true):false};a.isReady=function(){return a.activePlugin!=null};a.getCapabilities=function(){return a.activePlugin?a.activePlugin.capabilities:null};a.getCapability=function(b){return a.activePlugin==
null?null:a.activePlugin.capabilities[b]};a.getPreloadHandlers=function(){return{callback:a.proxy(a.initLoad,a),types:["sound"],extensions:["mp3","ogg","wav"]}};a.initLoad=function(b,f,c,d){if(!a.checkPlugin(true))return false;b=a.parsePath(b,f,c,d);if(b==null)return false;if(c!=null)a.idHash[c]=b.src;c=a.activePlugin.register(b.src,d);if(c!=null&&c.src)b.src=c.src;return b};a.parsePath=function(b,f,c,d){for(var b=b.split(a.DELIMITER),f={type:f||"sound",id:c,data:d},c=false,d=a.getCapabilities(),
e=0,g=b.length;e<g;e++){var i=b[e],j=i.lastIndexOf("."),k=i.substr(j+1).toLowerCase(),j=i.substr(0,j).split("/").pop();switch(k){case "mp3":d.mp3&&(c=true);break;case "ogg":d.ogg&&(c=true);break;case "wav":d.wav&&(c=true)}if(c)return f.name=j,f.src=i,f.extension=k,f}return null};a.checkPlugin=function(){return a.activePlugin==null&&(a.registerPlugin(a.DefaultAudioPlugin),a.activePlugin==null)?false:true};a.getSrcFromId=function(b){return a.idHash[b]==null?b:a.idHash[b]};a.tellAllInstances=function(a,
f){var c=e.empiriaSoundJsGetSoundInstances();if(this.activePlugin==null)return false;for(var d=this.getSrcFromId(f),h=c.length-1;h>=0;h--){var g=c[h];if(!(d!=null&&g.src!=d))switch(a){case "pause":g.pause();break;case "resume":g.resume();break;case "stop":g.stop()}}return true};a.proxy=function(a,f){return function(){return a.apply(f,arguments)}};a.play=function(b,f,c,d,e){b=a.getSrcFromId(b);b=a.activePlugin.create(b);b.play(null,c,d,e);return b};a.pause=function(b){return a.tellAllInstances("pause",
b)};a.resume=function(b){return a.tellAllInstances("resume",b)};a.stop=function(b){return a.tellAllInstances("stop",b)};e.SoundJS=a})(window);(function(e){function a(){this.init()}function b(a){this.init(a)}a.capabilities={mp3:true,ogg:true,mpeg:true,wav:true};a.isSupported=function(){return true};a.prototype={capabilities:null,init:function(){this.capabilities=a.capabilities},register:function(a){var c=new b(a);e.empiriaSoundJsInit(c,a);return c},create:function(a){return e.empiriaSoundJsGetSoundInstance(a)},toString:function(){return"[DefaultAudioPlugin]"}};e.SoundJS.DefaultAudioPlugin=a;b.prototype={src:null,onComplete:null,init:function(a){this.src=
a},play:function(a,b,d,h){var g=this.src;d==null&&(d=0);b==null&&(b=0);h==null&&(h=0);this.setPosition(d);setTimeout(function(){h!==0?e.empiriaSoundJsPlayLooped(g):e.empiriaSoundJsPlay(g)},Math.max(20,b))},pause:function(){e.empiriaSoundJsPause(this.src);return true},resume:function(){e.empiriaSoundJsResume(this.src);return true},stop:function(){e.empiriaSoundJsStop(this.src)},getPosition:function(){var a=e.empiriaSoundJsGetCurrentTime(this.src);a*=1E3;return a},setPosition:function(a){e.empiriaSoundJsSetCurrentTime(this.src,
a*0.001);return true},toString:function(){return"[DefaultAudio SoundInstance]"}}})(window);