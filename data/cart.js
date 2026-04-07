export let cart = [{
    productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity: 2
}, {
    productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    quantity: 1
}];

export function addToCard(productId) {
    let matchingItem;

    cart.forEach((item) => {
        if (productId === item.productId) {
            matchingItem = item;
        }
    });

    if (matchingItem) {
        matchingItem.quantity += 1;
    } else {
        cart.push({
            productId: productId,
            quantity: 1
        });
    }
}

export function removeFromCard(productId) {
    let matchingIndex;

    cart.forEach((item, index) => {
        if (productId === item.productId) {
            matchingIndex = index;
        }
    });

    if (matchingIndex !== -1) {
        cart.splice(matchingIndex, 1);
    }

    // //2nd variant
    // let newCart = [];

    // cart.forEach((item) => {
    //     if (productId !== item.productId) {
    //         newCart.push(item);
    //     }
    // });
    // cart = newCart;
    console.log(cart);

}