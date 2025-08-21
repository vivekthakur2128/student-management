<?php

// Retrieve and sanitize input
$name = trim($_POST['name']);
$fathername = trim($_POST['fathername']);
$searchedColumnName = $name ? 'name' : 'fathername';
$searchedColumnValue = $name ? $name : $fathername;

// database connection
$servername = "localhost";
$username = "root";
$password = "Vr1@jado";
$dbname = "students";
$tableName = "students_info";
$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die(json_encode(["error" => "Connection failed: " . $conn->connect_error]));
}
// extract table header of database table
$sql = "DESCRIBE students_info";
$columnsName = $conn->query($sql);
if ($columnsName->num_rows > 0) {
    while($row = $columnsName->fetch_assoc()) {
        echo $row["Field"];
        $tableHeader[] = $row["Field"];
    }
} else {
    echo "<th>No columns found</th>";
}

// extract data from the database
$stmt = mysqli_prepare($conn, "SELECT * FROM students_info WHERE `$searchedColumnName` = ?");
mysqli_stmt_bind_param($stmt, 's', $searchedColumnValue);
mysqli_stmt_execute($stmt);

// 4. Retrieve matching rows data
$result = mysqli_stmt_get_result($stmt);
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
            echo "Match found:\n";
            foreach ($row as $column => $value) {
                echo "$column: $value\n";
            }
    }
} else {
    echo "No records found for `$searchedColumnName` as `$searchedColumnValue`";
}

// 5. Cleanup
mysqli_free_result($result);
mysqli_stmt_close($stmt);
mysqli_close($conn);
?>