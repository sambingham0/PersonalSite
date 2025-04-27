document.addEventListener('DOMContentLoaded', function() {
    const letterImage = document.getElementById('letterImage');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                letterImage.classList.add('open');
            }
        });
    });

    observer.observe(letterImage);
});