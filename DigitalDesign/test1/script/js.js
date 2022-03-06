


document.addEventListener('DOMContentLoaded', function scrol() {
	let btn = document.querySelector('.icon__up');
	btn.onclick = function (click) {
		click.preventDefault();
		document.body.scrollTop = 0; // Для Safari
		document.documentElement.scrollTop = 0; // Для Chrome, Firefox, IE и Opera
	}
});