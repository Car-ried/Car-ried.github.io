document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const isAll = btn.dataset.filter === 'all';

      if (isAll) {
        // Deselect all other filters
        filterButtons.forEach(b => {
          b.classList.remove('active');
        });
        btn.classList.add('active');
      } else {
        // Toggle individual filter
        btn.classList.toggle('active');
        btn.blur();

        // Deselect "All" if anything else is active
        const allBtn = document.querySelector('.filter-btn[data-filter="all"]');
        allBtn.classList.remove('active');
      }

      // Get all active filters (ignoring "all")
      const activeFilters = Array.from(filterButtons)
        .filter(b => b.classList.contains('active') && b.dataset.filter !== 'all')
        .map(b => b.dataset.filter);

      const showAll = activeFilters.length === 0;

      // Show/hide project cards
      projectCards.forEach(card => {
        const categories = card.dataset.category.split(' ');
        const matches = activeFilters.every(filter => categories.includes(filter));

        if (showAll || matches) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
});
