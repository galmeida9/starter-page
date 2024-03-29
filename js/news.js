var newsData;

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
            newsData = data;
            displayNews();
        } 
        else {console.log('error')}
    }
    request.send();
}

function showMore() {
    document.getElementById("showMore").style.display = "none";
    document.getElementById("news").style.height = "865pt";
    document.getElementById("showMoreNews").style.display = "block";
    document.getElementById("newsWrapper").style.paddingBottom = "1000pt";
}

function showLess() {
    document.getElementById("showMore").style.display = "block";
    document.getElementById("news").style.height = "290pt";
    document.getElementById("showMoreNews").style.display = "none";
    document.getElementById("newsWrapper").style.paddingBottom = "0pt";
}

function displayNews() {
    var i;
    document.getElementById("redditButton").style.color = "white";
    document.getElementById("footballButton").style.color = "white";
    document.getElementById("newsButton").style.color = "grey";
    document.getElementById("footballWrapper").style.display = "none";
    document.getElementById("news").style.display = "block";
    for (i = 0; i < 10; i++) {
        document.getElementById("news" + i).href = newsData["articles"][i]["url"];
        document.getElementById("news" + i + "Img").src = newsData["articles"][i]["urlToImage"].replace("http:", "https:");
        document.getElementById("news" + i + "Title").innerHTML = newsData["articles"][i]["title"];
    }
}