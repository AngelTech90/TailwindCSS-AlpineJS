function saveUserData() {
  const name = document.getElementById("nameInput").value.trim();
  const email = document.getElementById("emailInput").value.trim();
  const password = document.getElementById("passwordInput").value.trim();
  
  if (!name || !email || !password) {
    alert("Please fill in all fields.");
    return;
  }
  
  // Get existing users or initialize empty array
  let users = [];
  const existingUsers = localStorage.getItem("registeredUsers");
  if (existingUsers) {
    users = JSON.parse(existingUsers);
  }
  
  // Check if user already exists
  const userExists = users.some(user => user.email === email);
  if (userExists) {
    alert("User with this email already exists!");
    return;
  }
  
  // Add new user
  const userData = {
    name,
    email,
    password
  };
  
  users.push(userData);
  localStorage.setItem("registeredUsers", JSON.stringify(users));
  alert("User registered successfully!");
  
  // Clear form
  document.getElementById("nameInput").value = "";
  document.getElementById("emailInput").value = "";
  document.getElementById("passwordInput").value = "";
}
