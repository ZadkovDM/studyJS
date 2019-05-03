function z(a) {
	if (a < 10) {
		a = '0' + a;
	}
	return a;
}

setInterval(function Timer() {
	let time = new Date();
	document.querySelector('body').textContent = z(time.getHours()) + ':' + z(time.getMinutes()) + ':' + z(time.getSeconds());
}, 1000);

