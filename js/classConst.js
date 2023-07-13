
//SIMULADOR DE TIENDA DE ROPA
class Tienda {
    constructor(idI, productoI, categoriaI, precioI, imagenI) {
        this.id = idI,
            this.producto = productoI,
            this.categoria = categoriaI,
            this.precio = precioI,
            this.imagen = imagenI
    }
    mostrarCatalogo() {

    }
}

//OBJETOS INSTANCIADOS DE TIENDA:ponerle la url de img a cada objeto: ej camperaverde.jpg

//CATEGORIA: MUJER
const opcion1 = new Tienda(20, "Conjunto de  mujer", "Mujer", 10500, "img.1.webp")
const opcion2 = new Tienda(21, "Buzo Blanco deportivo", "Mujer", 22000, "img.5.webp")
const opcion3 = new Tienda(22, "Campera de mujer", "Mujer", 50000, "img.7.webp")
const opcion4 = new Tienda(23, "Pantalón de mezclilla", "Mujer", 17400, "img.10.webp")
const opcion5 = new Tienda(24, "Remera manga corta", "Mujer", 6500, "img.8.webp")
const opcion6 = new Tienda(25, "Blazer color chocolate", "Mujer", 41200, "img.9.webp")
const opcion7 = new Tienda(26, "Camisa manga larga", "Mujer", 24700, "img.6.webp")
const opcion8 = new Tienda(27, "Sujetador de encaje", "Mujer", 16700, "img.3.webp")
const opcion9 = new Tienda(28, "Tanga de microfibra", "Mujer", 6500, "img.2.webp")
const opcion10 = new Tienda(29, "Zapatillas urbanas", "Mujer", 62000, "zapatila1.webp")


//CATEGORIA: HOMBRE
const opcion11 = new Tienda(2, "Pantalón cargo", "Hombre", 25000, "hombre.10.webp")
const opcion12 = new Tienda(3, "Buzo deportivo", "Hombre", 30000, "hombre.9.webp")
const opcion13 = new Tienda(4, "Campera deportiva", "Hombre", 57000, "hombre.11.webp")
const opcion14 = new Tienda(5, "Camisa de cuello", "Hombre", 27400, "hombre.1.webp")
const opcion15 = new Tienda(6, "Remera manga corta", "Hombre", 18200, "hombre.4.webp")
const opcion16 = new Tienda(7, "Saco de vestir", "Hombre", 29200, "hombre.2.webp")
const opcion17 = new Tienda(8, "Chaleco de mezclilla ", "Hombre", 24900, "hombre.7.webp")
const opcion18 = new Tienda(9, "Campera de jean", "Hombre", 167000, "hombre.3.webp")
const opcion19 = new Tienda(10, "zapatos de hombre", "Hombre", 45500, "hombre.12.webp")
const opcion20 = new Tienda(11, "Zapatillas urbanas", "Hombre", 74000, "hombre.5.webp")


//CATEGORIA: NIÑOS
const opcion21 = new Tienda(12, "Enteritos de bebe", "Niños", 15000, "niños.10.webp")
const opcion22 = new Tienda(13, "Bermuda Jean ", "Niños", 26400, "niños.11.webp")
const opcion23 = new Tienda(14, "Borcegos infantiles", "Niños", 17000, "niños.7.webp")
const opcion24 = new Tienda(15, "Zapatillas de bebe", "Niños", 20200, "niños.4.webp")
const opcion25 = new Tienda(16, "Campera impermeable para exteriores", "Niños", 28100, "niños.6.webp")
const opcion26 = new Tienda(17, "Camisa de manga corta", "Niños", 19200, "niños.2.webp")
const opcion27 = new Tienda(18, "Remera de manga corta  ", "Niños", 4900, "niños.8.webp")
const opcion28 = new Tienda(19, "Conj del agua", "Niños", 147000, "niños.9.webp")
const opcion29 = new Tienda(30, "Buzo de algodón", "Niños", 22500, "niños.3.webp")
const opcion30 = new Tienda(31, "Vestido liso", "Niños", 34000, "niños.1.webp")


//CATEGORIA: ACCESORIOS
const opcion31 = new Tienda(32, "Collar de plata", "Accesorios", 28000, "accesorios.1.webp")
const opcion32 = new Tienda(33, "Perfumes", "Accesorios", 15000, "accesorios.5.webp")
const opcion33 = new Tienda(34, "Gafas de sol", "Accesorios", 70000, "accesorios.3.webp")
const opcion34 = new Tienda(35, "Reloj de pulsera", "Accesorios", 27200, "accesorios.4.webp")
const opcion35 = new Tienda(36, "Cinturón de cuero", "Accesorios", 23600, "accesorios.7.webp")
const opcion36 = new Tienda(37, "Cartera de cuero", "Accesorios", 69200, "accesorios.2.webp")
const opcion37 = new Tienda(38, "Mochila de cuero", "Accesorios", 44900, "accesorios.6.webp")
const opcion38 = new Tienda(39, "Anillos", "Accesorios", 6200, "accesorios.10.webp")
const opcion39 = new Tienda(40, "Paleta de sombras", "Accesorios", 10500, "accesorios.9.webp")
const opcion40 = new Tienda(41, "Billetera compacta", "Accesorios", 9000, "accesorios.8.webp")


//ARRAY;
const categoriaMujer = []
const categoriaHombre = []
const categoriaNinios = []
const categoriaAccesorios = []


// pusheamos al array
categoriaMujer.push(opcion1, opcion2, opcion3, opcion4, opcion5, opcion6, opcion7, opcion8, opcion9, opcion10)
categoriaHombre.push(opcion11, opcion12, opcion13, opcion14, opcion15, opcion16, opcion17, opcion18, opcion19, opcion20)
categoriaNinios.push(opcion21, opcion22, opcion23, opcion24, opcion25, opcion26, opcion27, opcion28, opcion29, opcion30)
categoriaAccesorios.push(opcion31, opcion32, opcion33, opcion34, opcion35, opcion36, opcion37, opcion38, opcion39, opcion40)

let tiendaCompleta = []

tiendaCompleta = categoriaMujer.concat(categoriaHombre, categoriaNinios, categoriaAccesorios)

//STORAGE:PUSHEO TIENDA AL STORAGE
localStorage.setItem("tiendaCompleta", JSON.stringify(tiendaCompleta))

localStorage.getItem("tiendaCompleta")
  ? (tiendaCompleta = JSON.parse(localStorage.getItem("tiendaCompleta")))
  : (console.log("ENTRA POR PRIMERA VEZ. INICIALIZANDO 'tiendaCompleta'"),
     tiendaCompleta.push(categoriaMujer, categoriaHombre, categoriaNinios, categoriaAccesorios),
     localStorage.setItem("tiendaCompleta", JSON.stringify(tiendaCompleta)));


//loca storage del carrito: 
let productosDelCarrito = []

localStorage.setItem("carrito", JSON.stringify(productosDelCarrito))

localStorage.getItem("carrito") 
? (productosDelCarrito =  JSON.parse(localStorage.getItem("carrito"))) : 
localStorage.setItem("carrito", JSON.stringify(productosDelCarrito));




