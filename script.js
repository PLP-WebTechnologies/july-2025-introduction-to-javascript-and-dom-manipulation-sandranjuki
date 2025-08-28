// ==========================
// Part 1: Basics - Variables, Conditionals
// ==========================
function checkAge() {
  let age = document.getElementById("ageInput").value;
  let result = document.getElementById("ageResult");

  if (age >= 18) {
    result.textContent = "✅ You are an adult.";
  } else if (age > 0) {
    result.textContent = "👶 You are a minor.";
  } else {
    result.textContent = "⚠️ Please enter a valid age.";
  }
}

// ==========================
// Part 2: Functions - Reusability
// ==========================

// Function to calculate total price (e.g., items × cost)
function calculateTotal(quantity, price) {
  let total = quantity * price;
  document.getElementById("totalResult").textContent =
    `Total price: Ksh ${total}`;
  return total;
}

// Function to format a greeting message
function greetUser(name) {
  return `Hello, ${name}! Welcome back.`;
}

// Example usage in console
console.log(greetUser("Sandra"));

// ==========================
// Part 3: Loops - Repetition
// ==========================

// Countdown using a for loop
function showCountdown() {
  let list = document.getElementById("countdownList");
  list.innerHTML = ""; // clear previous

  for (let i = 5; i >= 1; i--) {
    let li = document.createElement("li");
    li.textContent = i;
    list.appendChild(li);
  }
}

// Array iteration using forEach loop
let foods = ["Chapati", "Pilau", "Mandazi"];
foods.forEach(food => console.log("I love " + food));

// ==========================
// Part 4: DOM Manipulation
// ==========================

// Toggle background color
document.getElementById("colorBtn").addEventListener("click", function() {
  document.body.classList.toggle("highlight");
});

// Add new item dynamically
document.getElementById("addItemBtn").addEventListener("click", function() {
  let newItem = document.createElement("li");
  newItem.textContent = "New Item " + (document.querySelectorAll("#itemList li").length + 1);
  document.getElementById("itemList").appendChild(newItem);
});

// Change message text when clicking color button
document.getElementById("colorBtn").addEventListener("click", function() {
  document.getElementById("message").textContent = "Background toggled!";
});
