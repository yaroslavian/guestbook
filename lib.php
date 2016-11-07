<?php
include 'config.php';

class Page {
  public $title;
  private $db;
  // private $db;

  public function query_db($query){
    $mysqli = new mysqli($this->db['server'], $this->db['user'], $this->db['pass'], $this->db['name']);
    if($mysqli->connect_errno) {
        echo 'ERROR: DATABASE IS UNREACHABLE! ';    
    } else if (!($res = $mysqli->query($query))) {
        echo 'ERROR: CAN NOT EXECUTE THIS QUERY! ---> QUERY: '.$query.' ---> ERROR: '.$mysqli->errno;
    }

    return $res;
  }

  function __construct($title, $db) {
    $this->title = $title;
    $this->db = $db;
  }
}

$page = new Page('Guestbook',$config['db']);

?>
