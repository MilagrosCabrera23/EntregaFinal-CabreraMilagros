//Este es mi proyecto de Tienda de ropa.

//CAPTURAS DE ID:Capture los id para luego darle un evvento a cada uno.
let productoDiv = document.getElementById("productos")
let selectOpciones = document.getElementById("selectOpciones")
let botonAgregarProducto = document.getElementById("botonAgregarProducto")
let buscadores = document.getElementById("buscadores")
let coincidencias = document.getElementById("coincidencias")
let bodyDelCarrito = document.getElementById("bodyDelCarrito")
let botonCarrito = document.getElementById("botonCarrito")
let precioTotal = document.getElementById("precioTotal")
let cargandoText = document.getElementById("cargandoText")
let cargando = document.getElementById("cargando")
let finalizarCompra = document.getElementById("finalizarCompra")
let newsletterForm = document.getElementById("newsletterForm")
let formulario = document.getElementById("formulario")
let loginIcon = document.getElementById("loginIcon");
let botonCerrarSesion = document.getElementById("botonCerrarSesion")




//Esta funcion muestras todos mis productos,y ademas tiene el evento de agregar el producto al carrito.
function mostrarMiCatalogo(array) {
    //resetear el DOM
    productoDiv.innerHTML = ``
    //Recorrer array para imprimir en el DOM MIS PRODUCTOS
    for (let productos of array) {
        let NuevoProductoDiv = document.createElement("div")
        //CLASES:
        NuevoProductoDiv.className = "col-12 col-md-2 my-2 w-25"
        NuevoProductoDiv.innerHTML = `
        <div id="${productos.id}" class="card text-center" style="width: 18rem;">
    <img class="card-img-top img-fluid tamaño" style="height:200px" src="img/${productos.imagen}" alt="${productos.imagen} de ${productos.categoria}">
        <div class="card-body-bg">
            <h4 class="card-title">${productos.producto}</h4>

            <p class="card-text">Categoria: ${productos.categoria}<small>
            <p class= "text-color color-card"> Precio: ${productos.precio}</p>
            <button id="agregarBtn${productos.id}" class="btn btn color btn-outline-danger">Agregar al carrito</button>
        </div>`

        productoDiv.appendChild(NuevoProductoDiv)

        let agregarBtn = document.getElementById(`agregarBtn${productos.id}`)

        agregarBtn.addEventListener("click", () => {
            //evento de agregar los productos al carrito:
            agregarProdAlCarrito(productos)
        })
    }
}


//Esta funcion agrega los productos al carrito,si ya existe en el carrito muestra un mensaje de error 
function agregarProdAlCarrito(productos) {
    //ver si existe ese producto en el array
    let productosAgregados = productosDelCarrito.find((elemento) => elemento.id == productos.id)
    //si no lo encuentra,que me lo agregue al carrito:

    if (productosAgregados == undefined) {
        productosDelCarrito.push(productos)
        localStorage.setItem("carrito", JSON.stringify(productosDelCarrito))

        Swal.fire({
            text: `El producto ${productos.producto} ha sido agregado`,
            position: 'center',
            icon: 'success',
            timer: 1400,
            showConfirmButton: false
        })
    }
    else {
        //Sweetalert 
        Swal.fire({
            title: `El producto ya existe en el carrito`,
            icon: "error",
            timer: 1400,
            showConfirmButton: false
        })
    }
}


