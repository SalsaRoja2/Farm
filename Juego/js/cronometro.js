function ResetTime(){
    clearInterval(cronometro);
}

function StarTime(){

    seconds= 0;
   
    cronometro = setInterval(function(){
    seconds++;
    secs= seconds;
        document.getElementById("tiempo").textContent ="TIEMPO: "+ secs;
        Total_secs=secs;
        localStorage.setItem("tiempo",Total_secs);
        
        
    },1000)
}