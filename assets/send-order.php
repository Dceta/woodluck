<?php

    $name = $_POST["client-name"];
    $phone = $_POST["phone-num"];

    $from = "Woodluck Support <support@woodluck.com.ua>";
    $to = 'denys.bojko@gmail.com';
    $subject = 'Заказ на перезвон';
    $body = "Имя: ".$name."\n"."Телефон: ".$phone;


    $host = "customers.freehosting.com";
    $username = "support@woodluck.com.ua";
    $password = "8kHjU12p6u";


    $headers = array ('From' => $from,
           'To' => $to,
           'Subject' => $subject);
         $smtp = Mail::factory('smtp',
           array ('host' => $host,
             'auth' => true,
             'username' => $username,
             'password' => $password));

         $mail = $smtp->send($to, $headers, $body);

         if (PEAR::isError($mail)) {
           echo("<p>" . $mail->getMessage() . "</p>");
          } else {
           echo("Мы вам скоро перезвоним.");
          }

    /*$headers = 'From: Woodluck Support <support@woodluck.com.ua/>' . "\r\n";
 
    mail($to, $subject, $message, $headers);
    echo "Мы вам скоро перезвоним.";*/






?>