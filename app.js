
const grande = document.querySelector('.grande')
const punto = document.querySelectorAll('.punto')

//cuando hago click en todos los puntos lo priemro q vamos ahcer es saber la posicion de ese punto
//aplicar un transform translate en el eje x al grande
//quitar la clase activo de todos los puntos y dpss añadimos clase activo al punto q hemos hecho click

//recorrremos todos los puntos
punto.forEach(  ( cadaPunto, i ) => {
    //aca asignamos q al hacer click a cadaPunto se ejecute la funcion
    punto[i].addEventListener('click', () => {
        
        //guardar la posicion de ese punto
        let posicion = i;
        //posicion es 0 el transform x es 0 
        //cuando la posicion es 1 es -50%
        //operacion = posicion * -50
        let operacion = posicion * -50;

        //movemos el grande
        grande.style.transform = `translate(${operacion}%)`

        //recorremos todos los puntos
        punto.forEach( ( cadaPunto, i ) => {
            //aca quitamos la clase activo a todos los puntos
            punto[i].classList.remove('activo')
        })
        //por ultimo añadimos la clase activo en el punto que hemos hecho click
        punto[i].classList.add('activo')


    })
})