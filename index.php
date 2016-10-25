<?php
  include './config.php';
  include './lib.php';

# Check for $_GET request to send new message. If ok, write it to the DB
  if(isset($_GET['user']) && isset($_GET['message'])){
    $page->write_message($config['db'], $_GET['user'],$_GET['message']);
  }

# Building page according to template
    include './template.php';
?>
