<!DOCTYPE html>
<html>
<head>
    <title>Admin page</title>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="style/style.css" />
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
  page.setRemoveButton = function(parent){
    var button = document.createElement(\'div\');
    button.style.width = button.style.height = \'15px\';
    button.style.backgroundColor = \'red\';
    button.style.border = \'2px solid white\';
    button.style.display = \'inline-block\';
    button.style.float = \'right\';

    button.onclick = function(){
      // removeMessage();
      this.parentNode.style.display="none";
    };
    parent.insertBefore(button, parent.childNodes[0]);
  };

  page.additions = {
    renderMessages : function(parent){
      console.log(\'!!!\');
      // console.log();

      this.setRemoveButton(parent);
    }
  };
</script>';
?>

<script type="text/javascript" src="js/admin.js"></script>
</html>
