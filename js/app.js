$(document).ready(function() {
	$('.input').blur();
	$('.add-button').click(function() {
		var text = $('.item').val();
		$('.checklist-list').append( '<li>' + '<input type="checkbox" name="checkbox" />' + '<label for="item">' + text + '</label>' + '</li>');
		$('.item').val('');
	});
	
	$('.remove-button').click(function(){
		$('input[type="checkbox"]:checked').each(function() {
			$(this).parent("li").remove();
		});
	});
});