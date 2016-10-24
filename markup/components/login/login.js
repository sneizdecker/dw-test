$( document ).ready(function() {

	$( "#login-link" ).fancybox();

	console.log($( "#login__email" ).prev( ".login__error-text" ) );

	$( "#login__form" ).on( "submit", function(event) {
		const emailField = $( "#login__email" );
		const passwordField = $( "#login__password" );
		const emailChecker = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		const passwordChecker = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
		let error = false;

		checkIsFieldValid(emailField, emailChecker);
		checkIsFieldValid(passwordField, passwordChecker);

		if (error) {
			event.preventDefault();
		}

		function checkIsFieldValid(field, checker) {
			if (field.val() === "" || !checker.test(field.val())) {
				field.addClass( "login__field_error" );
				field.prev( ".login__error-text" ).addClass( "login__error-text_visible" );
				error = true;

			} else {
				field.removeClass( "login__field_error" );
				field.prev( ".login__error-text" ).removeClass( "login__error-text_visible" );
			}
		}

	});
});
