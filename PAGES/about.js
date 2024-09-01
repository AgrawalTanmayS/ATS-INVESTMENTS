// Function to handle redirection with confirmation
function redirectToLinkedIn(link) {
    try {
      if (confirm("You will be redirected to the LinkedIn profile. Continue?")) {
        window.location.href = link;
      }
    } catch (error) {
      console.error("Redirection failed:", error);
      alert("An error occurred. Please try again later.");
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
  
  document.addEventListener("DOMContentLoaded", function () {
    const teamPhotos = document.querySelectorAll(".team-member-photo");

    teamPhotos.forEach((photo) => {
        photo.addEventListener("mouseover", () => {
            photo.classList.add("animate-photo");
        });

        photo.addEventListener("mouseout", () => {
            photo.classList.remove("animate-photo");
        });
    });
});

  