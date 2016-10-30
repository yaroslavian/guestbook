#!/bin/bash

DB_SERVER=database_server
DB_NAME=database_name
DB_USER=database_user
DB_PASS=database_password

mysql -u $DB_USER -p$DB_PASS $DB_NAME < DB-dump.sql;

echo "<?php 
	\$config = array( 
		'db' => array( 
			'server' => '$DB_SERVER', 
			'name' => '$DB_NAME',
			'user' => '$DB_USER',
			'pass' => '$DB_PASS' 
		) 
	); 
?>" > ../config.php

