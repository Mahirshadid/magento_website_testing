class searchLocators {
    get searchPath(){
        return $('//input[@id="search"]');
    }
    get searchBtn(){
        return $('//button[@title="Search"]');
    }
    get itemList(){
        return $('//div/ol');
    }
}

module.exports = new searchLocators();