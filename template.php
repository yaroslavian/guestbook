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
      <form autocomplete="off"><br />
        <input id="name-field" name="user" type="text" placeholder="User" /><br />
        <textarea id="message-field" name="message"></textarea><br />
        <div id="send-button" class="passive" >Send message</div>
      </form>
    </div>

    <div id="message-board"></div>
    <div id="show-more">Show more</div>
    <div id="scroll-top">Scroll top</div>

</body>
<script type="text/javascript" src="script.js"></script>
</html>
