import {By, until} from 'selenium-webdriver'
import {BasePage} from './basePage'

export class JPetStoreDemo extends BasePage {
    registerNowBtn: By = By.xpath('//*[@id="Catalog"]/a');
    userID: By = By.css('[name="username"]');
    newPassword: By = By.css ('[name="password"]');
    repeatPassword: By = By.css('[name="repeatedPassword"]');
    firstName: By = By.css ('[name="account.firstName"]');
    lastName: By = By.css ('[name="account.lastName"]');
    email: By = By.css ('[name="account.email"]');
    phone: By = By.css ('[name="account.phone"]');
    address1: By = By.css ('[name="account.address1"]');
    address2: By = By.css ('[name="account.address2"]');
    city: By = By.css ('[name="account.city"]');
    state: By = By.css ('[name="account.state"]');
    zip: By = By.css ('[name="account.zip"]');
    country: = By.css ('[name="account.country"]');
    saveAccountInfo: By = By.xpath('//*[@id="Catalog"]/form/input');
    signInBtn: By = By.xpath('//*[@id="MenuContent"]/a[2]');
    username: By = By.css ('name=["username"]');
    password: By = By.css ('name=["password"]');


    constructor(){
        super({url:"https://petstore.octoperf.com/actions/Account.action?newAccountForm="})
    }

  
    async navigate() {
        await this.driver.get(this.url)
        await this.driver.wait(until.elementLocated(this.header))
    }
    async click(elementBy: By) {
        await this.driver.wait(until.elementLocated(elementBy))
        return (await this.driver.findElement(elementBy)).click()
    }
    async sendKeys(elementBy: By, keys) {
        await this.driver.wait(until.elementLocated(elementBy))
        return this.driver.findElement(elementBy).sendKeys(keys)
    }
    async getText(elementBy) {
        await this.driver.wait(until.elementLocated(elementBy))
        return this.driver.findElement(elementBy).getText()
    }
 
    async setInput(elementBy: By, keys: any): Promise<void> {
        let input = await this.driver.findElement(elementBy)
        await input.click()
        await input.clear()
        return input.sendKeys(keys)
    }

}