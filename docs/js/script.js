
// Get the registration form
const registrationForm = document.getElementById("registrationForm");

// Get the message paragraph
const message = document.getElementById("message");

// Handle form submission
registrationForm.addEventListener("submit", function(event) {

    // Prevent page refresh
    event.preventDefault();

    // Get student details
    const studentName = document.getElementById("name").value;
    const studentEmail = document.getElementById("email").value;
    const selectedCourse = document.getElementById("course").value;

    // Display registration success message
    message.textContent =
        "Congratulations, " + studentName +
        "! You have successfully registered for " +
        selectedCourse + ".";

    // Clear the form
    registrationForm.reset();

});
