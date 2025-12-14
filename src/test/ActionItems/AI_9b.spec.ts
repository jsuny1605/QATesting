import test from "@playwright/test";
import { click, clickByIndex, tabByClick, tabByClickByIndex } from "../reusable_actions";

test('vertex pharma qa job search @ai', async({page}) => {

    //navigate to vertex pharma careers page
    await page.goto('https://www.vrtx.com');

    //let it load for few seconds
    await page.waitForTimeout(2000);

    //click on reject cookies button
    //await click(page, "//*[@id='onetrust-reject-all-handler']", 'reject cookies button');

    //click on careers link
    await click(page, "[class='nav-link dropdown-toggle nav-link--careers- external-links-handler']", "Careers Link");

    //let it load for few seconds
    await page.waitForTimeout(2000);

    //click on career growth and opportunities link
    await click(page, "[class='nav-link--careers-career-growth-and-opportunities- external-links-handler']", "Career Growth & Opportunities Link");

    //click on find your ideal job by index
    //await clickByIndex(page, "text='Find your ideal job'", 1, "Find Your Ideal Job Button");

    //switch to new tab
    let newPage = await tabByClickByIndex(page, "text='Find your ideal job'", 0, "new tab");

    //let it load for few seconds
    await page.waitForTimeout(3000);

    //grab and print the job count
    let jobCount = await newPage.locator("[data-automation-id='jobFoundText']").textContent();
    console.log('Total jobs found: ' + jobCount);












});