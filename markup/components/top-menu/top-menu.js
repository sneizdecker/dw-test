$( document ).ready(function() {

	const hamburger = $( "#hamburger" );
	const hamburgerIcon = $( "#hamburger-icon" );
	const mobMenu = $( "#mob-menu" );

	hamburger.on("click", function() {
		hamburgerIcon.toggleClass( "top-menu__hamburger-icon_active" );
		mobMenu.toggleClass( "top-menu__center_visible" );
	});

});
