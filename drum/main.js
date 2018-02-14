window.addEventListener('keydown', function (e) {
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	var key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
	if(!audio) return // if audio is not found
	audio.currentTime = 0;
	audio.play();
	key.classList.add('playing');
	console.log(e);
});