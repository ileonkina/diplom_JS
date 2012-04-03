<?php
$a = $_POST;
$file = fopen("hh.txt","r+");
fwrite($file, "hm");
fclose($file);
//rename("hh.txt","hh.css");
?>