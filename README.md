# Filtrado de Productos con Programación Funcional

Esta es una aplicación web simple que permite a los usuarios filtrar productos o alimentos de una lista según la categoría a la que pertenecen. La aplicación utiliza la función `filter()` de JavaScript para realizar el filtrado de manera funcional.

## Estructura del Proyecto

El proyecto está compuesto por los siguientes archivos:

- **index.html**: Página principal que contiene la estructura HTML de la aplicación.
- **style.css**: Hoja de estilos que define el diseño de la aplicación.
- **script.js**: Archivo JavaScript que contiene la lógica del filtrado de productos usando la función `filter()`.

## Descripción de la Funcionalidad

1. **Formulario de Filtrado**: La aplicación cuenta con un formulario donde el usuario puede ingresar el nombre de una categoría. Al hacer clic en el botón "Filtrar", se muestran solo los productos que coinciden con la categoría ingresada.
2. **Filtrado con `filter()`**: La lista de productos se filtra aplicando la función `filter()` sobre un arreglo de objetos que representan productos, cada uno con su respectiva categoría y nombre.
3. **Mensajes Personalizados**: Dependiendo de la categoría seleccionada, se muestra un mensaje personalizado para el usuario. Por ejemplo, si el usuario selecciona "Frutas y Verduras", se muestra el mensaje: "ERES UN CLIENTE QUE DESEA MANTENER SU SALUD EN BUEN ESTADO".
4. **Lista de Productos**: Los productos filtrados se muestran en una lista debajo del formulario.

## Cómo Usar la Aplicación

1. Clona este repositorio en tu máquina local.
   ```bash
   git clone https://github.com/tu_usuario/nombre_repositorio.git
