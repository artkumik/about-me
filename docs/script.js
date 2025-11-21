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

    darkModeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        document.documentElement.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            themeIcon.src = 'images/icons/sun.png';
            localStorage.setItem('theme', 'dark');
        } else {
            themeIcon.src = 'images/icons/moon.png';
            localStorage.setItem('theme', 'light');
        }
    });
}

function setupSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const navbar = document.querySelector('.navbar');
                const navbarHeight = navbar ? navbar.offsetHeight : 60;
                const targetPosition = targetSection.offsetTop - navbarHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

function setupPageLoad() {
    setupDarkMode();
    setupSmoothScrolling();
}

// Wait for DOM to be ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupPageLoad);
} else {
    setupPageLoad();
}