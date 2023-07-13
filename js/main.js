//en el archivo de functionViejas esta el evento del formualrio de la pagina de contacto.


//CAPTURAS DE ID:
let productoDiv = document.getElementById("productos")
let verCatalogo = document.getElementById("verCatalogo1")
let ocultarCatalogoTienda = document.getElementById("ocultarCatalogoTienda")
let ordenarSelect = document.getElementById("selectOpciones")
//DOM agregar PRODUCTO
let agregarProductoBoton = document.getElementById("agregarProductoBoton")
//barra de busqueda:
let buscadores = document.getElementById("buscadores")
let coincidencias = document.getElementById("coincidencias")
let bodyCarrito = document.getElementById("modalBodyCarrito")
let botonCarrito = document.getElementById("botonCarrito")
let precioTotal = document.getElementById("precioTotal")




//opcion 1 del MENU :MUESTRA TODOS LOS PRODUCTOS DE MI ARRAY
function mostrarCatalogo(array) {
    //resetear el DOM
    productoDiv.innerHTML = ``
    //Recorrer array para imprimir en el DOM MIS PRODUCTOS
    for (let productos of array) {
        let NuevoProductoDiv = document.createElement("div")
        //CLASES:
        NuevoProductoDiv.className = "col-12 col-md-2 my-2 w-25 margen-card"
        NuevoProductoDiv.innerHTML = `<div id="${productos.id}" class="card text-center " style="width: 18rem;">
    <img class="card-img-top img-fluid tamaño" style="height: 200px; "src="img/${productos.imagen}" alt="${productos.imagen} de ${productos.categoria}">
        <div class="card-body-bg">
            <h6 class="card-title">${productos.producto}</h6>
            <p class= "text-color color-card">  $ ${productos.precio}</p>
            <button id="agregarBtn${productos.id}" class="btn btn color btn-outline-danger">AGREGAR AL CARRITO</button>
        </div>`

        productoDiv.appendChild(NuevoProductoDiv)

        let agregarBtn = document.getElementById(`agregarBtn${productos.id}`)

        agregarBtn.addEventListener("click", () => {
            //evento de agregar los productos al carrito:
            agregarAlCarrito(productos)


        })
    }
}

function agregarAlCarrito(productos) {
    //ver si existe ese producto en el array
    let productosAgregados = productosDelCarrito.find((elemento) => elemento.id == productos.id)
    //si no lo encuentra,que me lo agregue al carrito:

    if (productosAgregados == undefined) {
        productosDelCarrito.push(productos),
            localStorage.setItem("carrito", JSON.stringify(productosDelCarrito))

        Swal.fire({
            text: `El producto ${productos.producto} ha sido agregado`,
            position: 'center',
            icon: 'success',
            timer: 2000,
            showConfirmButton: false
        })
    }
    else {

        Swal.fire({
            title: `Ups,hubo un error`,
            text: `El libro ya existe en el carrito`,
            icon: "error",
            timer: 2000,
            showConfirmButton: false
        });
    }

}

//DOM: imprimir los obejtos del carrito:
function mostrarProductoCarrito(array) {
    //resetea dom parfa no sobre imprimir
    bodyCarrito.innerHTML = ``
    //recorrer el array
    array.forEach((productoparaCarrito) => {
        bodyCarrito.innerHTML += `  
        <div class="card mb-3" id="productosCarrito${productoparaCarrito.id}">
            <img src="img/${productoparaCarrito.imagen}" class="img-fluid rounded-start " alt="...">
            </div>

          <div class="col-md-8">
              <p class="card-text bold ">${productoparaCarrito.producto}</p>
              <p class="card-text modal-p" ><small class="text-muted">Precio: $ ${productoparaCarrito.precio}</small></p>
              <p class="card-text modal-p" ><small class="text-muted">Categoria: ${productoparaCarrito.categoria}</small></p>
              <button class="btn btn-danger display" id="botonEliminar${productoparaCarrito.id}"><i class="fas fa-trash-alt"></i></button>
        </div>
`
    })
    //evento d eeliminar producto + for each;
    array.forEach((productoparaCarrito) => {
        document.getElementById(`botonEliminar${productoparaCarrito.id}`).addEventListener("click", () => {
            console.log(`producto eliminado`)
            //eliminarlo del dom: 
            let cartaProducto = document.getElementById(`productosCarrito${productoparaCarrito.id}`)
            cartaProducto.remove()
            //lo borramos del array:

            let eliminarProducto = array.find((productos) => productos.id == productoparaCarrito.id)
            console.log(eliminarProducto)

            let position = array.indexOf(eliminarProducto)
            console.log(position)
            array.splice(position, 1)
            localStorage.setItem("carrito", JSON.stringify(array));

            calcularTotal(array);
        })
    })
    calcularTotal(array);
}



function eliminarProducto() {
    mostrarCatalogo(tiendaCompleta)

    let eliminarID = parseInt(prompt("Ingrese el id que desea eliminar"))
    let arrayID = tiendaCompleta.map(producto => producto.id)
    console.log(arrayID)

    let indice = arrayID.indexOf(eliminarID)
    arrray.splice(indice, 1)
    localStorage.setItem("carrito", JSON.stringify(array))
}

