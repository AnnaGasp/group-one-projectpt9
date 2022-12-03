import{PetStore} from './treyPageObject';
const petstore = new PetStore();
const fs = require('fs');

beforeEach(async () =>{
    await petstore.navigate();
});

afterAll(async() =>{
    await petstore.driver.quit();
});

describe("Pet Store Cart", () => {
    test("Can update cart", async () => {
        await petstore.navigate();
        await petstore.click(petstore.FishTab);
        await petstore.click(petstore.AngelFish);
        await petstore.click(petstore.AddToCartLaf);
        await petstore.click(petstore.QuantityField1);
        await petstore.setInput(petstore.QuantityField1,"3");
        await petstore.click(petstore.UpdateCart);
        let results = await petstore.getResults();
        expect (results).toContain("Sub Total: $49.50");

        await fs.writeFile(`${__dirname}/CartScreenshot.png`,
        await petstore.driver.takeScreenshot(),"base64",
        (e) => {
            if (e) console.error(e);
            else console.log ('Updated cart successful');
        });

        })
});

describe("Check out", () => {
    test("Are able to make purchase", async () => {
        await petstore.navigate();
        await petstore.click(petstore.FishTab);
        await petstore.click(petstore.AngelFish);
        await petstore.click(petstore.AddToCartLaf);
        await petstore.click(petstore.QuantityField1);
        await petstore.click(petstore.CheckOut1);
        await petstore.click(petstore.UserName);
        await petstore.sendKeys(petstore.UserName,"admin1");
        await petstore.click(petstore.UserPassword);
        await petstore.sendKeys(petstore.UserPassword,"admin2");
        await petstore.click(petstore.SignIn);
        let results = await petstore.getResults2();
        expect (results).toContain("Invalid username or password. Signon failed.");
        
        })
});

