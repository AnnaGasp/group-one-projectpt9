import {PetStore} from "./annaPageObject";
const petStore = new PetStore();
const fs = require('fs');

beforeEach(async () =>{
    await petStore.navigate();
});

afterAll(async() =>{
    await petStore.driver.quit();
});

describe("PetStore test", () =>{
    test("Adding an item to cart", async () =>{
        await petStore.click(petStore.dogCategory);
        await petStore.click(petStore.dogProduct);
        await petStore.click(petStore.dogItem);
        await petStore.click(petStore.addToCartButton);
        let results = await petStore.getResults();
        expect(results).toContain("Adult Male Chihuahua");

        await fs.writeFile(`${__dirname}/test.txt`, results, 
        (e) => {
            if (e) console.error(e);
            else console.log ('Added to Cart Successful');
        });

        await fs.writeFile(`${__dirname}/petStoreScreenshot.png`,
        await petStore.driver.takeScreenshot(),"base64",
        (e) => {
            if (e) console.error(e);
            else console.log ('Added to Cart Successful');
        });
   });
    
   test ("Removing item from the cart", async() => {
        await petStore.click(petStore.dogCategory);
        await petStore.click(petStore.dogProduct);
        await petStore.click(petStore.dogItem);
        await petStore.click(petStore.addToCartButton);
        await petStore.click(petStore.removeButton);
        let results = await petStore.getResults();
        expect(results).toContain("Your cart is empty.");

        await fs.writeFile(`${__dirname}/petStoreScreenshot.png`,
        await petStore.driver.takeScreenshot(),"base64",
        (e) => {
            if (e) console.error(e);
            else console.log ('Removed from Cart Successful');
        });

        await fs.writeFile (`${__dirname}/test.txt`, results,
        (e) => {
            if (e) console.error(e);
            else console.log ('Removed from Cart Successful');
        });

       
    });
});