<?php
#New user registrator
include '../lib.php';

  isset($_POST['username']) &&
    isset($_POST['password']) &&
      register_user($_POST['username'], $_POST['password'], $page);

function register_user($name, $pass, $page) {

#validation and sending query
  preg_match('/^[a-zA-Z0-9\_\.\@\$\']{3,20}$/', $name) &&
    preg_match('/(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*/', $pass) &&
      $hash = password_hash($pass, PASSWORD_DEFAULT);
      $page->query_db("INSERT INTO `users` (`username`, `password`) VALUES ('{$name}', '{$hash}');");
}

?>
