let tareas = [
    { id: 1, descripcion: "Hacer mercado", completado: true },
    { id: 2, descripcion: "Estudiar para la prueba", completado: false },
    { id: 3, descripcion: "Sacar a pasear a Tobby", completado: false },
    
];




function renderizarTareas() {
    const lista = document.getElementById("listaTareas");
    lista.innerHTML = "";

    tareas.forEach((tarea, index) => {
        const fila = document.createElement("tr");


        const tdId = document.createElement("td");
        tdId.textContent = tarea.id;
        fila.appendChild(tdId);


        const tdDesc = document.createElement("td");
        tdDesc.textContent = tarea.descripcion;
        if (tarea.completado) {
            tdDesc.classList.add("completed");
        }
        fila.appendChild(tdDesc);


        const tdCheck = document.createElement("td");
        tdCheck.classList.add("checkbox-center");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = tarea.completado;
        checkbox.onclick = () => cambiarEstado(index);
        tdCheck.appendChild(checkbox);
        fila.appendChild(tdCheck);


        const tdEliminar = document.createElement("td");
        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "❌";
        btnEliminar.onclick = () => eliminarTarea(index);
        tdEliminar.appendChild(btnEliminar);
        fila.appendChild(tdEliminar);

        lista.appendChild(fila);
    });

    actualizarResumen();
}




function agregarTarea() {
    const input = document.getElementById("nuevaTarea");
    const descripcion = input.value.trim();
    if (descripcion === "") return;

    const nuevaTarea = {
        id: Date.now(), 
        descripcion,
        completado: false
    };

    tareas.push(nuevaTarea);
    input.value = "";
    renderizarTareas();
}

function eliminarTarea(indice) {
    tareas.splice(indice, 1);
    renderizarTareas();
}

function cambiarEstado(indice) {
    tareas[indice].completado = !tareas[indice].completado;
    renderizarTareas();
}

function actualizarResumen() {
    const total = tareas.length;
    const realizadas = tareas.filter(t => t.completado).length;

    document.getElementById("totalTareas").textContent = total;
    document.getElementById("tareasRealizadas").textContent = realizadas;
}

renderizarTareas();
