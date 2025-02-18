# Proyecto Frontend en Ionic con Angular

Este proyecto es un frontend desarrollado en **Ionic con Angular**, el cual consume una API desarrollada en Golang a través del puerto **8080**.

## 📂 Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

### `app/`
Contiene la estructura principal de la aplicación.

### `components/`
Este directorio almacena los componentes reutilizables de la aplicación, tales como:
- **custom-select/** → Selectores personalizados.
- **footer/** → Pie de página.
- **maps/** → Componente para mostrar mapas.
- **menu-bar/** → Barra de navegación.

### `page/`
Aquí se encuentran las páginas principales de la aplicación. Estas páginas implementan la lógica de negocio y hacen uso de los componentes definidos en `components/`, además de realizar llamadas a la API en Golang.

Páginas disponibles:
- **aboutus/** → Página "Sobre Nosotros".
- **catalog-location/** → Página del catálogo de ubicaciones.
- **catalog-tree/** → Página del catálogo de árboles.
- **home/** → Página principal.
- **maps/** → Página con integración de mapas.
- **tree/** → Página para la gestión de árboles.

### `services/`
Este directorio contiene los servicios utilizados para interactuar con la API.
- `request.service.ts` → Servicio encargado de realizar las peticiones HTTP.

### `environments/`
Directorio que almacena variables de entorno importantes. Una variable clave es el **token de Mapbox**, necesario para ejecutar los mapas en la aplicación.

Para utilizar Mapbox, se debe generar un **token de acceso** creando una cuenta en [Mapbox Studio](https://www.mapbox.com/mapbox-studio) y reemplazar el valor en `environment.ts`:

```ts
mapbox: {
  accessToken: '' // Reemplazar con tu token de Mapbox
}
```

## 🚀 Requisitos para ejecutar el proyecto

Antes de ejecutar la aplicación, asegúrate de tener instalado:
- **Node.js** versión **20-22**
- **npm** (incluido con Node.js)

## 🔧 Instalación y Ejecución

1. Clonar el repositorio:
   ```sh
   git clone <URL_DEL_REPOSITORIO>
   cd <NOMBRE_DEL_PROYECTO>
   ```

2. Instalar dependencias:
   ```sh
   npm install
   ```

3. Ejecutar el proyecto:
   ```sh
   npm run start
   ```

Esto iniciará el servidor de desarrollo y la aplicación estará disponible en el navegador.

---
**📌 Nota:**
Si hay problemas con el token de Mapbox, verifica que se haya reemplazado correctamente en `environment.ts` y que la cuenta de Mapbox tenga permisos adecuados.

---
### 📌 Autor
- **Desarrollador:** Luis Jara

---
¡Disfruta desarrollando! 🚀
