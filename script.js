document.addEventListener('DOMContentLoaded', function() {
    const letterImage = document.getElementById('letter-image');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                letterImage.classList.add('open');
            } else {
                letterImage.classList.remove('open');
            }
        });
    });

    observer.observe(letterImage);
});