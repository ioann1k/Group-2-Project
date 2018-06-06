$(document).ready(function () {
	var throttleScroll = _.throttle(function (event) {
		floatOnScroll(event);
	}, 100);

	$(window).on('mousewheel', throttleScroll);
});

function floatOnScroll (event) {
	console.log(event);
}