<!DOCTYPE html>
<html>
<head>
    <title><?php echo $page->title; ?></title>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="style/style.css" />
</head>
<body>

<!-- CONTROL PANEL -->
  <div id="control-panel">
    <div id="form">
      <div id="logo"><?php echo strtoupper($page->title) ?></div>
      <!-- <div id="register-link">Sign up</div> -->
      <div id="login-link">Sign in</div>
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

  <div id="popup-form-wrapper">
<!-- LOGIN FORM -->
    <div id="login-form-container">
      <form>
        <input name="username" type="text" placeholder="Login" />
        <input name="userpass" type="password" placeholder="Password" />
        <div id="login-submit">Sign in</div>
      </form>
    </div>
<!-- / LOGIN FORM -->

<!-- REGISTRATION FORM -->
    <div id="reg-form-container">
      <form>
        <input name="regname" type="text" placeholder="Login" />
        <input name="regpass" type="password" placeholder="Password" />
        <div id="reg-submit">Sign up</div>
      </form>
    </div>
<!-- / REGISTRATION FORM -->
  </div>

</body>
<script type="text/javascript" src="js/lib.js"></script>
<script type="text/javascript" src="js/guestbook.js"></script>
</html>
