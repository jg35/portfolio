import { test, expect } from "@playwright/test";

test("nav links", async ({ page }) => {
  await page.goto("http://localhost:3000");

  await page.getByRole("link", { name: "Check out my projects" }).click();
  await expect(page).toHaveURL(/projects/);
  await page.goBack();

  await page.getByRole("link", { name: "See where I've worked" }).click();
  await expect(page).toHaveURL(/work/);
  await page.goBack();

  await page.getByRole("link", { name: "Steal my ideas" }).click();
  await expect(page).toHaveURL(/ideas/);
  await page.goBack();

  await page.getByRole("link", { name: "Read my blog" }).click();
  await expect(page).toHaveURL(/blog/);
  await page.goBack();

  await page.getByRole("link", { name: "Watch my travel vidoes!?" }).click();
  await expect(page).toHaveURL(/videos/);
  await page.goBack();
});
