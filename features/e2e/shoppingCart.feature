Feature: ShoppingCart
    In order to calculate shoppingCart's price
    As a Customer
    I want write a calculator to calculate price

    Scenario: VIP member can get 20% discount if price over 500
        Given the member level is "VIP"
        And   the product's price is "200"
        And   the product's qty is "3"
        When calculate shoppingCart's price
        Then the total price should be "480"
    
    