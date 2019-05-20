/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/parts/calc.js":
/*!******************************!*\
  !*** ./src/js/parts/calc.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function calc() {
	let persons = document.querySelectorAll('.counter-block-input')[0],
		restDays = document.querySelectorAll('.counter-block-input')[1],
		place = document.getElementById('select'),
		totalValue = document.getElementById('total'),
		personsSum = 0,
		daysSum = 0,
		total = 0;

	totalValue.innerHTML = 0;

	persons.addEventListener('input', function () {
		this.value = this.value.replace(/^0/, '');
		personsSum = +this.value;
		if (this.value == '') {
			totalValue.innerHTML = 0;
		} else {
			total = (daysSum * personsSum) * 4000;
			totalValue.innerHTML = total;
		}


	});


	restDays.addEventListener('input', function () {
		this.value = this.value.replace(/^0/, '');
		daysSum = +this.value;
		if (this.value == '') {
			totalValue.innerHTML = 0;
		} else {
			total = (daysSum * personsSum) * 4000;
			totalValue.innerHTML = total;
		}

	});

	//Изменение стоимости при смене страны
	place.addEventListener('change', function () {
		if (restDays.value == '' || persons.value == '') {
			totalValue.innerHTML = 0;
		} else {
			let a = total;
			totalValue.innerHTML = a * this.options[this.selectedIndex].value;
		}
	});


	// Проверка введения только цифр
	persons.addEventListener('keydown', function () {
		onlyNumbersFilter();
	});
	restDays.addEventListener('keydown', function () {
		onlyNumbersFilter();
	});

	function onlyNumbersFilter() {
		if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 ||
			// Разрешаем: Ctrl+A
			(event.keyCode == 65 && event.ctrlKey === true) ||
			// Разрешаем: home, end, влево, вправо
			(event.keyCode >= 35 && event.keyCode <= 39)) {
			// Ничего не делаем
			input = "";

		} else {
			// Запрещаем все, кроме цифр на основной клавиатуре, а так же Num-клавиатуре
			if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105)) {
				event.preventDefault();
			}
		}
	}
}

module.exports = calc;

/***/ }),

/***/ "./src/js/parts/form.js":
/*!******************************!*\
  !*** ./src/js/parts/form.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function form() {

	let validTel = document.querySelectorAll('input[name="phone"]');

	validTel.forEach(function (item) {
		item.oninput = function () {
			item.value = item.value.replace(/[^\+\d]/g, '');
		}
	});

	let message = {
		loading: 'Загрузка...',
		success: 'Спасибо! Скоро мы с Вами свяжемся!',
		failure: 'Что-то пошло не так...'
	};

	let form = document.querySelector('.main-form'),
		input = form.getElementsByTagName('input'),
		contactForm = document.getElementById('form'),
		contactInput = contactForm.getElementsByTagName('input'),
		statusMessage = document.createElement('div');

	statusMessage.classList.add('status');
	statusMessage.style.marginTop = '15px';
	statusMessage.style.color = '#fff';

	// Модальное окно

	function sendForm(form, input) {
		form.addEventListener('submit', (event) => {
			event.preventDefault();
			form.appendChild(statusMessage);
			let formData = new FormData(form);

			function postData(data) {

				return new Promise(function (resolve, reject) {
					let request = new XMLHttpRequest();

					request.open('POST', 'server.php');

					request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

					let obj = {};
					formData.forEach((value, key) => {
						obj[key] = value;
					});

					let data = JSON.stringify(obj);

					request.onreadystatechange = function () {
						if (request.readyState < 4) {
							resolve()
						} else if (request.readyState === 4 && request.status == 200) {
							resolve()
						} else {
							reject()
						}
					}

					request.send(data);
				})

			} // Конец postData

			function clearInput() {
				for (let i = 0; i < input.length; i++) {
					input[i].value = '';
				}
			}

			postData(formData)
				.then(() => statusMessage.innerHTML = message.loading)
				.then(() => {
					statusMessage.innerHTML = message.success;
				})
				.catch(() => statusMessage.innerHTML = message.failure)
				.then(clearInput)
		});
	}

	sendForm(form, input);
	sendForm(contactForm, contactInput);
}

module.exports = form;

/***/ }),

/***/ "./src/js/parts/modal.js":
/*!*******************************!*\
  !*** ./src/js/parts/modal.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

/***/ }),

/***/ "./src/js/parts/slider.js":
/*!********************************!*\
  !*** ./src/js/parts/slider.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

/***/ }),

/***/ "./src/js/parts/tabs.js":
/*!******************************!*\
  !*** ./src/js/parts/tabs.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function tabs() {
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

	info.addEventListener('click', (event) => {
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
}

module.exports = tabs;

/***/ }),

/***/ "./src/js/parts/timer.js":
/*!*******************************!*\
  !*** ./src/js/parts/timer.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function timer() {
	let deadline = '2019-07-15';

	function grtTimeRemaining(endtime) {
		let t = Date.parse(endtime) - Date.parse(new Date()),
			seconds = Math.floor((t / 1000) % 60),
			minutes = Math.floor((t / 1000 / 60) % 60),
			hours = Math.floor((t / (1000 * 60 * 60)));

		return {
			'total': t,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
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
}

module.exports = timer;

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window.addEventListener('DOMContentLoaded', function() {

	"use strict";
	let calc = __webpack_require__(/*! ./parts/calc.js */ "./src/js/parts/calc.js"),
		form = __webpack_require__(/*! ./parts/form.js */ "./src/js/parts/form.js"),
		slider = __webpack_require__(/*! ./parts/slider.js */ "./src/js/parts/slider.js"),
		tabs = __webpack_require__(/*! ./parts/tabs.js */ "./src/js/parts/tabs.js"),
		timer = __webpack_require__(/*! ./parts/timer.js */ "./src/js/parts/timer.js"),
		modal = __webpack_require__(/*! ./parts/modal.js */ "./src/js/parts/modal.js");

	calc();
	form();
	slider();
	tabs();
	timer();
	modal();
});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map