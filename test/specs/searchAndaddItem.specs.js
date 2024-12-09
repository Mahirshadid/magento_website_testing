const searchLocs = require('../pageobjects/components/search/searchLocs.js');
const searchActs = require('../pageobjects/components/search/searchAcs.js');
const addItemToCart = require('../pageobjects/components/cart/addItemLocs.js');
import expect from '@wdio/globals';

let itemName = 'jacket';

const inputData = {
    itemNo: 3,
    size: "M",
    color: "Green",
    qty: 3
}

describe('Search Features', ()=>{
    it('Should seamlessly search an item', async()=>{
        await searchActs.searchItem(itemName);
        await searchActs.clickOnSearch();
    })
    it('Should show items that are available', async()=>{
        await browser.waitUntil(async ()=>{
            return (await searchLocs.itemList.isDisplayed());
        }, {
            timeout: 5000,
            timeoutMsg: 'Items were not displayed after 5 seconds'
        })
    })
    it('Should add item to the cart', async()=>{
        await addItemToCart.itemLinkClick(inputData.itemNo);

        await browser.waitUntil(async()=>{
            return (await addItemToCart.viewCartpop.isDisplayed());
        }, {
            timeout: 5000,
            timeoutMsg: 'Items were not displayed after 5 seconds'
        });
        
        await addItemToCart.itemSizeClick(inputData.size);
        await addItemToCart.itemColorClick(inputData.color);

        await addItemToCart.qtyInput(inputData.qty);

        await addItemToCart.submitBtn();

        const counter = addItemToCart.cartCounterNum;

        await expect(counter).isEqual(inputData.qty);
    })
    it('Should verify the cart', async()=>{
        await addItemToCart.ClickCartIcon();

        await browser.waitUntil(async()=>{
            return (await addItemToCart.viewCartpop.isDisplayed());
        }, {
            timeout: 5000,
            timeoutMsg: 'Items were not displayed after 5 seconds'
        });

        await addItemToCart.ClickDetails();

        const cartitemName = await addItemToCart.cartiteminfo.name;
        const cartitemSize = await addItemToCart.cartiteminfo.size;
        const cartitemColor = await addItemToCart.cartiteminfo.color;
        const cartitemTotal = await addItemToCart.totalprice;
        
        await expect(cartitemName).isEqual(await addItemToCart.itemName(inputData.itemNo));
        await expect(cartitemSize).isEqual(inputData.size);
        await expect(cartitemColor).isEqual(inputData.color);
        await expect(cartitemTotal).isEqual(60*inputData.qty);
    })
})