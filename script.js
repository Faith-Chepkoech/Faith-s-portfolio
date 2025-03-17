// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
  // Smooth scroll functionality
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          
          const targetId = this.getAttribute('href');
          const targetElement = document.querySelector(targetId);
          
          if (targetElement) {
              window.scrollTo({
                  top: targetElement.offsetTop,
                  behavior: 'smooth'
              });
          }
      });
  });

  // Form submission handler
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
          e.preventDefault();
          alert('Thank you for your message! In a real implementation, this would be sent to a server.');
          contactForm.reset();
      });
  }

  // Navbar scroll effect
  const header = document.querySelector('header');
  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', function() {
      // Add sticky header when scrolling down
      if (window.scrollY > 100) {
          header.style.position = 'fixed';
          header.style.top = '0';
          header.style.left = '0';
          header.style.right = '0';
          header.style.background = 'rgba(10, 10, 10, 0.95)';
          header.style.backdropFilter = 'blur(5px)';
          header.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
          header.style.zIndex = '1000';
          header.style.padding = '15px 0';
          header.style.transition = 'all 0.3s ease';
      } else {
          header.style.position = 'relative';
          header.style.background = 'transparent';
          header.style.backdropFilter = 'none';
          header.style.boxShadow = 'none';
          header.style.padding = '40px 0';
      }

      // Hide header when scrolling down, show when scrolling up
     // if (window.scrollY > lastScrollY && window.scrollY > 300) {
      //    header.style.transform = 'translateY(-100%)';
      //} else {
      //    header.style.transform = 'translateY(0)';
      //}
      
      //lastScrollY = window.scrollY;
  });

  // Add scroll animation for elements
  const animateOnScroll = function() {
      const sections = document.querySelectorAll('.section');
      
      sections.forEach(section => {
          const sectionTop = section.getBoundingClientRect().top;
          const windowHeight = window.innerHeight;
          
          if (sectionTop < windowHeight * 0.75) {
              section.style.opacity = '1';
              section.style.transform = 'translateY(0)';
          }
      });
  };

  // Initialize section animations
  document.querySelectorAll('.section').forEach(section => {
      section.style.opacity = '0';
      section.style.transform = 'translateY(20px)';
      section.style.transition = 'all 0.6s ease';
  });

  // Call on scroll and initial load
  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll(); // Initial check
  
  // Project card hover effects
  const projectCards = document.querySelectorAll('.project-card');
  
  projectCards.forEach(card => {
      card.addEventListener('mouseenter', function() {
          this.style.boxShadow = '0 10px 30px rgba(100, 255, 218, 0.1)';
      });
      
      card.addEventListener('mouseleave', function() {
          this.style.boxShadow = 'none';
      });
  });
});