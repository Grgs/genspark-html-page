
function showtext() {

  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var fullName = firstName + " " + lastName;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var address = document.getElementById("address").value;
  var city = document.getElementById("city").value;
  var state = document.getElementById("state").value;
  var zip = document.getElementById("zip").value;
  var birthday = document.getElementById("birthday").value;

  document.getElementById("form-result").innerHTML = "<div class='alert alert-info' role='alert'>" +
    fullName + "<br>" + email + "<br>" + phone + "<br>" + address + "<br>" + city + "<br>" + state + "<br>" + zip + "<br>" + birthday + "</div>";
}

function hidetext() {
  document.getElementById("form-result").innerHTML = "";
}