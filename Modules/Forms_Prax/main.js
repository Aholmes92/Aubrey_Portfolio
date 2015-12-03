// setting up JavaScript/JQuery to respond to entered data. Never forget preventDefault.
// JQuery is creating a variable for input, selected by the 'name'

$(document).ready(function() {
	$("form").on("submit", function(e) {
		e.preventDefault();
		var firstName = $("input[name='firstname']").val();
		var lastName = $("input[name='lastname']").val();
		
		var areaCode = $("input[name='phone1']").val();
		var preFix = $("input[name='phone2']").val();
		var phone = $("input[name='phone3']").val();
		
		var address1 = $("input[name='street']").val();
		var address2 = $("input[name='line2']").val();
		var city = $("input[name='city']").val();
		var state = $("input[name='state']").val();
		var zip = $("input[name='zip']").val();
		
		var course = $("select[name='course']").val();
		
		var experience = $("textarea[name='experience']").val();

		var referral = $("select[name='referral']").val();

		var comments = $("textarea[name='comments']").val();

		var data = {
			userFirstName: firstName,
			userLastName: lastName,
			userPhone: [areaCode, preFix, phone],
			userAddress: [address1, address2, city, state, zip],
			userCourse: course,
			userExperience: experience,
			userReferral: referral,
			userComments: comments
		} 
		console.log(data);
	});

});