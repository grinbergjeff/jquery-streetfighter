$(document).ready(function() {
	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('ryu-ready').show();
	})
		.mouseleave(function() {
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	})
	.mousedown(function(){
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show().animate(
			{'left': '1020px'},
			500,
			function() {
				$(this).hide();
				$(this).css('left','520px');
			}
		)
	})
	.mouseup(function() {
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
	})
	
  	.keydown(function(e) {
    	if (e.which == 88) {
      	alert('wow'); 
   	}
	});
	/*keydown or keyup will not work inside this section.
	api.jquery recommends I subject keydown/up to the whole document. Will try testing:
	$(document).keydown(function(e) { }); */
});

function playHadouken() {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}
