
//Ejercicio 1.
 function temporizador(callback){
    setTimeout(()=>{
        callback();
    }, 3000)
 }

temporizador(()=>{
    console.log("Hola mundooo");
})


//Ejercicio 2.
function operaciones(valor1, valor2, callback) {
    let resultado = callback(valor1, valor2);
    console.log(`Ejercicio 2: Resultado = ${resultado}`);
}

function suma(a, b) {
    return a + b;
}

function resta(a, b) {
    return a - b;
}

function multiplicacion(a, b) {
    return a * b;
}

function division(a, b) {
    if (b === 0) {
        return "No se puede dividir entre cero";
    }
    return a / b;
}

operaciones(10, 5, suma);
operaciones(10, 5, resta);
operaciones(10, 5, multiplicacion);
operaciones(10, 5, division);


//Ejercicio 3

//Paso 1: Cortar los ingredientes
function cortarIngredientes(callback) {
    console.log("Cortando ingredientes...");
    setTimeout(() => {
        console.log("Ingredientes cortados.");
        callback();
    }, 2000);
}

// Paso 2: cocinar
function cocinar(callback) {
    console.log("Cocinando...");
    setTimeout(() => {
        console.log("Comida cocinada.");
        callback();
    }, 3000);
}

// Paso 3: servir el plato
function servirPlato(callback) {
    console.log("Sirviendo el plato...");
    setTimeout(() => {
        console.log("Plato servido.");
        callback();
    }, 1000);
}

cortarIngredientes(() => {
    cocinar(() => {
        servirPlato(() => {
            console.log("Platillo terminado!");
        });
    });
});