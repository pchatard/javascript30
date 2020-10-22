const inputs = Array.from(document.getElementsByTagName("input"));
const root = document.documentElement;

inputs.forEach((input) => addEventListener("change", modifyCSSVariable));

function modifyCSSVariable(event) {
	switch (event.target.id) {
		case "spacing":
			modifySpacingVariable(event.target.value);
			break;
		case "blur":
			modifyBlurVariable(event.target.value);
			break;
		case "base":
			modifyColorVariable(event.target.value);
			break;
		default:
			return;
	}
}

function modifySpacingVariable(value) {
	root.style.setProperty("--spacing", `${value}px`);
}

function modifyBlurVariable(value) {
	root.style.setProperty("--blur", `${value}px`);
}

function modifyColorVariable(value) {
	root.style.setProperty("--color", value);
}
