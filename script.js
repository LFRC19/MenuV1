

const tituloPollo = document.getElementById("tituloPollo");
const subMenuPollo = document.getElementById("Pollo");
const listaProductosPollo = document.getElementById("productosPollo");

const tituloMariscos = document.getElementById("tituloMariscos");
const subMenuMariscos = document.getElementById("Mariscos");
const listaProductosMariscos = document.getElementById("productosMariscos");

const tituloEmbutidos = document.getElementById("tituloEmbutidos");
const subMenuEmbutidos = document.getElementById("Embutidos");
const listaProductosEmbutidos = document.getElementById("productosEmbutidos");

const tituloQuesos = document.getElementById("tituloQuesos");
const subMenuQuesos = document.getElementById("Quesos");
const listaProductosQuesos = document.getElementById("productosQuesos");

// Variables para rastrear el estado de los submenús
let subMenuVisible = false;
let productosResVisible = false;
let productosCerdoVisible = false;
let productosPolloVisible = false;
let productosMariscosVisible = false;
let productosEmbutidosVisible = false;
let productosQuesosVisible = false;


function toggleSubMenu(titulo, subMenu, listaProductos) {
    let subMenuVisible = false;
    let productosVisible = false;

    titulo.addEventListener("click", function () {
        subMenu.style.display = subMenuVisible ? "none" : "block";
        subMenuVisible = !subMenuVisible;

        if (!subMenuVisible) {
            listaProductos.style.display = "none";
            productosVisible = false;
        }
    });

    subMenu.addEventListener("click", function (event) {
        event.stopPropagation();
        listaProductos.style.display = productosVisible ? "none" : "block";
        productosVisible = !productosVisible;
    });
}

function agregarProductosALista(productos, listaId) {
    const listaProductos = document.getElementById(listaId);
    listaProductos.innerHTML = ""; // Limpiar la lista anterior (si la hay)

    productos.forEach((producto) => {
        const listItem = document.createElement("li");
        listItem.textContent = producto;
        listaProductos.appendChild(listItem);
    });
}

// Familia "Res"
const tituloRes = document.getElementById("tituloRes");
const subMenuCortes = document.getElementById("Cortes");
const listaProductosCortes = document.getElementById("productosCortes");
const productosRes = ['${Resultado.Descripcion}', "Costillas de res", "Carne molida de res"];

toggleSubMenu(tituloRes, subMenuCortes, listaProductosCortes);
agregarProductosALista(productosRes, "productosCortes");

// Ejemplo para un nuevo submenú "Corte Fino 2"
const subMenuCortes2 = document.getElementById("Cortes2");
const listaProductosCortes2 = document.getElementById("productosCortes2");
const productosCortes2 = ["Producto 4", "Producto 5", "Producto 6"];

toggleSubMenu(tituloRes, subMenuCortes2, listaProductosCortes2);
agregarProductosALista(productosCortes2, "productosCortes2");

// Familia "Cerdo"
const tituloCerdo = document.getElementById("tituloCerdo");
const subMenuCerdo = document.getElementById("Cerdo");
const listaProductosCerdo = document.getElementById("productosCerdo");
const productosCerdo = ['Punta de cerdo', "Costillas de cerdo", "Buche"];

toggleSubMenu(tituloCerdo, subMenuCerdo, listaProductosCerdo);
agregarProductosALista(productosCerdo, "productosCerdo");
// Puedes seguir este patrón para cada categoría de productos, haciendo el código más claro y fácil de mantener.

