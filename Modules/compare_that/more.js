var result;
//Step1: On click of compare, get value of input a and input b

$('#submit').click(compareNumbers);

//Step2: Compare number
function compareNumbers() {
	//get value of input a and input b
	var inputA = $('#a').val();
	var inputB = $('#b').val();
	inputA = parseInt(inputA);
	inputB = parseInt(inputB);
	//if a > b then set comparison result greater than 
if(inputA > inputB) {
	result = '>';
} else if(inputA < inputB) {
	result = '<';
} else {
	result = '='
}
	//if a < b then set result less than

	//if a = b then set result equal
	$('#comparison').text(result);
}