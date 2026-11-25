function saludo(nombre, callback) {
    console.log(`Hola ${nombre}`);
    setTimeout(() => {
        callback();
    }, 2000);
}

function suma(a,b){
    console.log(a+b);
}

saludo("Brian", () => {
    console.log("El saludo ya se realizó");

    setTimeout(() => {
        finializar();
    }, 2000)
});


function finializar() {
    console.log("Fin")
}