$( document ).ready(function() {

	$( "#slider" ).slick({
		infinite: true,
		speed: 300,
		mobileFirst: true,
		prevArrow: '<button type="button" class="slider__prev"></button>',
		nextArrow: '<button type="button" class="slider__next"></button>'
	});
});
