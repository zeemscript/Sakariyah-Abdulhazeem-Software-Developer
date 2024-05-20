// Example starter JavaScript for disabling form submissions if there are invalid fields

(function () {
  "use strict";
  window.addEventListener(
    "load",
    function () {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName("needs-validation");
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function (form) {
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
  let btn = document.getElementById("submit");
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  // Debugging: Check if the elements are found correctly
  console.log(name, email, message);

  // Change button text to "Sending..."
  btn.textContent = "Sending Message...";

  emailjs
    .send("service_hx3zlmg", "contact_form", {
      from_name: name,
      email_id: email,
      message: message,
    })
    .then(
      function (res) {
        console.log(`SUCCESS! ${res.status}`);
        showToast("Message Sent Successfully!", "toast-success");

        // Reset button text to its original value
        btn.textContent = "Send";

        // Clear input fields
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
      },
      function (err) {
        console.log(`FAIL! ${err.message}`);
        showToast(
          "Failed to Send Message, Please Try Again Later!",
          "toast-error"
        );

        // Reset button text to its original value
        btn.textContent = "Send Message";
      }
    );
}

// Function to create and show a Bootstrap toast
function showToast(message, type) {
  var toast = document.createElement("div");
  toast.classList.add(
    "toast",
    "fade",
    "show",
    "align-items-center",
    "text-white",
    type
  );
  toast.setAttribute("role", "alert");
  toast.setAttribute("aria-live", "assertive");
  toast.setAttribute("aria-atomic", "true");

  var toastBody = document.createElement("div");
  toastBody.classList.add("toast-body");
  toastBody.textContent = message;

  toast.appendChild(toastBody);

  // Add toast to the page
  document.body.appendChild(toast);

  // Show toast
  var bootstrapToast = new bootstrap.Toast(toast);
  bootstrapToast.show();

  // Remove toast after 5 seconds
  setTimeout(function () {
    bootstrapToast.hide();
    // Remove toast element from DOM
    toast.remove();
  }, 5000);
}
