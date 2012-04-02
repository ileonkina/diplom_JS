$(document).ready(function(){
	$('.editable').append('<div class = "edit-btn" style="display:none;">Edit</div>');
	//$('.edit-btn').hide();
    // delegate the mouseover, mouseout events handler
	//$('.edit-btn').show();
	$('.editable').live('mouseover', function () {
			$('.editable').removeClass('active');
			$('.edit-btn').hide();
			$(this).addClass('active');
			$(this).children('.edit-btn').show();
			/*if ($('.active').children('div.edit-btn > div.editable') == 0) {
				$('.active').append('<div class = "edit-btn">Edit</div>');
			}else{
				$('.active').children('div.edit-btn > div.editable').show();
			}
			/*if ($(this).find('div.edit-btn') == 0) {
				$(this).append('<div class = "edit-btn">Edit</div>'); //style="width:'+$(this).css('width')+'"
			} else{
				$(this).children('div.edit-btn').show;
			}*/
			return false;
    });
	$('.editable').live('mouseout', function () {
			$('.edit-btn').hide();
			$(this).removeClass('active');
			$(this).parent('.editable').addClass('active');
			$(this).parent('.editable').children('.edit-btn').show();
			//$('.active').append('<div class = "edit-btn">Edit</div>');
			/*if ($('.active').children('div.edit-btn > div.editable') == 0) {
				$('.active').append('<div class = "edit-btn">Edit</div>');
			}else{
				$('.active').children('div.edit-btn > div.editable').show();
			}
			/*if ($(this).parent('.editable').find('div.edit-btn') == 0) {
				$(this).append('<div class = "edit-btn">Edit</div>'); //style="width:'+$(this).css('width')+'"
			} else{
				$(this).parent('.editable').children('div.edit-btn').show;
			}*/
			return false;
    });
	/*$('.active').live('mouseover', function(){
		$(this).append('<div class = "edit-btn">Edit</div>');
	});*/
    /*$('.editable').hover(
        function () {
			$('.editable').removeClass('active');
			$(this).addClass('active');
        },
        function() {
            $(this).removeClass('active');
			$(this).parent('.editable').addClass('active');
        }
    );*/
    /*$('.active').live('mouseover', function() {
		$(this).parent('editable')('div.edit-btn').hide();
        $(this).children('div.edit-btn').show();
    });*/
});