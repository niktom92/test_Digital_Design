window.onload = function () {
	var date = new Date();

	var day = date.getDate();
	var month = date.getMonth() + 1;
	var year = date.getFullYear();

	if (month < 10) month = "0" + month;
	if (day < 10) day = "0" + day;

	var today = year + "-" + month + "-" + day;
	document.getElementById("date").value = today;


	let btn = document.getElementById("btn");
	btn.onclick = function () {
		let date = new Date(document.querySelector('input[type="date"]').value);
		alert(getDayInfo(date))
	};

	function getDayInfo(date) {
		let weekdays = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
		let weekday = date.getDay(); // номер дня недели

		let day = date.getDate(); // число
		let weekNumber = Math.ceil(((day - 1 - weekday) / 7) + 1); // номер недели месяца

		let months = ["Января", "Февраля", "Марта", "Апреля",
			"Мая", "Июня", "Июля", "Августа",
			"Сентября", "Октября", "Ноября", "Декабря"];
		let month = date.getMonth(); // номер месяца

		return `${weekdays[weekday]}, ${weekNumber} неделя ${months[month]} ${date.getFullYear()} года`;
	}
}