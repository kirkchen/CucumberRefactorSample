import IDiscounter from './idiscounter';

export default class VipDiscounter implements IDiscounter {
    Calculate(price: number, qty: number): number {
        let totalPrice = price * qty;

        if (totalPrice > 500) {
            return totalPrice * 0.8
        }

        return totalPrice;
    }
}