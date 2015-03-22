<?php

    $to = 'denys.bojko@gmail.com';
    $subject = 'Заказ на перезвон';
    $message = "Имя: ".$_POST["client-name"]."\n"."Телефон: ".$_POST["phone-num"];
    $headers = 'From: Woodluck Support <support@woodluck.com.ua/>' . "\r\n";
 
    mail($to, $subject, $message, $headers);
    echo "Мы вам скоро перезвоним.";
	
?>