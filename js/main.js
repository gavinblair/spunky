window.jQuery(document).ready(function($){
	setInterval(function(){
		$('blink').toggleClass('unblink');
	}, 500);

	$(".title").click(function(){
		window.history.back();
	});

});