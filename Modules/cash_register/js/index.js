//Step1: Create a var for total
var total = 0
var newEntry = 0
//Step2: Create var for input of 'how much'
var newEntry = $('#newEntry').val();
//Step3: Convert newEntry to = float; 
newEntry = parseFloat(newEntry)

//Step4: Create a function to pass new entry into tBody
$('tbody').submit(newEntry);
//Step5: Create function to Take input of 'how much' and add to total 
$('#entries').append(<td>"Item" + newEntry;