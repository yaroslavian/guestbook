<?php
    include './lib.php';
# Catching form data
    $messages = catch_form_data($messages);

# Building page according to template
    include './template.php';
?>
