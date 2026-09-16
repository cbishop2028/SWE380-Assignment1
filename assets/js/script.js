'use strict';

const sidebar = document.querySelector('[data-sidebar]');
const sidebarButton = document.querySelector('[data-sidebar-btn]');
const sidebarDetails = document.querySelector('[data-sidebar-details]');

const desktopSidebarQuery = window.matchMedia('(min-width: 1250px)');

function updateSidebarState() {
  const isDesktop = desktopSidebarQuery.matches;
  const isExpanded = isDesktop || sidebar.classList.contains('active');

  sidebarButton.setAttribute('aria-expanded', String(isExpanded));

  const buttonText = sidebarButton.querySelector('span');

  if (buttonText) {
    buttonText.textContent = isExpanded
      ? 'Hide contact information'
      : 'Show contact information';
  }

  if (isDesktop) {
    sidebarDetails.removeAttribute('inert');
  } else if (isExpanded) {
    sidebarDetails.removeAttribute('inert');
  } else {
    sidebarDetails.setAttribute('inert', '');
  }
}

sidebarButton.addEventListener('click', () => {
  sidebar.classList.toggle('active');
  updateSidebarState();
});

desktopSidebarQuery.addEventListener('change', updateSidebarState);
updateSidebarState();

const navigationButtons = Array.from(
  document.querySelectorAll('[data-nav-link]')
);

const pages = Array.from(document.querySelectorAll('[data-page]'));

function showPage(pageName, moveFocus = true) {
  pages.forEach((page) => {
    const isActive = page.dataset.page === pageName;

    page.classList.toggle('active', isActive);
    page.hidden = !isActive;
  });

  navigationButtons.forEach((button) => {
    const isActive = button.dataset.navLink === pageName;

    button.classList.toggle('active', isActive);
    button.setAttribute('aria-selected', String(isActive));
  });

  const activePage = pages.find((page) => page.dataset.page === pageName);

  if (activePage && moveFocus) {
    activePage.focus({ preventScroll: true });
    window.scrollTo({ top: 0, behavior: 'auto' });
  }
}

navigationButtons.forEach((button) => {
  button.addEventListener('click', () => {
    showPage(button.dataset.navLink);
  });
});

showPage('about', false);
