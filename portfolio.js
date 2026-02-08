const checkbox = document.getElementById('theme-checkbox');
const html = document.documentElement;
const icons = document.querySelectorAll('nav.nav img, #footer img');

icons.forEach(img => {
    if (!img.dataset.light) img.dataset.light = img.src;
});

checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
        html.setAttribute('dark-theme', 'dark');
        icons.forEach(img => {
            if (img.dataset.dark) img.src = img.dataset.dark;
        });
    } else {
        html.removeAttribute('dark-theme');
        icons.forEach(img => {
            if (img.dataset.light) img.src = img.dataset.light;
        });
    }
});
