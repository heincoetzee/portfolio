<?php
    $username = htmlentities($_POST["username"]);
    $email = htmlentities($_POST["email"]);
    $message = htmlentities($_POST["message"]);

    $to = "heincoetzee11@gmail.com";
    $subject = "Test";

    $headers = array(
        "From" => $email,
    );

    mail($to, $subject, $message, $headers);

    echo "Email has been send!";
?>