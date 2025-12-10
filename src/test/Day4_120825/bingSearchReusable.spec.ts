import test, { Page } from "@playwright/test";
import { click, getText, type } from "../reusable_actions";

let page:Page
test.beforeAll(async({browser})=>{
    //launch browser
    page = await browser.newPage();
});

test('Search for keyword on Bing using reusable functions @smoke', async({}) => {

    await page.goto('https://www.bing.com');
    await page.waitForTimeout(3000); //wait for few seconds for the next step
    await type(page, '[name="q"]', 'playwright', 'search box' );
    await page.keyboard.press('Enter');



}); //end of test

test('capture number of search results on Bing using reusable functions @smoke', async({}) => {

    let searchResult = await getText(page, '[class="sb_count"]', 'search results text');
    console.log('Search Results: ' + searchResult);
    let searchNumber = searchResult.split(' ')[1]
    console.log('Number of search results: ' + searchNumber);

}); //end of test