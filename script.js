const password = "TrustNo1";
let wrotePassword;

document.getElementById("okButton").addEventListener("click", function() {
    wrotePassword = document.getElementById("passwordField").value;
    if (wrotePassword === password) {
        let unlock = document.querySelectorAll("input");
        for (let i = 0; i < unlock.length - 1; i++) {
            unlock[i].disabled = false;
            unlock[i].style.cursor = 'pointer';
        }
    }
});

document.getElementById("launchButton").addEventListener("click", function () {
    let enginePower = setInterval(liftoff, 30);
    setTimeout(function () {
        clearInterval(enginePower);
    }, 2500);
});

function launch () {

    if (checkIsChecked() && checkIsSliderMax()) {
        let u = document.querySelector("#launchButton");
        u.disabled = false;
    }
}


function checkIsChecked() {
    let check = document.querySelectorAll(".check");
    for (let i = 0; i < check.length; i++) {
        if (check[i].checked != true) {
            return false;
        }
    }
    return true;
}

function checkIsSliderMax() {
    let slider = document.querySelectorAll(".slider");
    for (let i = 0; i < slider.length; i++) {
        if (slider[i].value != 100) {
            return false;
        }
    }
    return true;
}

function liftoff() {
    let element = document.querySelector(".rocket");
    let x = Number(getComputedStyle(element).left.substr(0, getComputedStyle(element).left.length - 2));
    let y = Number(getComputedStyle(element).top.substr(0, getComputedStyle(element).top.length - 2));

    element.style.left = 10 + x + "px";
    element.style.top = y - 12 + "px";
}