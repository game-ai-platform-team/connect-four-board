/// <reference types="vitest" />

import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";

const mode = process.env.MODE;
const env = loadEnv(mode, process.cwd());

// https://vitejs.dev/config/
export default defineConfig({
    mode,
    base: env.VITE_BASE_URL,
    plugins: [react()],
    test: {
        environment: "jsdom",
        globals: true,
        coverage: {
            provider: "v8",
            reporter: ["json", "html"],
            include: ["src"],
            exclude: [
                "**/*.d.ts",
                "src/main.tsx",
                "src/App.tsx",
            ],
        },
    },
});
