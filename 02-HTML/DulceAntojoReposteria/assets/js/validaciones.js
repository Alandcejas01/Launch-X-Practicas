export function valida(input) {
  const tipoDeInput = input.dataset.tipo;
  if (input.validity.valid){
    input.parentElement.classList.remove("input-container--invalid");
    input.parentElement.querySelector(".input-message-error").innerHTML = "" 
  } else {
    input.parentElement.classList.add("input-container--invalid");
    input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeDeError(tipoDeInput, input )
  };

};
export function validaTextarea(textArea) {
  if (textArea.value.trim() === ""){
    textArea.parentElement.classList.add("input-container--invalid");
    textArea.parentElement.querySelector(".input-message-error").innerHTML = "El campo no puede estar vacio";
  } else {
    textArea.parentElement.classList.remove("input-container--invalid");
    textArea.parentElement.querySelector(".input-message-error").innerHTML = "";
  };

};


let loginAdmin = {
  "username": "admin",
  "password": "admin"
}

export function validarLogin(){
  
  const usernameInput = document.querySelector("#username");
  const passwordInput = document.querySelector("#password");
  let logged = usernameInput.value === loginAdmin.username && passwordInput.value === loginAdmin.password;
  if(usernameInput.value === "" || passwordInput.value === ""){
    Swal.fire({
      background: '#ffddd9',
      confirmButtonColor: '#E97777',
      color: '#E97777',
      icon: 'error',
      title: 'Fallo al iniciar sesion',
      text: 'No pueden haber campos vacios',
    });
  }else if(!logged){
    Swal.fire({
      background: '#ffddd9',
      confirmButtonColor: '#E97777',
      color: '#E97777',
      icon: 'error',
      title: 'Fallo al iniciar sesion',
      text: 'Usuario o contraseña incorrectos',
    });
  } else {
    Swal.fire({
      background: '#ffddd9',
      color: '#E97777',
      position: 'center',
      icon: 'success',
      title: 'Inicio de sesion exitoso',
      showConfirmButton: false,
      timer: 1500
    })
    setTimeout(() => {
      document.location.href = "./assets/views/admin.html"
    }, 1550)
  };
  usernameInput.value = "";
  passwordInput.value = "";
}

const tipoDeErrores = [
  "valueMissing",
  "typeMismatch",
  "patternMismatch",
  "customError",
];

const mensajesDeError = {
  nombre: {
    valueMissing: "El campo nombre no puede estar vacio",
  },
  numero: {
    valueMissing: "Este campo no puede estar vacio",
    patternMismatch: "El formato requerido es XXXXXXXXXX 10 números"
  },
  email: {
    valueMissing: "El campo correo no puede estar vacio",
    typeMismatch: "El correo no es valido",
  },
  direccion: {
    valueMissing: "Este campo no puede estar vacio",
    patternMismatch: "La direccion debe contener entre 4 a 40 cáracteres."
  },
};

function mostrarMensajeDeError(tipoDeInput, input){
  let mensaje = "";
  tipoDeErrores.forEach ( error => {
    if(input.validity[error]){
      mensaje = mensajesDeError[tipoDeInput][error];
    };
  });
  return mensaje;
};
