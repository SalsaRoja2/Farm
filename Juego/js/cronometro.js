function ResetTime(){
    clearInterval(cronometro);
}

function StarTime(){

    seconds= 0;
    s= document.getElementById("segundos");
    m= document.getElementById("minutos");
    cronometro = setInterval(function(){
    seconds++;
    secs= seconds;
    mins=0;
    while ( secs>=60){
        mins++;
        secs-=60;
        }
        if(min<10)m.innerHTML = "0"+ mins;
        else  m.innerHTML = mins;
        if(secs<10)m.innerHTML = "0"+ secs;
        s.innerHTML = secs;
        Total_mins=mins;
        Total_secs=secs;
        
        
        
    },1000)
}