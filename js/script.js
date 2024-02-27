// Javascript Code
// form validation start
// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()

// form validation End

// Jquery Code
$(document).ready(function(){

	// preloder Start
	$('.someBlock').preloader({

  duration: '2000', 

});
	// preloder End
   // loadmore 2 Start
  $('.contents').btnLoadmore({
    showItem : 6,
    whenClickBtn : 3,
    textBtn : 'Load more...',
    classBtn : 'btn loadmore_button'
  });
// loadmore 2 End
	// mixitup Start
	     var mixer = mixitup('#mixitup_booking', {
	    animation: {
	        duration: 300
	    }
	});
	// Mixitup End

// Counter Up Start
$('.counter').counterUp({
    delay: 10,
    time: 4000
});
	     // Counter Up End
});