//Esta funcion:Imprimi los productos que esten en el carrito,ademas tiene 3 botones: 1 para sumar unidad,1 para restar  unidad  y el ultimo para eliminar el  producto.Y ademas tambien muestra el total.
function mostrarProductoCarrito(array) {
    //resetea dom parfa no sobre imprimir
    bodyDelCarrito.innerHTML = ``
    //recorrer el array
    array.forEach((productoparaCarrito) => {
        bodyDelCarrito.innerHTML += `  
        <div class="card" id="productosCarrito${productoparaCarrito.id}">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="img/${productoparaCarrito.imagen}" class="img-fluid img-c" alt="">
          </div>
          <div class="col-md-8">
            <h5 class="card-title">${productoparaCarrito.producto}</h5>


            <p class="card-text">Precio unitario: $${productoparaCarrito.precio}<small>
            <p class="card-text">Total de unidades: ${productoparaCarrito.cantidad}</p> 
            <p class="card-text">SubTotal: $${productoparaCarrito.cantidad * productoparaCarrito.precio}</p>   
              <button class= "btn btn-secondary m-3" id="botonSumarUnidades${productoparaCarrito.id}"><i class=""></i>+1</button>
              <button class= "btn btn-light" id="botonEliminarUnidades${productoparaCarrito.id}"><i class=""></i>-1</button> 
              <button class="btn btn-danger" id="botonEliminar${productoparaCarrito.id}"><i class="fas fa-trash-alt"></i></button>
            </div>
          </div>
        </div>
      </div>
`
    })
    //evento para sumar unidades 
    array.forEach((productoparaCarrito) => {
        document.getElementById(`botonSumarUnidades${productoparaCarrito.id}`).addEventListener("click", () => {
            console.log(`Se ha sumado una unidad`)
            //agrego el metodo de la clase constructora:
            productoparaCarrito.sumarCantidades()
            console.log(productoparaCarrito.cantidad)
            //seteamos storage:
            localStorage.setItem("carrito", JSON.stringify(array))
            //mostramos en el dom
            mostrarProductoCarrito(array)
        })

        //restar unidades:
        document.getElementById(`botonEliminarUnidades${productoparaCarrito.id}`).addEventListener("click", () => {
            let cantidadProd = productoparaCarrito.restarCantidades()
            console.log(cantidadProd)

            if (cantidadProd == 0) {
                //borrar del DOM
                let cartaProducto = document.getElementById(`productoparaCarrito${productoparaCarrito.id}`)
                cartaProducto.remove()
                let productoAEliminar = array.find((producto) => producto.id == productoparaCarrito.id)
                console.log(productoAEliminar)
                let posicionI = array.indexOf(productoAEliminar)
                console.log(posicionI)
                array.splice(posicionI, 1)
                console.log(array)
                //setear storage
                localStorage.setItem("carrito", JSON.stringify(array))

                //debemos calcularTotal??
                calcularTotal(array)
            }
            else {
                localStorage.setItem("carrito", JSON.stringify(array))
            }
            mostrarProductoCarrito(array)
        })

        //evento de eliminar producto + for each;
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

            calcularTotal(array)
        })
    })
    calcularTotal(array)
}

//funcion para calcular el total de los productos que existan en el carrito.
function calcularTotal(array) {
    let total = array.reduce((acumulador, productoparaCarrito) => acumulador + (productoparaCarrito.precio * productoparaCarrito.cantidad), 0)
    total == 0 ? precioTotal.innerHTML = `No hay productos en el carrito` : precioTotal.innerHTML = `<strong> SUBTOTAL: ${total} </strong> `
    return total;
}


//funcionees del select opciones,filtra por menor y mayor precio  y/o categorias segun especifique el usuario.
function ordenarMenorMayor(array) {
    //copia del array original, para aplicar sort y no modificar estanteria
    const menorMayorPrecio = [].concat(array)
    //de forma ascendente por el atributo precio
    menorMayorPrecio.sort((a, b) => a.precio - b.precio)
    mostrarMiCatalogo(menorMayorPrecio)
}

function ordenarMayorMenor(array) {
    const mayorMenorPrecio = [].concat(array)
    //ordenar forma descendente 
    mayorMenorPrecio.sort((elem1, elem2) => elem2.precio - elem1.precio)
    mostrarMiCatalogo(mayorMenorPrecio)
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
    mostrarMiCatalogo(arrayCategoriaProductos)
}

