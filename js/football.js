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
            displayFootball();
        } 
        else {console.log('error')}
    }
    request.send();
}

function displayFootball() {
    var i;
    for (i = 0; i < 3; i++) {
        document.getElementById("f"+i+"Pos").innerHTML = footballData["standings"]["0"]["table"][i]["position"];
        document.getElementById("f"+i+"Title").innerHTML = footballData["standings"]["0"]["table"][i]["team"]["name"];
        document.getElementById("f"+i+"Score").innerHTML = footballData["standings"]["0"]["table"][i]["points"];
    }
}