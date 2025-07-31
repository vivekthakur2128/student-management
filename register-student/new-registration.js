document.getElementById("studentForm").addEventListener("submit", function (e) {
      e.preventDefault();

      // Collect input values
      const name = document.getElementById("name").value.trim();
      const fatherName = document.getElementById("fatherName").value.trim();
      const email = document.getElementById("email").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const address = document.getElementById("address").value.trim();

      // Validation
      if (!name || !fatherName || !email || !phone || !address) {
        alert("Please fill out all fields.");
        return;
      }

      if (!/^\S+@\S+\.\S+$/.test(email)) {
        alert("Please enter a valid email address.");
        return;
      }

      if (!/^\d{10}$/.test(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return;
      }

      // If validation passes
      alert("Form submitted successfully!");
      document.getElementById("studentForm").reset();
    });





// email validation
// const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// function isValidEmail(email) {
//     let entered_email = "admin@example.com"
//    emailRegex.test(entered_email);
//     if(emailRegex.test(entered_email) == true){
//         console.log("entered_email is valid");
//     }
//     else{
//         console.log("entered_email is invalid");
//     }

// }

// let submitButton = document.querySelector('#submitBtn');
// submitButton.addEventListener('click', () =>{
//     isValidEmail();
// })