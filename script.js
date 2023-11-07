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
//Chuletas
const tituloRes = document.getElementById("tituloRes");
const subMenuChuletas = document.getElementById("Chuletas");
const listaProductosChuletas = document.getElementById("productosChuletas");
const productosChuletas = ['${Resultado.Descripcion}', "Costillas de res", "Carne molida de res"];

toggleSubMenu(tituloRes, subMenuChuletas, listaProductosChuletas);
agregarProductosALista(productosChuletas, "productosChuletas");

// Ejemplo para un nuevo submenú "Cortes Finos"
const subMenuCortesFinos = document.getElementById("CortesFinos");
const listaProductosCortesFinos = document.getElementById("productosCortesFinos");
const productosCortesFinos = ["Producto 4", "Producto 5", "Producto 6"];

toggleSubMenu(tituloRes, subMenuCortesFinos, listaProductosCortesFinos);
agregarProductosALista(productosCortesFinos, "productosCortesFinos");

// Costillas
const subMenuCostillas = document.getElementById("Costillas");
const listaProductosCostillas = document.getElementById("productosCostillas");
const productosCostillas = ["Producto 1", "Producto 2", "Producto 3"];

toggleSubMenu(tituloRes, subMenuCostillas, listaProductosCostillas);
agregarProductosALista(productosCostillas, "productosCostillas");

// Pulpas
const subMenuPulpas = document.getElementById("Pulpas");
const listaProductosPulpas = document.getElementById("productosPulpas");
const productosPulpas = ["Producto 1", "Producto 2", "Producto 3"];

toggleSubMenu(tituloRes, subMenuPulpas, listaProductosPulpas);
agregarProductosALista(productosPulpas, "productosPulpas");

// Chamorro
const subMenuChamorro = document.getElementById("Chamorro");
const listaProductosChamorro = document.getElementById("productosChamorro");
const productosChamorro = ["Producto 1", "Producto 2", "Producto 3"];

toggleSubMenu(tituloRes, subMenuChamorro, listaProductosChamorro);
agregarProductosALista(productosChamorro, "productosChamorro");

// Espinazo
const subMenuEspinazo = document.getElementById("Espinazo");
const listaProductosEspinazo = document.getElementById("productosEspinazo");
const productosEspinazo = ["Producto 1", "Producto 2", "Producto 3"];

toggleSubMenu(tituloRes, subMenuEspinazo, listaProductosEspinazo);
agregarProductosALista(productosEspinazo, "productosEspinazo");

// Milanesas
const subMenuMilanesas = document.getElementById("Milanesas");
const listaProductosMilanesas = document.getElementById("productosMilanesas");
const productosMilanesas = ["Producto 1", "Producto 2", "Producto 3"];

toggleSubMenu(tituloRes, subMenuMilanesas, listaProductosMilanesas);
agregarProductosALista(productosMilanesas, "productosMilanesas");

// Pata
const subMenuPata = document.getElementById("Pata");
const listaProductosPata = document.getElementById("productosPata");
const productosPata = ["Producto 1", "Producto 2", "Producto 3"];

toggleSubMenu(tituloRes, subMenuPata, listaProductosPata);
agregarProductosALista(productosPata, "productosPata");

// Pecho
const subMenuPecho = document.getElementById("Pecho");
const listaProductosPecho = document.getElementById("productosPecho");
const productosPecho = ["Producto 1", "Producto 2", "Producto 3"];

toggleSubMenu(tituloRes, subMenuPecho, listaProductosPecho);
agregarProductosALista(productosPecho, "productosPecho");

// Suadero
const subMenuSuadero = document.getElementById("Suadero");
const listaProductosSuadero = document.getElementById("productosSuadero");
const productosSuadero = ["Producto 1", "Producto 2", "Producto 3"];

toggleSubMenu(tituloRes, subMenuSuadero, listaProductosSuadero);
agregarProductosALista(productosSuadero, "productosSuadero");

// Tripas
const subMenuTripas = document.getElementById("Tripas");
const listaProductosTripas = document.getElementById("productosTripas");
const productosTripas = ["Producto 1", "Producto 2", "Producto 3"];

toggleSubMenu(tituloRes, subMenuTripas, listaProductosTripas);
agregarProductosALista(productosTripas, "productosTripas");

// Cabezas
const subMenuCabezas = document.getElementById("Cabezas");
const listaProductosCabezas = document.getElementById("productosCabezas");
const productosCabezas = ["Producto 1", "Producto 2", "Producto 3"];

