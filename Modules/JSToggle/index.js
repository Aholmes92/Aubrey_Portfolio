//Implement the red light using jQuery. Don't forget to add the script tags.
$(document).ready(function() {

	$("p").hide();

	$("#first").click(function(){
		$("p").slideUp();
        $(".Top p").slideToggle();
    });

	$("#second").click(function(){
		$("p").slideUp();
        $(".Middle p").slideToggle();
    });

	$("#third").click(function(){
		$("p").slideUp();
        $(".Bottom p").slideToggle();
    });

});