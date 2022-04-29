import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'vue-i18n'
      ],
      dts: 'src/auto-imports.d.ts',
    }),
  ],
  css: {
    // css预处理器
    preprocessorOptions: {
      less: {
        additionalData: '@import "./src/assets/styles/variables.less";',
      },
    },
  }
})
