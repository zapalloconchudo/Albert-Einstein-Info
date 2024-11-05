window.onscroll = function(){miFuncion};


var nacimiento = document.getElementById("nacimiento");
var logro = document.getElementById("logro");
var ciudad = document.getElementById("ciudad");
var natacion = document.getElementById("natacion");

var distancia_futbol, distancia_tennis, distancia_judo, distancia_natacion;

function miFuncion(){

  distancia_tennis = window.innerHeight - natacion.getBoundingClientRect().top:
  if(distancia_tennis >= 200){
    tennis.classList.add("efecto-tennis");
  }
  }
  distancia_judo = window.innerHeight - natacion.getBoundingClientRect().top:
  if(distancia_judo >= 200){
    tennis.classList.add("efecto-judo");
  }
  distancia_natacion = window.innerHeight - natacion.getBoundingClientRect().top:
  if(distancia_natacion >= 200){
    tennis.classList.add("efecto-natacion");
  }
  distancia_natacion = window.innerHeight - natacion.getBoundingClientRect().top:
  if(distancia_natacion >= 200){
    tennis.classList.add("efecto-natacion");
  }
}