function calcularTotal(array) {
    //recibe como parametro: funcion y el valor inicial del acc.
    let total = array.reduce((acumulador, productoparaCarrito) => acumulador + productoparaCarrito.precio, 0)
    //imprime ttotal en dom:
    total == 0 ? precioTotal.innerHTML = `No hay productos` : precioTotal.innerHTML = `<strong> Subtotal: ${total} </strong> `
}

function ordenarMenorMayor(array) {
    //copia del array original, para aplicar sort y no modificar estanteria
    const menorMayorPrecio = [].concat(array)
    //de forma ascendente por el atributo precio
    menorMayorPrecio.sort((a, b) => a.precio - b.precio)
    mostrarCatalogo(menorMayorPrecio)
}

function ordenarMayorMenor(array) {
    const mayorMenorPrecio = [].concat(array)
    //ordenar forma descendente 
    mayorMenorPrecio.sort((elem1, elem2) => elem2.precio - elem1.precio)
    mostrarCatalogo(mayorMenorPrecio)
}

function ordenarCategoriaProductos(array) {
    const arrayCategoriaProductos = [].concat(array)
    arrayCategoriaProductos.sort((a, b) => {
        if (a.categoria > b.categoria) {
            return 1
        }
        if (a.categoria < b.categoria) {
            return -1
        }
        // Si las categorías son iguales, puedes ordenar por nombre del producto
        if (a.producto > b.producto) {
            return 1;
        }
        if (a.producto < b.producto) {
            return -1;
        }
        return 0
    })
    mostrarCatalogo(arrayCategoriaProductos)
}


//opcion 2 del MENU:AGREGA PRODUCTOS AL CARRITO
function agregarProducto(array) {
    let prendaI = document.getElementById("nombreInput")
    let categoriaI = document.getElementById("categoriaInput")
    let precioI = document.getElementById("precioInput")

    const NuevoProducto = new Tienda(array.length + 1, prendaI.value, categoriaI.value, precioI.value, "fotogenerica.jpg");
    array.push(NuevoProducto)
    //CUANDO AGREGAMOS UN PRODUCTO NUEVO,SE CARGARA EN EL STORAGE.
    localStorage.setItem("tiendaCompleta", JSON.stringify(tiendaCompleta))
    mostrarCatalogo(array)
    //resetear el form
    prendaI.value = ""
    categoriaI.value = ""
    precioI.value = ""
}

//PROYECTO PREVIO AL DOM:
//3 funciones de filtrado:nombre,categoria y precio:

function filtrarNombre(buscados, array) {
    let busquedas = array.filter(
        (producto) =>
            producto.producto.toLowerCase().includes(buscados.toLowerCase()) ||
            producto.categoria.toLowerCase().includes(buscados.toLowerCase())
    );
    //operador ternario:
    busquedas.length == 0
        ? (coincidencias.innerHTML = `<h4 class="text-center"> No hay coincidencias con la búsqueda de tu producto ${buscados}</h4>`, mostrarCatalogo(busquedas)) : (coincidencias.innerHTML = "", mostrarCatalogo(busquedas));
}

// EVENTOS:1CAPTURO ID Y LUEGO PASO EL EVENTO
//MIS EVENTOS DEL PROYECTO: 
verCatalogo.addEventListener("click", () => {
    mostrarCatalogo(tiendaCompleta)
});

ocultarCatalogoTienda.ondblclick = () => {
    //cuando toco el click NO muestra mis productos
    productoDiv.innerHTML = ``
};

agregarProductoBoton.addEventListener("click", function (event) {
    //nos permite que no se actualice al ejecutar el evento
    event.preventDefault()
    // event.target
    agregarProducto(tiendaCompleta),
        Swal.fire({
            position: 'center',
            icon: 'success',
            text: 'Has agregado el producto correctamente',
            showConfirmButton: false,
            timer: 1500
        })
});

buscadores.addEventListener("input", () => {
    filtrarNombre(buscadores.value, tiendaCompleta)
});

//EVENTO DEL BOTON ENVIAR EN LA PAGINA DE FORMULARIO:

//ORDENAR EL ARRAY DE 3 FORMAS: RANGO DE PRECIOS Y POR CATEGORIA
ordenarSelect.addEventListener("change", () => {
    switch (ordenarSelect.value) {
        case "1":
            ordenarMayorMenor(tiendaCompleta)
            break
        case "2":
            ordenarMenorMayor(tiendaCompleta)
            break
        case "3":
            ordenarCategoriaProductos(tiendaCompleta)
            break
        default:
            mostrarCatalogo(tiendaCompleta)
            break
    }
});
botonCarrito.addEventListener("click", () => {
    mostrarProductoCarrito(productosDelCarrito)
});




//LIBRERIA SWEET:
botonRegistrarse.addEventListener("click", () => {
    Swal.fire({
        position: 'center',
        icon: 'success',
        text: 'Formulario enviado correctamente',
        showConfirmButton: false,
        timer: 1500
    })
})

//LIBRERIA LUXON: 
const DateTime = luxon.DateTime

let fecha = document.getElementById("fecha")
const ahora = DateTime.now()

let fechaMostrar = ahora.toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY)
fecha.innerHTML = `${fechaMostrar}`