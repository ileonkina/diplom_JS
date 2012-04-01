$(document).ready(function(){
    // добавим обработчик события hover
	$('.editable').live('mouseover', function () {
			$('.editable').removeClass('active');
			$(this).addClass('active');
			return false;
    });
	$('.editable').live('mouseout', function () {
			$(this).removeClass('active');
			$(this).parent('.editable').addClass('active');
			return false;
    });
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
	var divOnClick = function(_e) {
        console.log('div clicked');
      }
    $('.active').live('click', divOnClick);
});