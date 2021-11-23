<?php

$tekstikenttä = "localhost";
$vastaus1 = "ensimmäinen vastaus";
$vastaus1Päämäärä = "1";
$vastaus2 = "toinen vastaus";
$vastaus2Päämäärä = "2";
$vastaus3 = "kolmas vastaus";
$vastaus3Päämäärä = "3";

$ID = $_POST["amount"];
if(ID==1){
        $data = array(
            $tekstikenttä => TINYTEXT,
            $vastaus1 => TINYTEXT,
            $vastaus1Päämäärä => INT(8),
            $vastaus2 =>TINYTEXT,
            $vastaus2Päämäärä => INT(8),
            $vastaus3 => TINYTEXT,
            $vastaus3Päämäärä => INT(8);
        );
        echo json_encode($data);
    }
// Check connection
if (!$con) {
 die("Connection failed: " . mysqli_connect_error());
}