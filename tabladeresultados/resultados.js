var jugadores=localStorage.getItem("jugadores");
jugadores=JSON.parse(jugadores);
var aux;
var aLength = jugadores.length;
    /*for(let i in jugadores){
        for(let j in jugadores){
            var jugador= JSON.parse(jugadores[j]);
            var jugador2=JSON.parse(jugadores[j+1]);
            if(jugador.mejorTiempo<=jugador2.mejorTiempo){
                aux=jugador;
                jugador=jugador2;
            }
        }
    }*/
    jugadores.sort((y, x)=> x.mejorTiempo - y.mejorTiempo);
    console.log(jugadores);
    jugadores.sort((x, y)=> x.mejorTiempo - y.mejorTiempo);
    console.log(jugadores);
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
        