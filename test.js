var node;
$(document).ready(function(){
	$('.editable').append('<div class = "edit-btn">Редактировать</div>');
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
	$('#applybtn').live('click', function() {
		//var z = $('#bgcolorinput').val();
		//$('#colorinput').val(z + ' ' + node);
		//console.log($('#colorinput').val());
		//var m_node=$(this).parent('form').serialize();
		//console.log(m_node);
		/*$(".modal-elem").each(function(i) {
			var inputId = $(this).children('input').attr('id');
			var inputName = $(this).children('input').attr('name');
			$('#' + inputId).val($('#'+node).css(inputName));
		});*/
		//$.post{method:'get', url:'/Meruert/themes/main-test/now.php', data:node, dataType: 'text'});
		$('#dialogMain').animate({ opacity: "hide" }, "fast");
		//$('#'+node).css('background-color',z);
		//$('#'+node).css('background-color',z);
		//location.reload(true);
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
}