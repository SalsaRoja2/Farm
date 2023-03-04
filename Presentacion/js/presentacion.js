const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const musica = document.getElementById('musica');

function iniciarJuego() {
  // Ocultar la sección de inicio
  document.querySelector('.inicio').style.display = 'none';
  // Mostrar el canvas
  canvas.style.display = 'block';
  // Detener la música de la página de inicio
  musica.pause();

}
