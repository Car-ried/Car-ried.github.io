// script.js
document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.filter-btn');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('active');

      const filter = btn.dataset.filter;
      const isActive = btn.classList.contains('active');

      console.log(`Filter "${filter}" is now ${isActive ? 'ON' : 'OFF'}`);
      // You can use this state to show/hide projects accordingly
    });
  });
});
