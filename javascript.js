// ** Reset, Refresh, Submit -----------------------------------------------------------------------------------

function reset () {
    document.getElementById('business-card').removeAttribute('style');
}

function refresh() {
    window.location.reload();
}

function done () {
    if (!nameInput.value) {
        alert('Plese complete the required field');
    }
}

// ** Formatting Options ---------------------------------------------------------------------------------------

function leftAlign() {
    document.getElementById('business-card').style.textAlign = "left";
}

function centerAlign() {
    document.getElementById('business-card').style.textAlign = "center";
}

function rightAlign() {
    document.getElementById('business-card').style.textAlign = "right";
}

function boldText() {
    document.getElementById('business-card').style.fontWeight = "700";
    document.getElementById('company').style.fontWeight = "800";
    document.getElementById('message').style.fontWeight = "600";
}

function italicText() {
    document.getElementById('business-card').style.fontStyle = "italic";
}

function underlineText() {
    document.getElementById('business-card').style.textDecoration = "underline";
}

// ** Background Color Preset ---------------------------------------------------------------------------------

function blue() {
    document.getElementById('business-card').style.backgroundColor = "#007bff";
}

function yellow() {
    document.getElementById('business-card').style.backgroundColor = "#ffc107";
}

function red() {
    document.getElementById('business-card').style.backgroundColor = "#dc3545";
}

function cyan() {
    document.getElementById('business-card').style.backgroundColor = "#17a2b8";
}

// ** Background Color Picker ---------------------------------------------------------------------------------

// ORIGINAL: working

// var pickedColor = document.getElementById('color-picker').value;

// document.getElementById('color-picker').onchange = function() {
//     pickedColor = this.value;
//     document.getElementById('business-card').style.backgroundColor = pickedColor;
// }

// SHORTENED: working

document.getElementById('color-picker').onchange = function() {
    document.getElementById('business-card').style.backgroundColor = this.value;
}

// ** Text Color Preset ---------------------------------------------------------------------------------------

function lightText () {
    document.getElementById('business-card').style.color = "#f8f9fa";
}

function darkText () {
    document.getElementById('business-card').style.color = "#343a40";
}

function goldText () {
    document.getElementById('business-card').style.color = "gold";
}

// ** Text Color Picker ---------------------------------------------------------------------------------------

// ORIGINAL: working

// var pickedColor = document.getElementById('text-color-picker').value;

// document.getElementById('text-color-picker').onchange = function() {
//     pickedColor = this.value;
//     document.getElementById('business-card').style.color = pickedColor;
// }

// SHORTENED: working

document.getElementById('text-color-picker').onchange = function() {
    document.getElementById('business-card').style.color = this.value;
}

//CHRIS VERSION: working

// function textPicker () {
//     document.getElementById('business-card').style.color = document.getElementById('text-color-picker').value;
// }

// ** Font Style Selector -------------------------------------------------------------------------------------

// ORIGINAL: working

// function styleSelect (sel) {
//     document.getElementById('business-card').style.fontFamily = sel.options[sel.selectedIndex].value;
// }

// REVERSED: working

document.getElementById('font-styleselect').onchange = function () {
    document.getElementById('business-card').style.fontFamily = this.value;
}

// CHRIS VERSION, AS IMAGINED: working

// function fontStyle() {
//     document.getElementById('business-card').style.fontFamily = document.getElementById('font-styleselect').value;
// }

// ** Input Feilds --------------------------------------------------------------------------------------------

function companyName () {
    document.getElementById('company').innerHTML = companyInput.value;
}

function companyMessage () {
    document.getElementById('message').innerHTML = messageInput.value;
}

function yourName () {
    document.getElementById('name').innerHTML = nameInput.value;
}

function jobTitle () {
    document.getElementById('title').innerHTML = titleInput.value;
}

function emailAdd () {
    document.getElementById('emailadd').innerHTML = emailInput.value;
}

function telNo () {
    document.getElementById('tel').innerHTML = telInput.value;
}

// ** END **