document.addEventListener("DOMContentLoaded", function() {
    const nameInput = document.getElementById("name");
    const outputElement = document.getElementById("output");

    document.getElementById("submit").addEventListener("click", function() {
        const userName = nameInput.value;

        // Check if the first letter is lowercase and capitalize it if necessary
        const modifiedName = userName ? userName.charAt(0).toUpperCase() + userName.slice(1) : userName;

        // Display the modified name
        outputElement.textContent = modifiedName;
    });
});
