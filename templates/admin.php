<!DOCTYPE html>
<html>
<head>
    <title>Admin page</title>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="style/style.css" />
    <link rel="icon" href="favicon.ico" />
</head>
<body>

<?php
  echo '<h1>This is admin page</h1>';
?>
  <div id="logout">Logout</div>
  <div id="message-board" class="admin"></div>
  <div id="scroll-top">Scroll top</div>

</body>


<script type="text/javascript" src="js/lib.js"></script>

<?php
// Additional JS variables;
echo '<script type="text/javascript">;
  page.deleMessage = function(messageId) {
    //id
    var url = "modules/delete-message.php?messageid="+messageId;
    var ajax = new XMLHttpRequest();
    ajax.open("GET", url);
    ajax.send();
  };

  page.setRemoveButton = function(parent) {
    var messageId = parseInt(parent.getElementsByClassName(\'message-id\')[0].innerHTML);
    var button = document.createElement(\'div\');
    button.classList.add(\'delete-message\');

    var that=this;
    button.onclick = function(){
      that.deleMessage(messageId);
      this.parentNode.style.display="none";
    };
    parent.insertBefore(button, parent.childNodes[0]);
  };

</script>';
?>

<script type="text/javascript" src="js/admin.js"></script>
</html>
