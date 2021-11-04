const lista1 = [
    500,
    200,
    100,    
    40000000,
];

lista1.sort();
console.log(lista1);

function calcularMediaAritmetica(lista) {
    //let sumaLista = 0;
    // for (let i = 0; i < lista.length; i++) {
    //     sumaLista = sumaLista + lista[i];
    // }

    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElmento) {
            return valorAcumulado + nuevoElmento;
        }

    );

    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}

const mitadLista1 = parseInt(lista1.length / 2);


function esPar(numerito) {
    if (numerito % 2 === 0){
        return true;
    } else {
        return false;
    }       
}

let mediana;

if (esPar(lista1.length)) {
    const elemento1 = lista1[mitadLista1 - 1];
    const elemento2 = lista1[mitadLista1];
    const promedioElemnto1y2 = calcularMediaAritmetica([
        elemento1,
        elemento2
    ]);

    mediana = promedioElemnto1y2;

} else {
    mediana = lista1[mitadLista1];
    
}