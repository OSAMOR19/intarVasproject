import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import vercel from "vite-plugin-vercel";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    proxy: {
      '/api/backend': {
        target: 'https://intarvasbackend.onrender.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/backend/, ''),
        secure: false,
      },
    },
  },
  plugins: [
    react(), 
    mode === "development" && componentTagger(),
    vercel()
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
