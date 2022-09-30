export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

if (typeof window === 'object') {
  window.__screener_storybook__ = require('@storybook/react').getStorybook;
}

