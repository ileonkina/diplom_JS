<?php
$obj = $_POST;
$file = fopen("hh.css","r+");
$str = file_get_contents("hh.css");
$str = $str."#".$obj['id']." {";
foreach ($obj as $key => $value) {
	if ($key != 'id') {
		$str = $str.$key.":".$value.";";
	}
}
$str = $str."}";
fwrite($file, $str);
fclose($file);
//print $a;
//rename("hh.txt","hh.css");
?>