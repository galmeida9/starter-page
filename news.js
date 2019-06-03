getNews();

function getNews() {
    var request = new XMLHttpRequest();

    request.open('GET', 'https://newsapi.org/v2/top-headlines?' +
    'country=pt&' +
    'apiKey=69868ae23e33498a8c6abec2df5a9c5d', true);

    request.onload = function () {
        var data = JSON.parse(this.response);
        console.log(data);
        if (request.status >= 200 && request.status < 400) {
            var i;
            for (i = 0; i < 10; i++) {
                document.getElementById("news" + i).href = data["articles"][i]["url"];
                document.getElementById("news" + i + "Img").src = data["articles"][i]["urlToImage"];
                document.getElementById("news" + i + "Title").innerHTML = data["articles"][i]["title"];
            }
        } 
        else {console.log('error')}
    }
    request.send();
}

function showMore() {
    document.getElementById("showMore").style.display = "none";
    document.getElementById("news").style.height = "920pt";
    document.getElementById("showMoreNews").style.display = "block";
}

function showLess() {
    document.getElementById("showMore").style.display = "block";
    document.getElementById("news").style.height = "290pt";
    document.getElementById("showMoreNews").style.display = "none";
}