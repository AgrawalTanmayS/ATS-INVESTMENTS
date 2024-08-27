// services.js

document.addEventListener('DOMContentLoaded', function() {
    // Example of animation for service items
    const serviceItems = document.querySelectorAll('.service-item');
    
    serviceItems.forEach(item => {
        item.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        item.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // You can add more interactivity or animations here as needed
});
