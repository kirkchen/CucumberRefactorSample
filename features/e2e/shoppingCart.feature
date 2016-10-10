Feature: ShoppingCart
    In order to calculate shoppingCart's price
    As a Customer
    I want write a calculator to calculate price

    Scenario: VIP member get 20% discount if price over 500
        Given the member level is "VIP"
        And   the product's price is "200"
        And   the product's qty is "3"
        When calculate shoppingCart's price
        Then the total price should be "480"

    Scenario: VIP member get no discount if price is smaller then 500
        Given the member level is "VIP"
        And   the product's price is "100"
        And   the product's qty is "3"
        When calculate shoppingCart's price
        Then the total price should be "300"

    Scenario: Normal member get 15% discount if price over 1000 and product qty is greater then 3
        Given the member level is "Normal"
        And   the product's price is "300"
        And   the product's qty is "4"
        When calculate shoppingCart's price
        Then the total price should be "1020"

    Scenario: Normal member get no discount if price is smaller then 1000
        Given the member level is "Normal"
        And   the product's price is "100"
        And   the product's qty is "4"
        When calculate shoppingCart's price
        Then the total price should be "400"

    Scenario: Normal member get no discount if qty is equal 3
        Given the member level is "Normal"
        And   the product's price is "1000"
        And   the product's qty is "3"
        When calculate shoppingCart's price
        Then the total price should be "3000"

    Scenario: no discount if not a member
         Given the member level is ""
        And   the product's price is "1000"
        And   the product's qty is "4"
        When calculate shoppingCart's price
        Then the total price should be "4000"
    