const navButton = document.querySelector('.navicon');

navButton.addEventListener('click', () => {
    const isOpen = navButton.getAttribute('aria-expanded');
    if (isOpen === 'false') {
        navButton.setAttribute('aria-expanded', 'true');
    } else {
        navButton.setAttribute('aria-expanded', 'false');
    }
})
