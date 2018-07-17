// JavaScript Document

		// NAVBAR UNCHECK -> closes mobile Nav sidebar when user selects subheading

 $(".closeNav").click(function () {
    $("input:checkbox").prop('checked', false);
});

		// SMOOTH SCROLLING

$(document).ready(function(){
  // Add smooth scrolling to all links
  $(".closeNav").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});


			// SCROLL TO TOP BTN

  // declare variable
  var scrollTop = $(".scrollTop");
  var navToggle = $(".navToggle");

  $(window).scroll(function() {
    // declare variable
    var topPos = $(this).scrollTop();

    // if user scrolls down - show scroll to top button + Nav menu in mobile view
    if (topPos > 300) {
      $(scrollTop).css("opacity", "1");
      $(navToggle).css("opacity", "1");

    } else {
      $(scrollTop).css("opacity", "0");
      $(navToggle).css("opacity", "0");
    }

  }); // scroll END

  //Click event to scroll to top
  $(scrollTop).click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 800);
    return false;

  }); // click() scroll top EMD


