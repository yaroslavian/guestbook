<?php
include './config.php';
$db = $config['db'];

if(isset($_GET['id'])) {
  get_messages(array('id' => $_GET['id'], 'db' => $db));
} else get_messages(array('id' => false, 'db' => $db));

function get_messages($arr) {
  $db = $arr['db'];
  $id = $arr['id'];
  $mysqli = new mysqli($db['server'], $db['user'], $db['pass'], $db['name']);
  if($id) {
    $query = "SELECT `id`, `user`, `message`, `date` FROM `messages` WHERE id <".$id." ORDER BY id DESC LIMIT 10";
  } else {
    $query = "SELECT `id`, `user`, `message`, `date` FROM `messages` ORDER BY id DESC LIMIT 10";
  }
  $res = $mysqli->query($query);

  echo '{ "messages" : [';
  $first_element = true;
  while($row = $res->fetch_assoc()) {
    if($first_element) {
      $first_element = false;
    } else echo ',';

    echo '{
      "id":"'.$row['id'].'",
      "date":"'.$row['date'].'",
      "user" : " '.$row['user'].'",
      "message":"'.$row['message'].'"
    }';
  }
  echo '] }';
}



?>
