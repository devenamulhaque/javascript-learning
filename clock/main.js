

var hourHand = document.querySelector('.hour-hand');
var minHand = document.querySelector('.min-hand');
var secHand = document.querySelector('.sec-hand');
var digitalClock = document.querySelector('.digital-clock');


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




	// Digital Clock
	hour = hour % 12;
	hour = hour < 10 ? `0${hour}`: hour;
	min = min < 10 ? `0${min}`: min;
	sec = sec < 10 ? `0${sec}`: sec;

	// digitalClock.textContent = `Time is ${hour}:${min}:${sec}`;
}


