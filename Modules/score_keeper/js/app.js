// Step 1: Create variable to keep track of result
var result = 0;

// Step 2: On click of zero button, add zero to result, show new result
$('#zero').click(function() {
	updateResult(0);
});

// Step 3: On click of +5 button, add 5 to result, show new result
$('#add5').click(function() {
	updateResult(5);
});

// Step 4: On click of +10 button, add 10 to result, show new result
$('#add10').click(function() {
	updateResult(10);
});

// Step 5: On click of -1 button, subtract 1, and show result
$('#sub1').click(function() {
	updateResult(-1);
});


function updateResult(newNum) {
	result = result + newNum;

	// add result to page
	$('#result').text(result);
}


// function addZero() {
// 	// update result
// 	result = result + 0;

// 	// add result to page
// 	$('#result').text(result);
// }

// function addFive() {
// 	// update result
// 	result = result + 5;

// 	// add result to page
// 	$('#result').text(result);
// }

// function addTen() {
// 	// update result
// 	result = result + 10;

// 	// add result to page
// 	$('#result').text(result);
// }

// function subOne() {
// 	// update result
// 	result = result - 1;

// 	// add result to page
// 	$('#result').text(result);
// }















