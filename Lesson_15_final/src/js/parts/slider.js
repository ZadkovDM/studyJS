function slider() {
	let slideIndex = 1, //Параметр текущего слайда
		slides = document.querySelectorAll('.slider-item'), //Получаем все слайды на странице
		prev = document.querySelector('.prev'), //Кнопка навигации назад
		next = document.querySelector('.next'), //Кнопка навигации вперед 
		dotsWrap = document.querySelector('.slider-dots'), //Родитель точек навигации
		dots = document.querySelectorAll('.dot'); //Все точки используемые в навигации слайдера

	showSlides(slideIndex);

	function showSlides(n) {

		//Проверка на перелистывание слайда в самое начало, если они закончились
		if (n > slides.length) {
			slideIndex = 1;
		}
		if (n < 1) {
			slideIndex = slides.length;
		}

		slides.forEach((item) => item.style.display = 'none'); //Скрываем слайды
		// for (let i = 0; i < slides.length; i++) {
		// 	slides[i].style.display = 'none';
		// }
		dots.forEach((item) => item.classList.remove('dot-active')); //Скрываем точки переключения

		slides[slideIndex - 1].style.display = 'block'; //Показываем нужный слайд
		dots[slideIndex - 1].classList.add('dot-active');
	}

	function plusSlides(n) {
		showSlides(slideIndex += n);
	}
	//Проверка текущего слайда и установка его
	function currentSlide(n) {
		showSlides(slideIndex = n);
	}

	//Реализация стрелки назад
	prev.addEventListener('click', function () {
		plusSlides(-1);
	});

	next.addEventListener('click', function () {
		plusSlides(1);
	});

	//Перебор точек через делегирование
	dotsWrap.addEventListener('click', function (event) {
		for (let i = 0; i < dots.length + 1; i++) {
			if (event.target.classList.contains('dot') && event.target == dots[i - 1]) { //Проверка на нажатие точки
				currentSlide(i);
			}
		}

	});
}

module.exports = slider;