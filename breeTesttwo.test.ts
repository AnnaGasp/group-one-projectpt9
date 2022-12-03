import { Browser } from "selenium-webdriver";
import {BreePO} from "./breePageObject"; 
const breeTesttwo = new BreePO
const fs = require('fs');


beforeEach(async () =>{
    await breeTesttwo.navigate();
});

afterAll(async() =>{
    await breeTesttwo.driver.quit();
});

test( "Testing Sign-On Feature", async ()=>{
    await breeTesttwo.click(breeTesttwo.signInBtn);
    await breeTesttwo.click(breeTesttwo.LogIn);
    await breeTesttwo.setInput(breeTesttwo.userID, "admin1");
    await breeTesttwo.setInput(breeTesttwo.newPassword, "admin2");
    await breeTesttwo.click(breeTesttwo.LogIn);
})  