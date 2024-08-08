# Aplicación de Captura de Pantalla

Esta aplicación consta de dos partes principales: el frontend y el backend.

# Backend
El backend de la aplicación está construido con Express y Puppeteer. Recibe las solicitudes del frontend, toma una captura de pantalla de la página web especificada en la URL y la devuelve en el formato solicitado (PNG o PDF). El backend expone un endpoint de API que el frontend utiliza para solicitar las capturas de pantalla.

## Descripción

El backend está construido con Express y Puppeteer. Proporciona una API que permite a los usuarios tomar capturas de pantalla de páginas web en formatos PNG o PDF.

## Requisitos

- Node.js v14 o superior
- npm v6 o superior

## Instalación y Ejecución

1. Navega al directorio `backend`:
   \`\`\`bash
   cd screenshot-app/backend
   \`\`\`
2. Instala las dependencias:
   \`\`\`bash
   npm install
   \`\`\`
3. Inicia el servidor:
   \`\`\`bash
   npm start
   \`\`\`
El servidor estará disponible en http://localhost:3001.

## Endpoints de la API

POST /api/screenshot
Descripción: Captura una captura de pantalla de una URL dada en el formato especificado.
Cuerpo de la Solicitud:
\`\`\`json
{
  "url": "https://example.com",
  "format": "png"
}
\`\`\`
Respuesta Exitosa:
\`\`\`json
{
  "success": true,
  "message": "Screenshot captured successfully"
}
\`\`\`
Respuesta de Error:
\`\`\`json
{
  "success": false,
  "message": "Invalid URL"
}
\`\`\`

## Pruebas

Para ejecutar las pruebas unitarias:

1. Navega al directorio backend:
   \`\`\`bash
   cd screenshot-app/backend
   \`\`\`
2. Ejecuta las pruebas:
   \`\`\`bash
   npm test
   \`\`\`

## Ejemplo de curl para Probar el Backend

Para probar el endpoint del backend, usa el siguiente comando curl:

\`\`\`bash
curl -X POST http://localhost:3001/api/screenshot \
     -H "Content-Type: application/json" \
     -d '{
           "url": "https://example.com",
           "format": "png"
         }'
\`\`\`

# Frontend
El frontend de la aplicación está desarrollado con Electron. Proporciona una interfaz de usuario de escritorio que permite a los usuarios ingresar una URL de una página web y seleccionar un formato de captura (PNG o PDF). Cuando el usuario hace clic en el botón "Tomar captura de pantalla", la solicitud se envía al backend para procesarla.


## Descripción

El frontend está desarrollado con Electron y proporciona una interfaz de usuario para capturar pantallas utilizando la API del backend.

## Requisitos

- Node.js v14 o superior
- npm v6 o superior
- El backend debe estar ejecutándose en http://localhost:3001

## Instalación y Ejecución

1. Navega al directorio frontend:
   \`\`\`bash
   cd screenshot-app/frontend
   \`\`\`
2. Instala las dependencias:
   \`\`\`bash
   npm install
   \`\`\`
3. Inicia la aplicación de Electron:
   \`\`\`bash
   npm start
   \`\`\`

## Estructura del Proyecto

- `main.js`: Archivo principal de Electron que configura la ventana de la aplicación y maneja la comunicación IPC.
- `src/index.html`: Archivo HTML que define la estructura de la interfaz de usuario.
- `src/renderer.js`: Script que maneja la interacción del usuario con la interfaz.
- `src/styles.css`: Estilos CSS para la interfaz de usuario.
- `src/preload.js`: Configuración de seguridad de Electron para exponer APIs seguras al renderer.

## Uso de la Aplicación

1. Abre la aplicación de Electron.
2. Ingresa la URL de la página web que deseas capturar.
3. Selecciona el formato de captura (PNG o PDF).
4. Haz clic en "Take Screenshot".
5. Verás un mensaje de éxito o error después de que se complete la captura de pantalla.