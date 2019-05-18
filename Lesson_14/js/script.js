$(document).ready(function() {
	$('.main_nav nav ul li:eq(1), .main_btna, .main_btn').on('click', function() {
		$('.overlay').animate(
			{
				opacity: 'toggle'
			}
		);
		$('.modal').animate(
			{
				height: 'toggle'
			}
		)
	});

	$('.close').on('click', function () {
		$('.overlay').animate(
			{
				height: 'toggle'

			}
		);
		$('.modal').animate(
			{
				opacity: 'toggle'
			}
		)
	});
});