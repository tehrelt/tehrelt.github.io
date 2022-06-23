function toggleBorder() {
    document.querySelectorAll('*').forEach(function (el) {
        el.classList.toggle('border');
    });
}