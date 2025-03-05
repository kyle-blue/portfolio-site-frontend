import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

/** @type {import('vite').UserConfig} */
const config = ({ mode }) => {
    return defineConfig({
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
