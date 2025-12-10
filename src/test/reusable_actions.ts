import { Page } from "@playwright/test";

//reusable method to click on a unique element

//export is like public in java, it makes the method accessible outside this file
export async function click(page:Page, locator:string, elementName:string){
    console.log('Clicking on ' + elementName)
    await page.locator(locator).click()
}//end of click method

//reusbale method to click on element by nth index
export async function clickByIndex(page:Page, locator:string, index:number, elementName:string){
    console.log('Clicking on ' + elementName + ' by index ' + index)
    const elementArray = page.locator(locator)
    await elementArray.nth(index).click()
}//end of clickByIndex method

//method to type on a unique element
export async function type(page:Page, locator:string, inputValue:string, elementName:string){
    console.log('Typing on ' + elementName)
    let element = page.locator(locator)
    await element.fill('') //clear the existing text
    await element.fill(inputValue)
}//end of type method

//METHOD TO TYPE ON AN ELEMENT by index
export async function typeByIndex(page:Page, locator:string, index:number, inputValue:string, elementName:string){
    console.log('Typing on ' + elementName + ' by index ' + index)
    let elementArray = page.locator(locator).nth(index)
    await elementArray.fill('') //clear the existing text
    await elementArray.fill(inputValue)
}//end of typeByIndex method

//method to get text from a unique element
export async function getText(page:Page, locator:string, elementName:string){
    console.log('Getting text from ' + elementName)
    let result = await page.locator(locator).innerText()
    return result
}//end of getText method