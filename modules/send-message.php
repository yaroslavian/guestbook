<?php
  include '../lib.php';
  session_start();
  error_log($_SESSION['username']);
  # Check for $_GET request to send new message. If ok, write it to the DB
  isset($_GET['message']) && write_message((isset($_SESSION['username']) ? $_SESSION['username'] : 'Guest'), $_GET['message'], $page);

  function write_message($user, $message, $page){
    $query = 'INSERT INTO `messages` (`user`,`message`) VALUES  (\''.$user.'\',\''.$message.'\')';
    $res = $page->query_db($query);
  }

?>
