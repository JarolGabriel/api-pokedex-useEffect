# Pokedex App

Esta es una aplicación web de Pokedex desarrollada con React y Vite. La
aplicación consume la API de Pokémon para mostrar una lista de Pokémon, con un
diseño responsivo que se adapta a diferentes tamaños de pantalla.

## Características

- **React con Vite**: La aplicación está construida utilizando React con Vite,
  lo que proporciona un entorno de desarrollo rápido y eficiente.
- **Consumo de API**: La aplicación consume la API de Pokémon para obtener y
  renderizar una lista de Pokémon.
- **Responsivo**: El diseño de la aplicación es completamente responsivo,
  adaptándose a diferentes tamaños de pantalla, desde teléfonos móviles hasta
  pantallas de escritorio.
- **Diseño de Grid**: Los Pokémon se muestran en una estructura de grid que se
  ajusta según el tamaño de la pantalla:
  - 2 columnas en dispositivos móviles.
  - 3 columnas en laptops.
  - 5 columnas en pantallas de escritorio.
- **Estilización con Tailwind CSS**: Se utiliza Tailwind CSS para la
  estilización de la aplicación, garantizando un diseño moderno y limpio.

## Tecnologías Utilizadas

- **React**: Biblioteca de JavaScript para construir interfaces de usuario.
- **Vite**: Herramienta de desarrollo rápida y optimizada para aplicaciones web
  modernas.
- **useEffect**: Hook de React para manejar efectos secundarios, como la llamada
  a la API.
- **API de Pokémon**: Fuente de datos para obtener información de los Pokémon.
- **Tailwind CSS**: Framework de CSS para el diseño de la interfaz.

## Instalación y Uso

1. **Clonar el repositorio:**

   ```bash
   git clone https://git@github.com:JarolGabriel/api-pokedex-useEffect.git
   cd pokedex-app
   ```

2. **Instalar las dependencias:**

   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo:**

   ```bash
   npm run dev
   ```

4. **Acceder a la aplicación:**

   Abre tu navegador y ve a `[http://localhost:3000](https://api-pokedex-use-effect.vercel.app/)` para ver la aplicación en
   acción.

## API

La aplicación consume la API pública de Pokémon para obtener los datos de los
Pokémon. Puedes consultar la documentación de la API
[aquí](https://pokeapi.co/docs/v2).

## Contribuciones

¡Las contribuciones son bienvenidas! Si deseas mejorar este proyecto, por favor
abre un issue o crea un pull request.

## Licencia

Este proyecto está licenciado bajo la [MIT License](LICENSE).

---
