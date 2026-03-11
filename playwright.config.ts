import { defineConfig, devices } from "@playwright/test";

/**
 * Sélection du navigateur via variable d'environnement :
 *   BROWSER=firefox npx playwright test
 *   BROWSER=chrome  npx playwright test  (défaut)
 *   BROWSER=edge    npx playwright test
 *
 * Ou via le flag --project :
 *   npx playwright test --project=firefox
 *   npx playwright test --project=chrome
 *   npx playwright test --project=mobile
 */

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [["html", { open: "never" }], ["list"]],
  use: {
    baseURL: "http://localhost:8080",
    trace: "on-first-retry",
    screenshot: "only-on-failure",
  },
  projects: [
    {
      name: "chrome",
      use: {
        ...devices["Desktop Chrome"],
        channel: "chrome", // utilise Chrome installé sur le système
      },
    },
    {
      name: "firefox",
      use: {
        ...devices["Desktop Firefox"],
        channel: "firefox", // utilise Firefox installé sur le système
      },
    },
    {
      name: "edge",
      use: {
        ...devices["Desktop Edge"],
        channel: "msedge", // utilise Edge installé sur le système
      },
    },
    {
      name: "mobile",
      use: {
        ...devices["Pixel 5"],
        channel: "chrome",
      },
    },
  ],
  webServer: {
    command: "npm run dev",
    url: "http://localhost:8080",
    reuseExistingServer: !process.env.CI,
    timeout: 30000,
  },
});
