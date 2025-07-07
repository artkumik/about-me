function downloadFile() {
    const link = document.createElement("a");
    link.href = "files/resume.pdf"; // Replace with the actual file URL
    link.download = "ResumeAK.pdf"; // Name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function openResumeInNewWindow() {
    window.open('username.github.io/folder/document.pdf', '_blank');
}