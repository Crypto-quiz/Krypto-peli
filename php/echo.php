     <?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "kryptodatabase";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
 // echo json_encode($servername); // Palautettava viesti virhe tilanteessa
  die("Connection failed: " . $conn->connect_error);
}

     $haettavakysymys = $_POST['id'];
     

     $sql = "SELECT * FROM kysymykset WHERE kysymysid = '".$haettavakysymys."'";
     $result = $conn->query($sql);
     $row = $result->fetch_assoc();
     echo json_encode($row, JSON_UNESCAPED_UNICODE ); // Koraa tämä SQL haullasi JSON encode pystyy palauttamaan lähes mitä tahansa
    
    
    $conn->close();
    ?>