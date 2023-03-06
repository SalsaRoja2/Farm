var jugadores=localStorage.getItem("jugadores");
jugadores=JSON.parse(jugadores);
var aLength = jugadores.length;
            
    document.getElementById("listado").innerHTML="";
    document.getElementById("total").innerHTML="";
            
    var tabla="<tr><th>Alias</th><th>Puntuacion</th><th>Tiempo (s)</th></tr>";
            
    for(var i in jugadores){
        var jugador = JSON.parse(jugadores[i]);        
            tabla += "<tr><td>"+jugador.alias+"</td>";
            tabla += "<td>"+jugador.puntos+"</td>";
            tabla += "<td>"+jugador.mejorTiempo+"</td>";
            tabla += "</tr>";
            }
    document.getElementById("listado").innerHTML=tabla;
    document.getElementById("total").innerHTML="Total: "+aLength;
        