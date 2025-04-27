document.addEventListener('DOMContentLoaded', function() {
    const letterImage = document.getElementById('letterImage');

    letterImage.addEventListener('click', function() {
        letterImage.classList.toggle('open');
    });
});