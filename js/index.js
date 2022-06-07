
function showtext() {
  var showElement = document.getElementById("form-result");
  var inputElements = document.querySelectorAll("input");
  for (var i = 0; i < inputElements.length; i++) {
    showElement.innerHTML += inputElements[i].id + ": " + inputElements[i].value + "<br>";
  }
    // if (inputElements[i].value == "") {
    //   showElement.innerHTML = "Please fill in all fields";
    //   return;
    // }

}


function hidetext() {
  document.getElementById("form-result").innerHTML = "";
}

(() => {
  'use strict';


})();

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict';

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation');

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach((form) => {
    form.addEventListener('submit', (event) => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    }, false);
  });

})();


// function validatePassword() {
//   var password = document.getElementById("password").value;
//   var confirmPassword = document.getElementById("confirmPassword").value;

//   if (password != confirmPassword) {
//     document.getElementById("confirmPassword").setCustomValidity("Passwords Don't Match");
//   } else {
//     document.getElementById("confirmPassword").setCustomValidity('');
//   }
// }