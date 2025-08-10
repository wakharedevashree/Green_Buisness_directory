let label = document.getElementById('label');
let shopping_cart = document.getElementById('shopping_cart');
let totalPriceElement = document.getElementById('total_price');

let basket = JSON.parse(localStorage.getItem('data')) || [];

let calculate = () => {
    let cartIcon = document.getElementById('cart_amount');
    cartIcon.innerHTML = basket.reduce((total, item) => total + item.item, 0); // Shows total quantity of all items
};

let generate_cart_item = () => {
    if (basket.length !== 0) {
        shopping_cart.innerHTML = basket.map((x) => {
            let { id, name, price, img, item } = x; // Include item for quantity
            return `
            <div class='cart_item'>
                <p>${name} (Quantity: ${item})</p>
                <div class="cart_item_img">
                    <img width='100px' src='${img}' alt='${name}'/>
                </div>
                <p>${price} ₹</p>
                <button class='rmv_btn' onclick="remove_from_cart('${id}')">Remove</button>
            </div>
            `;
        }).join('');
        total_amount(); 
    } else {
        shopping_cart.innerHTML = `<p class="empty-cart">Your cart is empty.</p>`;
        label.innerHTML = '';
        totalPriceElement.innerHTML = ''; 
    }
};

let remove_from_cart = (id) => {
    basket = basket.filter((x) => x.id != id);
    localStorage.setItem('data', JSON.stringify(basket));
    calculate();
    generate_cart_item();
};

// Function to calculate the total price of items in the cart
let total_amount = () => {
    if (basket.length !== 0) {
        // Calculate total amount by parsing price as an integer
        let totalAmount = basket.reduce((total, item) => 
            total + (item.item * parseInt(item.price)), 0);

        // Update the label area and total price section
        label.innerHTML = `Total Price: ${totalAmount} ₹`;
        totalPriceElement.innerHTML = `Total Price: ${totalAmount} ₹`; // Displaying total in cart section
    } else {
        label.innerHTML = '';
        totalPriceElement.innerHTML = ''; // Clear total price when cart is empty
    }
};

// Initial setup
calculate();
generate_cart_item();