//esta funcion agrega un  producto en el catalogo mediante un formulario.
function agregarProducto(array) {
    let prendaI = document.getElementById("nombreInput");
    let categoriaI = document.getElementById("categoriaInput");
    let precioI = document.getElementById("precioInput");

    // Verificar si todos los campos están llenos
    if (prendaI.value.trim() === "" || categoriaI.value.trim() === "" || precioI.value.trim() === "") {
        // Mostrar mensaje de error si algún campo está vacío
        Swal.fire({
            position: 'center',
            icon: 'error',
            text: 'Debes completar todos los campos del formulario.',
            showConfirmButton: false,
            timer: 1500
        });
        return; // Salir de la función sin agregar el producto
    }

    const NuevoProducto = new Tienda(array.length + 1, prendaI.value, categoriaI.value, parseInt(precioI.value), "fotogenerica.webp");

    array.push(NuevoProducto);
    // CUANDO AGREGAMOS UN PRODUCTO NUEVO, SE CARGA EN EL STORAGE.
    localStorage.setItem("tiendaCompleta", JSON.stringify(tiendaCompleta));

    // Resetear el formulario
    prendaI.value = "";
    categoriaI.value = "";
    precioI.value = "";

    // Mostrar mensaje de éxito
    Swal.fire({
        position: 'center',
        icon: 'success',
        text: 'Has agregado el producto correctamente',
        showConfirmButton: false,
        timer: 1500
    });
}

//3 funcion de barra de buqueda :filtrado:nombre,categoria
function filtrarNombre(buscados, array) {
    let busquedas = array.filter(
        (producto) =>
            producto.producto.toLowerCase().includes(buscados.toLowerCase()) ||
            producto.categoria.toLowerCase().includes(buscados.toLowerCase())
    );
    busquedas.length == 0
        ? (coincidencias.innerHTML = `<h4 class="text-center"> No hay coincidencias con la búsqueda de tu producto ${buscados}</h4>`, mostrarMiCatalogo(busquedas)) : (coincidencias.innerHTML = "", mostrarMiCatalogo(busquedas));
}


//funcion que muestra las finalizacion de la compra o en caso contrario muestera un mensaje confirmando que cancelo la compra.
function terminarCompra(array) {
    if (array.length === 0) {
        // El carrito está vacío, muestra un mensaje indicando que se deben agregar productos.
        Swal.fire({
            title: 'Carrito vacío',
            icon: 'warning',
            text: 'Debe agregar productos al carrito para finalizar la compra.',
            confirmButtonColor: 'green',
            timer: 1500
        });
        return; // Sale de la función para que no continúe con el proceso de compra.
    }
    Swal.fire({
        title: 'Está seguro de finalizar la compra',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Comprar',
        cancelButtonText: 'Cancelar Compra',
        confirmButtonColor: 'green',
        cancelButtonColor: 'red',
    })
        .then((rstd) => {
            if (rstd.isConfirmed) {
                let dia = DateTime.now().toLocaleString(DateTime.TIME_24_)
                let totalDefinitivo = calcularTotal(array)
                Swal.fire({
                    title: 'Compra realizada',
                    icon: 'success',
                    confirmButtonColor: 'green',
                    text: `Muchas gracias por su compra del dia ${dia}. Su monto a pagar es: ${totalDefinitivo} `,
                })

                productosDelCarrito = []
                localStorage.removeItem("carrito")
            } else {
                Swal.fire({
                    title: 'Compra cancelada',
                    icon: 'info',
                    text: `La compra no ha sido realizada!`,
                    confirmButtonColor: 'green',
                    timer: 1500
                })
            }
        })
}

/*formulario para pedir datos del usuario para ingresar*/
function iniciarSesion() {
    let modal = document.getElementById("modal")

    modal.addEventListener("submit", (event) => {
        event.preventDefault();

        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;

        let nuevoUsuario = new User(username, password)
        usuarios.push(nuevoUsuario)

        localStorage.setItem("usuarios", JSON.stringify(usuarios))


        Swal.fire({
            title: '¿Está seguro de iniciar sesión?',
            icon: 'info',
            showCancelButton: true,
            confirmButtonText: 'Sí, seguro',
            cancelButtonText: 'No, no quiero',
            confirmButtonColor: 'green',
            cancelButtonColor: 'red',
        })
            .then((respuesta) => {

                if (respuesta.isConfirmed) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        text: `Sesión iniciada con éxito ${username}`,
                        showConfirmButton: false,
                        timer: 1000
                    });

                    document.getElementById("username").value = "";
                    document.getElementById("password").value = "";
                } else {

                    Swal.fire({
                        position: 'center',
                        icon: 'error',
                        text: 'Error al iniciar sesión, inténtelo de nuevo',
                        showConfirmButton: false,
                        timer: 1000
                    });
                }
            });
    });
}

