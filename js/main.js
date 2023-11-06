const inventario = {
    productos: [],
};

// Función para agregar un producto al inventario
function agregarProducto(nombre, cantidad) {
    const producto = {
        nombre: nombre,
        cantidad: cantidad,
    };

    inventario.productos.push(producto);
    guardarInventario();
    mostrarInventario();
}

// Función para mostrar el inventario en la página
function mostrarInventario() {
    const inventarioList = document.getElementById("inventario");
    inventarioList.innerHTML = "";

    inventario.productos.forEach((producto) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${producto.nombre}: ${producto.cantidad}`;
        inventarioList.appendChild(listItem);
    });
}

// Función para guardar el inventario en el almacenamiento local
function guardarInventario() {
    localStorage.setItem("inventario", JSON.stringify(inventario));
}

// Función para cargar el inventario desde el almacenamiento local
function cargarInventario() {
    const almacenado = localStorage.getItem("inventario");
    if (almacenado) {
        inventario.productos = JSON.parse(almacenado);
        mostrarInventario();
    }
}

// Cargar el inventario al cargar la página
cargarInventario();

// Manejo del formulario para agregar un producto
const agregarProductoForm = document.getElementById("agregarProductoBtn");
agregarProductoForm.addEventListener("click", function () {
    const nombreProducto = document.getElementById("nombreProducto").value;
    const cantidadProducto = parseInt(document.getElementById("cantidadProducto").value);

    if (!nombreProducto || isNaN(cantidadProducto)) {
        alert("Por favor, ingresa un nombre y una cantidad válidos.");
    } else {
        agregarProducto(nombreProducto, cantidadProducto);
    }
});
