function ProgressBonusLPCGeo() {

	this.getName = function() {
		return "ProgressBonusLPCGeo";
	}

	this.getType = function() {
		return "EXTENSION_PROGRESS_BONUS";
	}

	this.getProgressBonusId = function() {
		return "progressBonusGeo";
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
							"asset": "z_award_geo_%.png",
							"count": 22,
							"width": 186,
							"height": 208
						}
					]
				}
			]
		};
	}
}

function ProgressBonusLPCGeoCreator() {
	this.create = function() {
		return new ProgressBonusLPCGeo();
	}
}

if (typeof empiriaOnExtensionLoaded == 'function') {
	empiriaOnExtensionLoaded(new ProgressBonusLPCGeoCreator());
}