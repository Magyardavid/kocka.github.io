<?php
header("Access-Control-Allow-Origin: *"); 
header("Access-Control-Allow-Methods: POST"); 
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    echo ("test");
    if (isset($_POST['data'])) {
        $number = $_POST['data'];
        $command = escapeshellcmd("python3 test.py {$number}");
        $output = shell_exec($command);

        echo 'A szám sikeresen elküldve és feldolgozva a PHP-ban. Szám: ' . $number;
    } else {
        echo 'Hiba: Hiányzó szám paraméter.';
    }
}
?>
