const boton = document.getElementById("modooscuro");

let estilos = document.getElementById("hojaestilos");

boton.addEventListener("click", () => {

    if(estilos.href.includes("CSS/estilos.css")){

        estilos.href = "CSS/estilosOsc.css";

    } else if(estilos.href.includes("CSS/estilosOsc.css")) {

        estilos.href = "CSS/estilos.css";

    }
});