enum MemberLevel {
    VIP,

    Normal
}

interface IDiscounter {
    Calculate(price: number, qty: number): number;
}

class VipDiscounter implements IDiscounter {
    Calculate(price: number, qty: number): number {
        let totalPrice = price * qty;

        if (totalPrice > 500) {
            return totalPrice * 0.8
        }

        return totalPrice;
    }
}

class NormalDiscounter implements IDiscounter {
    Calculate(price: number, qty: number): number {
        let totalPrice = price * qty;

        if (totalPrice > 1000 && qty > 3) {
            return totalPrice * 0.85;
        }

        return totalPrice;
    }
}

class DiscounterFactory {
    static GetDiscounter(level: string) {        
        switch (MemberLevel[level]) {
            case MemberLevel.VIP:
                return new VipDiscounter();            
            case MemberLevel.Normal:
                return new NormalDiscounter();
        }
    }
}

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

