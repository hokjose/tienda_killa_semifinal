import { createClient } from '@supabase/supabase-js';

// Astro lee las variables de entorno usando import.meta.env
const supabaseUrl = import.meta.env.SUPABASE_URL || import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.SUPABASE_ANON_KEY || import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Faltan las credenciales de Supabase en el archivo .env");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
