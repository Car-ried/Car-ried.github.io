document.addEventListener('DOMContentLoaded', () => {
  // Hamburger nav setup (runs on all pages)
  const hamburger = document.querySelector('.hamburger');
  const navList = document.querySelector('.nav-list');

  if (hamburger && navList) {
    hamburger.addEventListener('click', () => {
      const expanded = hamburger.getAttribute('aria-expanded') === 'true';
      hamburger.setAttribute('aria-expanded', String(!expanded));
      navList.classList.toggle('open');
    });
  }

  // Guard clause: only run project tile/filter logic if grid exists
  const grid = document.getElementById("project-grid");
  if (!grid) return;

  // ==== Only runs on projects.html ====
  Object.entries(projectData).forEach(([slug, project]) => {
    if (!project.tileTitle || !project.tileDescription || !project.tileImage) return;

    const categories = project.dataCategory || "uncategorized";
    const tile = document.createElement("a");
    tile.href = `projectDetails.html?slug=coming-soon&from=projects.html`;

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
  const allBtn = document.querySelector('.filter-btn[data-filter="all"]');

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
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      } else {
        btn.classList.toggle('active');

        const anyOtherActive = Array.from(filterButtons)
          .some(b => b.classList.contains('active') && b !== allBtn);

        if (anyOtherActive) {
          allBtn.classList.remove('active');
        } else {
          allBtn.classList.add('active');
        }
      }

      setTimeout(() => {
        btn.blur();
        void btn.offsetHeight;
      }, 0);

      updateProjectsDisplay();
    });
  });
});


