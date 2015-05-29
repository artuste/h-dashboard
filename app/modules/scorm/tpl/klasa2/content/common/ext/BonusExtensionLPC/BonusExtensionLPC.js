function BonusExtensionLPC(){
	
	this.getName = function() {
		return "BonusExtensionLPC";
	}
	
	this.getType = function() {
		return "EXTENSION_BONUS";
	}
	
	this.getBonusId = function() {
		return "bonus1";
	}
	
	this.getBonusConfig = function() {	
		return {
			"actions": [
				{
					"type": "ON_PAGE_ALL_OK_FIRST_TIME",
					"bonuses": [
						{
							"asset": "bonus_animation_01",
							"type": "SWIFFY",
							"width": 1024,
							"height": 576
						},
						{
							"asset": "bonus_animation_02",
							"type": "SWIFFY",
							"width": 1024,
							"height": 576
						},
						{
							"asset": "bonus_animation_03",
							"type": "SWIFFY",
							"width": 1024,
							"height": 576
						},
						{
							"asset": "bonus_animation_04",
							"type": "SWIFFY",
							"width": 1024,
							"height": 576
						},
						{
							"asset": "bonus_animation_05",
							"type": "SWIFFY",
							"width": 1024,
							"height": 576
						},
						{
							"asset": "bonus_animation_06",
							"type": "SWIFFY",
							"width": 1024,
							"height": 576
						},
						{
							"asset": "bonus_animation_07",
							"type": "SWIFFY",
							"width": 1024,
							"height": 576
						},
						{
							"asset": "bonus_animation_08",
							"type": "SWIFFY",
							"width": 1024,
							"height": 576
						},
						{
							"asset": "bonus_animation_09",
							"type": "SWIFFY",
							"width": 1024,
							"height": 576
						},
						{
							"asset": "bonus_animation_10",
							"type": "SWIFFY",
							"width": 1024,
							"height": 576
						},
						{
							"asset": "bonus_animation_11",
							"type": "SWIFFY",
							"width": 1024,
							"height": 576
						},
						{
							"asset": "bonus_animation_12",
							"type": "SWIFFY",
							"width": 1024,
							"height": 576
						},
						{
							"asset": "bonus_animation_13",
							"type": "SWIFFY",
							"width": 1024,
							"height": 576
						},
						{
							"asset": "bonus_animation_14",
							"type": "SWIFFY",
							"width": 1024,
							"height": 576
						},
						{
							"asset": "bonus_animation_15",
							"type": "SWIFFY",
							"width": 1024,
							"height": 576
						},
						{
							"asset": "bonus_animation_16",
							"type": "SWIFFY",
							"width": 1024,
							"height": 576
						},
						{
							"asset": "bonus_animation_17",
							"type": "SWIFFY",
							"width": 1024,
							"height": 576
						},
						{
							"asset": "bonus_animation_18",
							"type": "SWIFFY",
							"width": 1024,
							"height": 576
						},
						{
							"asset": "bonus_animation_19",
							"type": "SWIFFY",
							"width": 1024,
							"height": 576
						},
						{
							"asset": "bonus_animation_20",
							"type": "SWIFFY",
							"width": 1024,
							"height": 576
						},
						{
							"asset": "bonus_animation_21",
							"type": "SWIFFY",
							"width": 1024,
							"height": 576
						},
						{
							"asset": "bonus_animation_22",
							"type": "SWIFFY",
							"width": 1024,
							"height": 576
						},
						{
							"asset": "bonus_animation_23",
							"type": "SWIFFY",
							"width": 1024,
							"height": 576
						},
						{
							"asset": "bonus_animation_24",
							"type": "SWIFFY",
							"width": 1024,
							"height": 576
						},
						{
							"asset": "bonus_animation_25",
							"type": "SWIFFY",
							"width": 1024,
							"height": 576
						},
						{
							"asset": "bonus_animation_26",
							"type": "SWIFFY",
							"width": 1024,
							"height": 576
						},
						{
							"asset": "bonus_animation_27",
							"type": "SWIFFY",
							"width": 1024,
							"height": 576
						},
						{
							"asset": "bonus_animation_28",
							"type": "SWIFFY",
							"width": 1024,
							"height": 576
						},
						{
							"asset": "bonus_animation_29",
							"type": "SWIFFY",
							"width": 1024,
							"height": 576
						},
						{
							"asset": "bonus_animation_30",
							"type": "SWIFFY",
							"width": 1024,
							"height": 576
						},
						{
							"asset": "bonus_animation_31",
							"type": "SWIFFY",
							"width": 1024,
							"height": 576
						},
						{
							"asset": "bonus_animation_32",
							"type": "SWIFFY",
							"width": 1024,
							"height": 576
						},
						{
							"asset": "bonus_animation_33",
							"type": "SWIFFY",
							"width": 1024,
							"height": 576
						},
						{
							"asset": "bonus_animation_34",
							"type": "SWIFFY",
							"width": 1024,
							"height": 576
						},
						{
							"asset": "bonus_animation_35",
							"type": "SWIFFY",
							"width": 1024,
							"height": 576
						},
						{
							"asset": "bonus_animation_36",
							"type": "SWIFFY",
							"width": 1024,
							"height": 576
						},
						{
							"asset": "bonus_animation_37",
							"type": "SWIFFY",
							"width": 1024,
							"height": 576
						},
						{
							"asset": "bonus_animation_38",
							"type": "SWIFFY",
							"width": 1024,
							"height": 576
						},
						{
							"asset": "bonus_animation_39",
							"type": "SWIFFY",
							"width": 1024,
							"height": 576
						},
						{
							"asset": "bonus_animation_40",
							"type": "SWIFFY",
							"width": 1024,
							"height": 576
						}
					]
				}
			]
		};
	}
}

function BonusExtensionLPCCreator() {
	this.create = function() {
		return new BonusExtensionLPC();
	}
}

if (typeof empiriaOnExtensionLoaded == 'function'){
	empiriaOnExtensionLoaded(new BonusExtensionLPCCreator());
}
