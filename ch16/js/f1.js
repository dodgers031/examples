const showMessage = () => {
    alert("Hello!");
  };
  
  // Access the button
  const buttonElement = document.getElementById("myButton");
  // Listen to the "click" event
  buttonElement.addEventListener("click", showMessage);

// // Show the pressed character
document.addEventListener("keypress", e => {
    console.log(`You pressed the ${String.fromCharCode(e.charCode)} key`);
  });

// Show information on a keyboard event
const keyboardInfo = e => {
    console.log(`Keyboard event: ${e.type}, key: ${e.keyCode}`);
  };
  
  // Integrate this function into key press and release:
  document.addEventListener("keydown", keyboardInfo);
  document.addEventListener("keyup", keyboardInfo);

  // Handle page closing
window.addEventListener("beforeunload", e => {
    const message = "Should you stay or should you go?";
    // Standard way of showing a confirmation dialog
    e.returnValue = message;
    // Browser-specific way of showing a confirmation dialog
    return message;
  });