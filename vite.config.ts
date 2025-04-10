import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import { resolve } from "path"

const formattedDate = new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit',
}).format(new Date())



/** @type {import('vite').UserConfig} */
const config = ({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '');
    return defineConfig({
        resolve: {
            alias: [{ find: "@", replacement: resolve(__dirname, "./src") }]
        },
        define: {
            env: {
                LAST_UPDATED: formattedDate,
                ENVIRONMENT: env.ENVIRONMENT ?? 'prod'
            },
        },
        plugins: [
            react(),
            svgr({
                svgrOptions: {
                    // svgr options
                },
                include: '**/*.svg',
            }),
        ],
        server: {
            port: 3000,
            host: true,
            allowedHosts: ['www.kblue-dev.io'],
        },
        // @ts-ignore
        test: {
            environment: 'happy-dom',
        },
        build: {
            outDir: 'build',
        },
    })
}

export default config
