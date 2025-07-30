import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    server: {
        host: true,              // allows external devices (same as '0.0.0.0')
        strictPort: true,        // prevents fallback to a random port
        port: 5173,              // or whatever your port is
        allowedHosts: 'all',     // <-- this allows ALL hosts, including ngrok
    },
    plugins: [
      react(),
      tailwindcss(),
  ],
})
