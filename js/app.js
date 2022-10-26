/*********************************************************
************* VALIDACION FORMULARIO CONTACTO *************
*********************************************************/
function validarNombre() {
    let nombre = document.getElementById('contacto-nombre-apellido').value;
    if(nombre.length == 0) {
        mostrarAviso('Por favor, ingresar un nombre de contacto', 'nombre-error' , 'red')
        return false;
    }
    if (!nombre.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        mostrarAviso('Por favor, ingresar nombre y apellido.','nombre-error', 'red');
        return false;
    }
    mostrarAviso('Nombre válido.', 'nombre-error', 'green');
    return true;
}

function validarTelefono() {
    let telefono = document.getElementById('contacto-telefono').value;
    if(telefono.length == 0) {
        mostrarAviso('Por favor, ingresar un número de teléfono.', 'telefono-error', 'red');
        return false;
    }
    if(telefono.length != 10) {
        mostrarAviso('Por favor, incluir código de área.', 'telefono-error', 'red');
        return false;
    }
    if(!telefono.match(/^[0-9]{10}$/)) {
        mostrarAviso('Solo números por favor.' ,'telefono-error', 'red');
        return false;
    }  
    mostrarAviso('Telefono válido', 'telefono-error', 'green');
    return true;
}

function validarEmail () {
    let email = document.getElementById('contacto-email').value;
    if(email.length == 0) {
        mostrarAviso('Por favor, ingresar un correo válido','email-error', 'red');
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        mostrarAviso('Por favor, ingresar un correo válido', 'email-error', 'red');
        return false;
    }
    mostrarAviso('Correo válido', 'email-error', 'green');
    return true;
}

function validarTexto() {
    let mensaje = document.getElementById('contacto-texto').value;
    let cantidadMinimaCaracteres = 30;
    let cantidadRestante = cantidadMinimaCaracteres - mensaje.length;
  
    if (cantidadRestante > 0) {
        mostrarAviso('Se requieren al menos ' + cantidadRestante + 'caracteres más','mensaje-error','red');
        return false;
    }
    mostrarAviso('Mensaje válido', 'texto-error', 'green');
    return true;
}

function validarFormulario() {
    if (!validarNombre() || !validarTelefono() || !validarEmail() || !validarTexto()) {
        mostrarElemento('submit-error');
        mostrarAviso('Por favor, ajustar los datos para poder procesarlos.', 'submit-error', 'red');
        setTimeout(function(){ocultarElemento('submit-error');}, 2000);
        return false;
    }
}
  
function mostrarElemento(id) {
    document.getElementById(id).style.display = 'block';
}
  
function ocultarElemento(id) {
    document.getElementById(id).style.display = 'none';
}
  
function mostrarAviso(mensaje, elemento, color) {
    document.getElementById(elemento).innerHTML = mensaje;
    document.getElementById(elemento).style.color = color;
}

/***********************************************************
************************** HEADER **************************
***********************************************************/
document.getElementById("idHeader").innerHTML = `
<h1>EN VIVO EN ARGENTINA</h1>
<nav>
    <a href="index.html">Home</a>
    <a href="bandas.html">Bandas</a>
    <a href="acerca de.html">Opiniones</a>
    <a href="contacto.html">Contacto</a>
</nav>
`;

/***********************************************************
************************** FOOTER **************************
***********************************************************/
document.getElementById("idFooter").innerHTML = `
    <h4>Nuestras redes</h4>
    <div>
        <a class="redsoc" href="https://www.twitter.com" target="_blank"><i class="fa fa-twitter"
            aria-hidden="true"></i></a>
        <a class="redsoc" href="https://www.facebook.com/" target="_blank"><i class="fa fa-facebook"
            aria-hidden="true"></i></a>
        <a class="redsoc" href="https://ar.pinterest.com/" target="_blank"><i class="fa fa-pinterest"
            aria-hidden="true"></i></a>
        <a class="redsoc" href="https://www.instagram.com/?hl=es" target="_blank"><i class="fa fa-instagram"
            aria-hidden="true"></i></a>
        <a class="redsoc" href="https://www.linkedin.com/" target="_blank"><i
            class="fa fa-linkedin" aria-hidden="true"></i></a>
    </div>
    <a href="https://www.flaticon.com/free-icons/music" title="music icons">Music icons created by Freepik - Flaticon</a>
`;