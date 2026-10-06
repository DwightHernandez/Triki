# 🎮 Juego de Triqui (Tic-Tac-Toe) - Expo Go & React Native

¡Bienvenido al repositorio del juego **Triqui**! Este proyecto es una aplicación móvil nativa desarrollada con **React Native** utilizando el ecosistema de **Expo Go** y **Expo Router** para el manejo de rutas y pantallas.

El proyecto cuenta con una arquitectura híbrida de archivos configurados en **TypeScript** (`.tsx`) y componentes construidos sobre **JavaScript** (`.jsx`), adaptados minuciosamente para ofrecer una experiencia fluida y reactiva en dispositivos móviles.

---

## 🚀 Características Principales

- **Modo 2 Jugadores (PVP):** Desafía a un amigo de forma local compartiendo la misma pantalla del celular.
- **Modo vs Computadora (IA):** Enfréntate a una inteligencia artificial con toma de decisiones automatizada y tiempos de respuesta realistas mediante retrasos asíncronos (`setTimeout`).
- **Historial Dinámico de Jugadas:** Sistema integrado que registra cada movimiento del tablero, permitiendo al usuario navegar y regresar en el tiempo hacia jugadas pasadas.
- **Línea Ganadora Animada:** Interfaz de usuario inteligente que resalta visualmente en color verde las casillas victoriosas del jugador.
- **Adaptabilidad Nativa:** Migración completa de interfaces que originalmente dependían de etiquetas Web (HTML/CSS) hacia elementos nativos optimizados para pantallas táctiles.

---

## 📁 Estructura del Proyecto

A continuación, se detalla la organización de los archivos clave dentro de la arquitectura del proyecto:

```text
Triki/
├── assets/                     # Recursos estáticos de la aplicación (Imágenes, íconos y fuentes)
│   └── images/
│       └── icon.png            # Logotipo utilizado en el pie de página
├── src/                        # Código fuente principal de la aplicación
│   ├── app/                    # Sistema de enrutamiento nativo (Expo Router)
│   │   ├── _layout.tsx         # Configuración del esquema global y layouts
│   │   └── index.tsx           # Pantalla de inicio de la app (Inicia el componente Game)
│   └── components/             # Componentes modulares de la interfaz
│       ├── Board.jsx           # Tablero de 3x3 y lógica unificada de celdas (Square)
│       ├── Footer.jsx          # Pie de página con créditos del autor e imágenes locales
│       └── Game.jsx            # Controlador principal: lógica, IA y manejo de historial de juego
├── package.json                # Configuración de dependencias de Expo y React Native
└── README.md                   # Documentación general del repositorio
```

---

## 🛠️ Tecnologías y Componentes Utilizados

Para garantizar que el juego funcione de manera nativa en teléfonos inteligentes sin requerir un navegador web, se sustituyeron elementos HTML tradicionales por API de React Native:
- **`View`:** Utilizado como contenedor flexible en lugar de los elementos `<div>`.
- **`Text`:** Reemplazo estricto para renderizar cadenas de texto, sustituyendo las etiquetas `<h1>`, `<span>` y `<p>`.
- **`TouchableOpacity`:** Reemplazo nativo de `<button>` para controlar la interacción táctil de las celdas, modos de juego y el botón de reinicio.
- **`ScrollView`:** Incorporado de forma horizontal y vertical para dar soporte de desplazamiento a los botones del historial y el cuerpo general de la aplicación.
- **`StyleSheet`:** Módulo de estilos en código JavaScript para el manejo de espaciados, colores temáticos, bordes y flexbox adaptativo en celulares.

---

## 📥 Instalación y Ejecución

Sigue estos pasos para clonar el repositorio e iniciar el juego en tu entorno de desarrollo local:

### 1. Clonar el repositorio
```bash
git clone https://github.com
cd Triki/Triki
```

### 2. Instalar las dependencias del proyecto
```bash
npm install
```

### 3. Iniciar el servidor de desarrollo borrando la caché de Metro
```bash
npx expo start --clear
```

### 4. Ejecutar en tu dispositivo móvil
1. Descarga la aplicación oficial **Expo Go** en tu celular desde la App Store (iOS) o Google Play Store (Android).
2. Asegúrate de que tu computadora y tu celular estén conectados a la **misma red Wi-Fi**.
3. Escanea el código QR que se despliega en la terminal con la cámara de tu celular (o desde la app de Expo en Android).

---

## 👤 Autor
Realizado con fines educativos por **Dwight Hernández** y adaptado con éxito para entornos móviles nativos. 
