// Smooth Scrolling for internal links
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a[href^="#"]');

    for (const link of links) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    }
});

// Copy Phone Number to Clipboard
document.addEventListener('DOMContentLoaded', () => {
    const phoneItem = document.querySelector('.contact-info .info-item:nth-of-type(2)');
    
    if (phoneItem) {
        phoneItem.addEventListener('click', () => {
            const phoneNumber = phoneItem.querySelector('p').textContent;

            navigator.clipboard.writeText(phoneNumber).then(() => {
                alert('Phone number copied to clipboard!');
            }).catch(err => {
                console.error('Failed to copy phone number: ', err);
            });
        });
    }
});

// Animation on Scroll
document.addEventListener('DOMContentLoaded', () => {
    const infoItems = document.querySelectorAll('.contact-info .info-item');
    
    const animateOnScroll = () => {
        const windowHeight = window.innerHeight;
        const scrollY = window.scrollY;

        infoItems.forEach(item => {
            const itemTop = item.getBoundingClientRect().top + scrollY;
            const itemHeight = item.offsetHeight;

            if (scrollY + windowHeight > itemTop && scrollY < itemTop + itemHeight) {
                item.classList.add('animate');
            } else {
                item.classList.remove('animate');
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initial check
});
