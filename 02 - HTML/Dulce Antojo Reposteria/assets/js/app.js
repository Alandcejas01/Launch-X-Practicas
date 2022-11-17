import { valida, validaTextarea, validarLogin } from "./validaciones.js";

const inputs = document.querySelectorAll(".input");

const textArea = document.querySelector("textarea");

const loginBtn = document.querySelector("#loginBtn");

loginBtn.addEventListener('click', validarLogin);

textArea.addEventListener('keydown', (textArea) => validaTextarea(textArea.target));
textArea.addEventListener('blur', (textArea) => validaTextarea(textArea.target));


  
inputs.forEach( input => {
  input.addEventListener('blur', (input) => {
    valida(input.target);
  });
});