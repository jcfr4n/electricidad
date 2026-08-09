# Manual del Electricista Aprendiz — FCT

Sitio web estático de consulta para aprendices de electricidad en Formación en Centros de Trabajo (FCT). Contiene 15 capítulos y un anexo con glosario, siglas, símbolos y listas de verificación.

## Contenido

| # | Capítulo |
|---|----------|
| 01 | Introducción: qué espera el oficial de un aprendiz |
| 02 | Seguridad eléctrica: las cinco reglas de oro, EPI, riesgos |
| 03 | El REBT explicado para trabajar (ITC-BT-05 a ITC-BT-44) |
| 04 | Circuitos de viviendas C1–C13: secciones, PIAs, diferenciales |
| 05 | Conductores: sección, colores normalizados, caída de tensión |
| 06 | Canalizaciones: tubos, bandejas, rozas, factores de corrección |
| 07 | Cuadros eléctricos: IGA, diferencial, PIA, peines, barras |
| 08 | Protecciones: fusibles, magnetotérmicos, diferenciales, diagnóstico |
| 09 | Puesta a tierra: sistema TT, electrodos, medición, errores comunes |
| 10 | Interpretación de planos: planta, unifilar, multifilar, leyenda |
| 11 | Herramientas: multímetro, pinza, megger, detectores, CAT |
| 12 | Comprobaciones antes de energizar: continuidad, aislamiento, polaridad |
| 13 | Averías típicas: cortocircuito, fuga, neutro roto, tierra defectuosa |
| 14 | Tablas rápidas: secciones, potencias, fórmulas, símbolos |
| 15 | Tablas rápidas (continuación) |
| — | Anexos: glosario A–Z, siglas, simbología, checklists |

## Estructura del proyecto

```
.
├── index.html       # Página principal (SPA)
├── css/
│   └── style.css    # Hoja de estilos (tema profesional)
├── js/
│   └── app.js       # Lógica: parser Markdown, navegación, búsqueda
└── docs/
    ├── chapter_01.md
    ├── chapter_02.md
    ├── ...
    ├── chapter_15.md
    └── anexos.md
```

## Cómo usar

Clona el repositorio y sirve los archivos con cualquier servidor HTTP:

```bash
git clone <repo-url>
cd <repo>
npx serve .          # o: python3 -m http.server 8080
```

Abre `http://localhost:3000` (o el puerto que use tu servidor).

**Importante:** el sitio carga los capítulos mediante `fetch()`, por lo que necesita servirse desde un servidor HTTP. No funciona abriendo `index.html` directamente desde el sistema de archivos.

## Funcionalidades

- Navegación lateral con los 15 capítulos y anexos
- Búsqueda en vivo por título de capítulo
- Parser Markdown nativo (sin dependencias externas): tablas, código, listas anidadas, diagramas, blockquotes
- Carga dinámica de contenido vía `fetch()`
- Routing por hash (`#chapter_05.md`) — compatible con botón atrás del navegador
- Diseño responsive: menú hamburguesa en móvil
- Estilos de impresión optimizados para consulta en papel
- Botón «volver arriba»

## Tecnologías

- HTML5 semántico
- CSS3 (custom properties, flexbox, responsive, print)
- JavaScript vanilla (ES6+, sin frameworks ni dependencias)

## Licencia

*Por definir.*
