import test from "@playwright/test";

test('Mouse hover to quick tools module and select a package on USPS', async ({page}) => {
    // Go to https://www.usps.com/
    await page.goto('https://www.usps.com/');
    // Hover mouse on "Quick Tools" module
    await page.hover('[class="nav-first-element menuitem"]');
    //click on track a package link
    await page.click('text=Track a Package');
    // Enter a tracking number
    await page.fill('input[id="tracking-input"]', '9400111899223927098490');
    // Click on Track button
    await page.click('button[id="tracking-submit"]');
    //wait for timeout
    await page.waitForTimeout(5000);

    /*
     example of contains using text and non-text

        //click on track button using contain text
        await page.locator('button:has-text("Track")').click();
        //click on track button using contains id
        await page.locator('[id*="track-button"]').click();

    */

});