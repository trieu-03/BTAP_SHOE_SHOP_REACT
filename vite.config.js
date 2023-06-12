import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    port:8080,
    https:{
      key:'./myapp-privateKey.key',
      cert:'./myapp.crt'
    }
  },
  resolve:{
    alias:{
      src:'/src',
      public:'/public'
    }
  }
})
