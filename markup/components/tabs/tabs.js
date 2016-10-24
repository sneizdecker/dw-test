$( document ).ready(function() {

	const tabNavLink = $( ".tabs__nav-link" );
	const tabsContent = $( ".tabs__content" );

	tabNavLink.on( "click", function( event ) {

		event.preventDefault();

		const index = tabNavLink.index( this );

		$( this ).addClass( "tabs__nav-link_active" );
		tabNavLink.not( this ).removeClass( "tabs__nav-link_active" );

		tabsContent.eq( index ).addClass( "tabs__content_active" );
		tabsContent.not( tabsContent.eq( index ) ).removeClass( "tabs__content_active" );
	});
});
