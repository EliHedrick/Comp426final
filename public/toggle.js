document.addEventListener('DOMContentLoaded', () => {
    const theme = document.getElementById('theme');
    const toggle = document.getElementById('toggle');
    const stored = localStorage.getItem('theme');
    if(stored)
        theme.href = stored;
    toggle.addEventListener('click', () => {
        if(theme.href.includes('light')) {
            theme.href = 'darkstyle.css';
        } else {
            theme.href = 'lightstyle.css'
        }
        localStorage.setItem('theme', theme.href);
    })
})