<?php

class Page {
     function __construct($title) {
        $this->title = $title;
    }
}

$page = new Page('Guestbook');

//test array of messages
$messages = array(
  ['name' => 'User1', 'message' => 'Hi there! I\'m here!'],
  ['name' => 'User2', 'message' => 'What\'s up BRO!'],
  ['name' => 'User3', 'message' => 'Just third message. Nothing else'],
);

?>
