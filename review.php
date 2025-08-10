<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

$name = $_POST['name'];
$email = $_POST['email'];
$feedback = $_POST['feedback'];

// Database connection
$conn = new mysqli('localhost', 'root', '', 'db');
if ($conn->connect_error) {
    die('Connection Failed: ' . $conn->connect_error);
} else {
    $stmt = $conn->prepare("INSERT INTO review (name, email, feedback) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $name, $email, $feedback);
    $stmt->execute();
    echo "Review successfully!.";
    $stmt->close();
    $conn->close();
}
?>
