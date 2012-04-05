<?php
$obj = $_POST;
$file = fopen("modified.css","r+");
$str = file_get_contents("modified.css");
$temp = "#".$obj['id']." {";
foreach ($obj as $key => $value) {
	if ($key != 'id') {
		$temp = $temp.$key.":".$value.";";
	}
}
$temp = $temp."}";
$position = strpos($str,"#".$obj['id']);
if ($position === false) {
	$str = $str.$temp;
} else {
	$length = strpos($str,"}",$position) - $position;
	$substring = substr($str,$position,$length + 1);
	$str = str_replace($substring,$temp,$str);
}
fwrite($file, $str);
fclose($file);
?>