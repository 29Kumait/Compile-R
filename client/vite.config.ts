import { defineConfig, loadEnv } from "vite";
import styleX from "vite-plugin-stylex";
import react from "@vitejs/plugin-react";

const ReactCompilerConfig = {};

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    server: {
      port: 8080,
    },
    plugins: [
      react({
        babel: {
          plugins: [["babel-plugin-react-compiler", ReactCompilerConfig]],
        },
      }),
      styleX(),
    ],
    define: {
      "process.env": {
        VITE_BASE_CLIENT_URL: env.VITE_BASE_CLIENT_URL,
        VITE_BASE_SERVER_URL: env.VITE_BASE_SERVER_URL,
      },
    },
  };
});
