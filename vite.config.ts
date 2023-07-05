import { resolve } from 'node:path'
import { defineConfig, loadEnv } from 'vite'

import { sentryVitePlugin as createSentryPlugin } from '@sentry/vite-plugin'
import createCompressionPlugin from 'vite-plugin-compression'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const environment = loadEnv(mode, process.cwd())
  const isProduction = mode.startsWith('production')

  return {
    resolve: {
      alias: [{ find: '~', replacement: resolve(__dirname, 'src') }]
    },
    plugins: [
      react(),
      createCompressionPlugin(),
      isProduction &&
        createSentryPlugin({
          org: 'alexcosta97',
          project: 'alexcosta97',
          include: './dist',
          authToken: environment.VITE_SENTRY_AUTH_TOKEN,
          telemetry: false
        })
    ],
    build: {
      minify: 'esbuild',
      sourcemap: true
    },
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true
        }
      }
    }
  }
})
