const filters = document.querySelectorAll('[data-filter]');
const projects = [...document.querySelectorAll('[data-category]')];
const count = document.querySelector('#count');
function filterProjects(category) {
  let visible = 0;
  projects.forEach(project => {
    project.hidden = category !== 'all' && project.dataset.category !== category;
    if (!project.hidden) visible++;
  });
  filters.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.filter === category)));
  count.textContent = `${visible} projet${visible === 1 ? '' : 's'} affiché${visible === 1 ? '' : 's'}`;
}
filters.forEach(button => button.addEventListener('click', () => filterProjects(button.dataset.filter)));
filterProjects('all');
