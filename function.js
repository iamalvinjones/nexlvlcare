// function.js
window.function = function (input) {
  // Your logic here
  // For demonstration, let's just return the input as uppercase
  let value = input.value ?? ""; // Safe access to the input value
  return value.toUpperCase(); // Example operation
}
