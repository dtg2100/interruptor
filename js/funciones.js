var interruptor = document.querySelector(".interruptor");
//var encendido = false;

interruptor.addEventListener("click", () => {
    interruptor.classList.toggle("encendido");
    /*
    if(interruptor.classList.contains("encendido")){
        //apagar
        interruptor.classList.remove("encendido");
        
    }else{
        //encender
        interruptor.classList.add("encendido");
        
    }
    //encendido = !encendido;
    
    //interruptor.className = `interruptor ${ !encendido ? "encendido" : "" }`;
    //encendido = !encendido;
    */
});


/*
    encendido es FALSE
    interruptor espera a que hagas click
*/