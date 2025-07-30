document.addEventListener('DOMContentLoaded', () => {
  
  const grid = document.getElementById("project-grid");

    // Dynamically build each project tile
    Object.entries(projectData).forEach(([slug, project]) => {
    // Ensure required tile data is present
    if (!project.tileTitle || !project.tileDescription || !project.tileImage) return;

    const categories = project.dataCategory || "uncategorized";
    const tile = document.createElement("a");
    tile.href = `projectDetails.html?slug=${slug}&from=projects.html`;
    tile.innerHTML = `
      <article class="project-card project-card-max" data-category="${categories}">
        <div class="project-card__image-wrapper">
          <img
            src="${project.tileImage}"
            alt="${project.tileAlt || project.tileTitle}"
            class="project-card__image"
            width="640"
            height="480"
          />
        </div>
        <div class="project-card__content">
          <h3 class="project-card__title">${project.tileTitle}</h3>
          <p class="project-card__description">${project.tileDescription}</p>
        </div>
      </article>
    `;
    grid.appendChild(tile);
  });
  
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
    
    const projectLinks = document.querySelectorAll('#project-grid > a');

    projectLinks.forEach(link => {
      const card = link.querySelector('.project-card');
      const categories = card.dataset.category.split(' ');
      const matches = activeFilters.every(f => categories.includes(f));
      link.classList.toggle('project-card--hidden', !(showAll || matches));
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
  
  console.log('hamburger exists?', !!hamburger, 'nav-list exists?', !!navList);

  if (hamburger && navList) {
    hamburger.addEventListener('click', () => {
      const expanded = hamburger.getAttribute('aria-expanded') === 'true';
      hamburger.setAttribute('aria-expanded', String(!expanded));
      navList.classList.toggle('open');
    });
  }
});

