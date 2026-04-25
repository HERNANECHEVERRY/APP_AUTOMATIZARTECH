# AutomatizarTech - IA Business Website

Este proyecto es una aplicación web moderna para un negocio de Inteligencia Artificial, construida con React, Vite y Supabase.

## Stack Tecnológico

- **Frontend:** React + Vite
- **Estilos:** Vanilla CSS (Glassmorphism + Dark Mode)
- **Animaciones:** Framer Motion
- **Iconos:** Lucide React
- **Backend/Auth:** Supabase
- **Despliegue:** GitHub + Vercel

## Configuración

1. **Supabase:**
   - Crea un nuevo proyecto en [Supabase](https://supabase.com).
   - Ve al SQL Editor y ejecuta el contenido de `supabase_setup.sql`.
   - Copia las credenciales (URL y Anon Key).

2. **Variables de Entorno:**
   - Renombra `.env` y añade tus credenciales:
     ```env
     VITE_SUPABASE_URL=tu_url
     VITE_SUPABASE_ANON_KEY=tu_llave_anon
     ```

3. **Instalación:**
   ```bash
   npm install
   ```

4. **Desarrollo:**
   ```bash
   npm run dev
   ```

## Seguridad y Administración

- **RLS (Row Level Security):** Configurado en Supabase para proteger los datos de los usuarios y leads.
- **Roles:** El sistema incluye un rol de `admin` para la gestión de leads y perfiles.
- **Despliegue Seguro:** Configurado para Vercel con soporte para SPA.