iniciarSesion()

/*resetea los valores de los input*/
function resetearModal() {
    let username = document.getElementById("username");
    let password = document.getElementById("password");
    username.value = "";
    password.value = "";
}

// EVENTOS:
botonCerrarSesion.addEventListener("click", () => {
    Swal.fire({
        title: '¿Está seguro de cerrar sesion?',
        icon: 'info',
        showCancelButton: true,
        confirmButtonText: 'Sí, seguro',
        cancelButtonText: 'No, no quiero',
        confirmButtonColor: 'green',
        cancelButtonColor: 'red',
    })
        .then((respuesta) => {
            if (respuesta.isConfirmed) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    text: `Finalizo su sesión correctamente `,
                    showConfirmButton: false,
                    timer: 1000
                });
                localStorage.removeItem("usuarios", JSON.stringify(usuarios))

            } else {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    text: `Sigue activa su sesion `,
                    showConfirmButton: false,
                    timer: 1000
                })
            }
        })
})

document.getElementById("idModalLogin").addEventListener('show.bs.modal', function () {
    resetearModal();
});

botonAgregarProducto.addEventListener("click", function (event) {
    event.preventDefault()
    agregarProducto(tiendaCompleta)
});

buscadores.addEventListener("input", () => {
    filtrarNombre(buscadores.value, tiendaCompleta)
});

//ORDENAR EL ARRAY DE 3 FORMAS: RANGO DE PRECIOS Y POR CATEGORIA
selectOpciones.addEventListener("change", () => {
    Swal.fire({
        position: 'center',
        icon: 'warning',
        text: 'Cargando,espere unos minutos',
        showConfirmButton: false,
        timer: 1000
    })
    switch (selectOpciones.value) {
        case "1":
            ordenarMayorMenor(tiendaCompleta)
            break
        case "2":
            ordenarMenorMayor(tiendaCompleta)
            break
        case "3":
            ordenarCategoriaProductos(tiendaCompleta)
            break
    }

});

botonCarrito.addEventListener("click", () => {
    mostrarProductoCarrito(productosDelCarrito)
});

finalizarCompra.addEventListener("click", () => {
    terminarCompra(productosDelCarrito)
})

//setTimeout para imprimir carrito 
setTimeout(() => {
    cargando.remove()
    cargandoText.remove()
    mostrarMiCatalogo(tiendaCompleta)
}, 1500)

//LIBRERIA SWEET:
newsletterForm.addEventListener("submit", () => {
    if (botonRegistrarse == undefined) {
        Swal.fire({
            position: 'center',
            icon: 'error',
            text: 'Hubo un error,debes rellenar todos los campos nuevamente.',
            showConfirmButton: false,
            timer: 2500
        })

    } else {
        Swal.fire({
            position: 'center',
            icon: 'success',
            text: 'Formulario enviado correctamente',
            showConfirmButton: false,
            timer: 1500
        })
    }
})

//LIBRERIA LUXON:AGREGO MIN Y  SEG AL RELOJ. 
const DateTime = luxon.DateTime
const ahora = DateTime.now()
let fecha = document.getElementById("fecha")
setInterval(() => {
    let fechaMostrar = DateTime.now().toLocaleString(DateTime.TIME_24_WITH_SECONDS)
    fecha.innerHTML = `${fechaMostrar}`
}, 1000)


formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    setTimeout(() => {
        // Redirigir al usuario al index.html
        window.location.href = "./index.html"
    }, 1000)
})

// /EVENTO DE FORMULARIO.MUESTRA UN MENSAJE DE LA CONFIRMACION DEL FORMULARIO CORRECTAMENTE
formulario.addEventListener("submit", () => {

    const formData = new FormData(formulario);

    if (formData.get("nombre") === "" || formData.get("email") === "" || formData.get("mensaje") === "") {
        Swal.fire({
            position: 'center',
            icon: 'error',
            text: 'Debes completar todos los campos del formulario.',
            showConfirmButton: false,
            timer: 1500
        });
    } else {
        Swal.fire({
            position: 'center',
            icon: 'success',
            text: 'Formulario enviado correctamente',
            showConfirmButton: false,
            timer: 1500
        });
    }
});
