import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// order define priority
const extensions = [".web.tsx", ".web.ts", ".web.js", ".tsx", ".ts", ".js"];

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    define: {
      __DEV__: mode === "development",
    },
    resolve: {
      extensions,
      alias: {
        "react-native": "react-native-web",
        "react-native-linear-gradient": "react-native-web-linear-gradient",
        "react-native-svg": "svgs",
      },
    },
    optimizeDeps: {
      force: true,
      esbuildOptions: {
        resolveExtensions: extensions,
        loader: {
          ".js": "jsx",
        },
      },
    },
  };
});
