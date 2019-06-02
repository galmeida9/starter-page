function handleQuery(a, b) {
    var c = a.keyCode || a.which;
    if (13 === c) {
        console.log(b[0]);
        if (b[0] == "!" && b[1] == "g") {
            document.getElementById("searchform").value = b.substr(3);
            console.log(document.forms["searchform"].value);
            document.forms["searchform"].submit(); 
        }  
        //else if (b[0] == "!" && b[1] == "r") 
    }
           
}