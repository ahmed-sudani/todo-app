import preact from '@preact/preset-vite'

export default {
  base: '/todo-app/',

  define: {
    'import.meta.vitest': 'undefined',
  },

  plugins: [preact()],

  test: {
    coverage: {
      reporter: ['text-summary', 'text'],
    },
    environment: 'happy-dom',
    includeSource: ['src/**/*.{ts,tsx}'],
    mockReset: true,
    restoreMocks: true,
    setupFiles: ['./src/setup.tests.ts'],
  },
}
