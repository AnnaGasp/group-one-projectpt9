import {By} from "selenium-webdriver";
import {BasePage} from "./basePage";

export class PetStore extends BasePage {
    dogCategory: By= By.xpath('(//img[@*])[7]');
    dogProduct:By =By.xpath('//a[@href="/actions/Catalog.action?viewProduct=&productId=K9-CW-01"]');
    dogItem: By = By.xpath('//a[@href="/actions/Catalog.action?viewItem=&itemId=EST-26"]');
    addToCartButton: By = By.xpath('//a[@class="Button"]');
    cartResults: By = By.xpath('//div[@id="Cart"]');
    removeButton: By = By.xpath('//a[text()="Remove"]');

    constructor() {
        super ({url:"https://petstore.octoperf.com/actions/Catalog.action"});
    };

    async getResults() {
        return await this.getText(this.cartResults);
    };

}