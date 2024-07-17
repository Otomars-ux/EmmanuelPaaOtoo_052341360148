let cart = [];

function addToCart(name, price) {
    const item = cart.find(i => i.name === name);
    if (item) {
        item.quantity += 1;
    } else {
        cart.push({ name, price, quantity: 1 });
    }
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        total += item.price * item.quantity;
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <p>${item.name} - $${item.price.toFixed(2)} x ${item.quantity}</p>
            <button onclick="removeFromCart('${item.name}')">Remove</button>
        `;
        cartItemsContainer.appendChild(cartItem);
    });

    document.getElementById('total-price').innerText = total.toFixed(2);
}

function removeFromCart(name) {
    const itemIndex = cart.findIndex(i => i.name === name);
    if (itemIndex > -1) {
        cart[itemIndex].quantity -= 1;
        if (cart[itemIndex].quantity === 0) {
            cart.splice(itemIndex, 1);
        }
    }
    updateCartDisplay();
}

function checkout() {
    alert('Proceeding to checkout...');
    // Implement checkout functionality
}

// Function to populate menu items dynamically
function populateMenuItems(sectionId, items) {
    const section = document.getElementById(sectionId);
    const menuContainer = section.querySelector('.menu-container');

    items.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');
        menuItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <p>${item.name} - $${item.price.toFixed(2)}</p>
            <button onclick="addToCart('${item.name}', ${item.price})">Add to Cart</button>
        `;
        menuContainer.appendChild(menuItem);
    });
}

// Sample data for menu items
const breakfastItems = [
    { name: 'Breakfast 1', price: 10.00, image: 'istockphoto-1062513128-612x612.jpg' },
    // Add more breakfast items similarly
];

const lunchItems = [
    { name: 'Lunch 1', price: 15.00, image: 'download (13).jfif' },
    // Add more lunch items similarly
];

const supperItems = [
    { name: 'Supper 1', price: 20.00, image: 'korean-bibimbap-rice-dish-topped-with-a-fried-egg.webp' },
    // Add more supper items similarly
];

// Call function to populate menu sections
populateMenuItems('breakfast', breakfastItems);
populateMenuItems('lunch', lunchItems);
populateMenuItems('supper', supperItems);
