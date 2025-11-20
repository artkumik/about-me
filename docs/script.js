function downloadFile() {
    const link = document.createElement("a");
    link.href = "files/resume.pdf"; // Replace with the actual file URL
    link.download = "ResumeAK.pdf"; // Name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function openResume() {
        window.open('https://artkumik.github.io/about-me/docs/files/resume.pdf', '_blank');
}

document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const body = document.body;
    const html = document.html;

    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    if (currentTheme === 'dark') {
        body.classList.add('dark-mode');
        document.documentElement.classList.add('dark-mode');
        themeIcon.src = 'images/icons/sun.png';
    }

    darkModeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        document.documentElement.classList.toggle('dark-mode');
        
        // Change icon and save preference
        if (body.classList.contains('dark-mode')) {
            themeIcon.src = 'images/icons/sun.png';
            localStorage.setItem('theme', 'dark');
        } else {
            themeIcon.src = 'images/icons/moon.png';
            localStorage.setItem('theme', 'light');
        }
    });
});