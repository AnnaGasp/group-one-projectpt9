import {By} from "selenium-webdriver"
import {BasePage} from './basePage'

export class PetStore extends BasePage {
    HomePage: By = By.xpath('//a[@href="/actions/Catalog.action?viewCategory=&categoryId=CATS"]');
    CatCategory: By = By.xpath('(//img[@*])[11]');
    PersianCat: By = By.xpath('//a[@href="/actions/Catalog.action?viewProduct=&productId=FL-DLH-02"]');
    AdultFemaleCatPersian: By=By.xpath('//a[text()= "EST-16"]');
    returnToCatCategory: By = By.xpath('//a[text()= "Return to FL-DLH-02"]')
    returnToCat: By = By.xpath('//a[text()= "Return to CATS"]')
    returnToHomePage: By = By.xpath('//a[text()= "Return to Main Menu"]')

    constructor() {
        super ({url:"https://petstore.octoperf.com/actions/Catalog.action"});
    };
   
}