

const inputElements = document.querySelectorAll(".input-field");

function generateInputFields() {
  var stringList = "<p>Captured values:</p><ul>";
  var inputElements = document.querySelectorAll(".input-field");
  for (var i = 0; i < inputElements.length; i++) {
    stringList += `<li>${inputElements[i].id}: ${inputElements[i].value}`;
  }
  stringList += "</ul>";
  return stringList;
}

function saveFieldValues() {
  const fieldValues = generateInputFields();
  document.getElementById("form-result").innerHTML = fieldValues;
  localStorage.setItem("fieldValues", fieldValues);
}

function loadFieldValues() {
  document.getElementById("form-output").innerHTML = localStorage.getItem("fieldValues");
}


function hidetext() {
  document.getElementById("form-result").innerHTML = "";
}

Array.prototype.slice.call(inputElements).forEach(function (inputElement) {
  inputElement.addEventListener('focus', function () {
    inputElement.classList.add('focus');
  });
  inputElement.addEventListener('blur', function () {
    inputElement.classList.remove('focus');
    this.showtext();
  });
});


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