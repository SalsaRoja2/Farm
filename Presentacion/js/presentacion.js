let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');
const musica = document.getElementById('musica');

/* Crea una instancia de la imagen de fondo */
let imgFondo = new Image();
imgFondo.src = "img/fondo.jpg";

/* Espera a que la imagen cargue antes de usarla */
imgFondo.onload = function() {
   /* Dibuja la imagen en el canvas */
   context.drawImage(imgFondo, 0, 0, canvas.width, canvas.height);
};
/* Crea una instancia de la imagen de logo */
let imgLogo = new Image();
imgLogo.src = "img/logo.png";

/* Espera a que la imagen cargue antes de usarla */
imgLogo.onload = function() {
   /* Ajusta el tamaño de la imagen de acuerdo a tus necesidades */
   let logoWidth = canvas.width * 0.2; // El ancho del logo será el 20% del ancho del canvas
   let logoHeight = logoWidth * 0.5; // La altura del logo será la mitad de su ancho
   
   /* Dibuja el logo en la esquina inferior derecha del canvas */
   context.drawImage(imgLogo, canvas.width - logoWidth - 650, canvas.height - logoHeight - 250, logoWidth, logoHeight);
};

