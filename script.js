// This script is optional if you want to add interactivity or dynamic content loading.
document.addEventListener('DOMContentLoaded', function() {
    const containers = document.querySelectorAll('.container');
    containers.forEach(container => {
        container.setAttribute('data-date', container.querySelector('h2').innerText);
    });
});
