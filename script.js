document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  const allBtn = document.querySelector('.filter-btn[data-filter="all"]');

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
        const otherFiltersActive = Array.from(filterButtons)
          .some(b => b.classList.contains('active') && b !== allBtn);

        if (otherFiltersActive) {
          allBtn.classList.remove('active');
        } else {
          allBtn.classList.add('active');
        }
      }

      // Fix lingering :focus styles on mobile
        setTimeout(() => {
          btn.blur();
          void btn.offsetHeight; // force reflow
        }, 0);

      // Update project card visibility
      updateProjectsDisplay();
    });
  });
});


