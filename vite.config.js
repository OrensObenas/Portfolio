import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css:{
    modules:{
      localsConvention: "camelCase", /* Help us to use camel case in our css files */
    }
  }
})
