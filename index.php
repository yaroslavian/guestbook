<?php
  include './lib.php';

  # Include templte depends of "admin" parametr in $_GET
  if(isset($_GET['admin'])) include 'templates/admin.php';
  else include 'templates/guestbook.php';
  
?>
