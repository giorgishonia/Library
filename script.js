var showButton = document.getElementById("plus");
var hiddenDiv = document.getElementById("create-window");

// Add a click event listener to the button
showButton.addEventListener("click", function () {
    // Check if the div is currently hidden
    if (hiddenDiv.style.display === "none") {
        // If it's hidden, show it with animation
        hiddenDiv.style.display = "block";
        setTimeout(function () {
            hiddenDiv.style.right = "0"; // Slide in from the right
        }, 0); // A small delay to ensure the display change takes effect
    } else {
        // If it's visible, hide it with animation
        hiddenDiv.style.right = "-100%"; // Slide out to the right
        setTimeout(function () {
            hiddenDiv.style.display = "none";
        }, 300); // Wait for the animation to complete before hiding
    }
});