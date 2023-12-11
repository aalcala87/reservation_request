"use strict";

$(document).ready(() => {
    const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;

    //Move focus to the arrival date text box
    $("#arrival_date").focus();

    //Event handler for the submit event
    $("#reservation_form").submit((event) => {
        //Validate the user entries
        const arrivalDate = $("#arrival_date").val().trim();
        const nights = $("#nights").val().trim();
        const email = $("#email").val().trim();
        const phone = $("#phone").val().trim();
		const name = $("#name").val().trim();

        //Remove previous error messages
        $(".error-message").remove();

        //Check value is empty
        if (arrivalDate === "") {
            showError($("#arrival_date"), "Please enter an arrival date.");
            //Cancel form submission
			event.preventDefault();
        }

        if (nights === "") {
            showError($("#nights"), "Please enter the number of nights.");
            event.preventDefault();
        }

		if (name === "") {
			showError($("#name"), "Please enter your name.");
			event.preventDefault(); // Cancel form submission
		}		

        //Check if the email address is not provided
        if (email === "") {
            showError($("#email"), "Please enter an email address.");
            event.preventDefault();
        } else {
            //Check if the email address matches the pattern
            if (!emailPattern.test(email)) {
                showError($("#email"), "Please enter a valid email address.");
                event.preventDefault();
            }
        }

        //Check if the number of nights is numeric
        if (isNaN(nights)) {
            showError($("#nights"), "Number of nights must be numeric.");
            event.preventDefault();
        }

        //Check if the phone number is not entered
        if (phone === "") {
            showError($("#phone"), "Please enter a phone number.");
            event.preventDefault();
        }

        //Trim entries and put them back into the controls
        $("#arrival_date").val(arrivalDate);
        $("#nights").val(nights);
        $("#email").val(email);
		$("#name").val(name);
        $("#phone").val(phone);
    });

    //Display error message next to the input field
    function showError(element, message) {
        const errorMessage = `<span class="error-message">${message}</span>`;
        element.after(errorMessage);
    }
}); // end ready
