$(document).ready(function(){
    // добавим обработчик события hover
    $('.editable').hover(
        function () {
			$('.editable').removeClass('active');
			$(this).addClass('active');
			/*if ($(this).children('.edit-btn').first.length == 0){
				$(this).append('<div class = "edit-btn">Edit</div>');
				} else {
					$(this).children('.edit-btn').show();
				}*/
        },
        function() {
            $(this).removeClass('active');
			//$(this).children('.edit-btn').hide();
			$(this).parent('.editable').addClass('active');
        }
    );
});