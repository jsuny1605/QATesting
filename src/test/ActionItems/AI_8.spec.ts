import test from "@playwright/test";

test('Weight watchers test @smoke', async({page}) => {
//create an array list for 3 zip codes 
let zipCodes = new Array<string>()
zipCodes.push("10372")
zipCodes.push("10466")
zipCodes.push("10280")

//create for loop to iterate through the array list
for(let i=0; i<zipCodes.length; i++){
    //navigate to weight watchers
    await page.goto('https://www.weightwatchers.com/us/')

    //click on find a workshop link
    await page.locator('[data-e2e-name = "find_a workshop"]').click()

    //click on in person tab
    await page.locator('[text()="In-Person"]').click()

    //store search bar element into a variable for reusability
    let searchBar = page.locator('[id="location-search"]')

    //clear the search bar
    await searchBar.fill('')

    //type zip code from the array list
    await searchBar.fill(zipCodes[i])

    //click on the search icon
    await page.locator('[id="location-search-cta"]').click()

    //store the links with common property as an arrayList webelement and click on first element
    const locationLinks = page.locator("[class='linkContainer-C5n9z']")
    await locationLinks.nth(0).click()

    //capture the entire address and store it into a string variable
    let address = page.locator("[class='address-FnT8k']").textContent()

    //print the address
    console.log('For zip code ' + zipCodes[i] + ', address is: ' + address)

    //print out schedule
    console.log('Schedule is: ' + await page.locator("[id='studioWorkshopSchedule']").textContent())




}//end of for loop




});//end of test