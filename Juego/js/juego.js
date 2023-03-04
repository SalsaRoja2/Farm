const contenedor = document.getElementById("animal");
var imagenes = [
  document.getElementById('img_aguila'),
  document.getElementById('img_bufalo'),
  document.getElementById('img_vaca'),
  document.getElementById('img_elefante'),
  document.getElementById('img_leon'),
  document.getElementById('img_oso')
];

var dropArea = [
  document.getElementById('divUno'),
  document.getElementById('divDos'),
  document.getElementById('divTres'),
  document.getElementById('divCuatro'),
  document.getElementById('divCinco'),
  document.getElementById('divSeis')
];

var posiciones = [
                  [100,300],
                  [400,380],
                  [1050,120],
                  [590,260],
                  [810,370],
                  [1060,370]
                ];

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');


window.addEventListener("load", (event) => {
  if(typeof window.localStorage !== "undefined" && !localStorage.getItem('visited')){
    localStorage.setItem('visited',true);
  }
  agregarImagenes();
  });


function agregarImagenes(){
  ctx.drawImage(document.getElementById("bg"),0,0,1300,600);   
  var aaa = imagenes[0];
  ctx.drawImage(aaa,posiciones[0][0],posiciones[0][1],150,150);
  
  dropArea[0].style.left = (posiciones[0][0] + canvas.getBoundingClientRect().left) + "px";
  dropArea[0].style.top = (posiciones[0][1] + canvas.getBoundingClientRect().top + 150) + "px";

  for(let x=1;x<6;x++){
    aaa = imagenes[x];
    ctx.drawImage(aaa,posiciones[x][0],posiciones[x][1],150,150) ;
    dropArea[x].style.left = (posiciones[x][0] + canvas.getBoundingClientRect().left) + "px";
    dropArea[x].style.top = (posiciones[x][1] + canvas.getBoundingClientRect().top + 150) + "px";
  }
}

//FUNCION PARA CREAR LAS 6 POSICIONES DE CADA ANIMAL

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}
