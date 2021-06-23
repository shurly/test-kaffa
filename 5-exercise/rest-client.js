function jsonGet(url){
    let request = new XMLHttpRequest()
    request.open("GET", url, false);
    request.send();

    return request.responseText;
}

function restClient(){
    let x = jsonGet('http://worldclockapi.com/api/json/utc/now');
    let data = JSON.parse(x);
    let table = document.getElementById('table');

    let screen = document.createElement('tr');
    let dateTime = document.createElement('td');
    let timeZone = document.createElement('td');
    
    dateTime.innerHTML = data.currentDateTime;
    timeZone.innerHTML = data.timeZoneName;

    screen.appendChild(dateTime);
    screen.appendChild(timeZone);

    table.appendChild(screen);

    return screen;
}

restClient();
