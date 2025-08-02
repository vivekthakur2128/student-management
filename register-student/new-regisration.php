<?php
$servername = "localhost";
$username = "root";
$password = "Vr1@jado";
$dbname = "students";

$conn = new  mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
        echo "database connection successful ";

    if ($_SERVER["REQUEST_METHOD"] === "POST") { // Check if the form was submitted via POST
        $fullname = $_POST['fullname'];
        $fathername = $_POST['fathername'];
        $email = $_POST['email'];
        $gender = $_POST['gender'];
        $phone = $_POST['phone'];
        $address = $_POST['address'];

        $stmt = $conn->prepare("INSERT INTO students_info (fullname, fathername, email, gender, phone, address) VALUES (?, ?, ?, ?, ?, ?)");
        $stmt->bind_param("ssssis", $fullname, $fathername, $email, $gender, $phone, $address);
        $stmt->execute();
        $stmt->close();

        // $sql = "INSERT INTO students_info (name, fahername, email, gender, phone, address) VALUES ('$fullname', '$fathername', '$email', '$gender', '$phone', '$address)";
        // if ($conn->query($sql) === TRUE) {
        // echo "New record created successfully.";
        // } else {
        // echo "Error: " . $conn->error;
        // }
    } 
    else{
        echo "form not submitted correctly";
    }

$conn->close();

?>