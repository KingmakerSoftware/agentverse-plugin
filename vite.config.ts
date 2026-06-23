import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

export default defineConfig({
  plugins: [react()],
  define: { "process.env.NODE_ENV": JSON.stringify("production") },
  build: {
    lib: {
      entry: path.resolve(__dirname, "web/index.tsx"),
      name: "Agentverse",
      formats: ["es"],
      fileName: () => "index.js"
    },
    outDir: "web",
    emptyOutDir: false,
    sourcemap: true,
    rollupOptions: {
      external: ["react", "react-dom", "react-dom/client", "@clawmagic/plugin-studio-frame"],
      output: { inlineDynamicImports: true }
    }
  }
});
