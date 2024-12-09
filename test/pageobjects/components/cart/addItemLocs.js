class addItemToCart {
    async itemLinkClick(itemNo){
        await $(`(//div/ol/li/div/div/strong/a[@class="product-item-link"])[${itemNo}]`).click();
    }
    async itemName(itemNo){
        return (await $(`(//div/ol/li/div/div/strong/a[@class="product-item-link"])[${itemNo}]`));
    };
    async itemSizeClick(itemSize){
        await $(`//div[contains(text(),"${itemSize}")]`).click();
    }
    async itemColorClick(itemColor){
        await $(`//div[@class="swatch-option color" and @option-label="${itemColor}"]`).click();
    }
    async qtyInput(qty){
        await $(`//input[@name="qty"]`).setValue(qty);
    }
    get submitBtn(){
        return $('//button/span[contains(text(),"Add to Cart")]');
    }

    get cartCounterNum(){
        return $('//span[@class="counter-number"]');
    }

    async ClickCartIcon(){
        await $('//a[@class="action showcart"]').click();
    }

    get viewCartpop(){
        return $('//div[@data-role="dropdownDialog"]');
    }

    get totalprice(){
        return $('//div/span/span[@class="price"]');
    }

    get cartiteminfo(){
        return {
            name: $('//div/strong[@class="product-item-name"]'),
            size: $('(//dd[@class="values"]/span)[1]'),
            color: $('(//dd[@class="values"]/span)[2]')
        }
    }

    async ClickDetails(){
        await $('//div[@role="tablist"]').click();
    }
}

module.exports = new addItemToCart();