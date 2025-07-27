document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach(btn => {
    const handleTap = () => {
      const isAll = btn.dataset.filter === 'all';

      if (isAll) {
        // Deselect all other filters and select "All"
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      } else {
        // Toggle this filter on/off
        btn.classList.toggle('active');

        // Deselect "All" if any other filter is active
        const allBtn = document.querySelector('.filter-btn[data-filter="all"]');
        allBtn.classList.remove('active');

        // If no filters are active, reselect "All"
        const anyActive = Array.from(filterButtons).some(b =>
          b.classList.contains('active') && b.dataset.filter !== 'all'
        );
        if (!anyActive) {
          allBtn.classList.add('active');
        }
      }

      // Always blur the button to avoid lingering :focus styles on mobile
      btn.blur();

      // Get currently active filters (excluding "all")
      const activeFilters = Array.from(filterButtons)
        .filter(b => b.classList.contains('active') && b.dataset.filter !== 'all')
        .map(b => b.dataset.filter);

      const showAll = activeFilters.length === 0;

      // Show/hide project cards based on active filters
      projectCards.forEach(card => {
        const categories = card.dataset.category.split(' ');
        const matches = activeFilters.every(filter => categories.includes(filter));
        card.style.display = showAll || matches ? 'block' : 'none';
      });
    };

    btn.addEventListener('click', handleTap);
    btn.addEventListener('touchend', handleTap, { passive: true });
  });
});