toggleSubMenu(tituloRes, subMenuCabezas, listaProductosCabezas);
agregarProductosALista(productosCabezas, "productosCabezas");

// Carne Molida
const subMenuCarneMolida = document.getElementById("CarneMolida");
const listaProductosCarneMolida = document.getElementById("productosCarneMolida");
const productosCarneMolida = ["Producto 1", "Producto 2", "Producto 3"];

toggleSubMenu(tituloRes, subMenuCarneMolida, listaProductosCarneMolida);
agregarProductosALista(productosCarneMolida, "productosCarneMolida");

// Carne Seca
const subMenuCarneSeca = document.getElementById("CarneSeca");
const listaProductosCarneSeca = document.getElementById("productosCarneSeca");
const productosCarneSeca = ["Producto 1", "Producto 2", "Producto 3"];

toggleSubMenu(tituloRes, subMenuCarneSeca, listaProductosCarneSeca);
agregarProductosALista(productosCarneSeca, "productosCarneSeca");

// Hueso
const subMenuHueso = document.getElementById("Hueso");
const listaProductosHueso = document.getElementById("productosHueso");
const productosHueso = ["Producto 1", "Producto 2", "Producto 3"];

toggleSubMenu(tituloRes, subMenuHueso, listaProductosHueso);
agregarProductosALista(productosHueso, "productosHueso");

// Arrachera
const subMenuArrachera = document.getElementById("Arrachera");
const listaProductosArrachera = document.getElementById("productosArrachera");
const productosArrachera = ["Producto 1", "Producto 2", "Producto 3"];

toggleSubMenu(tituloRes, subMenuArrachera, listaProductosArrachera);
agregarProductosALista(productosArrachera, "productosArrachera");

// Menudo
const subMenuMenudo = document.getElementById("Menudo");
const listaProductosMenudo = document.getElementById("productosMenudo");
const productosMenudo = ["Producto 1", "Producto 2", "Producto 3"];

toggleSubMenu(tituloRes, subMenuMenudo, listaProductosMenudo);
agregarProductosALista(productosMenudo, "productosMenudo");

// Otros
const subMenuOtros = document.getElementById("Otros");
const listaProductosOtros = document.getElementById("productosOtros");
const productosOtros = ["Producto 1", "Producto 2", "Producto 3"];

toggleSubMenu(tituloRes, subMenuOtros, listaProductosOtros);
agregarProductosALista(productosOtros, "productosOtros");

// Diezmillo
const subMenuDiezmillo = document.getElementById("Diezmillo");
const listaProductosDiezmillo = document.getElementById("productosDiezmillo");
const productosDiezmillo = ["Producto 1", "Producto 2", "Producto 3"];

toggleSubMenu(tituloRes, subMenuDiezmillo, listaProductosDiezmillo);
agregarProductosALista(productosDiezmillo, "productosDiezmillo");

// Pescuezo
const subMenuPescuezo = document.getElementById("Pescuezo");
const listaProductosPescuezo = document.getElementById("productosPescuezo");
const productosPescuezo = ["Producto 1", "Producto 2", "Producto 3"];

toggleSubMenu(tituloRes, subMenuPescuezo, listaProductosPescuezo);
agregarProductosALista(productosPescuezo, "productosPescuezo");

// Platanillo
const subMenuPlatanillo = document.getElementById("Platanillo");
const listaProductosPlatanillo = document.getElementById("productosPlatanillo");
const productosPlatanillo = ["Producto 1", "Producto 2", "Producto 3"];

toggleSubMenu(tituloRes, subMenuPlatanillo, listaProductosPlatanillo);
agregarProductosALista(productosPlatanillo, "productosPlatanillo");



// Familia "Cerdo"
// Chuletas de Cerdo
const tituloCerdo = document.getElementById("tituloCerdo");
const subMenuChuletasCerdo = document.getElementById("ChuletasCerdo");
const listaProductosChuletasCerdo = document.getElementById("productosChuletasCerdo");
const productosChuletasCerdo = ['${Resultado.Descripcion}', "Costillas de res", "Carne molida de res"];

toggleSubMenu(tituloCerdo, subMenuChuletasCerdo, listaProductosChuletasCerdo);
agregarProductosALista(productosChuletasCerdo, "productosChuletasCerdo");

