var footballData;

getFootbal();

function getFootbal() {
    var request = new XMLHttpRequest();

    request.open('GET', 'https://api.football-data.org/v2/competitions/PPL/standings', true);
    request.setRequestHeader('X-Auth-Token', "78c0367bda4a4297acb927fefa61c378");
    request.onload = function () {
        var data = JSON.parse(this.response);
        console.log(data);
        if (request.status >= 200 && request.status < 400) {
            footballData = data;
        } 
        else {console.log('error')}
    }
    request.send();
}

function displayFootball() {
    var i;
    document.getElementById("redditButton").style.color = "white";
    document.getElementById("footballButton").style.color = "grey";
    document.getElementById("newsButton").style.color = "white";
    document.getElementById("footballWrapper").style.display = "block";
    document.getElementById("news").style.display = "none";

    for (i = 0; i < 3; i++) {
        document.getElementById("f"+i+"Pos").innerHTML = footballData["standings"]["0"]["table"][i]["position"];
        document.getElementById("f"+i+"Title").innerHTML = footballData["standings"]["0"]["table"][i]["team"]["name"];
        document.getElementById("f"+i+"Score").innerHTML = footballData["standings"]["0"]["table"][i]["points"];
        document.getElementById("f"+i+"Games").innerHTML = footballData["standings"]["0"]["table"][i]["draw"] + 
                                                           footballData["standings"]["0"]["table"][i]["lost"] +
                                                           footballData["standings"]["0"]["table"][i]["won"];
        document.getElementById("f"+i+"Won").innerHTML = footballData["standings"]["0"]["table"][i]["won"];
        document.getElementById("f"+i+"Draw").innerHTML = footballData["standings"]["0"]["table"][i]["draw"];
        document.getElementById("f"+i+"Lost").innerHTML = footballData["standings"]["0"]["table"][i]["lost"];
    }
}