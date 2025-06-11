
const navItems = [
    { text: "Master Settings", href: "davinci-master-settings.html" },
    { text: "Blackmagic Cloud", href: "davinci-cloud.html" },
    { text: "Image Scaling", href: "davinci-image-scaling.html" },
    { text: "Color Management", href: "davinci-color-management.html" },
    { text: "General Options", href: "davinci-general-options.html" },
    { text: "Camera Raw", href: "davinci-camera-raw.html" },
    { text: "Capture and Playback", href: "davinci-capture-playback.html" },
    { text: "Subtitles and Transcription", href: "davinci-subtitles-transcription.html" },
    { text: "Fusion", href: "davinci-fusion.html" },
    { text: "Fairlight", href: "davinci-fairlight.html" },
    { text: "Path Mapping", href: "davinci-path-mapping.html" },
    { text: "Additional", href: "davinci-additional.html" }
];

function generateNavigation() {
    const currentPage = window.location.pathname.split('/').pop();
    const sidebar = document.getElementById('navigation');
    sidebar.innerHTML = '';

    navItems.forEach(({ text, href }) => {
        const isActive = href === currentPage;
        const element = document.createElement(isActive ? 'div' : 'a');
        
        element.className = 'navigation-item' + (isActive ? ' active' : '');
        element.textContent = text;
        
        if (!isActive) element.href = href;
        
        sidebar.appendChild(element);
    });
}

generateNavigation();
