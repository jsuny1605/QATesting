import test from "@playwright/test";
import { click, clickByIndex, getText, hover, hoverByIndex, scrollBy, type } from "../reusable_actions";

test('Action Item 9 - USPS stamp test @ai', async({page}) => {
    //navigate to USPS
    await page.goto('https://www.usps.com/')

    //hover over to Shop tab by index
    await hoverByIndex(page, '[class="menuitem"]', 2, 'shop tab');

    //wait for few seconds
    await page.waitForTimeout(1789);

    //click by index on stamps link
    await clickByIndex(page, '[class="tool-stamps"]', 1, 'stamps link');

    //click on stamps checkbox by index
    await clickByIndex(page, '[class="checkbox-label"]', 0, 'stamps checkbox');

    //wait for few seconds
    await page.waitForTimeout(3000);

    //click on additional postages checkbox
    await click(page, '[for="checkbox-type-Product Type-Additional Postage-25"]', 'additional postage checkbox');

    //wait for few seconds
    await page.waitForTimeout(3000);

    //scroll down by 300 pixels
    await scrollBy(page, 0, 300, 'page down by 300 pixels');

    //click by index on first product
    await clickByIndex(page, '[class="results-product-desc"]', 0, 'first product');

    //click on add to cart button
    await click(page, '[id="addToCartVisBtn122104"]', 'add to cart button');

    //wait for few seconds
    await page.waitForTimeout(5000);

    //click on view cart button
    await click(page, '[class="button--primary button--white"]', 'view cart button');

    //update quantity to 2 on cart
    await type(page, '[class="col-8 form-control"]', '2', 'quantity field');

    //click update button
    await click(page, '[value="Update"]', 'update button');

    //capture the text block under item and print in console
    let itemDetails = await getText(page, '[class="item-wrapper"]', 'item details text block');

    //print text from getText function
    console.log('Item details:\n' + itemDetails);

});