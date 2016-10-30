<?php
#New user registrator
include '../lib.php';

if(isset($_POST['username']) && isset($_POST['password'])) {
  register_user($_POST['username'], $_POST['password'], $page);
}

#error_log($_POST['username']);
#error_log($_POST['password']);

function register_user($name, $pass, $page) {
  $query = "INSERT INTO `users` (`username`, `password`)
    VALUES ('{$name}', '{$pass}');";
#  error_log($query);
  $page->query_db($query);
}

?>
