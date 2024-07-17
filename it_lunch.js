// menu-script.js

document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const name = button.getAttribute('data-name');
            const price = parseFloat(button.getAttribute('data-price'));

            // Example: Add item to cart (functionality to be implemented)
            addToCart(name, price);
        });
    });

    // Function to add item to cart (to be implemented)
    function addToCart(name, price) {
        console.log(`Added ${name} to cart for $${price}`);
        // Add your cart logic here, e.g., updating cart UI, storing in localStorage, etc.
    }
});
