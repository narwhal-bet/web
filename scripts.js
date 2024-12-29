// Toggle the navigation menu for mobile view
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Add hover effect to menu items
const menuItems = document.querySelectorAll('.nav-links a');
menuItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.backgroundColor = '#66bb6a';
    });
    item.addEventListener('mouseout', () => {
        item.style.backgroundColor = 'transparent';
    });
});

// Handle adding products to the cart
let cart = [];
const products = document.querySelectorAll('.product');
products.forEach((product, index) => {
    product.addEventListener('click', () => {
        const productName = `محصول ${index + 1}`;
        const productPrice = `${(index + 1) * 10000} تومان`;
        cart.push({ name: productName, price: productPrice });
        updateCartDisplay();
    });
});

// Update the cart display
function updateCartDisplay() {
    const cartMenu = document.querySelector('.cart-menu');
    cartMenu.innerHTML = '';
    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `${item.name} - ${item.price} <button onclick="removeFromCart(${index})">حذف</button>`;
        cartMenu.appendChild(cartItem);
    });
}

// Remove an item from the cart
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartDisplay();
}

// Ensure the bottom menu stays fixed
window.addEventListener('scroll', () => {
    const bottomMenu = document.querySelector('.bottom-menu');
    if (window.scrollY > 100) {
        bottomMenu.classList.add('scrolled');
    } else {
        bottomMenu.classList.remove('scrolled');
    }
});
