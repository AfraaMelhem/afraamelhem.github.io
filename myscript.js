
// When the document is ready
$(document).ready(function() {
	
	// Smooth scrolling for navigation links
	$('a[href^="#"]').on('click', function(event) {
		var target = $(this.getAttribute('href'));
		if( target.length ) {
			event.preventDefault();
			$('html, body').stop().animate({
				scrollTop: target.offset().top
			}, 1000);
		}
	});

	// Toggle the navbar menu on small screens
	$('.navbar-toggler').on('click', function() {
		$('.navbar-collapse').toggleClass('show');
	});

	// Show a confirmation message when the contact form is submitted
	$('#contact-form').on('submit', function() {
		alert('Thank you for your message!');
	});
});

$(document).ready(function() {
    $('.star').click(function() {
        $(this).prevAll().addBack().html('&#9733;');
        $(this).nextAll().html('&#9734;');
    });
});


// Close button functionality
var closeBtns = document.getElementsByClassName("close");
for (var i = 0; i < closeBtns.length; i++) {
    closeBtns[i].addEventListener("click", function() {
        this.parentElement.style.display = "none";
    });
}
