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