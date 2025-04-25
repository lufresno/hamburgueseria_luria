# Guía de Estilos
## Iuría Japanese Fusion Burgers

---

## 🎨 1. Identidad Visual

### Colores principales y secundarios

**Colores primarios:**
- **Rojo tostado/naranja** (#D05A31) - Color del círculo en el logo
- **Blanco hueso** (#F8F3E6) - Fondo principal
- **Negro suave** (#333333) - Textos principales

**Colores secundarios:**
- **Verde suave** (#8CAF88) - Inspirado en la vegetación japonesa
- **Marrón cálido** (#9B6A46) - Para elementos estructurales (puentes, pagodas)

**Paleta de acentos:**
- **Amarillo pálido** (#F9DC5C) - Para alertas o destacados
- **Gris claro** (#E5E5E5) - Para fondos secundarios

### Uso del color

- El **rojo tostado/naranja** se usa para elementos principales de acción y destacados
- **Blanco hueso** como fondo principal para mantener la estética minimalista
- **Verde suave** para elementos relacionados con ingredientes naturales y etiquetas
- **Marrón cálido** para elementos decorativos de inspiración japonesa
- **Negro suave** para textos principales, asegurando buena legibilidad

---

## ✍️ 2. Tipografía

### Fuentes tipográficas

- **Títulos y elementos destacados:** "Shippori Mincho B1" (Google Fonts)
- **Cuerpo de texto:** "Montserrat" (Google Fonts)

### Jerarquías

- **H1:** Shippori Mincho B1, 42px, 700 weight, tracking amplio
- **H2:** Shippori Mincho B1, 32px, 600 weight
- **H3:** Shippori Mincho B1, 24px, 600 weight
- **Párrafos:** Montserrat, 16px, 400 weight
- **Botones:** Montserrat, 16px, 500 weight, mayúsculas

### Tamaños, pesos, interlineado y espaciado

- **Interlineado general:** 1.5
- **Espaciado entre párrafos:** 1.2rem
- **Peso de texto normal:** 400
- **Peso de texto destacado:** 600-700
- **Tracking en títulos:** 1px
- **Tracking en botones:** 0.8px

---

## 🧱 3. Componentes UI

### Botones

**Estilos estándar:**
- Fondo: Rojo tostado (#D05A31)
- Texto: Blanco
- Padding: 12px 24px
- Bordes redondeados: 30px
- Tipografía: Montserrat, 16px, mayúsculas
- Transición suave al hacer hover
- Sombra sutil: 0 2px 10px rgba(0,0,0,0.1)

**Variantes:**
- **Versión outline:** Fondo transparente con borde en color primario
- **Versión pequeña:** Padding 8px 16px, font-size 14px
- **Versión grande:** Padding 14px 28px, font-size 18px

### Formularios

**Inputs:**
- Ancho: 100% del contenedor
- Padding: 12px 16px
- Borde: 1px sólido en gris claro (#E5E5E5)
- Bordes redondeados: 8px
- Al enfocar: Borde en color primario con sombra sutil

**Labels:**
- Fuente: Shippori Mincho B1
- Peso: 500
- Tamaño: 18px
- Margen inferior: 8px

**Validación:**
- Estados de error con borde y texto en rojo suave
- Mensajes de éxito en verde suave

### Cards o Tarjetas

**Estilo básico:**
- Fondo: Blanco
- Bordes redondeados: 20px
- Sombra: 0 5px 15px rgba(0, 0, 0, 0.1)
- Transición al hover con elevación sutil
- Padding interno: 20px

**Tarjetas circulares:**
- Imágenes circulares para ingredientes
- Sombras suaves para dar profundidad
- Efecto hover con escala 1.15

### Otros elementos

**Etiquetas:**
- Fondo: Verde suave (#8CAF88)
- Texto: Blanco
- Tamaño de fuente: 12px
- Padding: 5px 10px
- Bordes redondeados: 10px
- Peso de fuente: 500

**Precios:**
- Fuente: Shippori Mincho B1
- Peso: 600
- Tamaño: 18px
- Color: Rojo tostado (#D05A31)

---

## 📐 4. Layout y Espaciado

### Sistema de rejilla

- **Sistema principal:** CSS Grid para layouts complejos
- **Sistema secundario:** Flexbox para alineaciones simples
- **Gaps estándar:** 20px entre elementos de grid

### Margen y padding estándar

- **Padding interno de contenedores:** 20px
- **Margen entre secciones:** 50px
- **Padding de botones:** 12px 24px (normal), 8px 16px (small), 14px 28px (large)
- **Separación entre componentes relacionados:** 15px

### Ancho máximo de contenidos

- **Contenedor principal:** 1200px
- **Contenido de texto:** 700px para mejor legibilidad
- **Contenedor de triángulo invertido:** 900px

### Breakpoints (para diseño responsive)

- **Móvil:** hasta 576px
- **Tablet:** 577px - 991px
- **Desktop:** 992px en adelante

---

## 📱 5. Diseño Responsive

### Reglas generales

- Diseño **Mobile First** con adaptaciones para pantallas más grandes
- Mantener consistencia visual en todos los tamaños
- Simplificar navegación en móviles

### Comportamiento específico

**Menú de navegación:**
- Desktop: menú horizontal completo
- Móvil: menú hamburguesa desplegable

**Imágenes en triángulo invertido:**
- Desktop: mantener disposición en triángulo
- Tablet/Móvil: reorganizar en formato vertical para mejor visualización

**Tarjetas de producto:**
- Desktop: grid de 4 columnas
- Tablet: grid de 2 columnas  
- Móvil: 1 columna

### Ajustes de tamaño por dispositivo

**Tablet:**
- Contenedores a ancho completo con padding lateral
- Tamaño de título H1: 32px
- Tamaño de título H2: 28px

**Móvil:**
- Grid de menú a una columna
- Tamaño de título H1: 28px
- Tamaño de título H2: 24px
- Botones a ancho completo

---

## ♿ 6. Accesibilidad (a11y)

### Contraste de colores

- Textos negros (#333) sobre fondo claro (relación mínima 4.5:1)
- Botones con suficiente contraste en estados normal y hover
- Textos claros sobre fondos oscuros (mínimo 4.5:1)

### Estructura de contenido

- Estructura jerárquica de encabezados (h1 → h2 → h3...)
- Enlaces con texto descriptivo (evitar "clic aquí")
- Uso de elementos semánticos (header, nav, main, section, footer)

### Formularios accesibles

- Labels correctamente asociados a inputs
- Mensajes de error claros y descriptivos
- Todos los elementos interactivos accesibles por teclado

### Mejoras adicionales

- Atributos ARIA cuando sea necesario
- Textos alternativos para imágenes
- Tamaño mínimo de fuente: 16px para cuerpo de texto

---

## 🧩 7. Iconografía y Elementos Visuales

### Estilo de iconos

- Iconos minimalistas de línea simple
- Consistencia en grosor de línea (2px)
- Redondeados en las esquinas para mantener suavidad

### Tamaños y márgenes

- **Iconos pequeños:** 16x16px
- **Iconos medianos:** 24x24px
- **Iconos grandes:** 32x32px
- **Margen alrededor de iconos:** 8px mínimo

### Ilustraciones y estilo de imágenes

- Fotografías de productos con fondo neutro
- Ilustraciones de estilo acuarela para elementos decorativos
- Imágenes circulares para ingredientes y elementos destacados
- Colores cálidos y naturales en las fotografías

---

## 🧾 8. Ejemplos visuales

### Botones

**Botón estándar:**
Rectangular con bordes redondeados, color de fondo rojo tostado, texto blanco en Montserrat con letras mayúsculas.

**Botón outline:**
Igual forma que el estándar pero con fondo transparente, borde rojo tostado y texto en rojo tostado.

**Botón pequeño:**
Versión reducida del botón estándar para espacios limitados.

### Tarjetas de producto

**Tarjeta básica:**
Contenedor blanco con bordes redondeados, imagen en la parte superior, título en Shippori Mincho B1, descripción en Montserrat, precio destacado y botón de acción.

**Tarjeta con etiqueta:**
Similar a la básica pero con una etiqueta verde en la esquina superior para destacar características (Bestseller, Vegetariano, etc.).

### Disposición en triángulo

Estructura visual donde las imágenes circulares se organizan en forma de triángulo invertido, con la imagen más grande e importante en el centro superior, y el resto distribuyéndose por debajo en tamaños progresivamente menores.

### Tipografía

**Títulos principales:**
Shippori Mincho B1 Bold, transmitiendo elegancia y reminiscencia japonesa.

**Subtítulos:**
Shippori Mincho B1 Medium, manteniendo la estética pero con menor protagonismo.

**Cuerpo de texto:**
Montserrat Regular, proporcionando claridad y legibilidad.

**Elementos destacados:**
Montserrat SemiBold para enfatizar información importante.

---

## 🛠️ 9. Buenas prácticas y convenciones

### Nomenclatura de elementos

- Nombres descriptivos y específicos
- Separación de palabras con guiones medios
- Evitar abreviaciones confusas

### Estructura de contenido

**Orden recomendado:**
1. Elementos de posicionamiento (posición, alineación)
2. Elementos de tamaño (ancho, alto, márgenes)
3. Tipografía (fuentes, tamaños, estilos)
4. Elementos visuales (colores, bordes, sombras)
5. Efectos (transiciones, animaciones)

### Mantenimiento

- Revisar periódicamente la coherencia visual
- Documentar actualizaciones a la guía
- Verificar que todos los nuevos elementos respeten las pautas

---

## 📋 Resumen de aplicación

La estética de Iuría Japanese Fusion Burgers se caracteriza por:

- **Minimalismo japonés** con toques de acuarela
- **Formas circulares** que evocan tanto la comida como elementos japoneses
- **Paleta cálida** con el rojo-naranja como protagonista
- **Tipografía elegante** con Shippori Mincho B1 para títulos
- **Espacios limpios** que respetan el concepto "ma" japonés
- **Transiciones suaves** en interacciones
- **Fotografía de alta calidad** para resaltar los productos

Esta guía de estilos debe aplicarse de manera consistente en todos los materiales digitales e impresos para asegurar una identidad visual coherente.