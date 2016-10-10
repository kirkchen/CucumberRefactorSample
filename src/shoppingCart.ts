class ShoppingCart {
    Calculate(memberLevel: string, price: number, qty: number): number {
        var totalPrice = price * qty;

        if (memberLevel === 'VIP') {
            if (totalPrice > 500) {
                totalPrice = totalPrice * 0.8;
            }
        }
        else if (memberLevel === 'Normal') {
            if (totalPrice > 1000 && qty > 3) {
                totalPrice = totalPrice * 0.85;
            }
        }

        return totalPrice;
    }
}

export default new ShoppingCart();

