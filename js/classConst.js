//SIMULADOR DE TIENDA DE ROPA
class Tienda {
    constructor(idI, productoI, categoriaI, precioI, imagenI) {
        this.id = idI,
            this.producto = productoI,
            this.categoria = categoriaI,
            this.precio = precioI,
            this.imagen = imagenI,
            this.cantidad = 1
    }
    mostrarMiCatalogo() {

    }
    sumarCantidades() {
        this.cantidad = this.cantidad + 1
        return this.cantidad
    }
    restarCantidades() {
        this.cantidad = this.cantidad - 1
        return this.cantidad
    }
}

let tiendaCompleta = []

const cargoTienda = async () => {
    const rta = await fetch("./js/productos.json")
    const dato = await rta.json()
    for (let productos of dato) {
        let productoDato = new Tienda(productos.id, productos.producto, productos.categoria, productos.precio, productos.imagen, productos.cantidad)
        tiendaCompleta.push(productoDato)
    }
    console.log(tiendaCompleta)
    localStorage.setItem("tiendaCompleta", JSON.stringify(tiendaCompleta))
}

//STORAGE:PUSHEO TIENDA AL STORAGE
if (localStorage.getItem("tiendaCompleta")) {
    tiendaCompleta =  JSON.parse(localStorage.getItem("tiendaCompleta"))
}
else {
    console.log("ENTRA POR PRIMERA VEZ. INICIALIZANDO 'tiendaCompleta'")
    cargoTienda()
}

//loca storage del carrito: 
let productosDelCarrito = []

localStorage.getItem("carrito")
    ? (productosDelCarrito = JSON.parse(localStorage.getItem("carrito"))) :
    localStorage.setItem("carrito", JSON.stringify(productosDelCarrito));



let usuarios = []

/*usuarios*/
    class User {
        constructor(username, password) {
            this.username = username;
            this.password = password;
        }
    }
    


