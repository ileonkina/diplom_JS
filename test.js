var node;
$(document).ready(function(){
	$('.editable').append('<div class = "edit-btn">Редактировать</div>');
	$('.editable').css({'position':'relative'});
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
		node = $(this).parent('div').attr('id');
		modalInit();
    });
	$('#closeModalBtn').live('click', function() {
		$('#dialogMain').animate({ opacity: "hide" }, "fast");
	})
	$('#applybtn').live('click', function() {
		$('#dialogMain').animate({ opacity: "hide" }, "fast");
		obj = {'id':node};
		$(".modal-elem").each(function(i) {
			var inputId1 = $(this).children('input').attr('id');
			var inputName1 = $(this).children('input').attr('name');
			obj[inputName1] = $('#' + inputId1).val();
		});
		//console.log(obj);
		$.post('/Meruert/themes/main-test/now.php', obj, function(){
		location.reload();
		});
	});
});
function modalInit(){
	if ($('#dialogMain').find('#modal').length == 0) {
		$('#dialogMain').load('/Meruert/themes/main-test/modal.html',{},function (){
			inputValue();
		});
		$('#dialogMain').hide();
	}
	inputValue();
	$('#dialogMain').animate({ opacity: "show" }, "medium");
}
function inputValue() {
$(".modal-elem").each(function(i) {
		var inputId = $(this).children('input').attr('id');
		var inputName = $(this).children('input').attr('name');
		$('#' + inputId).val($('#'+node).css(inputName));
	});
	//console.log($('#'+node).css('borderRadius'));
}