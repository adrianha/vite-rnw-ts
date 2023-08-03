import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    define: {
      __DEV__: mode === "development",
    },
    resolve: {
      alias: {
        "react-native": "react-native-web",
      },
    },
  };
});
