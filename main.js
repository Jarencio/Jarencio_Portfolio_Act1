let mixerPortfolio = mixitup('.work_container', {
    selectors: {
        target: '.work_card'
    },
    animation: {
        duration: 300
    }
});

const linkWork = document.querySelectorAll('.work__item')

function activeWork(){
    linkWork.forEach(l=> l.classList.remove('active-work'))
    this.classList.add('active-work')
}

linkWork.forEach(l=> l.addEventListener("click", activeWork))

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav__link');

window.addEventListener('scroll', () => {
  const currentSection = getCurrentSection();
  updateNavLinks(currentSection);
});

function getCurrentSection() {
  const scrollPosition = window.scrollY + 200; // adjust the offset as needed
  let currentSection = null;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      currentSection = section;
    }
  });

  return currentSection;
}

function updateNavLinks(currentSection) {
  navLinks.forEach((link) => {
    link.classList.remove('active-link');
  });

  const navLink = document.querySelector(`[href="#${currentSection.id}"]`);
  navLink.classList.add('active-link');
}