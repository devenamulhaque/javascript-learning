

var hourHand = document.querySelector('.hour-hand');
var minHand = document.querySelector('.min-hand');
var secHand = document.querySelector('.sec-hand');


setInterval(runningTime, 1000);

function runningTime() {
	var time = new Date;
	var hour = time.getHours();
	var min = time.getMinutes();
	var sec = time.getSeconds();

	// Analog Clock

	secHand.style.setProperty('transform', `rotate(${(sec * 6) + 90.5}deg)`);
	minHand.style.setProperty('transform', `rotate(${(min * 6) + 90}deg)`);
	hourHand.style.setProperty('transform', `rotate(${(hour * 30) + 92}deg)`);

}


