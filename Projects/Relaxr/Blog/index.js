$(document).ready(function() {
	$("p.readmore").click(function() {
		event.preventDefault();
		$("p.hide").slideDown();
	});

		$("p.readless").click(function() {
		event.preventDefault();
		$("p.hide").slideUp();
	});

		$(".learnmore").click(function() {
		event.preventDefault();
		$("span.hide").slideToggle();
	});
});