function openFenix() {
    document.getElementById("fenixpopup").style.visibility = "visible";
    document.getElementById("fenixpopup").style.opacity = "1";
    document.body.style.overflow = "hidden";
}

function openAnime() {
    document.getElementById("animepopup").style.visibility = "visible";
    document.getElementById("animepopup").style.opacity = "1";
    document.body.style.overflow = "hidden";
}

function openTvtime() {
    document.getElementById("tvtimepopup").style.visibility = "visible";
    document.getElementById("tvtimepopup").style.opacity = "1";
    document.body.style.overflow = "hidden";
}

window.onclick = function(event) {
    var fenix = document.getElementById("fenixpopup");
    var anime = document.getElementById("animepopup");
    var tvtime = document.getElementById("tvtimepopup");

    if (event.target == fenix) {
        document.getElementById("fenixpopup").style.visibility = "hidden";
        document.getElementById("fenixpopup").style.opacity = "0";
        document.body.style.overflow = "scroll";
    }
    else if (event.target == anime) {
        document.getElementById("animepopup").style.visibility = "hidden";
        document.getElementById("animepopup").style.opacity = "0";
        document.body.style.overflow = "scroll";
    }
    else if (event.target == tvtime) {
        document.getElementById("tvtimepopup").style.visibility = "hidden";
        document.getElementById("tvtimepopup").style.opacity = "0";
        document.body.style.overflow = "scroll";
    }
}