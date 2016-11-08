<?php
  include '../lib.php';
  session_start();

  if(isset($_POST['username']) && isset($_POST['userpass'])) {
    $query = "SELECT `id`, `username`, `password` FROM `users` WHERE username=\"".$_POST['username']."\"";

    if((null !== ($res=$page->query_db($query))) &&
        ($row = $res->fetch_assoc()) &&
          (password_verify($_POST['userpass'], $row['password']))) {
            $_SESSION['username'] = $row['username'];
            echo '{ "status": 1 }';
    } else '{ "status": 0 }';

  } else '{ "status": 0 }';
?>
