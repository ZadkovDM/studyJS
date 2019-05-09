window.addEventListener('DOMContentLoaded', function() {

	'use strict';
	let tab = document.querySelectorAll('.info-header-tab'),
		info = document.querySelector('.info-header'),
		tabContent = document.querySelectorAll('.info-tabcontent');

	function hideTabContent(a) {
		for (let i = a; i < tabContent.length; i++) {
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		}
	}

	hideTabContent(1);

	function showTabContent(b) {
		if (tabContent[b].classList.contains('hide')) {
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		}
	}

	info.addEventListener('click', function(event) {
		let target = event.target;
		if (target && target.classList.contains('info-header-tab')) {
			for(let i = 0; i < tab.length; i++) {
				if (target == tab[i]) {
					hideTabContent(0);
					showTabContent(i);
					break;
				}
			}
		}
	});

	// Таймер

	let deadline = '2019-05-09';

	function grtTimeRemaining(endtime) {
		let t = Date.parse(endtime) - Date.parse(new Date()),
		seconds = Math.floor((t/1000) % 60),
		minutes = Math.floor((t/1000/60) % 60),
		hours = Math.floor((t/(1000*60*60)));
		// hours = Math.floor((t/1000*60*60) % 24),
		// days = Math.floor((t/(1000*60*60*24))); Получение дней

		return {
			'total' : t,
			'hours' : hours,
			'minutes' : minutes,
			'seconds' : seconds
		};
	}

	function setClock(id, endtime) {
		let timer = document.getElementById(id),
			hours = timer.querySelector('.hours'),
			minutes = timer.querySelector('.minutes'),
			seconds = timer.querySelector('.seconds'),
			timeInteval = setInterval(updatesClock, 1000);

		function zero(a) {
			if (a < 10) {
				a = '0' + a;
			}
			return a;
		}

		function updatesClock() {
			let t = grtTimeRemaining(endtime);
			hours.textContent = zero(t.hours);
			minutes.textContent = zero(t.minutes);
			seconds.textContent = zero(t.seconds);

			if (t.total <= 0) {
				clearInterval(timeInteval);
				hours.textContent = '00';
				minutes.textContent = '00';
				seconds.textContent = '00';
			}
		}
	}


	setClock('timer', deadline);

// Модальное окно "Узнать больше"

	let more = document.querySelector('.more'),
		overlay = document.querySelector('.overlay'),
		close = document.querySelector('.popup-close'),
		descriptionBtn = document.querySelectorAll('.description-btn'),
		about = document.getElementById('about');

	more.addEventListener('click', function() {
		overlay.style.display = 'block';
		this.classList.add('more-splash');
		document.body.style.overflow = 'hidden';
	});

	close.addEventListener('click', function () {
		overlay.style.display = 'none';
		more.classList.remove('more-splash');
		descriptionBtn.forEach(function(item) {
			item.classList.remove('more-splash');
		});
		document.body.style.overflow = '';
	});

// Модальные окна "Узнать подробнее"

	about.addEventListener('click', function(event) {
		if (event.target && (event.target.classList.contains('description-btn') || event.target == more)) {
			overlay.style.display = 'block';
			document.body.style.overflow = 'hidden';
		}
		if (event.target && event.target.classList.contains('description-btn')) {
			descriptionBtn.forEach(function(item) {
				item.classList.add('more-splash');
			});
		} else {
			more.classList.add('more-splash');
		}
	});

	// descriptionBtn[0].addEventListener('click', function() {
	// 	overlay.style.display = 'block';
	// 	this.classList.add('more-splash');
	// });

});
