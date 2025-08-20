import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from "vite-tsconfig-paths"
import { config } from 'dotenv';

export default defineConfig(({ mode }) => {
  config({ path: `.env.${mode}` });
  return ({
    plugins: [react(), tsconfigPaths()],
  })
})
