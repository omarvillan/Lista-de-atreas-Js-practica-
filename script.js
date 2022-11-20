(function(){
    //variables
    const lista = document.getElementById("list");
    const campoTexto = document.getElementById("tarea-input");
    const boton = document.getElementById("tarea-btn");
    const equis = document.getElementById("equis");
    const enlace = document.getElementById("enlace");
    const texNombre = document.getElementById("agregarTarea");


    //eventos
    boton.addEventListener("click", agregarTarea )
    campoTexto.addEventListener("click", comprobarInput)












    //funciones
    function agregarTarea(){
        var tarea = campoTexto.value;
        var nuevaTarea = document.createElement("li");


        if(tarea === ""){
            campoTexto.className = "error";
            texNombre.className += " error-placeholder";
            texNombre.innerText = "¡Debe agragar una tarea!";
            return false;
        }

        nuevaTarea;
        nuevaTarea.innerHTML = "<a></a><span>x</span>";
        nuevaTarea.children[0].innerText = tarea;
        nuevaTarea.children[0].setAttribute("href", "#");
        lista.appendChild(nuevaTarea);

        campoTexto.value = "";


        for (var i = 0; i < lista.children.length; i++){
            lista.children[i].children[0].addEventListener("click", tachar);
            lista.children[i].children[1].addEventListener("click", eliminar);
        }
        

    }



    
    function comprobarInput(){
        
        if(campoTexto.value === ""){
            campoTexto.className = "tarea-input";
            texNombre.className = "text-nomb";
            texNombre.innerText = "Agregar tarea";
        }

        }
        
    
    function tachar(){
        // lista.children[0].children[0].setAttribute("class", "tachar");
        this.classList.toggle("tachar");

        // alert("tachar");
    }

    function eliminar(){
        this.parentNode.parentNode.removeChild(this.parentNode);

        // alert("eliminar");
    }

}());