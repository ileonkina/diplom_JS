$(document).ready(function(){
	$('.editable').append('<div class = "edit-btn">Edit</div>');
	$('body').append('<div id="dialogMain"></div>');
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
		modalInit();
    });
	$('#applybtn').live('click', function() {
		$('#dialogMain').animate({ opacity: "hide" }, "fast");;
	})
});
function modalInit(){
	if ($('#dialogMain').find('#modal').length == 0) {
		$('#dialogMain').load('/Meruert/themes/main-test/modal.html');
		$('#dialogMain').hide();
	}
	$('#dialogMain').animate({ opacity: "show" }, "medium");
}