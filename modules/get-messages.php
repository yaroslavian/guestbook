<?php
include '../lib.php';

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

  $json = array( "messages" => array() );

  while($row = $res->fetch_assoc()) {
      array_push($json['messages'], array(
          'id' => $row['id'],
          'date' => $row['date'],
          'user' => $row['user'],
          'message' => $row['message']
      ));
    }

  echo json_encode($json);
}

?>
