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
    <a href="acerca de.html">Acerca de</a>
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

/***********************************************************
************************** CARRUSEL **************************
***********************************************************/

(function(){
    const sliders = [...document.querySelectorAll('.slider-body')];

    const arrowNext = document.querySelector('#next');
    const arrowBefore = document.querySelector('#before');
    let value;

    arrowNext.addEventListener('click', ()=>changePosition(1));
    arrowBefore.addEventListener('click', ()=>changePosition(-1));

    function changePosition(change){        

    const currentElement=Number(document.querySelector('.slider-body-show').dataset.id);

    value=currentElement;
    value+=change;

    if(value===0 || value==sliders.length+1){
        value=value===0 ? sliders.length :1;
    }

    sliders[value-1].classList.toggle('slider-body-show');
    }
})();

(function(){
    const sliders = [...document.querySelectorAll('.slider-body1')];

    const arrowNext = document.querySelector('#next1');
    const arrowBefore = document.querySelector('#before1');
    let value;

    arrowNext.addEventListener('click', ()=>changePosition(1));
    arrowBefore.addEventListener('click', ()=>changePosition(-1));

    function changePosition(change){        

    const currentElement=Number(document.querySelector('.slider-body-show1').dataset.id);

    value=currentElement;
    value+=change;

    if(value===0 || value==sliders.length+1){
        value=value===0 ? sliders.length :1;
    }

    sliders[value-1].classList.toggle('slider-body-show1');
    }
})();

(function(){
    const sliders = [...document.querySelectorAll('.slider-body2')];

    const arrowNext = document.querySelector('#next2');
    const arrowBefore = document.querySelector('#before2');
    let value;

    arrowNext.addEventListener('click', ()=>changePosition(1));
    arrowBefore.addEventListener('click', ()=>changePosition(-1));

    function changePosition(change){        

    const currentElement=Number(document.querySelector('.slider-body-show2').dataset.id);

    value=currentElement;
    value+=change;

    if(value===0 || value==sliders.length+1){
        value=value===0 ? sliders.length :1;
    }

    sliders[value-1].classList.toggle('slider-body-show2');
    }
})();

(function(){
    const sliders = [...document.querySelectorAll('.slider-body3')];

    const arrowNext = document.querySelector('#next3');
    const arrowBefore = document.querySelector('#before3');
    let value;

    arrowNext.addEventListener('click', ()=>changePosition(1));
    arrowBefore.addEventListener('click', ()=>changePosition(-1));

    function changePosition(change){        

    const currentElement=Number(document.querySelector('.slider-body-show3').dataset.id);

    value=currentElement;
    value+=change;

    if(value===0 || value==sliders.length+1){
        value=value===0 ? sliders.length :1;
    }

    sliders[value-1].classList.toggle('slider-body-show3');
    }
})();

let url = 'https://jsonplaceholder.typicode.com/comments'
fetch(url)
    .then(response => response.json())
    .then(data => mostrarData(data))
    .catch(error => console.log("Ocurrió un error", error))

const mostrarData = (data) => {
    console.log(data)
    let comment = ''
    for (let i = 0; i < 30; i++) {
        // body = body + ...
        comment += `<tr> 
            <td>${data[i].name}</td>
            <td>${data[i].body}</td>
            </tr>`
    }

    document.getElementById("data").innerHTML = comment
}


