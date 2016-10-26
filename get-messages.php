<?php

include './config.php';
$db = $config['db'];
$mysqli = new mysqli($db['server'], $db['user'], $db['pass'], $db['name']);
$res = $mysqli->query("SELECT `id`, `user`, `message`, `date` FROM `messages` ORDER BY id DESC LIMIT 10");

echo '{ "messages" : [';
$first_element = true;
while($row = $res->fetch_assoc()) {
  if($first_element) {
    $first_element = false;
  } else echo ',';

  echo '{
    "date":"'.$row['date'].'",
    "user" : " '.$row['user'].'",
    "message":"'.$row['message'].'"
  }';
}
echo '] }';

?>
