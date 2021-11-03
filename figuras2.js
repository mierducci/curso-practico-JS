//Codigo del cuadrado
console.group("Cuadrados")
/* const ladoCuadrado =5;
console.log("Los lados del cuadrado miden " + ladoCuadrado + "cm");
 */
function  perimetroCuadrado(lado){       
    return lado * 4;
}
perimetroCuadrado();
//console.log("El perimetro del  cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado){ 
    return lado * lado;
}
//console.log("El area del cuadrado es: " + areaCuadrado + "c^2");
console.groupEnd();

//Codigo del triangulo
console.group("Triangulo");
const ladoTriangulo1 =6;
const ladoTriangulo2 =6;
const baseTriangulo =4;

// console.log(
//     "Los lados del triangulo miden: " 
//     + ladoTriangulo1 
//     + "cm, " 
//     + ladoTriangulo2 
//     + "cm, " 
//     + baseTriangulo 
//     + "cm" 
//     );

     

    function perimetroTriangulo (lado1 , lado2 ,base){ 
        return lado1 + lado2 +base;
    }
    
    
    function areaTriangulo(base,altura) {
         return (base * altura) / 2; 
        }
    
    
    console.groupEnd();


    //Codigo del triangulo
    console.group("Circulos");
    
    
    //radio
    //const radioCirculo =4;
    //console.log("El radio del  circulo es: " + radioCirculo + "cm");


    //Diametro
    function diametroCirculo(radio)  {
        return radio * 2;
    }    

    //PI
    const PI = Math.PI;
    // console.log("Pi es: " + PI + "PI");

    //Circunferencia
     function  perimetroCirculo(radio)  {
         const diametro =diametroCirculo(radio);
         return diametro * PI;
     }

     //Area
     function  areaCirculo (radio) {
         return (radio*radio) * PI;
     }
     
    console.groupEnd();



//Aqui interactuamos con html

//Cuadrado
   function  calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);

   }

    function calcularAreaCuadrado() {
        const input = document.getElementById("InputCuadrado");
        const value = input.value;
    
        const area = areaCuadrado(value);
        alert(area);
    }


//Triangulo
    function  calcularPerimetroTriangulo(){
        const input = document.getElementById("InputTriangulo");
        const value = input.value;
    
        const perimetro = perimetroCuadrado(value);
        alert(perimetro);
    
       }
    
        function calcularAreaTriangulo() {
            const input = document.getElementById("InputTriangulo");
            const value = input.value;
        
            const area = areaCuadrado(value);
            alert(area);
        }


//Circulo
function  calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro);

   }

    function calcularAreaCirculo() {
        const input = document.getElementById("InputCirculo");
        const value = input.value;
    
        const area = areaCirculo(value);
        alert(area);
    }