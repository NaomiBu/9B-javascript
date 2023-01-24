let fibonacci = {
    [Symbol.iterator]() {
        let pre = 0;
        return {
            next() {
              pre++;
                return {
                    done: false,
                    value: pre
                }
            }
        }
    }
}

for (let n of fibonacci) {
    // truncate the sequence at 1000
    if (n > 100)
        break;
    console.log(n);
}


function submitOrder(user) {
    var shoppingCart, zipCode, shippingRate, orderSuccessful;

    return Promise
        .all([
            // Get the current user's shopping cart
            OrderAPI.getShoppingCartAsync(user),
            // Also look up the ZIP code from their profile
            CustomerAPI.getProfileAsync(user)
        ])
        .then(([shoppingCart, profile]) => {
            // Calculate the shipping fees
            const shippingRate = calculateShipping(shoppingCart, profile.zipCode);

            // Submit the order
            return OrderAPI.placeOrderAsync(shoppingCart, shippingRate)
        })
        .then((orderSuccessful) => {
            console.log(`Your order ${orderSuccessful? "was" : "was NOT"} placed successfully`);
        }); 
}

module.exports = submitOrder;
