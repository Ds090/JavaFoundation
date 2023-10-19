function doubleCartQuantities(cart) {
    // Iterate through the cart array
    for (let i = 0; i < cart.length; i++) {
        // Double the quantity of each item
        cart[i] *= 2;
    }
}

// Example cart array
const cart = [2, 4, 3, 1];

// Call the function to double the quantities in the cart
doubleCartQuantities(cart);

// Now the 'cart' array will contain doubled quantities
console.log(cart); // Output: [4, 8, 6, 2]