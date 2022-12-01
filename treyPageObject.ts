import {By, until} from 'selenium-webdriver';
import {BasePage} from './basePage';

export class PetStore extends BasePage{
    quit() {
        throw new Error('Method not implemented.');
    }
    FishTab : By = By.xpath('(//img[@*])[5]');
    AngelFish : By = By.xpath('//*[@id="Catalog"]/table/tbody/tr[2]/td[1]/a');
    AddToCartLaf : By = By.xpath ('(//a[@class="Button"])[1]');
    QuantityField1 : By = By.xpath('//*[@id="Cart"]/form/table/tbody/tr[2]/td[5]/input');
    UpdateCart : By = By.xpath('//*[@id="Cart"]/form/table/tbody/tr[3]/td[1]/input');
    PriceField : By = By.xpath('//*[@id="Cart"]/form/table/tbody/tr[3]/td[1]');
    CheckOut1   : By = By.xpath('//*[@id="Cart"]/a');
    UserName    : By = By.css('[name="username"]');
    UserPassword    : By = By.css('[name="password"]');
    SignIn  : By = By.css('[name="signon"]');
    ErrorSignIn : By = By.xpath('//*[@id="Content"]/ul/li');

    constructor(){
        super({url:"https://petstore.octoperf.com/actions/Catalog.action"});
    }
    async sendKeys(elementBy: By, keys) {
        await this.driver.wait(until.elementLocated(elementBy))
        return this.driver.findElement(elementBy).sendKeys(keys);
    }

    async getResults() {
        return await this.getText(this.PriceField);
    }

}   