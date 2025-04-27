document.addEventListener('DOMContentLoaded', function() {
    const letterImage = document.getElementById('letter-image');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add a delay before adding the 'open' class
                setTimeout(() => {
                    letterImage.classList.add('open');
                }, 1000); // 1000ms delay (adjust)
            } else {
                letterImage.classList.remove('open');
            }
        });
    }, {
        threshold: 0.5 // Optional: triggers when 50% of the element is in view
    });

    observer.observe(letterImage);
});
