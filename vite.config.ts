import {defineConfig} from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {'components': path.resolve(__dirname, './src/components')}
  },
  plugins: [reactRefresh()]
})
