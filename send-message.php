<?php
  include 'config.php';
  $db = $config['db'];

  # Check for $_GET request to send new message. If ok, write it to the DB
  if(isset($_GET['user']) && isset($_GET['message'])){
    write_message($config['db'], $_GET['user'],$_GET['message']);
  }

  function write_message($db, $user, $message){
    $mysqli = new mysqli($db['server'], $db['user'], $db['pass'], $db['name']);
    $query = 'INSERT INTO `messages` (`user`,`message`) VALUES  (\''.$user.'\',\''.$message.'\')';
    $res = $mysqli->query($query);
  }

?>
