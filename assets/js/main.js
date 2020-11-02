/*
	Spectral by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$wrapper = $('#page-wrapper'),
		$banner = $('#banner'),
		$features = $('ul.features'),
		$feature = $('ul.features li'),
		$header = $('#header');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ null,      '480px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Mobile?
		if (browser.mobile)
			$body.addClass('is-mobile');
		else {

			breakpoints.on('>medium', function() {
				$body.removeClass('is-mobile');
			});

			breakpoints.on('<=medium', function() {
				$body.addClass('is-mobile');
			});

		}

	// Scrolly.
		$('.scrolly')
			.scrolly({
				speed: 1500,
				offset: $header.outerHeight()
			});

	// Menu.
		$('#menu')
			.append('<a href="#menu" class="close"></a>')
			.appendTo($body)
			.panel({
				delay: 500,
				hideOnClick: true,
				hideOnSwipe: true,
				resetScroll: true,
				resetForms: true,
				side: 'right',
				target: $body,
				visibleClass: 'is-menu-visible'
			});

	// Header.
		if ($banner.length > 0
		&&	$header.hasClass('alt')) {

			$window.on('resize', function() { $window.trigger('scroll'); });

			$banner.scrollex({
				bottom:		$header.outerHeight() + 1,
				terminate:	function() { $header.removeClass('alt'); },
				enter:		function() { $header.addClass('alt'); },
				leave:		function() { $header.removeClass('alt'); }
			});

		}

	// Features.
	// if ($body.hasClass('is-mobile') && $features.length > 0 && $features.hasClass('ult')) {
		// 	$window.on('resize', function() { $window.trigger('scroll'); });
		// 	for (let i = 0; i < $feature.length; i++) {
			// 		const $element = $feature[i];
			// 		console.log($element)
			// 		$banner.scrollex({
				// 			bottom:		$element.offsetHeight + 1,
				// 			terminate:	function() { $element.removeClass('active'); },
				// 			enter:		function() { $element.addClass('active'); },
				// 			leave:		function() { $element.removeClass('active'); }
				// 		});
				// 	}
	// }
	if ($body.hasClass('is-mobile') && $features.length > 0) {
		$window.on('resize', function() { $window.trigger('scroll'); });
		$feature.scrollex({
			// Mode: Sets Scrollex to 'middle' mode (= midpoint between top/bottom edges must fall within contact area).
			mode: 'middle',
			// Initialize event: Add the 'inactive' class to this element as soon as Scrollex is initialized.
			initialize: function() {
				$(this).removeClass('active');
			},
		// Enter event: Remove the 'inactive' class from this element.
			enter: function() {
				$(this).addClass('active');
			},
		// Leave event: Apply the 'inactive' class to this element.
			leave: function() {
				$(this).removeClass('active');
			}
		});
	}

})(jQuery);