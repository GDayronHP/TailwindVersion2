let FCambioL = document.getElementById("CTLogin"); /* Change to login */
let FCambioR = document.getElementById("CTRegister"); /* Change to register */
let RForm = document.getElementById("register"); /* Change to register form */
let LForm = document.getElementById("login"); /* Change to login form */

function CambioARegistro() {
  RForm.classList.remove("hidden");
  LForm.classList.add("hidden");
}

function CambioALogin() {
  LForm.classList.remove("hidden");
  RForm.classList.add("hidden");
}

FCambioR.addEventListener("click", CambioARegistro);
FCambioL.addEventListener("click", CambioALogin);

// Funcion que permite la aparicion de texto con el fin de que este pregunte si el usuario esta seguro de cambiar de pagina cuando se esta rellenando un formulario HTML

/*
// Agregar evento de submit al formulario
LForm.addEventListener("submit", function (event) {
  // Prevenir el envío del formulario para este ejemplo
  event.preventDefault();
  // Guardar el estado del formulario (si ha sido modificado)
  LForm.dataset.modificado = "true";
  // Enviar el formulario (si es necesario)
  // form.submit();
});

// Agregar evento para avisar al usuario antes de abandonar la página
window.addEventListener("beforeunload", function (event) {
  // Verificar si el formulario ha sido modificado
  if (LForm.dataset.modificado === "true") {
    // Crear el mensaje a mostrar al usuario
    const mensaje =
      "¿Está seguro de abandonar la página? Se perderán los datos ingresados en el formulario.";
    // Establecer el mensaje en el evento
    event.returnValue = mensaje;
    // Retornar el mensaje (para navegadores antiguos)
    return mensaje;
  }
});
*/
