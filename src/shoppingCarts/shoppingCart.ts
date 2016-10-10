import DiscounterFactory from './discounterFactory';

class ShoppingCart {
    Calculate(level: string, price: number, qty: number): number {
        var discounter = DiscounterFactory.GetDiscounter(level);
        if(discounter){
            return discounter.Calculate(price, qty);
        }
        
        return price * qty;
    }
}

export default new ShoppingCart();

