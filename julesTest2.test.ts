import {PetStore} from './julesPageObject'
    const fs = require('fs')
    const petStore = new PetStore()
    beforeEach(async () =>{
        await petStore.navigate();
    });
    
    afterAll(async() =>{
        await petStore.driver.quit();
    });
    
    test('Browse Cats', async ()=> {
        await petStore.click(petStore.CatCategory)
        await petStore.click(petStore.PersianCat)
        await petStore.click(petStore.AdultFemaleCatPersian)
        await fs.writeFile(`${__dirname}/browsingCatScreenshot.png`,
        await petStore.driver.takeScreenshot(), "base64",
        (e) => {
            if (e) console.error(e)
            else console.log('Browsing Successful')
        })
        await petStore.click(petStore.returnToCatCategory)
        await petStore.click(petStore.returnToCat)
        await petStore.click(petStore.returnToHomePage)
        
    })