// Costillas de Cerdo
const subMenuCostillasCerdo = document.getElementById("CostillasCerdo");
const listaProductosCostillasCerdo = document.getElementById("productosCostillasCerdo");
const productosCostillasCerdo = ["Producto 1", "Producto 2", "Producto 3"];

toggleSubMenu(tituloCerdo, subMenuCostillasCerdo, listaProductosCostillasCerdo);
agregarProductosALista(productosCostillasCerdo, "productosCostillasCerdo");

// Chamorro de Cerdo
const subMenuChamorroCerdo = document.getElementById("ChamorroCerdo");
const listaProductosChamorroCerdo = document.getElementById("productosChamorroCerdo");
const productosChamorroCerdo = ["Producto 1", "Producto 2", "Producto 3"];

toggleSubMenu(tituloCerdo, subMenuChamorroCerdo, listaProductosChamorroCerdo);
agregarProductosALista(productosChamorroCerdo, "productosChamorroCerdo");

// Buche de Cerdo
const subMenuBucheCerdo = document.getElementById("BucheCerdo");
const listaProductosBucheCerdo = document.getElementById("productosBucheCerdo");
const productosBucheCerdo = ["Producto 1", "Producto 2", "Producto 3"];

toggleSubMenu(tituloCerdo, subMenuBucheCerdo, listaProductosBucheCerdo);
agregarProductosALista(productosBucheCerdo, "productosBucheCerdo");

// Espinazo de Cerdo
const subMenuEspinazoCerdo = document.getElementById("EspinazoCerdo");
const listaProductosEspinazoCerdo = document.getElementById("productosEspinazoCerdo");
const productosEspinazoCerdo = ["Producto 1", "Producto 2", "Producto 3"];

toggleSubMenu(tituloCerdo, subMenuEspinazoCerdo, listaProductosEspinazoCerdo);
agregarProductosALista(productosEspinazoCerdo, "productosEspinazoCerdo");

// Manitas de Cerdo
const subMenuManitasCerdo = document.getElementById("ManitasCerdo");
const listaProductosManitasCerdo = document.getElementById("productosManitasCerdo");
const productosManitasCerdo = ["Producto 1", "Producto 2", "Producto 3"];

toggleSubMenu(tituloCerdo, subMenuManitasCerdo, listaProductosManitasCerdo);
agregarProductosALista(productosManitasCerdo, "productosManitasCerdo");


// Pecho de Cerdo
const subMenuPechoCerdo = document.getElementById("PechoCerdo");
const listaProductosPechoCerdo = document.getElementById("productosPechoCerdo");
const productosPechoCerdo = ["Producto 1", "Producto 2", "Producto 3"];

toggleSubMenu(tituloCerdo, subMenuPechoCerdo, listaProductosPechoCerdo);
agregarProductosALista(productosPechoCerdo, "productosPechoCerdo");

// Pic Nic de Cerdo
const subMenuPicNicCerdo = document.getElementById("PicNicCerdo");
const listaProductosPicNicCerdo = document.getElementById("productosPicNicCerdo");
const productosPicNicCerdo = ["Producto 1", "Producto 2", "Producto 3"];

toggleSubMenu(tituloCerdo, subMenuPicNicCerdo, listaProductosPicNicCerdo);
agregarProductosALista(productosPicNicCerdo, "productosPicNicCerdo");

// Pierna de Cerdo
const subMenuPiernaCerdo = document.getElementById("PiernaCerdo");
const listaProductosPiernaCerdo = document.getElementById("productosPiernaCerdo");
const productosPiernaCerdo = ["Producto 1", "Producto 2", "Producto 3"];

toggleSubMenu(tituloCerdo, subMenuPiernaCerdo, listaProductosPiernaCerdo);
agregarProductosALista(productosPiernaCerdo, "productosPiernaCerdo");

// Punta de Cerdo
const subMenuPuntaCerdo = document.getElementById("PuntaCerdo");
const listaProductosPuntaCerdo = document.getElementById("productosPuntaCerdo");
const productosPuntaCerdo = ["Producto 1", "Producto 2", "Producto 3"];

toggleSubMenu(tituloCerdo, subMenuPuntaCerdo, listaProductosPuntaCerdo);
agregarProductosALista(productosPuntaCerdo, "productosPuntaCerdo");

// Tocino de Cerdo
const subMenuTocinoCerdo = document.getElementById("TocinoCerdo");
const listaProductosTocinoCerdo = document.getElementById("productosTocinoCerdo");
const productosTocinoCerdo = ["Producto 1", "Producto 2", "Producto 3"];

