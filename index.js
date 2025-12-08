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
    color: var(--black);
    font-weight: 700;
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

// Presentations modal logic
(() => {
  const modal = document.querySelector('.presentations-modal');
  const openLinks = document.querySelectorAll('.presentations-link');
  const closeBtn = modal?.querySelector('.modal-close');

  const toggleModal = (show) => {
    if (!modal) return;
    modal.classList.toggle('open', show);
    document.body.classList.toggle('no-scroll', show);
    modal.setAttribute('aria-hidden', show ? 'false' : 'true');
  };

  openLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      toggleModal(true);
    });
  });

  closeBtn?.addEventListener('click', () => toggleModal(false));

  modal?.addEventListener('click', (e) => {
    if (e.target === modal) {
      toggleModal(false);
    }
  });
})();

// About gallery lightbox on double-click
(() => {
  const galleryImages = document.querySelectorAll('.about .map-photo img');
  const lightbox = document.querySelector('.photo-lightbox');
  const lightboxImg = lightbox?.querySelector('.photo-lightbox-image');
  const lightboxCaption = lightbox?.querySelector('.photo-lightbox-caption');
  const closeBtn = lightbox?.querySelector('.photo-lightbox-close');
  const backdrop = lightbox?.querySelector('.photo-lightbox-backdrop');
  const prevBtn = lightbox?.querySelector('.photo-lightbox-prev');
  const nextBtn = lightbox?.querySelector('.photo-lightbox-next');
  let currentIndex = -1;
  const imagesArr = Array.from(galleryImages);

  const updateLightbox = (index) => {
    if (!lightboxImg || !lightboxCaption) return;
    const img = imagesArr[index];
    if (!img) return;
    lightboxImg.src = img.currentSrc || img.src;
    lightboxCaption.textContent = img.alt || 'Photo';
    currentIndex = index;
  };

  const toggleLightbox = (show) => {
    if (!lightbox) return;
    lightbox.classList.toggle('open', show);
    document.body.classList.toggle('no-scroll', show);
    lightbox.setAttribute('aria-hidden', show ? 'false' : 'true');
    if (!show && lightboxImg) {
      lightboxImg.removeAttribute('src');
    }
  };

  galleryImages.forEach(img => {
    img.addEventListener('dblclick', () => {
      const idx = imagesArr.indexOf(img);
      if (idx === -1) return;
      updateLightbox(idx);
      toggleLightbox(true);
    });
  });

  const showPrev = () => {
    if (imagesArr.length === 0) return;
    const nextIndex = (currentIndex - 1 + imagesArr.length) % imagesArr.length;
    updateLightbox(nextIndex);
  };

  const showNext = () => {
    if (imagesArr.length === 0) return;
    const nextIndex = (currentIndex + 1) % imagesArr.length;
    updateLightbox(nextIndex);
  };

  prevBtn?.addEventListener('click', showPrev);
  nextBtn?.addEventListener('click', showNext);

  const closeHandlers = [closeBtn, backdrop];
  closeHandlers.forEach(el => {
    el?.addEventListener('click', () => toggleLightbox(false));
  });

  document.addEventListener('keydown', (e) => {
    if (!lightbox?.classList.contains('open')) return;
    if (e.key === 'Escape') {
      toggleLightbox(false);
    } else if (e.key === 'ArrowLeft') {
      showPrev();
    } else if (e.key === 'ArrowRight') {
      showNext();
    }
  });
})();
