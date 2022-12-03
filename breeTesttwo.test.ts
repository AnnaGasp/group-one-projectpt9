import { Browser } from "selenium-webdriver";
import {BreePO} from "./breePageObject"; 
const breeTestone = new BreePO
const fs = require('fs');


beforeEach(async () =>{
    await breeTestone.navigate();
});

afterAll(async() =>{
    await breeTestone.driver.quit();
});

test( "Verifying Registration", async ()=>{
    await breeTestone.click(breeTestone.signInBtn);
    await breeTestone.setInput(breeTestone.username, "admin1");
    await breeTestone.setInput(breeTestone.password, "admin2");
    await breeTestone.click(breeTestone.loginButton);

})  