<?php
    require_once('pjlink.class.php');
    
    $host = "BEAMER IP";
    $password = "PASSWORT";
    
    $pjlink = new PJLink();
    $pjlink->setDevice($host, $password, 10, 4352);
    
    $action = $_POST['action'];

    if($action === "on") {
        $pjlink->muteVideoAudioOff();
    }

    if($action === "off") {
        $pjlink->muteVideoAudioOn();
    }
?>