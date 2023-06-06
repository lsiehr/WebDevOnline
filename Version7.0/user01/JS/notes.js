var index = 0;
function submit(event, value) {
    if (event.key == "Enter") {
        document.getElementById("list").innerHTML = document.getElementById("list").innerHTML + "<div class=note id=" + index + "><p class=notesStyle>" + value + "<button class=noteDelButton type='button' onclick='Delete(`" + index + "`)' style='float:right;'>Delete</button></p>" + "</div>";
        document.getElementById('textBox').value = "";
        index = index + 1;
    }

}
function Delete(id) {
document.getElementById(id).remove();
}


function LightClicked(id) {
    if (document.getElementById(id).className == "controlButton") {
        document.getElementById(id).className = "controlButton controlButtonClicked";
        document.getElementById(id).innerHTML = id + ": On"
    } 
    else {
        document.getElementById(id).className = "controlButton";
        document.getElementById(id).innerHTML = id + ": Off";
    }
}

function navMouseDown(id) {
    document.getElementById(id).className = "navButton " + id + " navButtonsMouseDown";
}
function navMouseUp(id) {
    document.getElementById(id).className = "navButton " + id;
}

function sliderUpdate() {
    document.getElementById('sliderText').innerHTML = "Mode: " + document.getElementById('slider').value;
}
var switchState = 1;
function lockSwitchUpdate() {
    if ((document.getElementById('lockSwitch').value == 0) && (document.getElementById('lockSwitch').value == switchState)) {
        document.getElementById('lockSwitch').value = 1;
        switchState = 1;
    } else if ((document.getElementById('lockSwitch').value == 1) && (document.getElementById('lockSwitch').value == switchState)) {
        document.getElementById('lockSwitch').value = 0;
        switchState = 0;
    } else {
        switchState = document.getElementById('lockSwitch').value;
    }
    if (switchState == 1) {
        document.getElementById('lockSwitchLable').innerHTML = "Locked";
    } else {
        document.getElementById('lockSwitchLable').innerHTML = "Unlocked";
    }
}
function selected() {
    document.getElementById('veiwWindow').innerHTML = document.selected;
}