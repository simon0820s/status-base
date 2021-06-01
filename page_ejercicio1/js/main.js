let posiciones = [0,-160,-320,-481,-642,-803];
let dado1,dado2,boton_tirar;
let contador = 0;
let contador_tiros = 0;
let sumacaras = 0;
let nombre = "";

window.onload = init;

function init(){
  nombre = prompt("escribe tu nombre");
  dado1 = document.getElementById("dado1");
  dado2 = document.getElementById("dado2");
  boton_tirar = document.getElementById("boton_tirar");
  boton_tirar.addEventListener("click",jugar);
}

//https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function tirardado(ref){
  var cara = Math.floor(Math.random() * 6) + 1 ;
  ref.style.backgroundPosition = posiciones[cara-1]+"px";
  return cara;
}

function jugar(){
  try{
    var cara1;
    var cara2;
    contador_tiros++;
    cara1=tirardado(dado1);
    cara2=tirardado(dado2);
    sumacaras = cara1 + cara2;

    if(contador_tiros<=1 && sumacaras == 7|| sumacaras==11) {
    alert(nombre + " Gana!!" + " Tiros: " + contador_tiros);
    contador_tiros=0;
    }
    else if(contador_tiros<=1 && sumacaras == 11) {
    alert(nombre + " Gana!!" + " Tiros: " + contador_tiros);
    contador_tiros=0;
    }
    else if (contador_tiros<=1 && sumacaras == 2){
    alert(nombre + " Pierde!!" + " Tiros: " + contador_tiros);
    contador_tiros=0;
    }
    else if (contador_tiros<=1 && sumacaras == 3){
    alert(nombre + " Pierde!!" + " Tiros: " + contador_tiros);
    contador_tiros=0;
    }
    else if (contador_tiros<=1 && sumacaras == 12){
    alert(nombre + " Pierde!!" + " Tiros: " + contador_tiros);
    contador_tiros=0;
    }
    else if (contador_tiros>1 && sumacaras == 12){
      alert(nombre + " Gana!!" + " Tiros: " + contador_tiros);
      contador_tiros=0;
    }
    else if (contador_tiros >1 && sumacaras == 7){
      alert(nombre + " Pierde!!" + " Tiros: " + contador_tiros);
      contador_tiros=0;
    }
    else {
      alert(nombre + " intentalo de nuevo" + " Tiros: " + contador_tiros);
    } 
    }
    catch(error){
      alert(error);
  }
  
}
