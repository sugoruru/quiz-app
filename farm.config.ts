import { defineConfig } from '@farmfe/core';

export default defineConfig({
  plugins: ['@farmfe/plugin-react'],
  compilation: {
    output: {
      path: "sat",
      filename: 'sat/[name].[hash].[ext]',
      assetsFilename: 'static/[resourceName].[ext]'
    }
  }
});
