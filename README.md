# ArtesanMarket - Marketplace de Productos Artesanales

Un marketplace moderno y responsivo para productos artesanales, desarrollado con HTML, CSS y JavaScript vanilla.

## 🎨 Características

### Diseño y UI/UX
- **Diseño Responsivo**: Adaptable a dispositivos móviles, tablets y desktop
- **Interfaz Moderna**: Diseño limpio con gradientes y animaciones suaves
- **Paleta de Colores**: Tonos tierra que reflejan la naturaleza artesanal
- **Tipografía**: Google Fonts (Poppins) para una lectura óptima

### Funcionalidades
- **Navegación Suave**: Scroll suave entre secciones
- **Carrito de Compras**: Funcionalidad básica de agregar productos
- **Búsqueda de Productos**: Sistema de búsqueda simple
- **Filtros por Categoría**: Filtrado de productos por categorías
- **Notificaciones**: Sistema de notificaciones para acciones del usuario
- **Animaciones**: Efectos de hover y animaciones de entrada

### Secciones Principales
1. **Header**: Navegación fija con logo, menú y iconos de acción
2. **Hero**: Sección principal con llamada a la acción
3. **Categorías**: Grid de categorías populares (Joyería, Textiles, Decoración, Arte)
4. **Productos**: Showcase de productos destacados con ratings y precios
5. **Nosotros**: Información sobre la misión y valores
6. **Footer**: Enlaces, información de contacto y redes sociales

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica y accesible
- **CSS3**: 
  - Flexbox y CSS Grid para layouts
  - Animaciones y transiciones
  - Media queries para responsividad
  - Variables CSS para consistencia
- **JavaScript ES6+**:
  - Manipulación del DOM
  - Event listeners
  - Intersection Observer API
  - Funciones de utilidad

## 📁 Estructura del Proyecto

```
DSW4-Barzola/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # Funcionalidad JavaScript
└── README.md           # Documentación
```

## 🚀 Cómo Usar

1. **Clonar o descargar** los archivos del proyecto
2. **Abrir** `index.html` en un navegador web
3. **Navegar** por las diferentes secciones usando el menú
4. **Interactuar** con los productos y funcionalidades

## 📱 Responsividad

El sitio está optimizado para:
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

## 🎯 Funcionalidades JavaScript

### Navegación
- Menú hamburguesa para móviles
- Scroll suave entre secciones
- Header con efecto de transparencia al hacer scroll

### Productos
- Agregar al carrito con animación
- Contador de productos en el carrito
- Sistema de búsqueda por nombre y artesano
- Filtrado por categorías

### Animaciones
- Fade-in al hacer scroll (Intersection Observer)
- Efectos hover en tarjetas y botones
- Notificaciones animadas

## 🎨 Paleta de Colores

- **Primario**: #8B4513 (Marrón artesanal)
- **Secundario**: #A0522D (Marrón claro)
- **Fondo**: #f8f9fa (Gris claro)
- **Texto**: #333 (Gris oscuro)
- **Acentos**: #28a745 (Verde éxito), #ffc107 (Amarillo estrellas)

## 📋 Productos de Ejemplo

El marketplace incluye 6 productos de muestra:
1. **Collar de Plata Artesanal** - $89.99
2. **Jarrón de Cerámica** - $45.50
3. **Bufanda de Alpaca** - $67.00
4. **Pintura al Óleo** - $150.00
5. **Silla de Madera Tallada** - $280.00
6. **Bolsa de Fibra Natural** - $32.99

## 🔧 Personalización

### Agregar Nuevos Productos
1. Duplicar una tarjeta `.product-card` en el HTML
2. Actualizar la información del producto
3. Ajustar el ícono en `.image-placeholder`

### Modificar Colores
1. Cambiar las variables CSS en `styles.css`
2. Actualizar los colores en JavaScript para mantener consistencia

### Agregar Nuevas Categorías
1. Añadir una nueva `.category-card` en la sección de categorías
2. Actualizar la función `filterByCategory()` en JavaScript

## 🌟 Características Avanzadas

- **SEO Friendly**: Estructura semántica HTML5
- **Accesibilidad**: Navegación por teclado y lectores de pantalla
- **Performance**: CSS y JS optimizados
- **Cross-browser**: Compatible con navegadores modernos

## 📞 Información de Contacto

- **Email**: info@artesanmarket.com
- **Teléfono**: +1 (555) 123-4567
- **Dirección**: 123 Artisan Street, Ciudad

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

---

**Desarrollado John Christopher Barzola Villamar para la Autonoma 4 del TES para la materia de Diseño de Sitios Web impartida por el Ing. Angel Benalcazar.**
