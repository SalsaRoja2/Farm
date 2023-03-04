 // Función para almacenar los datos del jugador en localstorage
 function almacenarDatos() {
    var alias = document.getElementById("alias").value;
    var data = localStorage.getItem(alias);

    if (!data) {
      var newData = { puntos: 0, mejorTiempo: 0 };
      localStorage.setItem(alias, JSON.stringify(newData));
      document.getElementById("Alias").textContent = 
      "Hola "+ alias;
    } else {
      var parsedData = JSON.parse(data);
      var puntos = parsedData.puntos;
      var mejorTiempo = parsedData.mejorTiempo;
      document.getElementById("puntos").textContent =
      "Puntos: " + puntos;
    document.getElementById("mejorTiempo").textContent =
      "Mejor tiempo: " + mejorTiempo;
    }
   
  }
//comit inicial probando