#!/bin/bash
#Should be runned from project_root/installation/
echo "Please, input database data:"
read -p "DB SERVER: " DB_SERVER
read -p "DB NAME: " DB_NAME
read -p "DB USER: " DB_USER
read -p "DB PASSWORD " DB_PASS

mysql -u $DB_USER -p$DB_PASS $DB_NAME < DB-dump.sql

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


#read -p "ADMIN LOGIN FOR GUESBOOK: " ADMIN_LOGIN
ADMIN_LOGIN=admin

echo "Please, set 'admin' user password for guestbook:"
read -p "PASSWORD: " ADMIN_PASS
read -p "CONFIRM PASSWORD: " ADMIN_PASS_CONFIRM

until [ "$ADMIN_PASS" == "$ADMIN_PASS_CONFIRM" ]
do
	echo "Passwords are not the same. Please, one more time:"
	read -p "PASSWORD: " ADMIN_PASS
	read -p "CONFIRM PASSWORD: " ADMIN_PASS_CONFIRM
done

PASS_HASH="$(php -r "echo password_hash('$ADMIN_PASS', PASSWORD_DEFAULT);")"
mysql -u $DB_USER -p$DB_PASS -e "INSERT INTO \`users\`(\`username\`, \`password\`) VALUES ('$ADMIN_LOGIN', '$PASS_HASH')" $DB_NAME

echo "Installtion complete! :)"
