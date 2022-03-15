//ID's
// hour
// minute
// second

    //TODO: Access all the ID's
let hours = document.getElementById('hour');
let minutes = document.getElementById('minute');
let seconds = document.getElementById('second');
let sessions = document.getElementById('session')
let clock = setInterval(()=>{
    let crntDate = new Date();
    //TODO: Getting Current Hour, Minutes, Seconds 
    let crntHrs = crntDate.getHours();
    let crntMin = crntDate.getMinutes();
    let crntSec = crntDate.getSeconds();

    //TODO: Making Clock 12 hr
        crntHrs = crntHrs % 12;
        crntHrs = crntHrs ? crntHrs : 12;
        crntMin = crntMin < 10 ? '0' + crntMin : crntMin;
        var newformat = crntHrs >= 12 ? 'AM' : 'PM';


    //TODO: Adding 0's before digit if they less than 10
    if(crntHrs < 10){
        crntHrs = "0" + crntHrs
    }
    // if(crntMin < 10){
    //     crntMin = "0" + crntMin
    // }
    if(crntSec < 10){
        crntSec = "0" + crntSec
    }

    //TODO: rendering into HTML
    hours.textContent =  crntHrs;
    minutes.textContent =  crntMin;
    seconds.textContent =  crntSec;
    sessions.textContent = newformat;
},1000);

