import {MorganPO} from "./morganPageObject";
import { Driver } from "selenium-webdriver/chrome";


const  MorganTest2= new MorganPO()
describe("Morgan Test 2", () => {
    
    beforeEach(async ()=>{
        await MorganTest2.navigate();
    });
    afterAll(async()=>{
        await MorganTest2.driver.quit();
    
    })

test("Boundary Testing for Registration Feature", async ()=>{
await MorganTest2.click(MorganTest2.signInBtn);
await MorganTest2.click(MorganTest2.registerNowBtn);
await MorganTest2.click(MorganTest2.userID_field);
await MorganTest2.setInput(MorganTest2.userID_field, "1");
await MorganTest2.click(MorganTest2.newPass_field);
await MorganTest2.setInput(MorganTest2.newPass_field, "#");
await MorganTest2.click(MorganTest2.repeatPass_field)
await MorganTest2.setInput(MorganTest2.repeatPass_field, "Ad4");
await MorganTest2.click(MorganTest2.firstName_field)
await MorganTest2.setInput(MorganTest2.firstName_field, "A");
await MorganTest2.click(MorganTest2.lastName_field)
await MorganTest2.setInput(MorganTest2.lastName_field, "12345!789)ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+");
await MorganTest2.click(MorganTest2.email_field)
await MorganTest2.setInput(MorganTest2.email_field, "yahoo@google.com");
await MorganTest2.click(MorganTest2.phone_field)
await MorganTest2.setInput(MorganTest2.phone_field, "2");
await MorganTest2.click(MorganTest2.address1_field)
await MorganTest2.setInput(MorganTest2.address1_field, "123 Main Street");
await MorganTest2.click(MorganTest2.address2_field)
await MorganTest2.setInput(MorganTest2.address2_field, "231 Naim Ave");
await MorganTest2.click(MorganTest2.city_field)
await MorganTest2.setInput(MorganTest2.city_field, "S.F");
await MorganTest2.click(MorganTest2.state_field)
await MorganTest2.setInput(MorganTest2.state_field, "CT");
await MorganTest2.click(MorganTest2.zip_field)
await MorganTest2.setInput(MorganTest2.zip_field, "12345678901234567890");
await MorganTest2.click(MorganTest2.country_field)
await MorganTest2.setInput(MorganTest2.country_field, "Russia");

})
})