module.exports = function(memberLevel, price, qty){
    var totalPrice = price * qty;    

    if(memberLevel === 'VIP') {
        if(totalPrice > 500) {
            totalPrice = totalPrice * 0.8;

            return totalPrice;
        }
    }
    else if(memberLevel === 'Normal') {
        if(totalPrice > 1000 && qty > 3){
            totalPrice = totalPrice * 0.85;

            return totalPrice;
        }
    }
}