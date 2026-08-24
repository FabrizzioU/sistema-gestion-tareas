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

function agregarActividadATabla(nombre, responsable, prioridad, estado) {
  const tabla = document.getElementById("tabla-actividades");
  if (!tabla) return;

  const tbody = tabla.querySelector("tbody");
  const fila = document.createElement("tr");

  fila.innerHTML = `
    <td>${nombre}</td>
    <td>${responsable}</td>
    <td>${prioridad}</td>