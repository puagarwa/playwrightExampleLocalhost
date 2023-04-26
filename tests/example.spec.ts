import { test, expect } from '@playwright/test';

const testUrl = 'http://localhost:3000';

test('Visit Localhost', async ({ page }) => {
  await page.goto(testUrl);
});
