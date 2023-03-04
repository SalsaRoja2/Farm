const contenedor = document.getElementById("animal");
const imagenes = ["../img/aguila.png", "../img/bufalo.png", "../img/chango.png","../img/elefante.png","../img/leon.png","../img/oso.png"];

imagenes.sort(() => Math.random() - 0.5);

imagenes.forEach((ruta) => {
  const img = document.createElement("img");
  img.src = ruta;
  contenedor.appendChild(img);
});