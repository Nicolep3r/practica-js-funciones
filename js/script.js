//Ejercicio 1 - Bienvenida
/*function saludo(){
    alert("Bienvenido :)");
}
saludo();


    
}
frutas(math.floor(math.random)
//Ejercicio 3 Volve a intentaflo como lo hicist en la faacu con nueov array

const amigo1 = ["Ryan", "Kieran", "Mark", "Miguel"];
const amigo2 = ["Ringo", "Jhon", "Paul", "George", "Ada", "Marie"];
function filtrarAmigos(amigosEnArray) {
    for(let numero = 0 ; numero < amigosEnArray.length; numero++){
        if(amigosEnArray[numero].length >= 5 || amigosEnArray[numero].length < 4){
            amigosEnArray.splice(numero, 1);
        }
    }
    console.log(amigosEnArray);
}
filtrarAmigos(amigo2);

const amigo1 = ["Ryan", "Kieran", "Mark", "Miguel"];
const amigo2 = ["Ringo", "Jhon", "Paul", "George", "Ada", "Marie"];
let amigos = [];
function filtrarAmigos(amigosEnArray) {
    for(let numero = 0 ; numero < amigosEnArray.length; numero++){
        if(amigosEnArray[numero].length == 4){
            //amigosEnArray.splice(numero, 1);
            amigos.push(amigosEnArray[numero]);
        }
    }
    console.log(amigos);
}
filtrarAmigos(amigo2);

//Ejercicio 2 
function calculoMayor(primerNumero, segundoNumero) {
    if(primerNumero > segundoNumero){
        alert("El primer numero es mayor que el segundo");
    }else if(primerNumero == segundoNumero){
        alert("Los numeros son iguales");
    }else{
        alert("El segundo numero es mayor que el primero");
    }
}
 
let num1 = 4;
let num2 = 4;
calculoMayor(num1, num2);

*/


function tirarDados(arrayDados){
    const dado = [1,2,3,4,5,6];
    const resultado = Math.floor(Math.random() * dado.length);
    console.log(dado[resultado]);  //Devuelve una posicion random del array 
}

tirarDados();