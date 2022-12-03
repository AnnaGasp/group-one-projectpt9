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
    await breeTestone.click(breeTestone.registerNowBtn);
    await breeTestone.setInput(breeTestone.userID, "admin1");
    await breeTestone.setInput(breeTestone.newPassword, "admin2");
    await breeTestone.setInput(breeTestone.repeatPassword, "admin2");
    await breeTestone.setInput(breeTestone.firstName, "student");
    await breeTestone.setInput(breeTestone.lastName, "dev");
    await breeTestone.setInput(breeTestone.email, "admin1@google.com");
    await breeTestone.setInput(breeTestone.phone, "530-720-9787");
    await breeTestone.setInput(breeTestone.address1, "400 West 1st Street");
    await breeTestone.setInput(breeTestone.city, "chico");
    await breeTestone.setInput(breeTestone.state, "ca");
    await breeTestone.setInput(breeTestone.zip, "95928");
    await breeTestone.setInput(breeTestone.country, "usa");
    await breeTestone.click(breeTestone.saveAccountInfo)

})  

