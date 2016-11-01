<?php
  include '../lib.php';

  if(isset($_POST['username']) && isset($_POST['userpass'])) {
    if($_POST['username'] == 'admin' && $_POST['userpass'] == 12345) {
      session_start();
      $_SESSION['username'] = 'admin';
      echo '{ "status": 1 }';
    }
  }
?>
