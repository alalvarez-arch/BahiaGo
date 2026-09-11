# BahiaGo

App PWA de gestión de turnos y equipo para hostelería de lujo.

## Publicar en GitHub Pages

1. Crea un repositorio en GitHub (por ejemplo `bahiago`).
2. Sube **todo el contenido** de esta carpeta a la raíz del repo (o a la rama `gh-pages`):
   - `index.html`
   - `manifest.webmanifest`
   - `sw.js`
   - `.nojekyll`
   - carpeta `icons/`
3. En el repo: **Settings → Pages → Build and deployment**
   - Source: **Deploy from a branch**
   - Branch: `main` (o `gh-pages`), folder: `/ (root)`
4. Espera 1–2 minutos. La URL será:
   - `https://TU_USUARIO.github.io/bahiago/`

### Si el repo se llama `TU_USUARIO.github.io`
Sube los archivos a la raíz y la app estará en `https://TU_USUARIO.github.io/`.

## Instalar en el móvil

### Android (Chrome)
1. Abre la URL de GitHub Pages en Chrome.
2. Menú ⋮ → **Instalar aplicación** / **Añadir a la pantalla de inicio**.
3. BahiaGo se abre como app a pantalla completa.

### iPhone / iPad (Safari)
1. Abre la URL en **Safari** (no Chrome).
2. Botón **Compartir** → **Añadir a pantalla de inicio**.
3. Confirma el nombre **BahiaGo**.

## Archivos incluidos

| Archivo | Uso |
|---------|-----|
| `index.html` | App completa |
| `manifest.webmanifest` | Manifest PWA (nombre, iconos, standalone) |
| `sw.js` | Service Worker (uso offline básico) |
| `icons/` | Iconos Android + Apple |
| `.nojekyll` | Evita que GitHub Pages ignore archivos |

## Notas

- Los datos (personal, horario, tareas) se guardan en **localStorage** del navegador del dispositivo.
- Usa **Guardar** / **Cargar** / **WhatsApp** para copiar el `.json` entre dispositivos.
- HTTPS es obligatorio para PWA; GitHub Pages ya lo proporciona.
