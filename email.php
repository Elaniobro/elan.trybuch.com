<?php
$name = $_POST['fullName'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];
$headers = 'From: my website' . "\r\n" . 'Reply-To: ' .$emailFrom. "\r\n" .
    'X-Mailer: PHP/' . phpversion();
		
mail("elan@trybuch.com" , $subject, "name:\r" . $name . "\r\n\r\nsubject:\r\r\n\r\nmessage:\r" .$message . "\r\n\r\ne-mail:\r" . $email, $headers);
?>