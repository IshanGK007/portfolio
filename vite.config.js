import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import ghPages from 'vite-plugin-gh-pages'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
})

// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import VitePluginGhPages from 'vite-plugin-gh-pages';

// export default defineConfig({
//   base: '/portfolio/', // This matches your repo name
//   plugins: [react(), VitePluginGhPages()],
// });
