function handleQuery(a, b) {
    var c = a.keyCode || a.which;
    if (13 === c) {
        console.log(b[0]);
        if (b[0] == "!" && b[1] == "g") {
            document.getElementsByClassName("search-txt")[0].value = b.substr(3);
            document.forms["searchform"].submit(); 
        }  
        else if (b[0] == "!" && b[1] == "r") {
            document.getElementsByClassName("search-txt")[0].value = b.substr(3);
            var site = "https://www.reddit.com/search/?q=";
            site += document.getElementsByClassName("search-txt")[0].value;
            window.open(site);
        }
    }
           
}