function sendEmail() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  const submitBtn = document.getElementById("submitBtn");
  const spinner = document.getElementById("spinner");
  const buttonText = document.getElementById("buttonText");

  // Show spinner and change button text to "Sending..."
  spinner.style.display = "inline-block";
  buttonText.textContent = "Sending...";
  submitBtn.disabled = true;

  emailjs
    .send("service_rncemxa", "contact_form", {
      from_name: name,
      email_id: email,
      message: message,
    })
    .then((res) => {
      document.getElementById("form").reset(); // Reset the form after successful submission
      buttonText.textContent = "Send Message"; // Reset button text
      submitBtn.disabled = false;
      spinner.style.display = "none"; // Hide spinner

      // Remove validation classes after successful submission
      document
        .querySelector(".needs-validation")
        .classList.remove("was-validated");

      // Show success toast
      const successToast = new bootstrap.Toast(
        document.getElementById("successToast"),
        { delay: 10000 }
      );
      successToast.show();
    })
    .catch((err) => {
      console.log(err);
      buttonText.textContent = "Send Message"; // Reset button text
      submitBtn.disabled = false;
      spinner.style.display = "none"; // Hide spinner

      // Show error toast
      const errorToast = new bootstrap.Toast(
        document.getElementById("errorToast"),
        { delay: 10000 }
      );
      errorToast.show();
    });
}

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  "use strict";
  window.addEventListener(
    "load",
    function () {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      const forms = document.getElementsByClassName("needs-validation");
      // Loop over them and prevent submission
      Array.prototype.filter.call(forms, function (form) {
        form.addEventListener(
          "submit",
          function (event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            } else {
              event.preventDefault();
              sendEmail();
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

function date() {
  const date = new Date();
  const year = date.getFullYear();
  document.getElementById("date").innerHTML = year;
}
date();
