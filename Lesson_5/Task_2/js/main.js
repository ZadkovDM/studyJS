let start = document.getElementById('start'),
	budget = document.getElementsByClassName('budget-value')[0],
	dayvalue = document.getElementsByClassName('daybudget-value')[0],
	levelvalue = document.getElementsByClassName('level-value')[0],
	expvalue = document.getElementsByClassName('expenses-value')[0],
	optexpvalue = document.getElementsByClassName('optionalexpenses-value')[0],
	incomevalue = document.getElementsByClassName('income-value')[0],
	monthsavvalue = document.getElementsByClassName('monthsavings-value')[0],
	yearsavvalue = document.getElementsByClassName('yearsavings-value')[0],
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