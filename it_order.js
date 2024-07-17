// order-script.js

document.addEventListener('DOMContentLoaded', function() {
    const orderForm = document.getElementById('order-form');

    orderForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Fetch form data
        const formData = new FormData(orderForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const phone = formData.get('phone');
        const address = formData.get('address');

        // You can further process the data here (e.g., send it to a server, store in localStorage, etc.)
        console.log('Order submitted:');
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Phone:', phone);
        console.log('Address:', address);

        // Example: Redirect to a thank you page
        // window.location.href = 'thank-you.html';
    });
});
