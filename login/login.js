let user = document.getElementById("userid");
let passKey = document.getElementById("password");
let loginButton = document.getElementById("loginBtn");

// When button is clicked, read the current input value
loginButton.addEventListener("click", (event) => {
  console.log("login button clicked");

  let userId = user.value;
  let password = passKey.value;

  if (!userId || !password) {
    event.preventDefault(); // stops the navigation
    alert("Both User ID and Password are required.");
  }
  else {
    // if userId and password field is not empty this function will excecute
    checkForLoginCredentials(userId, password);
  }
  
});

function checkForLoginCredentials(userId, password){
  fetch('login_connection.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: 'userId=' + encodeURIComponent(userId) + '&pass=' + encodeURIComponent(password)
  })
    .then(res => res.json())
    .then(data => {
      if (data.match) {
        console.log("Match found!");
        console.log(window.location.href);
        window.location.href = "/student-management/manage-student/manage-student.html";
      } else {  
        console.log("No match.");
        alert("userId or password is incorrect");
        document.getElementById("admin-panel-Form").reset();
      }
    });
}

  