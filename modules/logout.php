<?php
  session_start();
  if(isset($_SESSION['username'])) {
      error_log($_SESSION['username']);
      session_destroy();
  }
?>
