function TutorExtensionLPC(){    
    this.getName = function(){
        return "TutorExtensionLPC";
    }
    this.getType = function() { 
        return "EXTENSION_TUTOR";
    }
     
    this.getTutorId = function() { 
        return "tutor1";
    }
     
    this.getTutorConfig = function() { 
        return {
            "tutors": [
                {
                    "name": "tutor_carlos",
                    "fps": 20,
                    "width": 180,
                    "height": 300,
					"interactive": true,
                    "avatar": "_avatar.png"
                },
                {
                    "name": "tutor_summer",
                    "fps": 20,
                    "width": 180,
                    "height": 300,
					"interactive": true,
                    "avatar": "_avatar.png"
                },
                {
                    "name": "tutor_nitha",
                    "fps": 20,
                    "width": 180,
                    "height": 300,
					"interactive": true,
                    "avatar": "_avatar.png"
                },
                {
                    "name": "tutor_jack",
                    "fps": 20,
                    "width": 180,
                    "height": 300,
					"interactive": true,
                    "avatar": "_avatar.png"
                },
                {
                    "name": "tutor_cora",
                    "fps": 20,
                    "width": 180,
                    "height": 300,
					"interactive": true,
                    "avatar": "_avatar.png"
                },
                {
                    "name": "tutor_alex",
                    "fps": 20,
                    "width": 180,
                    "height": 300,
					"interactive": true,
                    "avatar": "_avatar.png"
                },
				{
                    "name": "tutor_fake",
                    "fps": 0,
                    "width": 180,
                    "height": 300,
                    "interactive" : false,
                    "avatar" : "_avatar.png"               
                }
            ],
            "actions": [
                {
                    "type": "DEFAULT",
                    "commands": [
                        {
                            "type": "IMAGE",
                            "asset": "_static.png"
                        }
                    ]
                },
                {
                    "type": "ON_PAGE_ALL_OK",
                    "commands": [
                        {
                            "type": "ANIMATION",
                            "asset": "_allok.png"
                        },
                        {
                            "type": "SOUND",
                            "asset": "_claps.mp3"
                        }
                    ],
                    "params": {}
                }
            ]
        };
    }
}
function TutorExtensionLPCCreator(){
    this.create = function(){
        return new TutorExtensionLPC();
    }
}
if (typeof empiriaOnExtensionLoaded == 'function'){
    empiriaOnExtensionLoaded(new TutorExtensionLPCCreator());
}