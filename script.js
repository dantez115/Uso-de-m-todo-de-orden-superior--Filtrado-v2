// Lista de productos con diferentes categorías
const productos = [
    { categoria: 'Abarrotes', nombre: 'Atún' },
    { categoria: 'Panadería', nombre: 'Pastel de Chocolate' },
    { categoria: 'Frutas y Verduras', nombre: 'Manzana' },
    { categoria: 'Frutas y Verduras', nombre: 'Zanahoria' },
    { categoria: 'Lácteos', nombre: 'Leche' },
    { categoria: 'Lácteos', nombre: 'Queso' },
    { categoria: 'Carnes', nombre: 'Pollo' },
    { categoria: 'Carnes', nombre: 'Carne de Res' },
    { categoria: 'Bebidas', nombre: 'Jugo de Naranja' },
    { categoria: 'Bebidas', nombre: 'Refresco' },
    { categoria: 'Abarrotes', nombre: 'Arroz' },
    { categoria: 'Panadería', nombre: 'Pan Integral' }
];

// Referencias a los elementos del DOM
const formulario = document.getElementById('filtro-form');
const listaProductos = document.getElementById('lista-productos');
const mensaje = document.getElementById('mensaje');

// Función para mostrar productos filtrados
function mostrarProductosFiltrados(categoria) {
    listaProductos.innerHTML = '';
    mensaje.textContent = '';
    
    const productosFiltrados = productos.filter(producto => 
        producto.categoria.toLowerCase() === categoria.toLowerCase()
    );

    if (productosFiltrados.length > 0) {
        productosFiltrados.forEach(producto => {
            const li = document.createElement('li');
            li.textContent = `${producto.categoria}: ${producto.nombre}`;
            listaProductos.appendChild(li);
        });

        // Mostrar mensaje personalizado dependiendo de la categoría
        switch (categoria.toLowerCase()) {
            case 'frutas y verduras':
                mensaje.textContent = 'ERES UN CLIENTE QUE DESEA MANTENER SU SALUD EN BUEN ESTADO';
                break;
            case 'carnes':
                mensaje.textContent = '¡PROTEÍNAS PARA UNA DIETA BALANCEADA!';
                break;
            case 'lácteos':
                mensaje.textContent = '¡BUENAS ELECCIONES PARA FORTALECER LOS HUESOS!';
                break;
            default:
                mensaje.textContent = '¡GRAN ELECCIÓN!';
                break;
        }
    } else {
        mensaje.textContent = 'No se encontraron productos para la categoría seleccionada.';
    }
}

// Evento para el formulario de filtrado
formulario.addEventListener('submit', function(event) {
    event.preventDefault();
    const categoria = document.getElementById('categoria').value.trim();
    if (categoria) {
        mostrarProductosFiltrados(categoria);
    }
});
