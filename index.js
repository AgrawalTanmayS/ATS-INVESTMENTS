
// Intersection Observer for animating sections on scroll
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".introduction, .services, .security, .why-choose-us, .call-to-action");
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observerCallback = function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});

// Form validation and AJAX submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        // Example AJAX request
        fetch('https://example.com/submit-form', { // Replace with your endpoint
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, message })
        })
        .then(response => response.json())
        .then(data => {
            alert('Form submitted successfully!');
        })
        .catch(error => {
            console.error('Error:', error);
            alert('There was an error submitting the form.');
        });
    } else {
        alert('Please fill out all fields.');
    }
});



// Function to show a confirmation box before navigating away
function confirmBox(msg) {
    // Show a confirmation dialog
    const userConfirmed = confirm(`You are being redirected to the ${msg} page.\nAny changes made by you will be removed.\nDo you want to continue?`);

    // If the user does not confirm, prevent the default action (navigation)
    if (!userConfirmed) {
        event.preventDefault();
    }
}

// Function to set a cookie with expiration
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  // Function to get a cookie
  function getCookie(cname) {
    const name = cname + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  
  // Function to check if a user has visited the page before
  function checkVisit() {
    let user = getCookie("returningVisitor");
    if (user != "") {
      alert("Welcome back to @TS INVESTMENTS!");
    } else {
      alert("Welcome to @TS INVESTMENTS for the first time!");
      setCookie("returningVisitor", "true", 30); // Expires in 30 days
    }
  }
  
  // Call the checkVisit function when the page loads
  window.onload = function () {
    checkVisit();
  };