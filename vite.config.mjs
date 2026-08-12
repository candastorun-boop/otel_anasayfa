import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const devPreRender = {
  name: "dev-pre-render",
  apply: "serve",
  async transformIndexHtml(html, context) {
    const { render } = await context.server.ssrLoadModule("/src/entry-server.jsx");
    return html.replace('<div id="root"></div>', `<div id="root">${render()}</div>`);
  },
};

export default defineConfig({
  build: {
    outDir: "dist/client",
  },
  optimizeDeps: {
    include: ["react", "react-dom/client"],
  },
  server: {
    host: "0.0.0.0",
    allowedHosts: ["terminal.local"],
    warmup: {
      clientFiles: ["./src/main.jsx"],
    },
  },
  plugins: [react(), devPreRender],
});
