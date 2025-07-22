// Sticky nav active link
    const navLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('section');
    window.addEventListener('scroll', () => {
      let current = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 80;
        if (pageYOffset >= sectionTop) current = section.getAttribute('id');
      });
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) link.classList.add('active');
      });
    });

    // Section reveal on scroll
    const revealSections = () => {
      const trigger = window.innerHeight * 0.85;
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < trigger) section.classList.add('visible');
      });
    };
    window.addEventListener('scroll', revealSections);
    window.addEventListener('load', revealSections);
    
    // Smooth scroll for nav links
    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href').slice(1);
        const target = document.getElementById(targetId);
        if (target) {
          e.preventDefault();
          window.scrollTo({
            top: target.offsetTop - 60,
            behavior: 'smooth'
          });
        }
      });
    });

 // Mobile nav dropdown
    document.addEventListener('DOMContentLoaded', function() {
      const nav = document.querySelector('nav');
      const navUl = nav.querySelector('ul');
      // Create toggle button
      const btn = document.createElement('button');
      btn.className = 'nav-toggle';
      btn.setAttribute('aria-label', 'Toggle navigation');
      btn.innerHTML = '&#9776;';
      nav.insertBefore(btn, navUl);
      btn.addEventListener('click', function() {
        navUl.classList.toggle('open');
      });
      // Close menu on link click (mobile)
      navUl.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
          if(window.innerWidth <= 700) navUl.classList.remove('open');
        });
      });
    });

     // Contact form (demo, no backend)
    document.querySelector('.contact-form').addEventListener('submit', function(e) {
      e.preventDefault();
      const msg = document.getElementById('formMessage');
      msg.textContent = "Sending...";
      setTimeout(() => {
        msg.textContent = "Thank you for contacting us! We'll get back to you soon.";
        this.reset();
      }, 1200);
    });

  