  window.addEventListener('DOMContentLoaded', (event) => {
    // Smooth scrolling to sections
    const navbarLinks = document.querySelectorAll('.navbar-links a');
  
    navbarLinks.forEach((link) => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
  
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);
  
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });

      // Logout functionality
  const logoutButton = document.getElementById('logout');
  logoutButton.addEventListener('click', (event) => {
    event.preventDefault();
    // Redirect to index.html
    window.location.href = 'index.html';
  });
  });
  