toggleSubMenu(tituloCerdo, subMenuTocinoCerdo, listaProductosTocinoCerdo);
agregarProductosALista(productosTocinoCerdo, "productosTocinoCerdo");

// Tripas de Cerdo
const subMenuTripasCerdo = document.getElementById("TripasCerdo");
const listaProductosTripasCerdo = document.getElementById("productosTripasCerdo");
const productosTripasCerdo = ["Producto 1", "Producto 2", "Producto 3"];

toggleSubMenu(tituloCerdo, subMenuTripasCerdo, listaProductosTripasCerdo);
agregarProductosALista(productosTripasCerdo, "productosTripasCerdo");


// Cabezas de Cerdo
const subMenuCabezasCerdo = document.getElementById("CabezasCerdo");
const listaProductosCabezasCerdo = document.getElementById("productosCabezasCerdo");
const productosCabezasCerdo = ["Producto 1", "Producto 2", "Producto 3"];

toggleSubMenu(tituloCerdo, subMenuCabezasCerdo, listaProductosCabezasCerdo);
agregarProductosALista(productosCabezasCerdo, "productosCabezasCerdo");

// Chicharron Prensado de Cerdo
const subMenuChicharronPrensadoCerdo = document.getElementById("ChicharronPrensadoCerdo");
const listaProductosChicharronPrensadoCerdo = document.getElementById("productosChicharronPrensadoCerdo");
const productosChicharronPrensadoCerdo = ["Producto 1", "Producto 2", "Producto 3"];

toggleSubMenu(tituloCerdo, subMenuChicharronPrensadoCerdo, listaProductosChicharronPrensadoCerdo);
agregarProductosALista(productosChicharronPrensadoCerdo, "productosChicharronPrensadoCerdo");
// Cuero de Cerdo
const subMenuCueroCerdo = document.getElementById("CueroCerdo");
const listaProductosCueroCerdo = document.getElementById("productosCueroCerdo");
const productosCueroCerdo = ["Producto 1", "Producto 2", "Producto 3"];

toggleSubMenu(tituloCerdo, subMenuCueroCerdo, listaProductosCueroCerdo);
agregarProductosALista(productosCueroCerdo, "productosCueroCerdo");

// Otros de Cerdo
const subMenuOtrosCerdo = document.getElementById("OtrosCerdo");
const listaProductosOtrosCerdo = document.getElementById("productosOtrosCerdo");
const productosOtrosCerdo = ["Producto 1", "Producto 2", "Producto 3"];

toggleSubMenu(tituloCerdo, subMenuOtrosCerdo, listaProductosOtrosCerdo);
agregarProductosALista(productosOtrosCerdo, "productosOtrosCerdo");

// Lomo de Cerdo
const subMenuLomoCerdo = document.getElementById("LomoCerdo");
const listaProductosLomoCerdo = document.getElementById("productosLomoCerdo");
const productosLomoCerdo = ["Producto 1", "Producto 2", "Producto 3"];

toggleSubMenu(tituloCerdo, subMenuLomoCerdo, listaProductosLomoCerdo);
agregarProductosALista(productosLomoCerdo, "productosLomoCerdo");


// Familia "Pollo"
const tituloPollo = document.getElementById("tituloPollo");
const subMenuPollo = document.getElementById("Pollo");
const listaProductosPollo = document.getElementById("productosPollo");
const productosPollo = ['Pechuga de pollo', 'Muslos de pollo', 'Alitas de pollo'];

toggleSubMenu(tituloPollo, subMenuPollo, listaProductosPollo);
agregarProductosALista(productosPollo, "productosPollo");

// Pechugas de Pollo
const subMenuPechugasPollo = document.getElementById("PechugasPollo");
const listaProductosPechugasPollo = document.getElementById("productosPechugasPollo");
const productosPechugasPollo = ["Filete de Pechuga Empanizado Pollo", "Pechuga Adobada Pollo", "Pechuga de Pollo"];

toggleSubMenu(tituloPollo, subMenuPechugasPollo, listaProductosPechugasPollo);
agregarProductosALista(productosPechugasPollo, "productosPechugasPollo");

// Milanesas de Pollo
const subMenuMilanesasPollo = document.getElementById("MilanesasPollo");
const listaProductosMilanesasPollo = document.getElementById("productosMilanesasPollo");
const productosMilanesasPollo = ["Milanesa de Pollo"];

