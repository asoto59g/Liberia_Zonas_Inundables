# QGIS2Web Export - Liberia Zonas Inundables

Este repositorio contiene la versión exportada de un proyecto de QGIS a web usando `qgis2web`.

## Contenido

- `index.html` - Página principal que carga el mapa y los controles de OpenLayers.
- `layers/` - Capas geojson exportadas y definiciones de las capas del mapa.
- `styles/` - Estilos y leyendas para cada capa del mapa.
- `resources/` - Bibliotecas y recursos necesarios para el funcionamiento del visor, como OpenLayers, estilos CSS y scripts auxiliares.
- `images/` - Imágenes usadas por el proyecto.
- `preview.jpg` - Imagen de vista previa recomendada para compartir en redes sociales.
- `webfonts/` - Fuentes web usadas por el proyecto.

## Descripción

El visor muestra capas geoespaciales generadas desde QGIS, incluyendo subcuencas, ríos y zonas de problema. El archivo `index.html` controla la carga de capas y el estilo general.

Se han aplicado mejoras específicas:

- Título principal del mapa: `Liberia Zonas Inundables`.
- Transparencia del 40% en la capa `Sub Cuencas C Liberia`.
- Metadatos de redes sociales para usar `preview.jpg` como imagen de vista previa.

## Uso

Abrir `index.html` en un navegador web compatible para visualizar el mapa.

## Notas

Asegúrate de mantener la estructura de carpetas intacta para que todas las referencias a scripts, estilos y datos funcionen correctamente.
