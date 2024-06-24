// Example starter JavaScript for disabling form submissions if there are invalid fields

(function () {
  "use strict";
  window.addEventListener(
    "load",
    function () {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      const forms = document.getElementsByClassName("needs-validation");
      // Loop over them and prevent submission
      const validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener(
          "submit",
          function (event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add("was-validated");
          },
          false
        );
      });
    },
    false
  );
})();

// emailjs message sending code
function sendEmail() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  emailjs
    .send("service_rncemxa", "contact_form", {
      from_name: name,
      email_id: email,
      message: message,
    })
    .then((res) => {
      alert("Success!, your message was sent successfully.");
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
    })
    .catch((err) => {
      alert("Oh no error sending message.");
      console.log(`FAIL! ${err.message}`);
    });
}

const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  sendEmail();
});

function date() {
  const date = new Date();
  const year = date.getFullYear();
  document.getElementById("date").innerHTML = year;
}
date();
