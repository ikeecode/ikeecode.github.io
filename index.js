// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Active nav link highlighting
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// Add active class styling in CSS
const style = document.createElement('style');
style.textContent = `
  .nav-link.active {
    color: var(--google-blue);
    border-bottom: 2px solid var(--google-blue);
    padding-bottom: 0.25rem;
  }
`;
document.head.appendChild(style);

// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  // Close menu when clicking on a nav link
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });
}

// Modal functionality for Google Drive video
const modal = document.getElementById('videoModal');
const btn = document.getElementById('openVideoModal');
const span = document.getElementsByClassName('close-modal')[0];
const videoFrame = document.getElementById('videoFrame');

// Open modal when button is clicked
if (btn) {
  btn.onclick = function() {
    modal.style.display = 'block';
    videoFrame.src = 'https://drive.google.com/file/d/11oeeAW_4cYbAS730q7boIC8FPIdVNqEz/preview';
  }
}

// Close modal when X is clicked
if (span) {
  span.onclick = function() {
    modal.style.display = 'none';
    videoFrame.src = '';
  }
}

// Close modal when clicking outside of it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
    videoFrame.src = '';
  }
}
