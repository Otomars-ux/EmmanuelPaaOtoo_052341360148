// cart-script.js

document.addEventListener('DOMContentLoaded', function() {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    const checkoutBtn = document.getElementById('checkout-btn');

    // Example cart items (you can replace with your actual cart items logic)
    const cartItems = [
        { name: 'Meal Name 1', price: 10.00, quantity: 2, image: 'istockphoto-1062513128-612x612.jpg' },
        { name: 'Meal Name 2', price: 15.00, quantity: 1, image: 'download (13).jfif' }
        // Add more items as needed
    ];

    // Initialize cart
    renderCartItems();

    function renderCartItems() {
        cartItemsContainer.innerHTML = '';

        let totalPrice = 0;

        cartItems.forEach(item => {
            const cartItemElement = document.createElement('div');
            cartItemElement.classList.add('cart-item');

            // Item image
            const img = document.createElement('img');
            img.src = item.image;
            img.alt = item.name;
            cartItemElement.appendChild(img);

            // Item details
            const itemDetails = document.createElement('div');
            const itemName = document.createElement('p');
            itemName.textContent = `${item.name} - $${item.price.toFixed(2)}`;
            itemDetails.appendChild(itemName);

            // Item quantity (if needed)
            // const itemQuantity = document.createElement('p');
            // itemQuantity.textContent = `Quantity: ${item.quantity}`;
            // itemDetails.appendChild(itemQuantity);

            cartItemElement.appendChild(itemDetails);

            cartItemsContainer.appendChild(cartItemElement);

            // Calculate total price
            totalPrice += item.price * item.quantity;
        });

        // Update total price
        totalPriceElement.textContent = totalPrice.toFixed(2);
    }

    // Example checkout button functionality
    checkoutBtn.addEventListener('click', function() {
        alert('Redirecting to checkout...');
        // Implement your checkout logic here (e.g., redirect to checkout page)
    });
});
