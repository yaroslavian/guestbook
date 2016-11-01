<?php
  include '../lib.php';
  session_start();

  if(isset($_POST['username']) && isset($_POST['userpass'])) {
    $query = "SELECT `id`, `username`, `password` FROM `users` WHERE username=\"".$_POST['username']."\" AND password=\"".$_POST['userpass']."\"";

    error_log($query);

    if(null !== ($res=$page->query_db($query))) {
      if($row = $res->fetch_assoc()){
        $_SESSION['username'] = $row['username'];
        echo '{ "status": 1 }';
      } else echo '{ "status": 0 }';
    } else '{ "status": 0 }';

  } else '{ "status": 0 }';
?>
