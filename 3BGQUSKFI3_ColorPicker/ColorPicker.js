let backgroundColor = document.getElementById("colorPickerContainer");
let changeHexcode = document.getElementById("selectedColorHexCode");
let colorPickerContainer = backgroundColor;
let selectedColorHexCode = changeHexcode;

function changeBgToGreyAndUpdateText() {
    colorPickerContainer.style.backgroundColor = "#e0e0e0";
    selectedColorHexCode.textContent = "#e0e0e0";
}

function changeBgToGreenAndUpdateText() {
    colorPickerContainer.style.backgroundColor = "#6fcf97";
    selectedColorHexCode.textContent = "#6fcf97";
}

function changeBgToBlueAndUpdateText() {
    selectedColorHexCode.textContent = "#56ccf2";
    colorPickerContainer.style.backgroundColor = "#56ccf2";
}

function changeBgToPinkAndUpdateText() {
    colorPickerContainer.style.backgroundColor = "#bb6bd9";
    selectedColorHexCode.textContent = "#bb6bd9";
}