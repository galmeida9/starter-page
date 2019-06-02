checkCookies();

function checkCookies(){
    var lat = getCookie("lat");
    if (lat != "") {
        var position = {
            coords:{
                longitude:getCookie("lon"),
                latitude:getCookie("lat")
            }
        };
        weather(position);
    } else {
        getLocation();
    }
}

function getCookie(cookie) {
    var name = cookie + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

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

    request.open('GET', 'https://api.openweathermap.org/data/2.5/forecast?lat='+position.coords.latitude+
    '&lon='+position.coords.longitude+'&APPID=43781a0c36823440a1bc53550259e697&units=metric', true);

    document.cookie = "lat=" + position.coords.latitude + "expires=365";
    document.cookie = "lat=" + position.coords.longitude + "expires=365";

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
