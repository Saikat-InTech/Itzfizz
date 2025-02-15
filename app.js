document.querySelectorAll('.image-box img').forEach(img => {
    img.addEventListener('mousemove', (e) => {
        const rect = img.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        img.style.transform = `scale(1.1) translate(${x * 0.02}px, ${y * 0.02}px)`;
    });

    img.addEventListener('mouseleave', () => {
        img.style.transform = 'scale(1)';
    });
});

document.querySelectorAll('.image-box').forEach(box => {
    box.addEventListener('mouseenter', () => {
        document.querySelectorAll('.image-box').forEach(other => {
            if (other !== box) {
                other.style.filter = "grayscale(100%) contrast(0.5) brightness(1.5)";
            }
        });
    });

    box.addEventListener('mouseleave', () => {
        document.querySelectorAll('.image-box').forEach(other => {
            other.style.filter = "grayscale(0%) contrast(1)";
        });
    });
});
