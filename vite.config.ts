import path from "path";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import UnoCSS from 'unocss/vite'


// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    // 全局路径
    alias: {
      "@": `${path.resolve(__dirname, "src")}`,
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @use "@/assets/styles/variable.scss" as *;
        @use "@/assets/styles/element/theme.scss" as *;
        @use "@/assets/styles/element/theme-dark.scss" as *;`,
      },
    },
  },
  plugins: [
    UnoCSS(),
    vue(),
    vueJsx(),
    // 自动注入
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [
        ElementPlusResolver({
          importStyle: "sass",
        }),
      ],
    }),
    // 图标配置项
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [path.resolve(process.cwd(), "src/assets/icons")],
      // 指定symbolId格式
      symbolId: "icon-[dir]-[name]",
    }),
  ],
});
