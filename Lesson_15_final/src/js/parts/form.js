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