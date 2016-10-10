import IDiscounter from './idiscounter';

export default class NormalDiscounter implements IDiscounter {
    Calculate(price: number, qty: number): number {
        let totalPrice = price * qty;

        if (totalPrice > 1000 && qty > 3) {
            return totalPrice * 0.85;
        }

        return totalPrice;
    }
}