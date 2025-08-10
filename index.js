

let searchform = document.querySelector('.search-form');
let shopping_cart = document.querySelector('.shopping_cart');


document.querySelector('#search_btn').onclick = () => {
    searchform.classList.toggle('active');
};

document.querySelector('#cart').onclick = () => {
    shopping_cart.classList.toggle('active');
};

  
let loginform=document.querySelector('.login-form');

document.querySelector('#login-btn').onclick =() =>
{
    loginform.classList.toggle('active');
}

//new js
document.querySelector('.login-form').addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission

    // Simulate login validation
    const email = document.querySelector(".login-form input[type='email']").value;
    const password = document.querySelector(".login-form input[type='password']").value;

    if (email && password) {
        alert("Login Successful! Please provide your information.");
        
        // Hide login form and show buyer info form
        document.querySelector('.login-form').style.display = "none"; // Hide login form
        document.querySelector('.buyer-info-form').style.display = "block"; // Show buyer info form

        // Display pop-up message after showing buyer info form
        setTimeout(function() {
            document.getElementById('popupMessage').style.display = "block"; // Show the pop-up message
        }, 500); // Delay to give time for the form transition
    } else {
        alert("Please enter valid login credentials.");
    }
});

// Close the pop-up message
document.getElementById('closePopup').addEventListener("click", function() {
    document.getElementById('popupMessage').style.display = "none";
});

//new js end

let menulist=document.querySelector('.list');

document.querySelector('#bars').onclick =() =>
{
    menulist.classList.toggle('active');
}


const shop=document.getElementById('shop');


// let genrateShop = () => {
//     shop.innerHTML="ddh"
// }

// genrateShop()