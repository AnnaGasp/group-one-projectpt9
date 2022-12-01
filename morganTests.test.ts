import {MorganPO} from "./morganPageObject";

const fs= require('fs')
const  morganTest= new MorganPO()

describe("Morgan's tests", () => {
    
    beforeEach(async ()=>{
        await morganTest.navigate();
    });
    afterAll(async()=>{
        await morganTest.driver.quit();
    
    })

test("Searching for a male bulldog and adding to cart", async ()=>{
await morganTest.click(morganTest.searchBar);
await morganTest.setInput(morganTest.searchBar, "bulldog");
await morganTest.click(morganTest.searchBtn);
await morganTest.click(morganTest.productIDforDogSearch);
await morganTest.click(morganTest.maleBulldog);
await morganTest.click(morganTest.addToCart);

await fs.writeFile(`${__dirname}/addedBulldogToCart.png`, 
    await morganTest.driver.takeScreenshot(), "base64",
    (e) => {
        if (e) console.error(e)
        else console.log('Bulldog added to cart')
    })
})

test("Boundary testing for registration", async ()=>{
    await morganTest.click(morganTest.signInBtn);
    await morganTest.click(morganTest.registerNowBtn);
    await morganTest.setInput(morganTest.userID_field, "1");
    await morganTest.setInput(morganTest.newPass_field, "#");
    await morganTest.setInput(morganTest.repeatPass_field, "Ad4");
    await morganTest.setInput(morganTest.firstName_field, "A");
    await morganTest.setInput(morganTest.lastName_field, "12345!789)ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+");
    await morganTest.setInput(morganTest.email_field, "yahoo@google.com");
    await morganTest.setInput(morganTest.phone_field, "2");
    await morganTest.setInput(morganTest.address1_field, "123 Main Street");
    await morganTest.setInput(morganTest.address2_field, "231 Naim Ave");
    await morganTest.setInput(morganTest.city_field, "S.F");
    await morganTest.setInput(morganTest.state_field, "CT");
    await morganTest.setInput(morganTest.zip_field, "12345678901234567890");
    await morganTest.setInput(morganTest.country_field, "Russia");
    await morganTest.click(morganTest.saveAccountInfo);
    await fs.writeFile(`${__dirname}/BoundaryTestForRegistration.png`, 
        await morganTest.driver.takeScreenshot(), "base64",
        (e) => {
            if (e) console.error(e)
            else console.log('Registration Error')
        })
})
})

