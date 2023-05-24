
// JS DEL FORMULARIO
const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');
// Expresiones regulares
const expresiones = {
  nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const validarCampo = (expresion, input, campo) => {
  if (expresion.test(input.value)) {
    document.getElementById(`${campo}`).classList.remove('box-incorrect')
    document.getElementById(`${campo}`).classList.add('box-correct')
    document.querySelector(`#${campo} i`).classList.remove('fa-circle-xmark')
    document.querySelector(`#${campo} i`).classList.add('fa-check')
    document.querySelector(`#${campo} p`).classList.remove('input-form-error-active')
    document.querySelector(`#${campo} p`).classList.add('input-form-error')
    campos[campo] = true;
  } else {

    document.getElementById(`${campo}`).classList.add('box-incorrect')
    document.getElementById(`${campo}`).classList.add('box-correct')
    document.querySelector(`#${campo} i`).classList.add('fa-circle-xmark')
    document.querySelector(`#${campo} i`).classList.remove('fa-check')
    document.querySelector(`#${campo} p`).classList.remove('input-form-error')
    document.querySelector(`#${campo} p`).classList.add('input-form-error-active')
    campos[campo] = false;
  }
}


const validarFormulario = (event) => {
  switch (event.target.name) {
    case "nombre":
      validarCampo(expresiones.nombre, event.target, "nombre")
      break;

    case "apellido":
      validarCampo(expresiones.nombre, event.target, "apellido")

      break;

    case "telefono":

      validarCampo(expresiones.telefono, event.target, "telefono")
      break;

    case "email":
      validarCampo(expresiones.correo, event.target, "email")

      break;

  }

}


const campos = {
  nombre: false,
  apellido: false,
  telefono: false,
  email: false,

}

const terminos = document.getElementById('info')

inputs.forEach((input) => {
  input.addEventListener('keyup', validarFormulario);
  input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (event) => {
  event.preventDefault();

  if (campos.nombre && campos.apellido && campos.email && campos.telefono && info.checked) {
    formulario.reset()
    document.getElementById('form-exito-envio').classList.add("form-exito-envio-active")
  } else {
    document.getElementById('form-warning').classList.add("form-warning-active")
  }
})




