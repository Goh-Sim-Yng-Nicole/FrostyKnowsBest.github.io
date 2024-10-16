document.addEventListener("DOMContentLoaded", function () {
    // Attach the submit event listener to the form
    const orderForm = document.getElementById('orderForm');
    orderForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting
        showThankYouMessage();
    });
});

function showThankYouMessage() {
    alert("Thank you for your order! We will get back to you shortly.");
}