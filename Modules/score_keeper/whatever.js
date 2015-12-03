//Step1: Create variable to keep track of result
var result = 0; 

//Step2: On click of Zero button (add 0 to result), show result
$('#zero').click(function() {
	updateResult(0);
});

//Step3: On click of +5 (add 5 to result)
$('#add5').click(function() {
	updateResult(5);
});

//Step4: On click of +10 (add 10 to result)
$('#add10').click(function() {
	updateResult(10);
});

//Step5: On click of -1 (subtract 1 to result)
$('#sub1').click(function() {
	updateResult(-1);
});


function updateResult(newNum) {
	result = result + newNum;
	$('#result').text(result);
}

// function addZero(){
// 	//update result
// 	result = result + 0;
// 	$('#result').text(result);
// }

// function addFive(){
// 	//update result
// 	result = result + 5;
// 	$('#result').text(result);
// }

// function addTen(){
// 	//update result
// 	result = result + 10;
// 	$('#result').text(result);
// }

// function subOne(){
// 	//update result
// 	result = result - 1;
// 	$('#result').text(result);
