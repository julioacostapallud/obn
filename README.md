# 🛰️ OPERACIÓN NUEVA BASE

Aplicación web de búsqueda del tesoro familiar construida con React + Vite + TypeScript.

## 🚀 Inicio Rápido

### Instalación

```bash
npm install
```

### Desarrollo

Para correr la aplicación en modo desarrollo:

```bash
npm run start:develop
```

O alternativamente:

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

### Build para Producción

```bash
npm run build
```

Los archivos compilados se generarán en la carpeta `dist/`.

### Preview del Build

```bash
npm run preview
```

## 🔐 Configuración de Tokens

Los tokens de las rutas están definidos en `src/config/routes.ts`. Para cambiar los tokens, simplemente edita los valores en ese archivo:

```typescript
export const ROUTES = {
  access1: "/kT7mP2xQ9vA3nL8sR1",
  access2: "/B6zN4qW8hT2yK9pX7c",
  access3: "/mQ9sL2vT7xA4nP1kR8",
  access5: "/Z3pH8tN1qW6yK2xV9b",
  access6: "/rX7kM2pQ9nT4vL8sA1",
} as const;
```

**Importante:** Los tokens deben ser difíciles de adivinar (18-32 caracteres alfanuméricos mezclados).

## 📁 Estructura del Proyecto

```
ONB/
├── src/
│   ├── config/
│   │   └── routes.ts          # Configuración de tokens de rutas
│   ├── pages/
│   │   ├── Home.tsx           # Página de acceso restringido
│   │   ├── NotFound.tsx       # Página 404
│   │   ├── Access1.tsx        # Pista #1 (GAS)
│   │   ├── Access2.tsx        # Pista #2 (FREEZER)
│   │   ├── Access3.tsx        # Pista #3 (ESCRITORIO)
│   │   ├── Access5.tsx        # Pista #5 (AUTO TOYOTA)
│   │   ├── Access6.tsx        # Pista #6 (FINAL)
│   │   └── PageStyles.css     # Estilos compartidos
│   ├── App.tsx                # Componente principal con routing
│   ├── App.css                # Estilos globales
│   ├── main.tsx               # Punto de entrada
│   └── index.css              # Variables CSS
├── index.html
├── package.json
├── vite.config.ts
└── tsconfig.json
```

## 🌐 Despliegue en Producción

Esta es una Single Page Application (SPA). Para que funcione correctamente con rutas directas, asegúrate de configurar tu servidor web para que todas las rutas redirijan a `index.html`.

### Ejemplos de configuración:

**Nginx:**
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

**Apache (.htaccess):**
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

### Despliegue en Netlify

El proyecto incluye un archivo `netlify.toml` configurado para despliegue automático.

#### Opción 1: Despliegue automático desde GitHub

1. Conecta tu repositorio de GitHub a Netlify
2. Netlify detectará automáticamente la configuración en `netlify.toml`
3. Los ajustes serán:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Redirects**: Configurados automáticamente para SPA

#### Opción 2: Despliegue manual con Netlify CLI

```bash
# Instalar Netlify CLI globalmente
npm install -g netlify-cli

# Login en Netlify
netlify login

# Desplegar
netlify deploy --prod
```

#### Configuración en netlify.toml

El archivo `netlify.toml` ya está configurado con:
- Build command y publish directory
- Redirects para que todas las rutas funcionen correctamente (SPA)

**Vercel:**
Vercel también detecta automáticamente las SPAs y configura el fallback correctamente.

## 🎨 Características

- ✅ Sin navegación visible (sin navbar, menú, o links)
- ✅ Rutas tokenizadas difíciles de adivinar
- ✅ Diseño oscuro/tecnológico minimalista
- ✅ Página 404 para rutas no autorizadas
- ✅ Meta tag para prevenir indexado por buscadores
- ✅ Responsive design

## 📝 Notas

- La aplicación no muestra ninguna lista de rutas ni links de navegación.
- Cada pista solo es accesible mediante su token correspondiente.
- La página final (Acceso #6) incluye un botón que abre Google Maps con las coordenadas del tesoro.

