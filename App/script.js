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
