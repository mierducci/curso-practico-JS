//Helpers
function esPar(numerito){ //funcion para saber si es par el valor que se envia 
    return (numerito % 2 === 0)
    }
    
    function calcularMediaAritmetica(lista) {
    
        const sumaLista = lista.reduce(
            function(valorAcumulado = 0, nuevoElmento) {
                return valorAcumulado + nuevoElmento;
            }
    
        );
    
        const promedioLista = sumaLista / lista.length;
    
        return promedioLista;
    }

    // Calculadora de mediana
    function medianaSalarios(lista){
        const mitad = parseInt(lista.length / 2);    
    
        if (esPar(lista.length)){
            const personitaMitad1 = lista[mitad - 1];
            const personitaMitad2 = lista[mitad];
            mediana= calcularMediaAritmetica([personitaMitad1],[personitaMitad2]);
            return mediana;
        } else {
        }
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }

//Mediana General
const salariosCol = colombia.map(  
    function (personita) {
        return personita.salary;
    }
);


const salariosColSorted = salariosCol.sort( // ordena el objeto 
    function (salaryA, salaryB){
        return salaryA-salaryB;
    }
);



const medianaGeneralCol = medianaSalarios(salariosColSorted);

// Mediana del top 10%
const spliceStart = (salariosColSorted.length * 90) / 100; //calcula el porcentaje 90% del arreglo ordenado
const spliceCount = salariosColSorted.length - spliceStart; // al total de personas le resta el 90% para quedarse con el 10%

const salariosColTop10 = salariosColSorted.splice(
    spliceStart,
    spliceCount
);

const medianaTop10Col = medianaSalarios(salariosColTop10);


console.log({
    medianaGeneralCol,
    medianaTop10Col,
});


