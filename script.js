// Obtener el checkbox
const checkbox = document.getElementById("switch");

// Asignar evento "change" al checkbox
checkbox.addEventListener("change", function() {
  // Guardar el estado del checkbox en el LocalStorage
  localStorage.setItem("checkboxState", checkbox.checked);
});

// Recuperar el estado del checkbox del LocalStorage
const checkboxState = localStorage.getItem("checkboxState");

// Establecer el estado del checkbox en función del valor guardado
if (checkboxState === "true") {
  checkbox.checked = true;
  document.querySelector('.label').style.transition = 0;
  document.querySelector('.lbl::after').style.transition = 0;
} else {
  checkbox.checked = false;
}
