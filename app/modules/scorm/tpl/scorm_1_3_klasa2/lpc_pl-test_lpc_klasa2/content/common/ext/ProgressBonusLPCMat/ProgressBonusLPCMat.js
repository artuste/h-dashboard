function ProgressBonusLPCMat() {

	this.getName = function() {
		return "ProgressBonusLPCMat";
	}

	this.getType = function() {
		return "EXTENSION_PROGRESS_BONUS";
	}

	this.getProgressBonusId = function() {
		return "progressBonusMat";
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
							"asset": "z_award_mat_%.png",
							"count": 150,
							"width": 186,
							"height": 208
						}
					]
				}
			]
		};
	}
}

function ProgressBonusLPCMatCreator() {
	this.create = function() {
		return new ProgressBonusLPCMat();
	}
}

if (typeof empiriaOnExtensionLoaded == 'function') {
	empiriaOnExtensionLoaded(new ProgressBonusLPCMatCreator());
}