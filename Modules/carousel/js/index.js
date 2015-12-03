var images=["images/food2.jpg","images/food3.jpg","images/food4.jpg","images/food5.jpg","images/food6.jpg","images/food7.jpg"];
var i=0;

function previousImage(){

	// if i is not 0 
	if (i > 0){

		// then decrease i by 1
		i--;

	// else then i is 0
	} else {

		// so set i to the last place in the array
		i = images.length-1;
	}

	// change image to new i
	changeImage(i);
}

function nextImage(){

	// if i is not 0 
	if (i + 1 <= images.length-1){

		// then increase i by 1
		i++;

	// else then i is on last item 
	} else {

		// so set i to the first place in the array
		i = 0;
	}

	// change image to new i
	changeImage(i);
}

function changeImage(arrayPosition){
	$("#image-to-vote-on").attr("src",images[arrayPosition]);

}

$(document).ready(function(){

	$("#buttons-wrapper .btn[value='Skip']").on("click",nextImage);
	$("#buttons-wrapper .btn[value='Back']").on("click",previousImage);
});