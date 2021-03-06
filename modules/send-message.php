<?php
include '../lib.php';
session_start();

# Check for $_GET request to send new message. If ok, validate and write it to the DB
isset($_GET['message']) &&
  write_message(
    (isset($_SESSION['username']) ? $_SESSION['username'] : 'Guest'),
    $_GET['message'],
    $page
  );

function write_message($user, $message, $page){
  preg_match('/^.{1,100}$/s', $message) &&
    $page->query_db('INSERT INTO `messages` (`user`,`message`) VALUES  (\''.$user.'\',\''.$message.'\')');
}

?>
