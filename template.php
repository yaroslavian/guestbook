<!DOCTYPE html>
<html>
<head>
    <title><?php echo $page->title; ?></title>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="style.css" />
</head>
<body>
    <h2><?php echo $page->title ?></h2>

    <div id="message-board">
      <?php foreach ($messages as $message) {
        echo '<div class="message-block">';
        echo "<span class=\"user-name\">{$message['name']} : </span>";
        echo "<span class=\"message-text\">{$message['message']}</span>";
        echo '</div>';
      } ?>

    </div>

    <div id="form">
      <form action="index.php" method="get"><br />
        <input id="name-field" name="name" type="text" placeholder="User" /><br />
        <textarea id="comment-field" name="comment"></textarea><br />
        <input id="submit-button" type="submit" disabled />
      </form>
    </div>
</body>
<script type="text/javascript" src="script.js"></script>
</html>
