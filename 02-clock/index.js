const hoursHand = document.getElementsByClassName('hour-hand')[0];
const minutesHand = document.getElementsByClassName('min-hand')[0];
const secondsHand = document.getElementsByClassName('second-hand')[0];

setInterval(updateClock, 1000);

function updateClock() {
	const currentTime = new Date();
	const degreesTime = convertTimeToDegrees(currentTime);
	updateDOMClock(degreesTime);
}

function convertTimeToDegrees(time) {
    const [hours, minutes, seconds] = [time.getHours() + 3, time.getMinutes() + 15, time.getSeconds() + 15];
    const hoursInDegrees = convertHoursToDegrees(hours);
    const minutesInDegrees = convertMinutesOrSecondsToDegrees(minutes);
    const secondsInDegrees = convertMinutesOrSecondsToDegrees(seconds);
    const timeInDegrees = [hoursInDegrees, minutesInDegrees, secondsInDegrees];
    return timeInDegrees;
}

function convertHoursToDegrees(hours) {
    const rawResult = (hours * 360 / 12) % 360;
    return rawResult.toFixed(2);
}

function convertMinutesOrSecondsToDegrees(unity) {
    const rawResult = (unity * 360 / 60) % 360;
    return rawResult.toFixed(2);
}

function updateDOMClock(timeInDegrees) {
	const [degreesHours, degreesMinutes, degreesSeconds] = timeInDegrees;
	updateDOMHoursHand(degreesHours);
	updateDOMMinutesHand(degreesMinutes);
	updateDOMSecondsHand(degreesSeconds);
}

function updateDOMHoursHand(hoursInDegrees) {
    hoursHand.style.transform = `rotate(${hoursInDegrees}deg)`;
}

function updateDOMMinutesHand(minutesInDegrees) {
    minutesHand.style.transform = `rotate(${minutesInDegrees}deg)`;
}

function updateDOMSecondsHand(secondsInDegrees) {
    secondsHand.style.transform = `rotate(${secondsInDegrees}deg)`;
}

