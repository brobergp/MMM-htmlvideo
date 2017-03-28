/* Magic Mirror
 * Module: MMM-htmlvideo
 *
 * By Pierre Broberg
 * MIT Licensed.
 */

Module.register("MMM-htmlvideo",{

	// Default module config.
	defaults: {
		videoSRC: 'http://clips.vorwaerts-gmbh.de/VfE_html5.mp4',
		loop: true,
	},

	// get stylesheet
	getStyles: function() {
		return ["htmlvideo.css"];
	},

	// Override dom generator.
	getDom: function() {

		var video =  document.createElement("video");
				video.src = this.config.videoSRC;
				video.autoplay = true;
				video.loop = this.config.loop;

		return video;

	}
});
