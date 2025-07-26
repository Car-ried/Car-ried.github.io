document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('active');
      btn.blur();

      const activeFilters = Array.from(filterButtons)
        .filter(b => b.classList.contains('active') && b.dataset.filter !== 'all')
        .map(b => b.dataset.filter);

      const showAll = activeFilters.length === 0;

      projectCards.forEach(card => {
        const categories = card.dataset.category.split(' '); // split into array

        const matches = activeFilters.some(filter => categories.includes(filter));

        if (showAll || matches) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });

      // Sync the "All" button
      const allBtn = document.querySelector('.filter-btn[data-filter="all"]');
      if (showAll) {
        allBtn.classList.add('active');
      } else {
        allBtn.classList.remove('active');
      }
    });
  });
});