toggleSubMenu(tituloPollo, subMenuMilanesasPollo, listaProductosMilanesasPollo);
agregarProductosALista(productosMilanesasPollo, "productosMilanesasPollo");

// Pierna de Pollo
const subMenuPiernaPollo = document.getElementById("PiernaPollo");
const listaProductosPiernaPollo = document.getElementById("productosPiernaPollo");
const productosPiernaPollo = ["Pierna Corta de Pollo", "Pierna y Muslo de Pollo"];

toggleSubMenu(tituloPollo, subMenuPiernaPollo, listaProductosPiernaPollo);
agregarProductosALista(productosPiernaPollo, "productosPiernaPollo");

// Fajitas de Pollo
const subMenuFajitasPollo = document.getElementById("FajitasPollo");
const listaProductosFajitasPollo = document.getElementById("productosFajitasPollo");
const productosFajitasPollo = ["Fajitas de Pollo"];

toggleSubMenu(tituloPollo, subMenuFajitasPollo, listaProductosFajitasPollo);
agregarProductosALista(productosFajitasPollo, "productosFajitasPollo");

// Otros de Pollo
const subMenuOtrosPollo = document.getElementById("OtrosPollo");
const listaProductosOtrosPollo = document.getElementById("productosOtrosPollo");
const productosOtrosPollo = ["Chicken Nuggets Pollo", "Hamburguesa de Pollo Empanizada", "Otro Producto de Pollo"];

toggleSubMenu(tituloPollo, subMenuOtrosPollo, listaProductosOtrosPollo);
agregarProductosALista(productosOtrosPollo, "productosOtrosPollo");


// Familia "Mariscos"
const tituloMariscos = document.getElementById("tituloMariscos");
const subMenuMariscos = document.getElementById("Camarón");
const listaProductosMariscos = document.getElementById("productosCamarón");
const productosMariscos = ['Pechuga de pollo', 'Muslos de pollo', 'Alitas de pollo'];

toggleSubMenu(tituloMariscos, subMenuMariscos, listaProductosMariscos);
agregarProductosALista(productosMariscos, "productosCamarón");

// Filetes
const subMenuFiletes = document.getElementById("Filetes");
const listaProductosFiletes = document.getElementById("productosFiletes");
const productosFiletes = ["Producto 1", "Producto 2", "Producto 3"];

toggleSubMenu(tituloMariscos, subMenuFiletes, listaProductosFiletes);
agregarProductosALista(productosFiletes, "productosFiletes");

// Almeja
const subMenuAlmeja = document.getElementById("Almeja");
const listaProductosAlmeja = document.getElementById("productosAlmeja");
const productosAlmeja = ["Producto 1", "Producto 2", "Producto 3"];

toggleSubMenu(tituloMariscos, subMenuAlmeja, listaProductosAlmeja);
agregarProductosALista(productosAlmeja, "productosAlmeja");

// Atún
const subMenuAtun = document.getElementById("Atun");
const listaProductosAtun = document.getElementById("productosAtun");
const productosAtun = ["Producto 1", "Producto 2", "Producto 3"];

toggleSubMenu(tituloMariscos, subMenuAtun, listaProductosAtun);
agregarProductosALista(productosAtun, "productosAtun");

// Marlin
const subMenuMarlin = document.getElementById("Marlin");
const listaProductosMarlin = document.getElementById("productosMarlin");
const productosMarlin = ["Producto 1", "Producto 2", "Producto 3"];

toggleSubMenu(tituloMariscos, subMenuMarlin, listaProductosMarlin);
agregarProductosALista(productosMarlin, "productosMarlin");

// Pulpos
const subMenuPulpos = document.getElementById("Pulpos");
const listaProductosPulpos = document.getElementById("productosPulpos");
const productosPulpos = ["Producto 1", "Producto 2", "Producto 3"];

toggleSubMenu(tituloMariscos, subMenuPulpos, listaProductosPulpos);
agregarProductosALista(productosPulpos, "productosPulpos");


// Familia "Embutidos"
const tituloEmbutidos = document.getElementById("tituloEmbutidos");
const subMenuEmbutidos = document.getElementById("Embutidos");
const listaProductosEmbutidos = document.getElementById("productosJamones");
const productosEmbutidos = ["Producto 1", "Producto 2", "Producto 3"];

toggleSubMenu(tituloEmbutidos, subMenuEmbutidos, listaProductosEmbutidos);
agregarProductosALista(productosEmbutidos, "productosJamones");

