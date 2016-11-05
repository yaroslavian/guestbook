#!/bin/bash
#Should be runned from project_root/installation/

read -p "DB SERVER: " DB_SERVER
read -p "DB NAME: " DB_NAME
read -p "DB USER: " DB_USER
read -p "DB PASSWORD " DB_PASS

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
?>" > ../config1.php
