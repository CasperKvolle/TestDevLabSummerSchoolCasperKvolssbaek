class Food {

    constructor( hot, spicy, bigPortion, price, country, isfastfood) {
        this.hot = hot;
        this.spicy = spicy;
        this.bigPortion = bigPortion;
        this.price = price;
        this.country = country;
        this.isfastfood = isfastfood
    }  
    logFoodDesc() {
        console.log(
            'Is hot: ' + this.hot +
            'Is spicy: ' + this.spicy +
            'Big portion: ' + this.bigPortion ,
            'Price: ' + this.price,
            + 'Country: ' + this.country
            + 'isfastfood: ' + this.isfastfood)
    };
}
new Food(true, true, true, 19.99, 'Italy', true ).logFoodDesc()
module.exports = Food;