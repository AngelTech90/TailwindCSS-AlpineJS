function validateLogin() {
  const email = document.getElementById("emailInput").value.trim();
  const password = document.getElementById("passwordInput").value.trim();
  
  if (!email || !password) {
    alert("Please fill in all fields.");
    return;
  }
  
  // Get registered users from localStorage
  const registeredUsers = localStorage.getItem("registeredUsers");
  
  if (!registeredUsers) {
    showPopup();
    return;
  }
  
  const users = JSON.parse(registeredUsers);
  
  // Check if user exists and password matches
  const validUser = users.find(user => 
    user.email === email && user.password === password
  );
  
  if (validUser) {
    // Store current logged-in user info
    localStorage.setItem("currentUser", JSON.stringify(validUser));
    alert(`Welcome back, ${validUser.name}!`);
    
    // Clear form
    document.getElementById("emailInput").value = "";
    document.getElementById("passwordInput").value = "";
    
    // Redirect to index.html
    window.location.href = "../../index.html";
  } else {
    showPopup();
  }
}

function showPopup() {
  const popup = document.getElementById("popup-overlay");
  popup.style.display = "flex";
}

function closePopup() {
  const popup = document.getElementById("popup-overlay");
  popup.style.display = "none";
  
  // Clear form fields
  document.getElementById("emailInput").value = "";
  document.getElementById("passwordInput").value = "";
}

// Close popup when clicking outside of it
document.getElementById("popup-overlay").addEventListener("click", function(e) {
  if (e.target === this) {
    closePopup();
  }
});

// Handle Enter key press for login
document.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    validateLogin();
  }
});
