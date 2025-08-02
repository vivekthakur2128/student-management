console.log("hi from new-registration.js");
document.getElementById("studentForm").addEventListener("submit", function (e) {
      e.preventDefault();

      // Collect input values
      const email = document.getElementById("email").value.trim();
      const phone = document.getElementById("phone").value.trim();

      // Validation
    
      if (!/^\S+@\S+\.\S+$/.test(email)) {
        alert("Please enter a valid email address.");
        return;
      }

      if (!/^\d{10}$/.test(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return;
      }

      this.submit(); // send data to php file
      document.getElementById("studentForm").reset();
    });
