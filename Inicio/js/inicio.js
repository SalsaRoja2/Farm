var indice=-1;
var jugadores=localStorage.getItem("jugadores");
jugadores=JSON.parse(jugadores);
if(jugadores==null) jugadores=[];
 function almacenarDatos() {
    var alias=document.getElementById("alias").value;
    
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
    document.getElementById("puntos").textContent = 
      "Puntos: " + puntos; 
    document.getElementById("mejorTiempo").textContent = 
      "Mejor tiempo: " + mejorTiempo; 
  }
    


  }
//comit inicial probando
function jugadorExiste(alias) {
  for (let jugador of Object.values(jugadores)) {
    if (jugador.alias === alias) {
      return true;
    }
  }
  return false;
}




