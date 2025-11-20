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

function setupDarkMode() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const themeIcon = document.getElementById('themeIcon');
    
    if (!darkModeToggle || !themeIcon) {
        console.log('Dark mode elements not found');
        return;
    }

    const currentTheme = localStorage.getItem('theme') || 'light';
    
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
        document.documentElement.classList.add('dark-mode');
        themeIcon.src = 'images/icons/sun.png';
    } else {
        themeIcon.src = 'images/icons/moon.png';
    }

    darkModeToggle.onclick = function() {
        document.body.classList.toggle('dark-mode');
        document.documentElement.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            themeIcon.src = 'images/icons/sun.png';
            localStorage.setItem('theme', 'dark');
        } else {
            themeIcon.src = 'images/icons/moon.png';
            localStorage.setItem('theme', 'light');
        }
    };
}

document.addEventListener('DOMContentLoaded', setupDarkMode);
window.addEventListener('load', setupDarkMode);