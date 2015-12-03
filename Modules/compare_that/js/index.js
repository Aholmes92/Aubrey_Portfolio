var result; 

// Step 1: On click of compare, get value of input a and input b 

$('#submit').click(compareNumbers);

// Step 2: Compare numbers, 
function compareNumbers() {

	// get val of input a and input b
	var inputA = $('#a').val();
	var inputB = $('#b').val();

	// convert inputA and inputB to numbers
	inputA = parseFloat(inputA);
	inputB = parseFloat(inputB);

	console.log( inputA);
	console.log( inputB);

    // if a > b then set comparion result to greater than
    if (inputA > inputB) {
    	result = '>';
    }

    // if a < b then set comparison result to less than
    if (inputA < inputB) {
    	result = '<';
    }

	// if a = b then set comparion result to equal
	if (inputA == inputB) {
    	result = '=';
    }

	// Update span "comparison" with result
	$('#comparison').text(result);

}



