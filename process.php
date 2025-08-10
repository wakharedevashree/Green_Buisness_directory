<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

$email = $_POST['email'];
$password = $_POST['password'];

// Database connection
$conn = new mysqli('localhost', 'root', '', 'db');
if ($conn->connect_error) {
    die('Connection Failed: ' . $conn->connect_error);
} else {
    $stmt = $conn->prepare("INSERT INTO registration (email, password) VALUES (?, ?)");
    $stmt->bind_param("ss", $email, $password);
    $stmt->execute();
    echo "Sign Up successful.";
    $stmt->close();
    $conn->close();
}
?>
