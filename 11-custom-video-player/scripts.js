const video = document.querySelector("video");
const controls = document.querySelector(".player__controls");

const playButton = controls.querySelector(".toggle");
const volumeSlider = controls.querySelector('input[name="volume"]');
const playbackRateSlider = controls.querySelector('input[name="playbackRate"]');
const progressSlider = controls.querySelector(".progress__filled");
const progress = controls.querySelector(".progress");
const progressWidth = parseInt(getComputedStyle(progress).width);
const moveBack = controls.querySelectorAll(".player__button")[1];
const moveForward = controls.querySelectorAll(".player__button")[2];

// Play/pause function
playButton.addEventListener("click", handlePlay);
video.onclick = handlePlay;
window.addEventListener("keypress", handlePlaySpaceBar);

// Volume controls
volumeSlider.addEventListener("change", handleVolume);

// Playback rate controls
playbackRateSlider.addEventListener("change", handlePlaybackRate);

// Update progress bar
video.addEventListener("timeupdate", updateProgressBar);
progress.addEventListener("click", moveVideoTo);

// Move back / forward
moveBack.addEventListener("click", changePosition);
moveForward.addEventListener("click", changePosition);

function handlePlay() {
	if (video.paused) {
		video.play();
	} else {
		video.pause();
	}
}

function handlePlaySpaceBar(e) {
	if (e.code === "Space") {
		handlePlay();
	}
}

function handleVolume(event) {
	video.volume = event.target.value;
}

function handlePlaybackRate(event) {
	video.playbackRate = event.target.value;
}

function updateProgressBar() {
	const progress = (video.currentTime * 100) / video.duration;
	progressSlider.style.flexBasis = `${progress.toFixed(2)}%`;
}

function moveVideoTo(event) {
	const progressPercentage =
		event.offsetX / parseInt(getComputedStyle(video).width);
	video.currentTime = video.duration * progressPercentage;
}

function changePosition(event) {
	video.currentTime += parseInt(event.target.dataset.skip);
}
