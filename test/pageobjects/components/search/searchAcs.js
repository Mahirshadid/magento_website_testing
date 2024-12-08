const searchLocs = require('./searchLocs.js');

class searchActions {
    async searchItem(itemName) {
        await searchLocs.searchPath.setValue(itemName);
    }
    async clickOnSearch(){
        await searchLocs.searchBtn.click();
    }
}

module.exports = new searchActions();