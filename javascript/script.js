

function test ()
{
    alert('javascript linked');
}

function agregarTarea()
{
    let tareaName = document.getElementById("nombreInput").value;
    let tareaDescripcion = document.getElementById("descripcionInput").value;
    let tareaFecha = document.getElementById("fechaInput").value;
    const MouseorTap = "Mouse o Tap sobre la tarea para visualizar los detalles."

    if(tareaName == "" || tareaDescripcion == "" || tareaFecha == ""){
        alert('Rellene todos los campos')
    }
    else{
        // Obtener el formulario
        var formNoHecho = document.getElementById("verTareasNoHechasForm");
        var formHecho = document.getElementById("verTareasHechasForm");
    
        // Crear un nuevo elemento div
        var newDiv = document.createElement("div");
        newDiv.classList.add("tareaItem", "d-flex", "border", "border-2", "rounded");
        newDiv.id = "tareaItem";
    
        // Crear un nuevo elemento input
        var newInput = document.createElement("input");
        newInput.type = "checkbox";
        //newInput.classList.add("rounded");
        newInput.id = "Tarea";
    
        // Crear un nuevo elemento label
        var newLabel = document.createElement("label");
        newLabel.for = "Tarea";
        newLabel.classList.add("text-white", "fw-thin");
        newLabel.innerHTML = tareaName;

        //boton para borrar tarea
        var newDelbtn = document.createElement("button");
        newDelbtn.classList.add("rounded", "bg-danger")
        newDelbtn.innerHTML = "X";
        newDelbtn.style.scale = "0.4";
        newDelbtn.id = "delBTN";

        newDelbtn.onclick = function()
        {
            newDiv.remove();
            document.getElementById("descripcionTarea").innerHTML = MouseorTap;
        };

        // agregar elementos al div
        newDiv.appendChild(newInput);
        newDiv.appendChild(newLabel);
        newDiv.appendChild(newDelbtn);
        
    
        // agregar el div al formulario
        formNoHecho.appendChild(newDiv);


        //evento hover de js
        newDiv.onmouseover = function()
        {
            document.getElementById("descripcionTarea").innerHTML = tareaDescripcion + " " + tareaFecha;
        };

        //volver a posicion inicial
        newDiv.onmouseout = function()
        {
            document.getElementById("descripcionTarea").innerHTML = MouseorTap;
        };


        newDiv.addEventListener('change', (event) => {

        if (event.target.checked) 
        {
            formHecho.appendChild(newDiv);
            document.getElementById("descripcionTarea").innerHTML = MouseorTap;
        } 
        else 
        {
            formNoHecho.appendChild(newDiv);
            document.getElementById("descripcionTarea").innerHTML = MouseorTap;
        }

        });

        // limpiar campos
        document.getElementById("nombreInput").value = "";
        document.getElementById("descripcionInput").value = "";
        document.getElementById("fechaInput").value = "";
    }
}

