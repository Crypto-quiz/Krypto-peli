     <?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "mySQL";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
 // echo json_encode($servername); // Palautettava viesti virhe tilanteessa
  die("Connection failed: " . $conn->connect_error);
}
    else{
    $kysymys = SELECT kysymysteksti FROM `kysymykset` WHERE kysymysid = 0;
    echo json_encode($kysymys);
    }

    ?>