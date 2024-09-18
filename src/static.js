function showAlert(message) {
    alert(message);
}

// Add event listeners to the logo and navigation links
document.addEventListener("DOMContentLoaded", function() {
    const logo = document.querySelector('.logo');
    const navLinks = document.querySelectorAll('nav ul li a');

    // Alert for logo click
    logo.addEventListener('click', function() {
        showAlert('You clicked the logo!');
    });

    // Alert for each navigation link click
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            showAlert('Navigating to ' + this.innerText);
        });
    });
});