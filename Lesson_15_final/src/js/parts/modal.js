function modal() {

	// Модальное окно "Узнать больше"

	let more = document.querySelector('.more'),
		overlay = document.querySelector('.overlay'),
		close = document.querySelector('.popup-close'),
		descriptionBtn = document.querySelectorAll('.description-btn'),
		about = document.getElementById('about');

	more.addEventListener('click', function () {
		overlay.style.display = 'block';
		this.classList.add('more-splash');
		document.body.style.overflow = 'hidden';
	});

	close.addEventListener('click', () => {
		overlay.style.display = 'none';
		more.classList.remove('more-splash');
		descriptionBtn.forEach(function (item) {
			item.classList.remove('more-splash');
		});
		document.body.style.overflow = '';

		if (form.contains(statusMessage)) {
			form.removeChild(statusMessage);
		}
	});

	// Модальные окна "Узнать подробнее"

	about.addEventListener('click', (event) => {
		if (event.target && (event.target.classList.contains('description-btn') || event.target == more)) {
			overlay.style.display = 'block';
			document.body.style.overflow = 'hidden';
		}
		if (event.target && event.target.classList.contains('description-btn')) {
			descriptionBtn.forEach((item) => {
				item.classList.add('more-splash');
			});
		} else {
			more.classList.add('more-splash');
		}
	});
}

module.exports = modal;