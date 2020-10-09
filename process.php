<?php
  if (isset($_POST['email']))  {
  
    //Email information
    $admin_email = "info@giftangelsfoundation.org";
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    
    //send email
    mail($admin_email, "New Message from Gift Angels Website", $message . ' - This message was sent by: ' . $name, "From:" . $email);
    
    header('Location: http://giftangelsfoundation.org/success.html');
  }