$(document).ready(function() {
	$("#imgur-gen-submit").click(function() {
		var imgurUrl = $("#imgur-gen-field").val();
		var imgurId = imgurUrl.match(/http\:\/\/i\.imgur\.com\/(.*)\.gif/i)[1];
		var imgurOutput = "<div class='imguritem'><video autoplay loop muted><source type='video/webm' src='http://i.imgur.com/" + imgurId + ".webm'></video></div>";
		$("#imgur-gen-output").text(imgurOutput).show().select();
	});

		$("#gfycat-gen-submit").click(function() {
		var gfycatUrl = $("#gfycat-gen-field").val();
		var gfycatId = gfycatUrl.match(/http\:\/\/gfycat\.com\/(.*)/i)[1];
		var gfycatOutput = "<div class='gfyitem' data-title=false data-autoplay=true data-controls=false data-expand=true data-id='" + gfycatId + "'></div>";
		$("#gfycat-gen-output").text(gfycatOutput).show().select();
	});

	$(".articles").css({
		"min-height": $(window).height() - $(".footer").height() - 
										   $(".header").height() - 
										   (2 * parseInt($(".articles").css("padding")))
	});
});
