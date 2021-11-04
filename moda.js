const lista1 = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    1,
]

const lista1Count1 = {};//convierte array en objeto

lista1.map(
    function (elemento) { // crea funcion que recive el parametro elemento
        if (lista1Count1[elemento]){ //si en lista1  el parametro 
            lista1Count1[elemento] += 1 ; // le agrega a su valor + 1
        } else {
            lista1Count1[elemento] = 1; //si no esta en la lista lo agrega y el asigna el valor de 1
        }
        
    }
);


const listaArray = Object.entries(lista1Count1).sort( //ordena el array de arrays por el elemento 2 
    function (elementoA, elementoB){
return elementoA[1] - elementoB[1];
}
);

const moda = listaArray[listaArray.length - 1];