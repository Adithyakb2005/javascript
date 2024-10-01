
// Search Functionality
document.querySelector('.search-btn').addEventListener('click', function() {
    let productCode = document.querySelector('.form-control').value;
    if (productCode.trim() === "") {
        alert("Please enter a product code");
    } else {
        // In a real scenario, you would send this to the server or filter the products
        alert("Searching for product: " + productCode);
    }
});

// Smooth Scroll for Hero Buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault();
        const targetSection = document.querySelector('.categories');
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

