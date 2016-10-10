var chai = require('chai');
chai.should();

var shoppingCart = require('../../src/shoppingCart');

module.exports = function () {        
    this.Given(/^the member level is "([^"]*)"$/, function (memberLevel) {
        this.memberLevel = memberLevel;
    });

    this.Given(/^the product's price is "([^"]*)"$/, function (price) {
        this.price = +price;
    });

    this.Given(/^the product's qty is "([^"]*)"$/, function (qty) {
        this.qty = +qty;
    });

    this.When(/^calculate shoppingCart's price$/, function () {
        this.totalPrice = shoppingCart(this.memberLevel, this.price, this.qty);
    });

    this.Then(/^the total price should be "([^"]*)"$/, function (totalPrice) {
        this.totalPrice.should.be.equal(+totalPrice);
    });
}