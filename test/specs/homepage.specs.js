const searchLocs = require('../pageobjects/components/search/searchLocs.js');
const searchActs = require('../pageobjects/components/search/searchAcs.js');

let itemName = 'jacket';

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
})