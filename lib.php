<?php

class Page {
     function __construct($title) {
        $this->title = $title;
    }
}

$page = new Page('Guestbook');

#test array of messages
$messages = array(
  ['name' => 'User1', 'message' => 'Hi there! I\'m here!'],
  ['name' => 'User2', 'message' => 'What\'s up BRO!'],
  ['name' => 'User3', 'message' => 'Just third message. Nothing else'],
);

# Add $_GET[] fields to messages array as a test example
function catch_form_data($arr) {
  if(isset($_GET['name']) && isset($_GET['comment'])) {
    if (strlen($_GET['comment'])) {
      array_push($arr, [
        'name' => $_GET['name'],
        'message' => $_GET['comment']
      ]);
    }
  }
  return $arr;
}


?>
