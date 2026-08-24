console.log("Gestor de Actividades Académicas cargado");

function agregarActividadATabla(nombre, responsable, prioridad, estado) {
  const tabla = document.getElementById("tabla-actividades");
  if (!tabla) return;

  const tbody = tabla.querySelector("tbody");
  const fila = document.createElement("tr");

  fila.innerHTML = `
    <td>${nombre}</td>
    <td>${responsable}</td>
    <td>${prioridad}</td>
    <td>${estado}</td>
  `;

  tbody.appendChild(fila);
}