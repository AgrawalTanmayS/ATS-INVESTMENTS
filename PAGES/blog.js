// Function to animate blog item on hover
function addHoverEffects() {
    const blogItems = document.querySelectorAll('.blog-item');

    blogItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.transform = 'scale(1.05)';
            item.style.boxShadow = '0 0 15px rgba(0, 0, 0, 0.3)';
        });

        item.addEventListener('mouseout', () => {
            item.style.transform = 'scale(1)';
            item.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
        });
    });
}

// Function to animate blog images
function animateBlogImages() {
    const blogImages = document.querySelectorAll('.blog-item img');

    blogImages.forEach(img => {
        img.style.transition = 'transform 0.5s ease-in-out';
        
        img.addEventListener('mouseover', () => {
            img.style.transform = 'scale(1.1)';
        });

        img.addEventListener('mouseout', () => {
            img.style.transform = 'scale(1)';
        });
    });
}

// Function to initialize animations
function initializeAnimations() {
    addHoverEffects();
    animateBlogImages();
}

// Initialize animations once the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initializeAnimations);
