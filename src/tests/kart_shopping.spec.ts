import { test } from "@playwright/test";
import {sanAngelHomePage} from "../pages/sanAngel_store";


test.describe('given a user with access to sanAngel store', () =>{

   test ('when I try to buy two items on the store', async ({page})=>{
    const homePage = new sanAngelHomePage(page);
    await homePage.navigate();
    await homePage.addFirtsItem();
    await homePage.addsecondItem();
    await homePage.fillBuyerInfo();
    await homePage.fillReceiverInfo();
    await homePage.finishOrder.click()

  })
})


