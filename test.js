$(document).ready(function(){
	$('.editable').append('<div class = "edit-btn">Edit</div>');
    // delegate the mouseover, mouseout events handler
	$('.editable').live('mouseover', function () {
			$('.editable').removeClass('active');
			$('.edit-btn').hide();
			$(this).addClass('active');
			$(this).children('.edit-btn').show();
			return false;
    });
	$('.editable').live('mouseout', function () {
			$('.edit-btn').hide();
			$(this).removeClass('active');
			$(this).parent('.editable').addClass('active');
			$(this).parent('.editable').children('.edit-btn').show();
			return false;
    });
    $('.edit-btn').live('click', function() {
		console.log("bubu");
    });
	
});