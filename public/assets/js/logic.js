// this file probably isn't needed. or this code belongs somewhere else?

console.log("logic.js is loaded");

$('.submit').on('click', function () {
	var catName = $('#catName').val();
	console.log(catName);


	var currentURL = window.location.origin;

	$.post(currentURL + '/api/catname', catName, function(data) {
		if (data == true) {
			console.log('Your cat name has been submitted!');
		}
		else {
			console.log('Something went wrong and your cat name was not submitted.');
		}
	});
	// i still don't know why return false is here
	return false;
});