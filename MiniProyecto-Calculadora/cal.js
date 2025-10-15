/*Sin Modificar el HTML realizar el javascript , se adjunta el index y el css que hay que utilizar . */

//Obtengo las referencias
const pantalla = document.getElementById("pantalla");
const botonesNumeros = document.querySelectorAll(".numero");
const botonesOperaciones = document.querySelectorAll(".operacion");
const botonIgual = document.querySelector(".equal");
const botonReset = document.getElementById("reset");

let num1 = null; //Guarda el primer numero
let operador = null; //Guarda el operador

//El for each es para recorrer la lista de nodos que devuelve querySelector
botonesNumeros.forEach(boton => {
  boton.addEventListener("click", () => {
    const valor = boton.textContent;
    console.log(valor); //Mostrar valor por consola

    //Evita mas de un . 
    if (valor === "." && pantalla.textContent.includes(".")) {
      return;
    }

    //Si la pantalla tiene 0 y se pulsa un número o punto
    if (pantalla.textContent === "0" && valor !== ".") {
      pantalla.textContent = valor; // reemplaza el 0 inicial si el valor introducido es un numero
    } else {
      pantalla.textContent += valor; // añade el número o el punto
    }
  })
});

botonesOperaciones.forEach(boton => {
  boton.addEventListener("click", () => {
    operador = boton.textContent;         // guardamos el operador
    num1 = parseFloat(pantalla.textContent);  // convertimos el número a float y lo guardamos
    pantalla.textContent = "0";           // limpiamos la pantalla para el segundo número
  });
});

botonIgual.addEventListener("click", () => {
  const num2 = parseFloat(pantalla.textContent); //Segundo numero
  let resultado;

  switch (operador) {
    case "+":
      resultado = num1 + num2;
      break;
    case "-":
      resultado = num1 - num2;
      break;
    case "*":
      resultado = num1 * num2;
      break;
    case "/":
      resultado = num1 / num2;
      break;
    case "%":
      resultado = num1 % num2;
      break;
  }
  pantalla.textContent = resultado; //Muestro el resultado
  num1 = resultado; //Permite seguir haciendo operaciones
})

//Pantalla Vacia Boton Reset
botonReset.addEventListener("click", () => {
  pantalla.textContent = "0";
});