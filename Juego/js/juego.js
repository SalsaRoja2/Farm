const contenedor = document.getElementById("animal");
var animales= ["aguila","bufalo","vaca","elefante","leon","oso"];
var shuffled = [];
var audios = [
  document.getElementById('audio_aguila'),
  document.getElementById('audio_bufalo'),
  document.getElementById('audio_vaca'),
  document.getElementById('audio_elefante'),
  document.getElementById('audio_leon'),
  document.getElementById('audio_oso'),
  document.getElementById('audio_correcto'),
  document.getElementById('audio_incorrecto')
];

var puntos = 0;

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
  asignarAnimales();
  agregarImagenes();
  updateScore();
  });

function asignarAnimales(){
  shuffled = animales.sort(function(){return Math.random()-0.5;});
  for(let i=0; i<6;i++){
    dropArea[i].setAttribute("name",shuffled[i]);
  }
}

function agregarImagenes(){
  ctx.drawImage(document.getElementById("bg"),0,0,1300,600);   
  var aaa = document.getElementById("img_"+shuffled[0]);
  ctx.drawImage(aaa,posiciones[0][0],posiciones[0][1],150,150);
  
  dropArea[0].style.left = (posiciones[0][0] + canvas.getBoundingClientRect().left) + "px";
  dropArea[0].style.top = (posiciones[0][1] + canvas.getBoundingClientRect().top + 150) + "px";

  for(let x=1;x<6;x++){
    aaa = document.getElementById("img_"+shuffled[x]);
    ctx.drawImage(aaa,posiciones[x][0],posiciones[x][1],150,150) ;
    dropArea[x].style.left = (posiciones[x][0] + canvas.getBoundingClientRect().left) + "px";
    dropArea[x].style.top = (posiciones[x][1] + canvas.getBoundingClientRect().top + 150) + "px";
  }
}



function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  //alert(data + " | " + returnAnimal(data) + " | " + ev.target.getAttribute("name"));
  if(document.getElementById(data).getAttribute("name") === ev.target.getAttribute("name")){
    puntos+=100;
    updateScore();
    audios[6].play();
    setTimeout(function(){playCorrectSounds(ev.target.getAttribute("name"))}, 1000);
    ev.target.appendChild(document.getElementById(data));
    //alert(puntos + " | " + target.getAttribute("id") + " | " + ev.target.getAttribute("id"));
  } else {
    if(puntos>=0){
      puntos-=10;
      if(puntos<0){
        puntos = 0;
      }
    }
    audios[7].play();
    updateScore();
    //alert(puntos + " | " + target.getAttribute("id") + " | " + ev.target.getAttribute("id"));
  }
  updateScore();
}

function returnAnimal(texto){
  for(let i=0; i<6; i++){
    if(texto.toLowerCase().includes(animales[i])){
      return animales[i];
    } 
  }
  return "error";
}

function updateScore(){
  document.getElementById("puntuacion").innerText = "PUNTOS: " + puntos;
}

//var animales= ["aguila","bufalo","vaca","elefante","leon","oso"];
function playCorrectSounds(xxx){
  switch(xxx){
    case 'aguila':
      audios[0].play();
      break;
    case 'bufalo':
      audios[1].play();
      break;
    case 'vaca':
      audios[2].play();
      break; 
    case 'elefante':
      audios[3].play();
      break;
    case 'leon':
      audios[4].play();
      break;
    case 'oso':
      audios[5].play();
      break;
  }
}

function subirdatos(){
var jugadores=localStorage.getItem("jugadores");
jugadores=JSON.parse(jugadores);
var x;
var alias=localStorage.getItem("jugador");
  var jugador;
  for(let i in jugadores){
    jugador=JSON.parse(jugadores[i])
    if(jugador.alias===alias){
      x=i;
      jugador.puntos+=puntos;
      if(jugador.mejorTiempo<tiempo)
      jugador.mejorTiempo=tiempo;
      break;
    }
  }
}