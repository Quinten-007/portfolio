// ==================== HAMBURGER MENU ====================
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('active');      // slide in/out overlay menu
  hamburger.classList.toggle('open');  // animate hamburger to X
});

// ==================== SMOOTH SCROLL ====================
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });

    // Close menu if open
    if(nav.classList.contains('active')) {
      nav.classList.remove('active');
      hamburger.classList.remove('open');
    }
  });
});

// ==================== SCROLL REVEAL ====================
const sections = document.querySelectorAll('.section, .project-card, .skill, .diploma-item');

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if(sectionTop < triggerBottom) {
      section.style.opacity = 1;
      section.style.transform = 'translateY(0)';
      section.style.transition = 'all 0.8s ease-out';
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// ==================== SKILL BARS ANIMATION ====================
const skillsSection = document.getElementById('skills');
const skillBars = document.querySelectorAll('.bar-fill');

const animateSkills = () => {
  const triggerBottom = window.innerHeight * 0.85;
  const top = skillsSection.getBoundingClientRect().top;
  if(top < triggerBottom) {
    skillBars.forEach(bar => {
      const width = bar.getAttribute('style').match(/\d+%/)[0];
      bar.style.width = width;  // Animate to their set width
    });
  }
};

window.addEventListener('scroll', animateSkills);
window.addEventListener('load', animateSkills);

// ==================== VANTA HALO ====================
VANTA.HALO({
  el: "#hero",
  mouseControls: true,
  touchControls: true,
  gyroControls: true,
  baseColor: 0x1e1e1e,
  backgroundColor: 0x000000,
  size: 1.3,
  amplitudeFactor: 1.0,
  intensity: 0.5
});