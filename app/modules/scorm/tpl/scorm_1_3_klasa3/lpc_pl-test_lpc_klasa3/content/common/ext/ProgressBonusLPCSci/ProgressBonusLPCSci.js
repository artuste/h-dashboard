function ProgressBonusLPCSci() {

	this.getName = function() {
		return "ProgressBonusLPCSci";
	}

	this.getType = function() {
		return "EXTENSION_PROGRESS_BONUS";
	}

	this.getProgressBonusId = function() {
		return "progressBonusSci";
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
							"asset": "z_award_sci_%.png",
							"count": 85,
							"width": 186,
							"height": 208
						}
					]
				}
			]
		};
	}
}

function ProgressBonusLPCSciCreator() {
	this.create = function() {
		return new ProgressBonusLPCSci();
	}
}

if (typeof empiriaOnExtensionLoaded == 'function') {
	empiriaOnExtensionLoaded(new ProgressBonusLPCSciCreator());
}