function ProgressBonusLPCLan() {

	this.getName = function() {
		return "ProgressBonusLPCLan";
	}

	this.getType = function() {
		return "EXTENSION_PROGRESS_BONUS";
	}

	this.getProgressBonusId = function() {
		return "progressBonusLan";
	}

	this.getProgressBonusConfig = function() {
		return {
			"progresses": [
				{
					"from": 0,
					"assets": [
						{
							"asset": "report_award_off.png",
							"width": 186,
							"height": 208
						}
					]
				},
				{
					"from": 100,
					"assets": [
						{
							"asset": "z_award_lan_%.png",
							"count": 59,
							"width": 186,
							"height": 208
						}
					]
				}
			]
		};
	}
}

function ProgressBonusLPCLanCreator() {
	this.create = function() {
		return new ProgressBonusLPCLan();
	}
}

if (typeof empiriaOnExtensionLoaded == 'function') {
	empiriaOnExtensionLoaded(new ProgressBonusLPCLanCreator());
}