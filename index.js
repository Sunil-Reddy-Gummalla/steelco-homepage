document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting
    
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    console.log(username, password);
    window.location.href = "home.html";
  });
  