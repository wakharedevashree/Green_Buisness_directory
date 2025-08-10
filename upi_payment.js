const totalPriceElement = document.getElementById('total_price');
const paymentForm = document.getElementById('payment_form');

// Fetch the basket from localStorage
let basket = JSON.parse(localStorage.getItem('data')) || [];

// Calculate and display total price
const calculateTotalPrice = () => {
  if (basket.length === 0) {
    totalPriceElement.innerHTML = 'Your cart is empty.'; // Wrap in quotes
    paymentForm.style.display = 'none'; // Hide form if no items
    return;
  }

  const totalAmount = basket.reduce((total, item) => total + (item.item * item.price), 0);
  totalPriceElement.innerHTML = `Total Price: ₹${totalAmount}`; // Use backticks
};

// Handle form submission
paymentForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent actual form submission

  // Get UPI credentials and display confirmation
  const upiId = document.getElementById('upi-id').value;
  const upiCredentials = document.getElementById('upi-credentials').value;

  if (!upiId) {
    alert('Please enter your UPI ID.');
    return;
  }

  alert(`UPI payment initiated. Thank you for your purchase using UPI ID: ${upiId}`); // Use backticks

  // Clear basket and redirect to home page
  localStorage.removeItem('data');
  window.location.href = 'index.html';
});

// Initialize the page
calculateTotalPrice();
