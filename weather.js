getLocation();

function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(weather);
    } else { 
      //x.innerHTML = "Geolocation is not supported by this browser.";
      console.log("error");
    }
}

function weather(position){
    var request = new XMLHttpRequest();

    request.open('GET', 'http://api.openweathermap.org/data/2.5/forecast?lat='+position.coords.latitude+
    '&lon='+position.coords.longitude+'&APPID=43781a0c36823440a1bc53550259e697&units=metric', true);

    request.onload = function () {
        var data = JSON.parse(this.response);
        console.log(data);
        if (request.status >= 200 && request.status < 400) {
            var condition = data["list"]["0"]["weather"]["0"]["main"];

            if (condition == "Clouds") condition = "曇り"
            else if (condition == "Clear") condition = "晴れ" 

            document.getElementById("weatherCity").innerHTML = "シティ: " + data["city"]["name"] + ", " + data["city"]["country"];
            document.getElementById("weatherTemp").innerHTML = "天気: " + Math.ceil(data["list"]["0"]["main"]["temp"]) + "°C";
            document.getElementById("weatherCondition").innerHTML = condition;
            document.getElementById("weatherImg").src = "https://openweathermap.org/img/w/" + data["list"]["0"]["weather"]["0"]["icon"] + ".png";
        } 
        else {console.log('error')}
    }
    request.send();
}
