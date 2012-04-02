<?php die(); ?>
<m:html>
<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Pragma" content="no-cache">
	<meta http-equiv="Expires" content="0">
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<meta name="keywords" content="<m:keywords>">
	<meta name="description" content="<m:description>">
	<meta name="generator" content="<m:engine>">
	<title><m:title></title>
	<m:favicon>
	<link rel="stylesheet" type="text/css" href="<m:style>" media="all">
	<m:js>
	<m:rss>
	<script type="text/javascript" src="/Meruert/themes/main-test/jquery-1.7.1.js"></script>
	<script type="text/javascript" src="/Meruert/themes/main-test/test.js"></script>
</head>
<body class="<m:body:class>" id="<m:body:id>">
	<div id="canvas" class="editable">
		<div id="main">
			<div id="top" class="editable" class="editable">
				<div id="management" class="editable">
					<m:management>
				</div>
				<div id="header" class="editable">
					<m:caption>
				</div>
				<div id="menu">
					<m:menu>
				</div>
			</div>
			<div id="central">
				<div id="content" class="editable">
					<m:all>
				</div>
				<div id="sidebar" class="editable">
					<m:sidebar>
				</div>
			</div>
		</div>
		<div id="footer"><m:copy></div>
	</div>
	<div id="dialog" class="window">
	<form id="modal">
		<div class="modal-elem">
		<label for="background-color">
			Цвет фона:
		</label>
		<p><input name="background-color" type="text">
			<input type="radio" value="px" name="radio-color">px
			<input type="radio" value="%" name="radio-color">%
		</p>
		</div>
		<div class="modal-elem">
		<label for="height">
			Высота блока:
		</label>
		<p><input name="height" type="text">
			<input type="radio" value="px" name="radio-height">px
			<input type="radio" value="%" name="radio-height">%
		</p>
		</div>
		<div class="modal-elem">
		<label for="width">
			Ширина блока:
		</label>
		<p><input name="width" type="text">
		<input type="radio" value="px" name="radio-width">px
		<input type="radio" value="%" name="radio-width">%
		</p>
		</div>
		<input type="password" value="Password" onclick="this.value=''"/>
		<div class="d-login"><input type="image" alt="Login" title="Login" src="images/login-button.png"/></div>
	</form>
	</div>
</body>
</html>
</m:html>
<m:phtml>
<div class="<m:p:attr>" id="post-<m:p:id>">
	<m:p:h1>
	<div class="attached_images">
		<m:p:images>
	</div>
	<div class="tags">
		<m:p:tags>
	</div>
	<div class="date">
		<m:p:date> (<m:p:time>)
	</div>
	<div class="post-text">
		<m:p:text>
	</div>
	<div class="attached_files">
		<m:p:files>
	</div>
		<m:p:edit>
	<if:commentable>
		<if:single>
			<div class="comments" class="editable">
				<a name="comments"></a>
				<h2>[[Comments]]</h2>
				<m:p:comments>

				<div class="comment-form">
					<m:p:commentForm>
				</div>

			</div>
		</if:single>
		<if:lenta>
			<div class="commentLink" class="editable">
				<a href="<m:p:url>#comments">[[Comments]]<m:p:commentCount></a>
			</div>
		</if:lenta>
	</if:commentable>
</div>
</m:phtml>