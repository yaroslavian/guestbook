# guestbook
Simple **PHP** **AJAX** guestbook.

_Test assignment. In development._

##Installation steps:

1. Create DB in MySQL.
  
  ```
    CREATE DATABASE `db_name`;
  ```
2. Restore DB-dump.sql to that DB.
  
  ```
    mysql -u user_name -ppassword db_name < DB-bump.sql
  ```
3. Replace the test values of the database options in config.php.tpl with the current ones and save it as config.php
  
  ```
    <?php
      $config = array(
        'db' => array(
        'server' => 'real_db_server_name',
        'name' => 'real_db_name',
        'user' => 'real_db_user',
        'pass' => 'real_db_password' )
      );
    ?>
  ```
