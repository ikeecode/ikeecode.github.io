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

// Random logo image selection
const images = [
  'img/blackshirtwithblackhat.jpg',
  'img/nightviewsatsaly.jpeg',
  'img/wellsuitedandsitting.jpeg'
];

// Select a random image
const randomImage = images[Math.floor(Math.random() * images.length)];

// Set the logo image
const logoImage = document.getElementById('logoImage');
if (logoImage) {
  logoImage.src = randomImage;
}

// Randomly assign main and secondary image roles with random variants
const heroImages = document.querySelectorAll('.hero-img');
if (heroImages.length === 3) {
  // Create array of indices and shuffle them
  const indices = [0, 1, 2];
  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }

  // Random variant selection (1-3 for each role)
  const mainVariant = Math.floor(Math.random() * 3) + 1; // 1, 2, or 3
  const sec1Variant = Math.floor(Math.random() * 3) + 1;
  const sec2Variant = Math.floor(Math.random() * 3) + 1;

  // Assign random roles and variants to the images
  heroImages[indices[0]].classList.add(`main-v${mainVariant}`);
  heroImages[indices[1]].classList.add(`sec1-v${sec1Variant}`);
  heroImages[indices[2]].classList.add(`sec2-v${sec2Variant}`);
}
