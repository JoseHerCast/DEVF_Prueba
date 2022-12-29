


//AND && (p AND q AND r) => p,q, como r son verdaderos

//OR || (p OR q OR r) => p ó q ó r sea verdadero

//NOT != (p != q) ¿p es distinto de q? || !p => (p != false)
//                                         p => (p == true)

//*********AND

//   p    ,   q   =   ?
// TRUE      TRUE =   TRUE
// TRUE     FALSE =   FALSE
// FALSE    FALSE =   FALSE
// FALSE    TRUE  =   FALSE

//********OR
//   p    ,   q   =   ?
// TRUE      TRUE =   TRUE -> FALSE
// TRUE     FALSE =   TRUE -> FALSE
// FALSE    FALSE =   FALSE -> TRUE
// FALSE    TRUE  =   TRUE -> FALSE

//p AND q === NOT(p OR q)
/*
let p=true;
let q=true;
let r=true;

let manifestacion=false;
let lluvia=false;
let trafico;


trafico = lluvia ? true : manifestacion ? true : false; 
*/
let helado = true;
let brownie = false;
let kitkat = false;
let carlosv = false;

// !(helado && brownie && kitkat && carlosv)? console.log("Quiere engordar"): 
// console.log("los mando a la chingada")
// helado || brownie || kitkat || carlosv? console.log("Compró un helado"): 
// console.log("Solamente preguntó")

(helado || kitkat) && (brownie || carlosv)? 
console.log("Cliente compró un helado conbinado")
:
console.log("Gracias por visitar nuestra heladeria");

/*
console.log("Trafico= ", trafico);


if(manifestacion || lluvia){
    trafico=true;
    console.log("Trafico= ", trafico);
}


//        (p == false || q==false)
if(!p || !(p == true && q===true) || r==false && p==false || q==false){

    trafico = lluvia ? true : manifestacion ? true : false;

    console.log("La condición se cumple");//Esto se imprime

}else{
    
    console.log("La condición es falsa");

}

if(!p || p == false || q==false || r==false && p==false || q==false){

    console.log("La condición se cumple");//Esto se imprime

}else{
    
    console.log("La condición es falsa");
    
}
*/

new AutoNumeric('#number', {
    currencySymbol : ' €',
    decimalCharacter : ',',
    digitGroupSeparator : '.',
});