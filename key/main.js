window.addEventListener('keydown', function (e) {
	document.querySelector('#keyNumber').innerHTML = e.keyCode;
	document.querySelector('.key').innerHTML = e.key;
});