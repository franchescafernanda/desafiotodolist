let tareas = [
    { id: 16, descripcion: "Hacer mercado", completado: false },
    { id: 60, descripcion: "Estudiar para la prueba", completado: false },
    { id: 24, descripcion: "Sacar a pasear a tobby", completado: false }
  ];

  function actualizarLista() {
    const listaTareas = document.getElementById("listaTareas");
    const totalTareasSpan = document.getElementById("totalTareas");
    const totalTareasRealizadasSpan = document.getElementById("totalTareasRealizadas");

    listaTareas.innerHTML = "";
    totalTareasSpan.textContent = tareas.length;

    let totalTareasRealizadas = 0;

    tareas.forEach((tarea, index) => {
      const li = document.createElement("li");
      li.textContent = `${tarea.descripcion} ID: ${tarea.id} `; /*borre el () del ID no es necesario agregarlo*/
      
      const completadoCheckbox = document.createElement("input");
      completadoCheckbox.type = "checkbox";
      completadoCheckbox.checked = tarea.completado;
      completadoCheckbox.addEventListener("change", () => marcarComoCompletada(index));
      li.appendChild(completadoCheckbox);

      /*función para poder borrar por medio del botón*/
      const borrarBoton = document.createElement("button");
      borrarBoton.textContent = "X";
      borrarBoton.addEventListener("click", () => borrarTarea(index));
      li.appendChild(borrarBoton);

      if (tarea.completado) {
        li.classList.add("completed");
        totalTareasRealizadas++;
      }

      listaTareas.appendChild(li);
    });

    totalTareasRealizadasSpan.textContent = totalTareasRealizadas;
  }

  /*función para poder agregar c/d tarea*/
  function agregarTarea() {
    const tareaInput = document.getElementById("tareaInput");
    const nuevaTarea = {
      id: Date.now(), // Generar un ID único
      descripcion: tareaInput.value,
      completado: false
    };

    tareas.push(nuevaTarea);
    tareaInput.value = "";
    actualizarLista();
  }

  function borrarTarea(index) {
    tareas.splice(index, 1);
    actualizarLista();
  }

  function marcarComoCompletada(index) {
    tareas[index].completado = !tareas[index].completado;
    actualizarLista();
  }

  // Mostrar la lista inicial
  actualizarLista();