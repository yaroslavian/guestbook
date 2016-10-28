<?php
#New user registrator
include 'config.php';
$db = $congig['db'];

if(isset($_POST['username']) && isset($_POST['password'])) {
  register_user($_POST['username'], $_POST['password']);
}

function register_user($name, $pass, $page) {
  $query = "INSERT INTO `users` (`username`, `password`)
    VALUES '{$name}', '{$pass}');";
  $page->query_db($query);
}

?>
