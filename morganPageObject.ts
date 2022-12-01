import {By, WebDriver, until} from "selenium-webdriver"
import {BasePage} from "./basePage"

export class MorganPO extends BasePage {
    driver: WebDriver;
    url: string ="https://petstore.octoperf.com/actions/Catalog.action";
    searchBar: By = By.xpath('//*[@name="keyword"]');
    searchBtn: By = By.xpath('//*[@name="searchProducts"]');
    productIDforDogSearch: By = By.xpath('//*[@id="Catalog"]/table/tbody/tr[2]/td[2]/b/a/font');
    maleBulldog: By = By.xpath('//*[@id="Catalog"]/table/tbody/tr[2]/td[1]/a');
    addToCart: By = By.xpath('//*[@id="Catalog"]/table/tbody/tr[7]/td/a');
    returnToMainMenu: By = By.xpath('//*[@id="BackLink"]/a');
    proceedToCheckout: By = By.xpath('//*[@id="Cart"]/a');
    signInBtn: By = By.xpath('//*[@id="MenuContent"]/a[2]');
    registerNowBtn: By = By.xpath('//*[@id="Catalog"]/a')
    userID_field: By = By.xpath('//*[@name="username"]')
    newPass_field: By = By.xpath('//*[@id="Catalog"]/form/table[1]/tbody/tr[2]/td[2]/input')
    repeatPass_field: By = By.xpath('//*[@id="Catalog"]/form/table[1]/tbody/tr[3]/td[2]/input')
    firstName_field: By = By.xpath('//*[@id="Catalog"]/form/table[2]/tbody/tr[1]/td[2]/input')
    lastName_field: By = By.xpath('//*[@id="Catalog"]/form/table[2]/tbody/tr[2]/td[2]/input')
    email_field: By = By.xpath('//*[@id="Catalog"]/form/table[2]/tbody/tr[3]/td[2]/input')
    phone_field: By = By.xpath('//*[@id="Catalog"]/form/table[2]/tbody/tr[4]/td[2]/input')
    address1_field: By = By.xpath('//*[@id="Catalog"]/form/table[2]/tbody/tr[5]/td[2]/input')
    address2_field: By = By.xpath('//*[@id="Catalog"]/form/table[2]/tbody/tr[6]/td[2]/input')
    city_field: By = By.xpath('//*[@id="Catalog"]/form/table[2]/tbody/tr[7]/td[2]/input')
    state_field: By = By.xpath('//*[@id="Catalog"]/form/table[2]/tbody/tr[8]/td[2]/input')
    zip_field: By = By.xpath('//*[@id="Catalog"]/form/table[2]/tbody/tr[9]/td[2]/input')
    country_field: By = By.xpath('//*[@id="Catalog"]/form/table[2]/tbody/tr[10]/td[2]/input')
    saveAccountInfo: By = By.xpath('//*[@id="Catalog"]/form/input')

constructor(){
    super({url: "https://petstore.octoperf.com/actions/Catalog.action"})
}
async sendKeys(elementBy: By, keys){
    await this.driver.wait(until.elementLocated(elementBy));
    return this.driver.findElement(elementBy).sendKeys(keys)
}
async getResults() {
    return await this.getText(this.saveAccountInfo);
}
}