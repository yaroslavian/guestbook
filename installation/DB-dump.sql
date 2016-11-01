#CREATE AND FILL MESSAGES TABLE
DROP TABLE IF EXISTS `messages`;
CREATE TABLE `messages` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `user` varchar(255),
  `message` text,
  `date` timestamp,
  PRIMARY KEY(`id`)
);

#insert test values
INSERT INTO `messages` (`user`,`message`)
  VALUES
    ('User1', 'Here is some text'),
    ('Mr User', 'Then some other text'),
    ('Just Another Guy', 'Here comes some more text. And more. And more...'),
    ('Mr Mister', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');


#CREATE AND FILL USER TABLE
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(255),
  `password` text,
  `reg_date` timestamp,
  PRIMARY KEY(`id`)
);

#insert test values
INSERT INTO `users` (`username`, `password`)
  VALUES
    ('admin', '54321'),
    ('user', '12345');
    ('user2', '11111');
