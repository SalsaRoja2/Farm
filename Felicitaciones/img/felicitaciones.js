
var jugador= localStorage.getItem("jugador");
var nombre= jugador;
document.getElementById("alias").textContent= nombre;

function mostrarCreditos() {
// Crear una ventana emergente
var ventanaEmergente = window.open("", "Creditos", "width=500,height=500");

// Agregar contenido a la ventana emergente
ventanaEmergente.document.write("<h2>Créditos</h2>");
ventanaEmergente.document.write("<p>Equipo:</p>");
ventanaEmergente.document.write("<ul>");
ventanaEmergente.document.write("<li>Daniel Aron López Zermeño</li>");
ventanaEmergente.document.write("<li>Kevin Daniel Savala Diaz de Leon</li>");
ventanaEmergente.document.write("<li>Erick Brandon Ortiz Rosales</li>");
ventanaEmergente.document.write("<li>Ana Delia Reyes Jaime</li>");
ventanaEmergente.document.write("</ul>");
ventanaEmergente.document.write("<p>Universidad;</p>");
ventanaEmergente.document.write("<ul>");
ventanaEmergente.document.write("<li>Universidad Autónoma de Aguascalientes</li>");
ventanaEmergente.document.write("<li>Ing. Sistemas Computacionales</li>");
ventanaEmergente.document.write("<li>Semestre: 6° C</li>");
ventanaEmergente.document.write("</ul>");
ventanaEmergente.document.write("<p>Fecha:4/03/2023</p>");
ventanaEmergente.document.write("<p>Ciudad: Aguascalientes</p>");

// Estilo para la ventana emergente
ventanaEmergente.document.write("<style>");
ventanaEmergente.document.write("h2, p, ul {margin: 10px;}");
ventanaEmergente.document.write("li {margin-left: 20px;}");
ventanaEmergente.document.write("</style>");
}
