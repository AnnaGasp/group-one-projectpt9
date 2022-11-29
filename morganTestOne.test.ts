import { Driver } from "selenium-webdriver/chrome";
import {MorganPO} from "./morganPageObject";

const  MorganTest1= new MorganPO()
describe("practicing CSS selectors", () => {
    
    beforeEach(async ()=>{
        await MorganTest1.navigate();
    });
    afterAll(async()=>{
        await MorganTest1.driver.quit();
    
    })

test("Searching for a male bulldog and adding to cart", async ()=>{
await MorganTest1.click(MorganTest1.searchBar);
await MorganTest1.setInput(MorganTest1.searchBar, "bulldog");
await MorganTest1.click(MorganTest1.searchBtn);
await MorganTest1.click(MorganTest1.productIDforDogSearch);
await MorganTest1.click(MorganTest1.maleBulldog);
await MorganTest1.click(MorganTest1.addToCart);

})
})