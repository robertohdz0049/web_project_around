Alrededor de los EE.UU.

Proyecto del Sprint 7–8 del bootcamp de TripleTen.

Una página interactiva en la que los usuarios pueden editar su perfil, añadir nuevas tarjetas, eliminar y dar “me gusta” a las fotos, y ver la imagen ampliada en un popup.
El diseño sigue el prototipo de Figma de TripleTen y la metodología BEM.

Demo

GitHub Pages:
https://robertohdz0049.github.io/web_project_around/

Funcionalidades

Perfil

Visualización de avatar, nombre y descripción.

Edición de perfil mediante popup (guardar y cerrar).

Cierre de popups por overlay y por tecla Esc.

Tarjetas

Render inicial de 6 tarjetas desde initialCards (JS).

Cada tarjeta se genera desde un <template id="card-template">.

Agregar tarjeta con formulario (título + URL de imagen). La nueva tarjeta se inserta al inicio.

Me gusta (toggle de clase activa).

Eliminar tarjeta (icono superior derecho).

Ver imagen en popup con caption.

Buenas prácticas

BEM para la organización de CSS.

Un solo archivo JS (scripts/index.js) como pide el brief.

Seguridad DOM: datos del usuario insertados con textContent/propiedades (src, alt) y sin innerHTML/insertAdjacentHTML en entradas de usuario.

Assets locales en /images. normalize.css + fonts importados primero.

📱 Responsive

1280px → 3 tarjetas (contenido 880px centrado + márgenes laterales).

768–1024px → 2 tarjetas.

320px → 1 tarjeta.

Sin scroll horizontal.

Altura de imagen por tarjeta: 282px con object-fit: cover (según Figma).
