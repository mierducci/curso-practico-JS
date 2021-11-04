const notes = [ //arreglo de objetos
    {
        course: "Educación Física",
        note: 10,
        credit: 2,
    },
    {
        course: "Programación",
        note: 8,
        credit: 5,
    },
    {
        course: "Finanzas personales",
        note: 7,
        credit: 5,
    },
];
// crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.
const notesWithCredit = notes.map(function (noteObject) {  // crea un arreglo de solo numeros 
    return noteObject.note * noteObject.credit; //con las multiplicaciones de nota por credito
});


//Ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.
const sumOfNotesWithCredit = notesWithCredit.reduce( //crea una variable para almacenar la suma del arreglo
    function (sum = 0, newVal) { // especifica (valor inicial , siguiente valor del arreglo)
        return sum + newVal; // realiza el loop de suma
    }
);

const credits = notes.map(function (noteObject) { // crea un arreglo de objeto credits solo con los creditos de cada materia
    return noteObject.credit;
});

//Ejecuta una función reductora sobre cada elemento de un array
const sumOfCredits = credits.reduce( //crea variable suma de creditos
    function (sum = 0, newVal) { 
        return sum + newVal; // realiza suma
    }
);


const promedioPonderadoNotasConCreditos = sumOfNotesWithCredit / sumOfCredits; // realiza la suma de ambas sumas que hizo con el reduce
