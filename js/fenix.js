function openFenix() {
    document.getElementById("fenixpopup").style.visibility = "visible";
    document.getElementById("fenixpopup").style.opacity = "1";
    document.body.style.overflow = "hidden";
}

window.onclick = function(event) {
    var popup = document.getElementById("fenixpopup");

    if (event.target == popup) {
        document.getElementById("fenixpopup").style.visibility = "hidden";
        document.getElementById("fenixpopup").style.opacity = "0";
        document.body.style.overflow = "scroll";
    }
}