import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  // Served from https://utku-kucuk.github.io/hirehub/
  base: "/hirehub/",
  plugins: [react(), tailwindcss()],
});
