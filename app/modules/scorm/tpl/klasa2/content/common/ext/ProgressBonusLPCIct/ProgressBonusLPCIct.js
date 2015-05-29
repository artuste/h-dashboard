function ProgressBonusLPCIct() {

	this.getName = function() {
		return "ProgressBonusLPCIct";
	}

	this.getType = function() {
		return "EXTENSION_PROGRESS_BONUS";
	}

	this.getProgressBonusId = function() {
		return "progressBonusIct";
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
							"asset": "z_award_ict_%.png",
							"count": 40,
							"width": 186,
							"height": 208
						}
					]
				}
			]
		};
	}
}

function ProgressBonusLPCIctCreator() {
	this.create = function() {
		return new ProgressBonusLPCIct();
	}
}

if (typeof empiriaOnExtensionLoaded == 'function') {
	empiriaOnExtensionLoaded(new ProgressBonusLPCIctCreator());
}