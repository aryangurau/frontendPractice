const submitForm = () => {
  // Display the thank you message
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  const msgClass = document.getElementsByClassName("msg")[0];

  if (!name || !email || !message) {
    msgClass.innerHTML = "please fillUp the form to continue";
    msgClass.style.color = "red";

    return;
  }
  msgClass.innerHTML = "Thankyou for Contacting us";
  msgClass.style.color = "green";
  // Hide the thank you message after 4 seconds
  setTimeout(() => {
    msgClass.innerHTML = "";
  }, 4000);

  // Optionally, you can also clear the form fields here if needed
  document.getElementById("contactForm").reset();
};
