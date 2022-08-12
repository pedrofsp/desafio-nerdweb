function showSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.style.display = 'unset';
  setTimeout(() => {
    sidebar.style.opacity = '0.5';
    setTimeout(() => {
      sidebar.style.opacity = '1';
    }, 5);
  }, 10);
}

function hideSidebar() {
  const sidebar = document.getElementById('sidebar');
  setTimeout(() => {
    sidebar.style.opacity = '0.5';
    setTimeout(() => {
      sidebar.style.opacity = '0';
    }, 5);
  }, 10);
  setTimeout(() => {
    sidebar.style.display = 'none';
  }, 500);
}
