export const MODE = import.meta.env.MODE
export const IS_PROD = MODE.startsWith('production')

export const SENTRY_DSN = import.meta.env.VITE_SENTRY_DSN
