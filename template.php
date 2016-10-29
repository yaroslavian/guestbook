<!DOCTYPE html>
<html>
<head>
    <title><?php echo $page->title; ?></title>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="style.css" />
</head>
<body>
    <h2><?php echo $page->title ?></h2>

<!-- CONTROL PANEL -->
  <div id="control-panel">
    <div id="form">
      <div id="register-link">Sign up</div>
      <form autocomplete="off">
        <div class="wrapper">
          <div class="left-side">
            <input id="name-field" name="user" type="text" placeholder="User" />
            <div id="send-button" class="passive" >Send message</div>
          </div>
          <div class="right-side">
            <textarea id="message-field" name="message"></textarea>
          </div>
        </div>
      </form>
    </div>
  </div>
<!-- / CONTROL PANEL -->

    <div id="message-board"></div>
    <div id="scroll-top">Scroll top</div>

<!-- REGISTRATION FORM -->
  <div id="reg-form-wrapper">
    <div id="reg-form-container">
      <form>
        <input name="regname" type="text" placeholder="Login" />
        <input name="regpass" type="password" placeholder="Password" />
        <div id="reg-submit">Sign up</div>
      </form>
    </div>
  </div>

</body>
<script type="text/javascript" src="script.js"></script>
</html>
