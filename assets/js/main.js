(() => {
  const navToggle = document.querySelector('.nav-toggle');
  const primaryNav = document.querySelector('.primary-nav');

  if (navToggle && primaryNav) {
    const closeMenu = () => {
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.setAttribute('aria-label', 'Open navigation menu');
      primaryNav.classList.remove('is-open');
    };

    navToggle.addEventListener('click', () => {
      const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!isOpen));
      navToggle.setAttribute('aria-label', isOpen ? 'Open navigation menu' : 'Close navigation menu');
      primaryNav.classList.toggle('is-open', !isOpen);
    });

    primaryNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeMenu();
    });

    document.addEventListener('click', (event) => {
      if (navToggle.getAttribute('aria-expanded') === 'true' &&
          !primaryNav.contains(event.target) &&
          !navToggle.contains(event.target)) {
        closeMenu();
      }
    });
  }

  document.querySelectorAll('[data-year]').forEach((element) => {
    element.textContent = String(new Date().getFullYear());
  });

  const contactForm = document.querySelector('#contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!contactForm.reportValidity()) return;

      const data = new FormData(contactForm);
      const name = String(data.get('name') || '').trim();
      const phone = String(data.get('phone') || '').trim();
      const insuranceType = String(data.get('insurance_type') || '').trim();
      const message = String(data.get('message') || '').trim();
      const subject = `Insurance enquiry from ${name}`;
      const body = [
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Insurance type: ${insuranceType}`,
        '',
        'Message:',
        message || 'No additional message provided.'
      ].join('\n');
      const mailto = `mailto:rahultatabihar@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      const status = document.querySelector('#form-status');

      if (status) {
        status.textContent = 'Your email app is opening with your enquiry. Please press Send in your email app to complete it.';
      }

      window.location.href = mailto;
    });
  }
})();
