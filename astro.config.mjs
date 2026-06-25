// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel'; // 1. IMPORTAMOS EL ADAPTADOR QUE INSTALASTE

// https://astro.build/config
export default defineConfig({
  // 2. LE DECIMOS A ASTRO QUE TRABAJE EN MODO SERVIDOR PARA LEER SUPABASE EN VIVO
  output: 'server',
  
  // 3. LE PASAMOS EL ADAPTADOR OFICIAL PARA VERCEL
  adapter: vercel(),
});