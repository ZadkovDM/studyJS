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