<?php
// Database connection
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "db";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if form data is set
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $payment_method = $_POST['payment_method'];

    if ($payment_method === 'credit_card') {
        $card_number = $_POST['card_number'];
        $expiry_date = $_POST['expiry_date'];
        $cvv = $_POST['cvv'];

        // Prepared statement for credit card details
        $stmt = $conn->prepare("INSERT INTO payments (name, email, payment_method, card_number, expiry_date, cvv) VALUES (?, ?, ?, ?, ?, ?)");
        $stmt->bind_param("ssssss", $name, $email, $payment_method, $card_number, $expiry_date, $cvv);
    } elseif ($payment_method === 'upi') {
        $upi_id = $_POST['upi_id'];

        // Prepared statement for UPI details
        $stmt = $conn->prepare("INSERT INTO payments (name, email, payment_method, upi_id) VALUES (?, ?, ?, ?)");
        $stmt->bind_param("ssss", $name, $email, $payment_method, $upi_id);
    } else {
        echo "Invalid payment method.";
        exit();
    }

    // Execute query
    if ($stmt->execute()) {
        echo "Payment details saved successfully!";
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
}

$conn->close();
?>
