
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add('was-validated')
      }, false);
    });
})();

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
  localStorage.setItem("fieldValues", fieldValues);
  // add "was-validated" class to all forms
  const forms = document.querySelectorAll(".needs-validation");
  forms.forEach((form) => {
    form.classList.add("was-validated");
  });

}
function printFieldValues() {
  const fieldValues = generateInputFields();
  document.getElementById("form-result").innerHTML = fieldValues;
}

function loadFieldValues() {
  document.getElementById("form-output").innerHTML = localStorage.getItem("fieldValues");
}


function hidetext() {
  document.getElementById("form-result").innerHTML = "";
}



function validateConfirmPassword() {
  let passwordElement = document.getElementById("password");
  let confirmPasswordElement = document.getElementById("confirmPassword");
  confirmPasswordElement.classList.remove("is-invalid");
  confirmPasswordElement.classList.remove("is-valid");
  if (passwordElement.value !== confirmPasswordElement.value) {
    confirmPasswordElement.classList.add("is-invalid");
  } else {
    confirmPasswordElement.classList.add("is-valid");
  }
}

function validatePassword() {
  let passwordElement = document.getElementById("password");
  let confirmPasswordElement = document.getElementById("confirmPassword");
  passwordElement.classList.remove("is-invalid");
  confirmPasswordElement.classList.remove("is-invalid");
  passwordElement.classList.remove("is-valid");
  confirmPasswordElement.classList.remove("is-valid");
  if (passwordElement.value.length < 4) {
    passwordElement.classList.add("is-invalid");
  } else {
    passwordElement.classList.add("is-valid");
  }
}

const validEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

function validateEmail() {
  let emailElement = document.getElementById("email");
  emailElement.classList.remove("is-invalid");
  emailElement.classList.remove("is-valid");
  if (validEmail(emailElement.value)) {
    emailElement.classList.add("is-valid");
  } else {
    emailElement.classList.add("is-invalid");
  }
}
