const shop = document.getElementById('shop');

// Retrieve existing basket data or create a new empty array
let basket = JSON.parse(localStorage.getItem('data')) || [];

// Generate the shop items based on fruit_data
/*let generateShop = () => {
    shop.innerHTML = fruit_data.map((x) => {
        let { id, name, quantity, price, img } = x;
        return `
        <div class='shop_item' id='product-id-${id}'>
            <img src='${img}' alt='${name}'/>
            <div class='product_info'>
                <h1>${name}</h1>
                <p>${quantity}</p>
                <p>${price}</p>
                <button onclick="add_to_cart(${id}, '${name.replace(/'/g, "\\'")}', '${quantity.replace(/'/g, "\\'")}', ${price.replace(" ₹", "")}, '${img.replace(/'/g, "\\'")}')">Add to cart</button>
            </div>
        </div>
        `;
    }).join('');
};*/


let generateShop = () => {
    shop.innerHTML = fruit_data.map((x) => {
        let { id, name, quantity, price, img } = x;
        return `
        <div class='shop_item' id='product-id-${id}'>
            <img src='${img}' alt='${name}' />
            <div class='product_info'>
                <h1>${name}</h1>
                <p>Quantity: ${quantity}</p>
                <p>Price: ${price} ₹</p>
                <button onclick="add_to_cart(${id}, '${name.replace(/'/g, "\\'")}', '${quantity}', ${price}, '${img.replace(/'/g, "\\'")}')">Add to cart</button>
            </div>
        </div>
        `;
    }).join('');
};

let add_to_cart = (id, name, quantity, price, img) => {
    let existingItem = basket.find((item) => item.id === id);

    if (existingItem) {
        existingItem.item += 1; // Increment the quantity if the item already exists
    } else {
        // Add new item to the basket if it doesn't exist
        basket.push({
            id: id,
            item: 1,
            name: name,
            quantity: quantity,
            price: price,
            img: img
        });
    }

    // Update local storage with the new basket
    localStorage.setItem('data', JSON.stringify(basket));

    // Update the cart amount displayed
    calculate();
};

// Function to calculate the total items in the cart and update the display
let calculate = () => {
    let cart_icon = document.getElementById('cart_amount');
    let cart_amount = basket.reduce((total, item) => total + item.item, 0); // Calculate the total number of items
    cart_icon.innerHTML = cart_amount; // Update the cart icon with the total number of items
};

// Initial setup: calculate the current total and generate the shop
calculate();
generateShop();

