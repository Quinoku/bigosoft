const boton = document.getElementById("modooscuro");

let imagenInicio = document.getElementById("imageninicio");
let estilos = document.getElementById("hojaestilos");

boton.addEventListener("click", () => {

    if(estilos.href.includes("CSS/estilos.css")){

        estilos.href = "CSS/estilosOsc.css";
        imagenInicio.src = "IMG/mobile-01-01OSCURO.webp";

    } else if(estilos.href.includes("CSS/estilosOsc.css")) {

        estilos.href = "CSS/estilos.css";
        imagenInicio.src = "IMG/mobile-01-01CLARO.webp";

    }
});