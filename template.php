<!DOCTYPE html>
<html>
<head>
    <title><?php echo $page->title; ?></title>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="style.css" />
</head>
<body>
    <h2><?php echo $page->title ?></h2>

    <div id="form">
      <form action="index.php" method="get"><br />
        <input id="name-field" name="user" type="text" placeholder="User" /><br />
        <textarea id="message-field" name="message"></textarea><br />
        <input id="submit-button" type="submit" disabled />
      </form>
    </div>

    <div id="message-board">
      <?php $page->get_messages($config['db']); ?>
    </div>
</body>
<script type="text/javascript" src="script.js"></script>
</html>
