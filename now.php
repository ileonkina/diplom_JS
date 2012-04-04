<?php
//$a = $_POST;
$file = fopen("hh.css","r+");
$str = file_get_contents("hh.css");
$str = $str."paaaaaaam";
fwrite($file, $str);
fclose($file);
//rename("hh.txt","hh.css");
?>