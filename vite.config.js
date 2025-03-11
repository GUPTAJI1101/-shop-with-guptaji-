import { defineConfig } from 'vite';
import {resolve} from "path"

export default defineConfig({
  build: {
    rollupOptions: {
        input: {
            main: resolve(__dirname, "index.html"),
            login: resolve(__dirname, "login.html"),
            home: resolve(__dirname, "home.html"),
            cart: resolve(__dirname, "cart.html"),
            product: resolve(__dirname, "product.html"),
            search: resolve(__dirname, "search.html")
        }
    }
  }
});
