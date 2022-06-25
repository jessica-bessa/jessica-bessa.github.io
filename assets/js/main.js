const body = document.querySelector('body');
const toggleTheme = document.getElementById('toggle-theme');

const swtich_theme = (theme, body, toggleTheme) => {
  body.className = theme; 
  theme == 'dark' ? toggleTheme.classList = 'bx bx-sun': toggleTheme.classList = 'bx bx-moon';
}

swtich_theme(localStorage.getItem('theme'), body, toggleTheme);

/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show')
    })
  }
}
showMenu('nav-toggle', 'nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
  const navMenu = document.getElementById('nav-menu')
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.pageYOffset

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute('id')

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
    } else {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
    }
  })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2000,
  delay: 200,
  //     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text', {});
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img', { delay: 400 });
sr.reveal('.home__social-icon', { interval: 200 });
sr.reveal('.skills__data, .work__img, .contact__input', { interval: 200 });

/*===== Toggle theme =====*/



let theme;
toggleTheme.addEventListener('click', () => {
  if (body.classList.contains('light')) {
    body.classList.remove('light');
    body.classList.add('dark');
    toggleTheme.className = 'bx bx-sun'
    theme = body.classList.value;
    localStorage.setItem("theme", theme);

    return;
  }

  body.classList.remove('dark');
  body.classList.add('light');
  toggleTheme.className = 'bx bx-moon'
  theme = body.classList.value;
  localStorage.setItem("theme", theme);
})


class Skill {
  constructor(name, percentage) {
    this.name = name;
    this.percentage = percentage;


    this.skillComponent = () => {
      const skillData = document.createElement('div');
      skillData.className = "skills__data";

      const skillName = document.createElement('div');
      skillName.className = "skills__names";
      
      const name = document.createElement('span');
      name.className = "skills__name";
      name.textContent = this.name;
      
      skillName.appendChild(name);

      const skillBar = document.createElement('div');
      skillBar.classList = 'skills__bar';
      skillBar.style.width = this.percentage;

      const skillPercentage = document.createElement('div');
      const percentage = document.createElement('span');
      percentage.classList = "skills__percentage";
      percentage.textContent = this.percentage
      skillPercentage.appendChild(percentage);

      skillData.appendChild(skillName);
      skillData.appendChild(skillBar);
      skillData.appendChild(skillPercentage);

      return(skillData)
    }

    return this.skillComponent();
  }
}

let skills = [];

skills = skills.concat(
  new Skill('BDD', '100%'),
  new Skill('Jira', '95%'),
  new Skill('Integration Test', '100%'),
  new Skill('API Test', '100%'),
  new Skill('systems testing', '100%'),
  new Skill('Manual Tests', '100%'),
  new Skill('Java', '30%'),
  new Skill('Javascript', '63%'),
  new Skill('HTML', '70%'),
  new Skill('QA Automation', '20%'),
  new Skill('Regression Test', '100%'),
  new Skill('Octane', '90%'),
  new Skill('Postman', '90%'),
  new Skill('SQL', '95%'),
  new Skill('DBeaver', '80%'),
  new Skill('HpAlm', '90%'),
  new Skill('Scrum', '92%'),
  new Skill('Agile', '95%'),
  new Skill('ERP', '90%'),
  new Skill('Problem solving', '90%'),
  new Skill('functional tests', '100%'),
  new Skill('non-functional tests', '100%'),
  new Skill('test management', '100%'),
  new Skill('SAS', '60%')

)

const add_skills = (skills) => {
  const skillsDatas = document.getElementById('skills__datas');
  skills.forEach(skill => skillsDatas.appendChild(skill));
}


add_skills(skills);
