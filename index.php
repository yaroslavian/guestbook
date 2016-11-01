<?php
  include './lib.php';
  session_start();
  // var_dump ($_SESSION);

# Include template depends of session current session username
  if(isset($_SESSION['username']) && $_SESSION['username'] == 'admin') {
    include 'templates/admin.php';
  } else include 'templates/guestbook.php';

?>
