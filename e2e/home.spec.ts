import { test, expect } from "@playwright/test";

test.describe("Home page", () => {
  test("loads and displays the hero title", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("heading", { name: "Email for developers" })).toBeVisible();
  });

  test("navigation header is visible", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("banner")).toBeVisible();
    await expect(page.getByRole("link", { name: "Get Started" }).first()).toBeVisible();
  });

  test("mobile hamburger menu opens and closes", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto("/");

    const burger = page.getByRole("button", { name: /open menu/i });
    await burger.click();
    await expect(page.getByRole("button", { name: /close menu/i })).toBeVisible();

    await page.getByRole("button", { name: /close menu/i }).click();
    await expect(page.getByRole("button", { name: /open menu/i })).toBeVisible();
  });

  test("client logos section is present", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByLabel("Trusted by")).toBeVisible();
  });

  test("Get Started CTA scrolls to pricing section", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "Get Started" }).first().click();
    await expect(page.locator("#pricing")).toBeInViewport();
  });
});
