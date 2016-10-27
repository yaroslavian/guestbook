<?php
include 'lib.php';

if(isset($_GET['id'])) {
  get_messages(array('id' => $_GET['id'], 'page' => $page));
} else get_messages(array('id' => false, 'page' => $page));

function get_messages($arg) {
  $page = $arg['page'];
  $id = $arg['id'];

  if($id) {
    $query = "SELECT `id`, `user`, `message`, `date` FROM `messages` WHERE id <".$id." ORDER BY id DESC LIMIT 10";
  } else {
    $query = "SELECT `id`, `user`, `message`, `date` FROM `messages` ORDER BY id DESC LIMIT 10";
  }

  $res = $page->query_db($query);

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
