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
<body class="<m:body:class> editable" id="<m:body:id>">
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
			<div id="central" class="editable">
				<div id="content" class="editable">
					<m:all>
				</div>
				<div id="sidebar" class="editable">
					<m:sidebar>
				</div>
			</div>
		</div>
		<div id="footer" class="editable"><m:copy></div>
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