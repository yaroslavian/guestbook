# guestbook
Simple **PHP** **AJAX** guestbook.

:warning: _**Incomplete. In development.**_ :warning:

##Installation requirements:
- php5+
- MySQL
- Webserver

##Installation steps:

1. Create DB in MySQL.
  
  ```sql
    CREATE DATABASE `db_name`;
  ```
  
2. Change directory from ___project root___ to ___installation___  
  
  ```shell
    cd installation
  ```
  
3. Edit file __install.sh__. Replace the test values of the database options with real ones as shown below.
  
  ```shell
    DB_SERVER=real_database_server
    DB_NAME=real_database_name
    DB_USER=real_database_user
    DB_PASS=real_database_password
  ```
  
4. Execute __install.sh__ file from current directory.
  
  ```shell
    ./install.sh
  ```