const subMenuSalchichas = document.getElementById("Salchichas");
const listaProductosSalchichas = document.getElementById("productosSalchichas");
const productosSalchichas = ["Producto 1", "Producto 2", "Producto 3"];

toggleSubMenu(tituloEmbutidos, subMenuSalchichas, listaProductosSalchichas);
agregarProductosALista(productosSalchichas, "productosSalchichas");

//Peperoni
const subMenuPepperoni = document.getElementById("Pepperoni");
const listaProductosPepperoni = document.getElementById("productosPepperoni");
const productosPepperoni = ["Producto 1", "Producto 2", "Producto 3"];

toggleSubMenu(tituloEmbutidos, subMenuPepperoni, listaProductosPepperoni);
agregarProductosALista(productosPepperoni, "productosPepperoni");

// Familia "Quesos"
const tituloQuesos = document.getElementById("tituloQuesos");
const subMenuQuesos = document.getElementById("Quesos");
const listaProductosQuesos = document.getElementById("productosChester");
const productosQuesos = ['Pechuga de pollo', 'Muslos de pollo', 'Alitas de pollo'];

toggleSubMenu(tituloQuesos, subMenuQuesos, listaProductosQuesos);
agregarProductosALista(productosQuesos, "productosChester");

// Chihuahua
const subMenuChihuahua = document.getElementById("Chihuahua");
const listaProductosChihuahua = document.getElementById("productosChihuahua");
const productosChihuahua = ["Chihuahua"];

toggleSubMenu(tituloQuesos, subMenuChihuahua, listaProductosChihuahua);
agregarProductosALista(productosChihuahua, "productosChihuahua");

// Cotija
const subMenuCotija = document.getElementById("Cotija");
const listaProductosCotija = document.getElementById("productosCotija");
const productosCotija = ["Cotija"];

toggleSubMenu(tituloQuesos, subMenuCotija, listaProductosCotija);
agregarProductosALista(productosCotija, "productosCotija");

// Cincho
const subMenuCincho = document.getElementById("Cincho");
const listaProductosCincho = document.getElementById("productosCincho");
const productosCincho = ["Cincho"];

toggleSubMenu(tituloQuesos, subMenuCincho, listaProductosCincho);
agregarProductosALista(productosCincho, "productosCincho");

// Fresco
const subMenuFresco = document.getElementById("Fresco");
const listaProductosFresco = document.getElementById("productosFresco");
const productosFresco = ["Fresco"];

toggleSubMenu(tituloQuesos, subMenuFresco, listaProductosFresco);
agregarProductosALista(productosFresco, "productosFresco");

// Monterrey
const subMenuMonterrey = document.getElementById("Monterrey");
const listaProductosMonterrey = document.getElementById("productosMonterrey");
const productosMonterrey = ["Monterrey"];

toggleSubMenu(tituloQuesos, subMenuMonterrey, listaProductosMonterrey);
agregarProductosALista(productosMonterrey, "productosMonterrey");

// Mozzarella
const subMenuMozzarella = document.getElementById("Mozzarella");
const listaProductosMozzarella = document.getElementById("productosMozzarella");
const productosMozzarella = ["Mozzarella"];

toggleSubMenu(tituloQuesos, subMenuMozzarella, listaProductosMozzarella);
agregarProductosALista(productosMozzarella, "productosMozzarella");

// Oaxaca
const subMenuOaxaca = document.getElementById("Oaxaca");
const listaProductosOaxaca = document.getElementById("productosOaxaca");
const productosOaxaca = ["Oaxaca"];

toggleSubMenu(tituloQuesos, subMenuOaxaca, listaProductosOaxaca);
agregarProductosALista(productosOaxaca, "productosOaxaca");

// Panela
const subMenuPanela = document.getElementById("Panela");
const listaProductosPanela = document.getElementById("productosPanela");
const productosPanela = ["Panela","Prueba"];

toggleSubMenu(tituloQuesos, subMenuPanela, listaProductosPanela);
agregarProductosALista(productosPanela, "productosPanela");

// Ranchero
const subMenuRanchero = document.getElementById("Ranchero");
const listaProductosRanchero = document.getElementById("productosRanchero");
const productosRanchero = ["Ranchero"];

toggleSubMenu(tituloQuesos, subMenuRanchero, listaProductosRanchero);
agregarProductosALista(productosRanchero, "productosRanchero");

