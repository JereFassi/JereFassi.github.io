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