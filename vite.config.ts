import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

const formattedDate = new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit',
}).format(new Date())

/** @type {import('vite').UserConfig} */
const config = ({ mode }) => {
    return defineConfig({
        define: {
            env: {
                LAST_UPDATED: formattedDate,
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
        test: {
            environment: 'happy-dom',
        },
        build: {
            outDir: 'build',
        },
    })
}

export default config
