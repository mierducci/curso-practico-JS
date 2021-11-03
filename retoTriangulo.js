

function CalcularAltura(lado1,lado2,base){    
        if(lado1 === lado2 && lado1 != base){
            alert('Es isoceles')
           const altura = Math.sqrt(lado1**2 - base**2/ 4)
           return altura;            
        }
        else{
            alert('no es isoceles')
        }   
}


// Aqui interactua con JS

function calcularAlturaIsoceles (){
    const input1 = document.getElementById("Input1");
    const input2 = document.getElementById("Input2");
    const input3 = document.getElementById("Input3");
    const value1 = input1.value;
    const value2 = input2.value;
    const value3 = input3.value;


    const resultado = CalcularAltura(value1,value2,value3);
    alert("La altura es:" + resultado);

}