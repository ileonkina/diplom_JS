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
$position = strpos("#".$obj['id']);
if ($position == FALSE) {
	$str = $str.$temp;
} else {
	str_replace(substr($str,$position,strpos($str,"}",$position) - $position),$temp,$str);
}
fwrite($file, $str);
fclose($file);
?>