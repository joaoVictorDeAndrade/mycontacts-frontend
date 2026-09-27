// @ts-check
import { defineConfig, devices } from '@playwright/test';
import { fileURLToPath } from 'node:url';

const frontendDir = fileURLToPath(new URL('.', import.meta.url));
const backendDir = fileURLToPath(new URL('../backend/', import.meta.url));

export default defineConfig({
  testDir: './e2e',
  fullyParallel: false,
  workers: 1,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:5173',
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  webServer: [
    {
      name: 'backend',
      command: 'yarn start',
      cwd: backendDir,
      url: 'http://localhost:3001/contacts',
      reuseExistingServer: true,
      timeout: 30_000,
    },
    {
      name: 'frontend',
      command: 'yarn dev --host localhost --strictPort',
      cwd: frontendDir,
      url: 'http://localhost:5173',
      reuseExistingServer: true,
      timeout: 30_000,
    },
  ],
});
