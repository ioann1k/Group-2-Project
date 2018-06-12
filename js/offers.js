let PLANET_THROTTLE_MOVEMENT = 30;

$(document).ready(function () {
	var throttleScroll = _.throttle(function (event) {
		floatOnScroll(event);
	}, 100);

	$(window).on('mousewheel', throttleScroll);
});

function floatOnScroll (event) {
	let deltaY = event.originalEvent.deltaY;
	let planetTransform = $('.planet').css('transform');
	planetTransform = planetTransform.split(/[()]/)[1].split(',');

	let planetTranslateY = parseInt(planetTransform[planetTransform.length - 1]);
	// if (planetTranslateY >= -(PLANET_THROTTLE_MOVEMENT * 2) && planetTranslateY <= (PLANET_THROTTLE_MOVEMENT * 2)) {
		if (deltaY > 0) {
			planetTranslateY += PLANET_THROTTLE_MOVEMENT;
			$('.planet').css('transform', 'translateY(' + planetTranslateY + 'px)');
		} else {
			planetTranslateY -= PLANET_THROTTLE_MOVEMENT;
			$('.planet').css('transform', 'translateY(' + planetTranslateY + 'px)');
		}
	// }
}