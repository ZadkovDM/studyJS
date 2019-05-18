$(document).ready(function() {
	$('.main_nav nav ul li:eq(1), .main_btna, .main_btn').on('click', function() {
		$('.overlay').fadeIn('slow');
		$('.modal').slideDown('slow');
	});

	$('.close').on('click', function () {
		$('.overlay').fadeOut('slow');
		$('.modal').slideUp('slow');
	});
});