import test from "@playwright/test";

test('Search for sports on Bing @smoke', async({page}) => {
    //create array list for sports
    let sports = new Array<string>()
    sports.push("Football")
    sports.push("Basketball")


    for(let i=0; i<sports.length; i++){
    
    //navigate to bing
    await page.goto('https://www.bing.com/')

    //type a keyword in the search box
    await page.locator('[name="q"]').fill(sports[i])
    await page.waitForTimeout(2000) //wait for few seconds for the next step
    
    //submit on the search field
    await page.keyboard.press('Enter')

    //capture search results text
    let searchResults = await page.locator('[class="sb_count"]').textContent() //you can also use .innerText()
    
    //for concatenation purpose, you either can use comma , or +
    console.log('Search Results: ', searchResults)
    
    }//end of for loop
});//end of test