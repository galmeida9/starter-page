var timeout;
clock();
displayDate();

function clock() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;

    document.getElementById("hour").innerHTML = hours + "時 " + minutes + "分";

    timeout = setTimeout(clock, 1000);
}

function displayDate() {
    var date = new Date();
    day = date.getDate();
    month = date.getMonth() + 1;
    var weekday = new Array(7);
    weekday[0] = "日曜日";
    weekday[1] = "月曜日";
    weekday[2] = "火曜日";
    weekday[3] = "水曜日";
    weekday[4] = "木曜日";
    weekday[5] = "金曜日";
    weekday[6] = "土曜日";
    var n = weekday[date.getDay()];

    if (day < 10) day = "0" + day;
    if (month < 10) month = "0" + month;

    document.getElementById("date").innerHTML = n + " " + day + "/" + month;
}