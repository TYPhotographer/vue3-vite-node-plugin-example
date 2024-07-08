import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: 'src/main.ts',
      name: 'CustomNodePlugin',
      fileName: (format: string) => `custom-node-plugin.js`
    },
    rollupOptions: {
      external: ['vue', 'plugin-dev-kit'],
      output: {
        globals: {
          vue: 'Vue',
          'plugin-dev-kit': 'NodePluginDevKit'
        }
      }
    }
  }
})
