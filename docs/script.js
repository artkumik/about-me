function downloadFile() {
    const link = document.createElement("a");
    link.href = "files/resume.pdf";
    link.download = "ResumeAK.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function openResume() {
    window.open('https://artkumik.github.io/about-me/docs/files/resume.pdf', '_blank');
}

function initDarkMode() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const body = document.body;

    if (!darkModeToggle || !themeIcon) {
        return;
    }

    const currentTheme = localStorage.getItem('theme') || 'light';
    
    if (currentTheme === 'dark') {
        body.classList.add('dark-mode');
        document.documentElement.classList.add('dark-mode');
        themeIcon.src = 'images/icons/sun.png';
    }

    darkModeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        document.documentElement.classList.toggle('dark-mode');
        
        if (body.classList.contains('dark-mode')) {
            themeIcon.src = 'images/icons/sun.png';
            localStorage.setItem('theme', 'dark');
        } else {
            themeIcon.src = 'images/icons/moon.png';
            localStorage.setItem('theme', 'light');
        }
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDarkMode);
} else {
    initDarkMode();
}

window.addEventListener('load', initDarkMode);