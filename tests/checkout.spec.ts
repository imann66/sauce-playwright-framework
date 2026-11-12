import { test, expect } from "@playwright/test";

test("Verify standard user can successfully complete an E2E checkout flow", async ({
  page,
}) => {
  // Step 1: Navigate to the target web sandbox
  await page.goto("https://saucedemo.com");

  // Step 2: Log in using crisp, native ID selectors
  await page.locator("#user-name").fill("standard_user");
  await page.locator("#password").fill("secret_sauce");
  await page.locator("#login-button").click();

  // 💻 YOUR TURN: Fill in the automation actions below!

  // Step 3: Add "Sauce Labs Backpack" to the cart
  // Hint: Inspect the button next to the backpack to find its ID or text
  await page.locator("#add-to-cart-sauce-labs-backpack").click();

  // Step 4: Click the shopping cart icon badge at the top right
  await page.locator("#shopping_cart_container").click();

  // Step 5: Click the "Checkout" button on the cart page
  await page.locator("#checkout").click();

  // Step 6: Fill out the Checkout Form (First Name, Last Name, Postal Code) and click "Continue"
  await page.locator("#first-name").fill("standard");
  await page.locator("#last-name").fill("user");
  await page.locator("#postal-code").fill("50261");
  await page.locator("#continue").click();

  // Step 7: Click the "Finish" button on the checkout overview page
  await page.locator("#finish").click();

  // Step 8: Assert that the final page displays the order completion header
  // Hint: Verify the header element has the text "Thank you for your order!"
  await expect(page.locator(".complete-header")).toHaveText(
    "Thank you for your order!",
  );
});
