import { defineConfig } from 'vite'
import vilex from 'vite-vilex'

export default defineConfig({
    plugins: [ vilex() ],
    assetsInclude: ['**/*.md'],
    build: {
        outDir: 'docs'
    }
})