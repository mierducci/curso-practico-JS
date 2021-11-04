
function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 -descuento;
    const precioConDescuento = (precio * (porcentajePrecioConDescuento ) / 100 );    
    return precioConDescuento;
}


function validateCoupon(userEntrance){
    const coupons = [
        {
            name: "JuanDC_es_Batman",
            discount: 15,
        },
        {
            name: "pero_no_le_digas_a_nadie",
            discount: 30,
        },
        {
            name: "es_un_secreto",
            discount: 25,
        },
    ];
    const usrEntrance = document.getElementById("InputCoupon");
    const usrValueE = usrEntrance.value ;

    //console.log(usrValueE);

    const findEntrance = coupons.find(function(coupon) // solo el primero que encuentra
    {
        return coupon.name === usrValueE         

    });

    

    if (findEntrance != null){
        alert("lo encontre");
        console.log(findEntrance.discount);
        const discount = findEntrance.discount;

        const inputPrice = document.getElementById("InputPrice");
        const priceValue = inputPrice.value;
        console.log(priceValue);

        const precioConDescuento = calcularPrecioConDescuento(priceValue, discount);

        const resultP = document.getElementById("ResultP");
        resultP.innerText =  "El precio con descuento es: $" + precioConDescuento; 
       



    } else{
        alert("no se encontro cupon");

    }

}

 
    

