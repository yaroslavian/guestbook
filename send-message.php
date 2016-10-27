<?php
  include 'lib.php';

  # Check for $_GET request to send new message. If ok, write it to the DB
  if(isset($_GET['user']) && isset($_GET['message'])){
    write_message($_GET['user'],$_GET['message'], $page);
  }

  function write_message($user, $message, $page){
    $query = 'INSERT INTO `messages` (`user`,`message`) VALUES  (\''.$user.'\',\''.$message.'\')';
    $res = $page->query_db($query);
  }

?>
