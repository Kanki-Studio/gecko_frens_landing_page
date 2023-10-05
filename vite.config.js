import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: "esbuild-plugin",
      setup(build) {
        // Set the loader for .js files to 'jsx'
        build.onLoad({ filter: /\.js$/ }, (args) => {
          if (args.path.endsWith(".js")) {
            return {
              loader: "jsx",
            };
          }
        });
      },
    },
  ],
  resolve: {
    alias: {
      src: "/src",
    },
  },
});
