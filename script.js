


















document.addEventListener('DOMContentLoaded', function() {
    const letterImage = document.getElementById('letter-image');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                letterImage.classList.add('open');
            }
        });
    });

    observer.observe(letterImage);
});