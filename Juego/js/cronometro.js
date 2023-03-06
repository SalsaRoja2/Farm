function ResetTime(){
    clearInterval(cronometro);
}

function StarTime(){

    seconds= 0;
   
    cronometro = setInterval(function(){
    seconds++;
    secs= seconds;
    while ( secs>=60){
        secs-=60;
        }
        document.getElementById("segundos").textContent = secs;
        Total_secs=secs;
        localStorage.setItem("tiempo",Total_secs);
        
        
    },1000)
}