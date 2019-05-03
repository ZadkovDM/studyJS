let btn = document.querySelector('.btn'),
	box = document.querySelector('.box');

function animation() {
	let pos = 0;

	let id = setInterval(frame, 3);
	function frame() {
		if (pos == 550) {
			clearInterval(id);
		} else {
			pos++;
			box.style.width = pos + 'px';
		}
	}
}

btn.addEventListener('click', animation);