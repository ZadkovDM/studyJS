let age = document.getElementById('age');

function showUser(surname, name) {
	this.value = age.value;
	alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
}

showUser('Столыпин', 'Петр');