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
		//$.ajax({method:'get', url:'/Meruert/themes/main-test/now.php', data:node, dataType: 'text'});
		//console.log(node);
		//$.post('/Meruert/themes/main-test/now.php', node);
    });
	$('#applybtn').live('click', function() {
		//e.preventDefault();
		var z = $('#bgcolorinput').val();
		//$('#colorinput').val(z + ' ' + node);
		//console.log($('#colorinput').val());
		//var m_node=$(this).parent('form').serialize();
		//console.log(m_node);
		//$.ajax({method:'get', url:'/Meruert/themes/main-test/now.php', data:node, dataType: 'text'});
		$('#dialogMain').animate({ opacity: "hide" }, "fast");
		$('#'+node).css('background-color',z);
	});
});
function modalInit(){
	if ($('#dialogMain').find('#modal').length == 0) {
		$('#dialogMain').load('/Meruert/themes/main-test/modal.html');
		$('#dialogMain').hide();
	}
	console.log($('#bgcolorinput').attr('name'));
	$('#bgcolorinput').val($('#'+node).css('background-color'));
	/*$('#bgcolorinput').val($('#'+node).css('background-color'));
	$('#bgcolorinput').val($('#'+node).css('background-color'));
	$('#bgcolorinput').val($('#'+node).css('background-color'));
	$('#bgcolorinput').val($('#'+node).css('background-color'));
	$('#bgcolorinput').val($('#'+node).css('background-color'));
	$('#bgcolorinput').val($('#'+node).css('background-color'));*/
	/*$(".modal-elem").each(function(i) {
		console.log("tada");
		//$('#' + this.id).val($('#' + node).css(this.name));
		});*/
	$('#dialogMain').animate({ opacity: "show" }, "medium");
}