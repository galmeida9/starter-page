var noEnter = 0;

function handleQuery(a, b) {
    var c = a.keyCode || a.which;
    if ((13 === c) || noEnter == 1) {
        if (b[0] == "!" && b[1] == "g") {
            document.getElementsByClassName("search-txt")[0].value = b.substr(3);
            document.forms["searchform"].submit(); 
        }  
        else if (b[0] == "!" && b[1] == "r") {
            document.getElementsByClassName("search-txt")[0].value = b.substr(3);
            var site = "https://www.reddit.com/search/?q=";
            site += document.getElementsByClassName("search-txt")[0].value;
            window.open(site,"_self");
        }
        else if (b[0] == "!" && b[1] == "y") {
            document.getElementsByClassName("search-txt")[0].value = b.substr(3);
            var site = "https://www.youtube.com/results?search_query=";
            site += document.getElementsByClassName("search-txt")[0].value;
            window.open(site,"_self");
        }
        else if (b[0] == "!" && b[1] == "t") {
            document.getElementsByClassName("search-txt")[0].value = b.substr(3);
            var site = "https://twitter.com/search?q=";
            site += document.getElementsByClassName("search-txt")[0].value;
            window.open(site,"_self");
        }
        else if (b[0] == "!" && b[1] == "m") {
            document.getElementsByClassName("search-txt")[0].value = b.substr(3);
            var site = "http://rarbg.to/torrents.php?search=";
            site += document.getElementsByClassName("search-txt")[0].value;
            window.open(site,"_self");
        }
        else if (b[0] == "!" && b[1] == "f") {
            document.getElementsByClassName("search-txt")[0].value = b.substr(3);
            var site = "https://www.facebook.com/search/top/?q=";
            site += document.getElementsByClassName("search-txt")[0].value;
            window.open(site,"_self");
        }
        else document.forms["searchform"].submit(); 
    }
    noEnter = 0;
           
}

function searchPress(a) {
    noEnter = 1;
    console.log(document.getElementsByClassName("search-txt")[0].value);
    handleQuery(a, document.getElementsByClassName("search-txt")[0].value);
}