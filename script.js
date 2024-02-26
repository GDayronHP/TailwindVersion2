const FCambioL = document.getElementById("CTLogin"); /* Change to login */
const FCambioR = document.getElementById("CTRegister"); /* Change to register */
const RForm = document.getElementById("register"); /* Change to register form */
const LForm = document.getElementById("login"); /* Change to login form */



/* variables a utilizar para la segunda funcion */

let Username = document.getElementById("username");
let Password = document.getElementById("password");

// Usar una función anónima para ejecutar alert(PHUsername)



function PHChangeUsername(){
  Username.removeAttribute("placeholder");
  Username.setAttribute("placeholder","Example:JuanitoElPro123")
}

function PHChangePassword(){
  Password.removeAttribute("placeholder");
  Password.setAttribute("placeholder","Example:  ****************  ")
}

function PHChangeOriginalU(){
  Username.removeAttribute("placeholder");
  Username.setAttribute("placeholder","Enter username or email")
}

function PHChangeOriginalP(){
  Password.removeAttribute("placeholder");
  Password.setAttribute("placeholder","Enter password")
}

/* Funcion para cambio de Registro a Login o visceversa */

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

Username.addEventListener("focus", PHChangeUsername);
Username.addEventListener("blur", PHChangeOriginalU);

Password.addEventListener("focus", PHChangePassword);
Password.addEventListener("blur", PHChangeOriginalP);







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
