const checkboxes = Array.from(
	document.querySelectorAll("input[type='checkbox']")
);

checkboxes.forEach((checkbox) => addEventListener("click", toggleCheckboxes));

function toggleCheckboxes(event) {
	if (!event.shiftKey) return;
	const limitCheckboxIndex = checkboxes.findIndex(
		(input) => input === event.target
    );
    const startCheckboxIndex = findStartCheckbox(limitCheckboxIndex);
    fillCheckboxes(startCheckboxIndex, limitCheckboxIndex);
}

function findStartCheckbox(shiftedCheckboxIndex) {
    const up = checkboxes.slice(0, shiftedCheckboxIndex + 1);
    const down = checkboxes.slice(shiftedCheckboxIndex, checkboxes.length);

    for (let i = up.length - 2; i >= 0; i--) {
        if (up[i].checked) return i;
    }
    for (let i = shiftedCheckboxIndex + 1; i < shiftedCheckboxIndex + down.length; i++) {
        if (checkboxes[i].checked) return i;
    }
    return 0;
}

function fillCheckboxes(start, limit) {
    if (limit > start) {
        for (let i = start; i < limit; i++) {
            checkboxes[i].checked = true;
        }
    } else {
        for (let i = limit; i < start; i++) {
            checkboxes[i].checked = true;
        }
    }
}