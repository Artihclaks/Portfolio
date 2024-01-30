// script.js
function scrollToHeader(targetId) {
    var header = document.getElementById(targetId);
    if (header) {
        header.scrollIntoView({ behavior: 'smooth' });
    }
}

function navigateToLink(link) {
    window.location.href = link;
}

function viewgitcode(link) {
    window.location.href = link;
}
