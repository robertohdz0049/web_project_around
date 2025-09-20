# Alrededor de los EE.UU.

Este es un proyecto desarrollado durante los Sprints 7 y 8 del bootcamp de desarrollo web en TripleTen.

Se trata de una página web interactiva, completamente responsiva, que permite a los usuarios editar su perfil, agregar nuevas tarjetas, dar me gusta, eliminar tarjetas y visualizar imágenes ampliadas en popups. El diseño sigue el prototipo proporcionado en Figma y está construido bajo la metodología BEM.

## Demo

GitHub Pages:  
https://robertohdz0049.github.io/web_project_around/

## Funcionalidades

### Perfil

- Visualización de avatar, nombre y descripción.
- Edición del perfil mediante popup.
- Cierre de popups por:
  - Botón de cerrar
  - Clic fuera del contenedor (overlay)
  - Tecla Escape (Esc)

### Tarjetas

- Render inicial de 6 tarjetas desde `initialCards.js`.
- Las tarjetas se crean a partir de un `<template>` en HTML.
- Formulario para agregar tarjetas:
  - Campo de título (mínimo 2 caracteres)
  - Campo de enlace de imagen (URL válida)
  - La nueva tarjeta se inserta al inicio del listado.
- Posibilidad de dar "me gusta" a una tarjeta.
- Posibilidad de eliminar una tarjeta.
- Visualización de la imagen en tamaño ampliado mediante popup.

## Validación de formularios

- Implementación modular en `validate.js`.
- Validaciones de campos requeridos, longitud mínima y formato de URL.
- Mensajes de error personalizados.
- Botón de guardar se activa solo si los datos son válidos.

## Buenas prácticas implementadas

- Uso de la metodología BEM para la estructura de clases CSS.
- Código JavaScript organizado por responsabilidades.
- Inserción segura de contenido en el DOM:
  - Se evita el uso de `innerHTML` y `insertAdjacentHTML` para entradas del usuario.
  - Se utilizan `textContent`, `src`, `alt` y otras propiedades seguras.
- Recursos locales organizados:
  - Imágenes en `/images`
  - Hoja de estilos principal en `/pages/index.css`
  - Scripts en `/scripts`

## Diseño responsivo

- Resoluciones manejadas:
  - 1280px: 3 tarjetas por fila
  - 768px a 1024px: 2 tarjetas por fila
  - 320px: 1 tarjeta por fila
- Sin scroll horizontal.
- Altura fija de las imágenes en 282px usando `object-fit: cover`.

## Tecnologías utilizadas

- HTML5
- CSS3 (incluyendo media queries y Flexbox)
- JavaScript (ES6)
- Git y GitHub
- Figma (como referencia de diseño)

## Autor

Roberto Hernández  
Proyecto realizado como parte del programa de formación en desarrollo web de TripleTen.
