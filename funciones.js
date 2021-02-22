/* EJERCICIO 1 */

/* Funcion para decifrar */
function decrypt(mensaje, clave) {
    for (let i = 0; i < mensaje.length; i++) {
        let element = mensaje[i];
        mensaje[i]=element-clave;
    }
    return mensaje;
}
/* Funcion para encriptar */
function encrypt (mensaje, clave) {
    for (let i = 0; i < mensaje.length; i++) {
        let element = mensaje[i];
        mensaje[i]=element+clave;
    }
    return mensaje;
}
/* Funcion para encriptar o decifrar un mensaje*/
function secret (mensaje, callback, clave) {
    return callback(mensaje,clave);
}

/* Ejecucion de la funcion */
console.log("Ejercicio 1")
console.log(secret([1,2,3,1],encrypt,1));

/* EJERCICIO 2 */

/* Funcion recursiva fibonacci */
let fib = (n) => n < 2 ? n: fib(n-1)+fib(n-2);

/* Ejecucion de la funcion */
console.log("Ejercicio 2")
console.log(fib(1));


/* EJERCICIO 3 */

async function productoCantidad(){
    let prom1 = await fetch("https://gist.githubusercontent.com/josejbocanegra/7b6febf87e9d986048a648487b35e693/raw/576531a2d0e601838fc3de997e021816a4b730f8/detallePedido.json");
    let prom2 = await fetch("https://gist.githubusercontent.com/josejbocanegra/be0461060d1c2d899740b8247089ba22/raw/916d2141e32e04031bda79c8886e8e4df0ae7f24/productos.json");
    let map = new Map();
    let max = 0;
    let name = "";
    let pedidos = await prom1.json();
    let productos = await prom2.json();

    for (let i = 0; i < pedidos.length; i++) {
        let cantidad = Number(pedidos[i].cantidad);
        let id = pedidos[i].idproducto;
        let elem = map.get(id);
        if(elem!==undefined) {
            map.set(id, elem+cantidad);
        } else {
        map.set(id,cantidad);
        }
    }
    let idprod =-1;
    for(let [clave, valor] of map){
        if(max<valor){
            max=valor;
            idprod=clave;
        }
    }
    let nombre = productos.find(element => element.idproducto===idprod);
    name=nombre.nombreProducto;
    console.log("Cantidad:" + max,"Nombre:" + name);
}
/* Ejecucion de la funcion */
console.log("Ejercicio 3")
productoCantidad();


