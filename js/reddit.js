var redditData;

getReddit();

function getReddit() {
    var request = new XMLHttpRequest();

    request.open('GET', "https://www.reddit.com/r/portugal/top.json", true);

    request.onload = function () {
        var data = JSON.parse(this.response);
        console.log(data);
        if (request.status >= 200 && request.status < 400) {
            redditData = data;
        } 
        else {console.log('error')}
    }
    request.send();
}

function displayReddit() {
    var i;
    document.getElementById("redditButton").style.color = "grey";
    document.getElementById("footballButton").style.color = "white";
    document.getElementById("newsButton").style.color = "white";
    document.getElementById("footballWrapper").style.display = "none";
    document.getElementById("news").style.display = "block";
    for (i = 0; i < 10; i++) {
        document.getElementById("news" + i).href = "https://www.reddit.com" + redditData["data"]["children"][i]["data"]["permalink"];
        if (redditData["data"]["children"][i]["data"]["thumbnail"] != "self") document.getElementById("news" + i + "Img").src = redditData["data"]["children"][i]["data"]["thumbnail"].replace("http:", "https:");
        document.getElementById("news" + i + "Title").innerHTML = redditData["data"]["children"][i]["data"]["title"];
    }
}