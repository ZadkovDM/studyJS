let start = document.getElementById('start'),
	budget = document.getElementsByClassName('budget-value'),
	dayvalue = document.getElementsByClassName('daybudget-value'),
	levelvalue = document.getElementsByClassName('level-value'),
	expvalue = document.getElementsByClassName('expenses-value'),
	optexpvalue = document.getElementsByClassName('optionalexpenses-value'),
	incomevalue = document.getElementsByClassName('income-value'),
	monthsavvalue = document.getElementsByClassName('monthsavings-value'),
	yearsavvalue = document.getElementsByClassName('yearsavings-value'),
	expitem = document.querySelectorAll('.expenses-item'),
	approveone = document.getElementsByTagName('button')[0],
	approvetwo = document.getElementsByTagName('button')[1],
	calculate = document.getElementsByTagName('button')[2],
	optexpenses = document.querySelectorAll('.optionalexpenses-item'),
	chooseincome = document.querySelector('.choose-income'),
	checkbox = document.querySelector('#savings'),
	sum = document.querySelector('.choose-sum'),
	percent = document.querySelector('.choose-percent'),
	year = document.querySelector('.year-value'),
	month = document.querySelector('.month-value'),
	day = document.querySelector('.day-value');



// console.log(start);
// console.log(budget);
// console.log(dayvalue);
// console.log(levelvalue);
// console.log(expvalue);
// console.log(optexpvalue);
// console.log(incomevalue);
// console.log(monthsavvalue);
// console.log(yearsavvalue);
// console.log(expitem);
// console.log(approveone);
// console.log(approvetwo);
// console.log(calculate);
// console.log(optexpenses);
// console.log(chooseincome);
// console.log(checkbox);
// console.log(sum);
// console.log(percent);
// console.log(year);
// console.log(month);
// console.log(day);