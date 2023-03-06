var indice=-1;
var jugadores=localStorage.getItem("jugadores");
jugadores=JSON.parse(jugadores);
var x;
if(jugadores==null) jugadores=[];
 function almacenarDatos() {
    var alias=document.getElementById("alias").value;
    localStorage.setItem("jugador",alias);
    if(!jugadorExiste(alias)){
    var jugador= JSON.stringify({
      alias:alias,
      puntos:0,
      mejorTiempo:0
    });
    document.getElementById("saludo").textContent= "Hola "+alias;
    jugadores.push(jugador);
    localStorage.setItem("jugadores",JSON.stringify(jugadores));
  }else{
    var jugador=JSON.parse(jugadores[x]);
    document.getElementById("puntos").textContent = 
      "Puntos: " + jugador.puntos; 
    document.getElementById("mejorTiempo").textContent = 
      "Mejor tiempo: " + jugador.mejorTiempo; 
  }
    


  }
//comit inicial probando
function jugadorExiste(alias) {
  for (let i in jugadores) {
     jugador= JSON.parse(jugadores[i])
    if (jugador.alias === alias) {
      x=i;
      return true;
    }
  }
  return false;
}




