<?php
include 'config.php';

class Page {
  public $title;
  private $db;
  // private $db;

  public function query_db($query){
    $mysqli = new mysqli($this->db['server'], $this->db['user'], $this->db['pass'], $this->db['name']);
    $res = $mysqli->query($query);
    return $res;
  }

  function __construct($title, $db) {
    $this->title = $title;
    $this->db = $db;
  }
}

$page = new Page('Guestbook',$config['db']);

?>
