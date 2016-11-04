<?php
  include '../lib.php';
  session_start();

  isset($_SESSION['username']) &&
    $_SESSION['username'] === 'admin' &&
      isset($_GET['messageid']) &&
        remove_message($_GET['messageid'], $page);

  function remove_message($id, $page) {
    $query = "DELETE FROM `messages` WHERE `id`=".$id;
    $page->query_db($query);

  }
?>
