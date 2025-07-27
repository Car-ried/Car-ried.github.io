document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  const allBtn = document.querySelector('.filter-btn[data-filter="all"]');
  
  // Disable :focus styles for .btn--secondary on touch devices (fixes iOS/Android)
  function disableFocusStylingOnTouchDevices() {
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      const style = document.createElement('style');
      style.textContent = `
        .btn--secondary:focus {
          outline: none !important;
          box-shadow: none !important;
          background-color: inherit !important;
          color: inherit !important;
        }
      `;
      document.head.appendChild(style);
    }
  }
  disableFocusStylingOnTouchDevices();


  function updateProjectsDisplay() {
    const activeFilters = Array.from(filterButtons)
      .filter(b => b.classList.contains('active') && b !== allBtn)
      .map(b => b.dataset.filter);

    const showAll = activeFilters.length === 0;

    projectCards.forEach(card => {
      const categories = card.dataset.category.split(' ');
      const matches = activeFilters.every(f => categories.includes(f));
      card.style.display = showAll || matches ? 'block' : 'none';
    });
  }

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const isAll = btn === allBtn;

      if (isAll) {
        // Clear all other active filters and select "All"
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      } else {
        // Toggle the clicked filter
        btn.classList.toggle('active');

        // If any filters are now active, deselect "All"
        const anyOtherActive = Array.from(filterButtons)
          .some(b => b.classList.contains('active') && b !== allBtn);

        if (anyOtherActive) {
          allBtn.classList.remove('active');
        } else {
          allBtn.classList.add('active');
        }
      }

      // Fix mobile browsers' stuck :focus styles
      setTimeout(() => {
        btn.blur();
        void btn.offsetHeight; // Force reflow
      }, 0);

      // Update project visibility
      updateProjectsDisplay();
    });
  });
  
  const hamburger = document.querySelector('.hamburger');
  const navList   = document.querySelector('.nav-list');

  if (hamburger && navList) {
    hamburger.addEventListener('click', () => {
      const expanded = hamburger.getAttribute('aria-expanded') === 'true';
      hamburger.setAttribute('aria-expanded', String(!expanded));
      navList.classList.toggle('open');
    });
  }
});



