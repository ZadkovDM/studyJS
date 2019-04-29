'use strict'

let startBtn = document.getElementById('start'),
	budgetValue = document.getElementsByClassName('budget-value')[0],
	dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
	levelValue = document.getElementsByClassName('level-value')[0],
	expensesValue = document.getElementsByClassName('expenses-value')[0],
	optExpValue = document.getElementsByClassName('optionalexpenses-value')[0],
	incomeValue = document.getElementsByClassName('income-value')[0],
	monthSavValue = document.getElementsByClassName('monthsavings-value')[0],
	yearSavValue = document.getElementsByClassName('yearsavings-value')[0],
	
	expensesItem = document.querySelectorAll('.expenses-item'),
	approveOne = document.getElementsByTagName('button')[0],
	approveTwo = document.getElementsByTagName('button')[1],
	calculate = document.getElementsByTagName('button')[2],
	optExpenses = document.querySelectorAll('.optionalexpenses-item'),
	chooseIncome = document.querySelector('.choose-income'),
	checkbox = document.querySelector('#savings'),
	chooseSum = document.querySelector('.choose-sum'),
	choosePercent = document.querySelector('.choose-percent'),
	yearValue = document.querySelector('.year-value'),
	monthValue = document.querySelector('.month-value'),
	dayValue = document.querySelector('.day-value');

let money, time;

approveOne.disabled = true;
approveOne.style.opacity = '0.5';
approveTwo.disabled = true;
approveTwo.style.opacity = '0.5';
calculate.disabled = true;
calculate.style.opacity = '0.5';

startBtn.addEventListener('click', function() {
	time = prompt("Введите дату в формате YYYY-MM-DD", '');
	money = +prompt("Ваш бюджет на месяц?", '');

	while (isNaN(money) || money == "" || money == null) {
		money = +prompt("Ваш бюджет на месяц?", '');
	}
	appData.budget = money;
	appData.timeData = time;
	budgetValue.textContent = money.toFixed();
	yearValue.value = new Date(Date.parse(time)).getFullYear();
	monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
	dayValue.value = new Date(Date.parse(time)).getDate();

	calculate.disabled = false;
	calculate.style.opacity = '';
	approveTwo.disabled = false;
	approveTwo.style.opacity = '';
});

approveOne.addEventListener('click', function() {
	let sum = 0;
	
	for (let i = 0; i < expensesItem.length; i++) {
		let a = expensesItem[i].value,
		b = expensesItem[++i].value;
		
		if ((typeof (a)) === 'string' && a != null && b != null &&
		a != '' && b != '' && a.length < 50) {
			console.log("done");
			appData.expenses[a] = b;
			sum += +b;
		} else {
			i--;
		}
	}
	expensesValue.textContent = sum;
});

expensesItem.forEach(function (item) {
	item.addEventListener('input', function () {
		if (this.value != '') {
			approveOne.disabled = false;
			approveOne.style.opacity = '';
		}
	});
});

approveTwo.addEventListener('click', function() {
	for (let i = 0; i < optExpenses.length; i++) {
		let opt = optExpenses[i].value;

		if (opt != null) {
			console.log("done");
			appData.optionalExpenses[i] = opt;
			optExpValue.textContent += appData.optionalExpenses[i] + ' ';
		} else {
			i--;
		}
	};
});

calculate.addEventListener('click', function() {

	if (appData.budget != undefined) {
		appData.moneyPerDay = ((appData.budget - +expensesValue.textContent) / 30).toFixed();
		dayBudgetValue.textContent = appData.moneyPerDay;

		if (appData.moneyPerDay < 100) {
			levelValue.textContent = "Минимальный уровень достатка";
		} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
			levelValue.textContent = "Средний уровень достатка";
		} else if (appData.moneyPerDay > 2000) {
			levelValue.textContent = "Высокий уровень достатка";
		} else {
			levelValue.textContent = "Произошла ошибка";
		}
	} else {
		dayBudgetValue.textContent = "Произошла ошибка";
	}
});

chooseIncome.addEventListener('input', function() {
	let items = chooseIncome.value;
	appData.income = items.split(', ');
	incomeValue.textContent = appData.income;
});

checkbox.addEventListener('click', function() {
	if(appData.savings == true) {
		appData.savings = false;
	} else {
		appData.savings = true;
	}
});

chooseSum.addEventListener('input', function() {
	if (appData.savings == true) {
		let sum = +chooseSum.value,
			percent = +choosePercent.value;

		appData.monthIncome = sum / 100 / 12 * percent;
		appData.yearIncome = sum / 100 * percent;

		monthSavValue.textContent = appData.monthIncome.toFixed(1);
		yearSavValue.textContent = appData.yearIncome.toFixed(1);
	}
});

choosePercent.addEventListener('input', function() {
	if (appData.savings == true) {
		let sum = +chooseSum.value,
			percent = +choosePercent.value;

		appData.monthIncome = sum / 100 / 12 * percent;
		appData.yearIncome = sum / 100 * percent;

		monthSavValue.textContent = appData.monthIncome.toFixed(1);
		yearSavValue.textContent = appData.yearIncome.toFixed(1);
	}
});

let appData = {
	budget: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: false
}