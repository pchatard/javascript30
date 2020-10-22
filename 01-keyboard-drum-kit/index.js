const sounds = Array.from(document.querySelectorAll("audio"));
const keys = Array.from(document.getElementsByClassName("key"));

window.addEventListener("keydown", (event) => {
    const keyCode = event.keyCode;
    playSoundAndDisplay(keyCode);
});

function playSoundAndDisplay(keyCode) {
    togglePlayingClass(keyCode);
    playMatchingSound(keyCode);
}

function playMatchingSound(keyCode) {
	const matchingSound = findMatchingSound(keyCode);
	if (matchingSound) {
        matchingSound.currentTime = 0;
		matchingSound.play();
	}
}

function findMatchingSound(keyCode) {
	const matchingSound = sounds.find(
		(sound) => parseInt(sound.dataset.key) === keyCode
	);
	return matchingSound;
}

function togglePlayingClass(keyCode) {
    const matchingElement = findMatchingKeyElement(keyCode);
    if (matchingElement) {
        matchingElement.classList.add('playing');
        setTimeout(() => {
            matchingElement.classList.remove('playing');
        }, 100);
    }
}

function findMatchingKeyElement(keyCode) {
    const matchingKeyElement = keys.find(
		(key) => parseInt(key.dataset.key) === keyCode
	);
	return matchingKeyElement;
}