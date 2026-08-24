console.log("Gestor de Actividades Académicas cargado");

const form = document.getElementById("form-actividad");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();

    if (nombre === "") {
      alert("El nombre de la actividad es obligatorio.");
      return;
    }

    alert("Actividad registrada correctamente (simulación).");
    form.reset();
  });
}