<?php
$userId = $_POST['userId'] ?? '';
$pass = $_POST['pass'] ?? '';
// Connect to DB with PDO or mysqli
$db = new mysqli('localhost','root','Vr1@jado','admin_panel');
$stmt = $db->prepare("SELECT COUNT(*) FROM admin WHERE username = ? AND password = ?");
$stmt->bind_param('ss', $userId, $pass);
$stmt->execute();
$stmt->bind_result($count);
$stmt->fetch();
$stmt->close();

// Return JSON
echo json_encode(['match' => $count > 0]);