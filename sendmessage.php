<?php
if($_POST["Message"]) {
mail("sample@sample.com", "Here is the sample subject line", $_POST["Insert your message"]. "From:test@testcom");
}
?>