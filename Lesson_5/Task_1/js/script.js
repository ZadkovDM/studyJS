let title = document.querySelector('.title'),
	adver = document.querySelector('.adv'),
	col = document.querySelectorAll('.column')[1],
	li = document.createElement('li'),
	menu = document.querySelector('.menu'),
	menuItems = document.querySelectorAll('.menu-item'),
	answer = document.querySelector('.prompt');

document.body.style.backgroundImage = 'url(img/apple_true.jpg)';

col.removeChild(adver);

menu.appendChild(li);
li.classList.add('menu-item');
li.innerHTML = 'Пятый пункт';
menu.insertBefore(menuItems[2], menuItems[1]);

title.innerHTML='Мы продаем подлинную технику Apple';

answer.innerHTML = prompt("Как вы относитесь к технику Apple?");



