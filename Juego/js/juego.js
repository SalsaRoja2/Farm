const contenedor = document.getElementById("animal");
var animales= ["aguila","bufalo","vaca","elefante","leon","oso"];
var shuffled = [];
//var imagenes = [
//  document.getElementById('img_aguila'),
//  document.getElementById('img_bufalo'),
//  document.getElementById('img_vaca'),
//  document.getElementById('img_elefante'),
//  document.getElementById('img_leon'),
//  document.getElementById('img_oso')
//];

var puntos = 100;

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
    ev.target.appendChild(document.getElementById(data));
    //alert(puntos + " | " + target.getAttribute("id") + " | " + ev.target.getAttribute("id"));
  } else {
    puntos-=10;
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