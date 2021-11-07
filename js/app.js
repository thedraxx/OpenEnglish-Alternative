const formulario = document.querySelector('#formulario');
const mensaje = document.querySelector('.mensaje');


window.addEventListener('load', () => {
    formulario.addEventListener('submit', subirFormulario);
})

function subirFormulario(e) {
    e.preventDefault();
    console.log("Buscando...")

    //Validar 
    const email = document.querySelector('#contrasena').value;
    const contrasena = document.querySelector('#email').value;

    if (email === "" || contrasena === "") {
        //hubo un error
        mostrarAlerta("TODOS LOS CAMPOS SON OBLIGATORIOS!");
        return;
    }
}

function mostrarAlerta(msg) 
{ 
    const claseAlerta = document.querySelector('.alert-danger');
    if (!claseAlerta) { 

        const divMensaje = document.createElement('div');
        divMensaje.classList.add("alert-danger")
    
        //Mensaje de error
        divMensaje.textContent = msg;
    
        mensaje.appendChild(divMensaje);

        setTimeout(() => {
            divMensaje.remove();
        }, 3000);
}
}