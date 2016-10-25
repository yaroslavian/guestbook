<?php

class Page {
  public function get_messages($db){
    $mysqli = new mysqli($db['server'], $db['user'], $db['pass'], $db['name']);
    $res = $mysqli->query("SELECT `id`, `user`, `message`, `date` FROM `messages` ORDER BY id DESC LIMIT 10");
    while($row = $res->fetch_assoc()) {
      echo '<div class="message-block"><span style="font-size:0.8em" class="user-name">'.$row['date'].'</span><br /><span class="user-name">'.$row['user'].'</span>:<br /><span>'.$row['message'].'</span></div>';
    }
  }
  public function write_message($db, $user, $message){
    $mysqli = new mysqli($db['server'], $db['user'], $db['pass'], $db['name']);
    $query = 'INSERT INTO `messages` (`user`,`message`) VALUES  (\''.$user.'\',\''.$message.'\')';
    $res = $mysqli->query($query);
  }

  function __construct($title) {
    $this->title = $title;
  }
}

$page = new Page('Guestbook');

?>
