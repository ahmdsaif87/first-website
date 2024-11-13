document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.btn-toggle');
    const navbar = document.querySelector('.navbar');
    const btnSubmit = document.getElementById('btnSubmit');

    // Event listener untuk tombol toggle navbar
    if (toggleButton && navbar) {
        toggleButton.addEventListener('click', () => {
            navbar.classList.toggle('active');
        });
    }

    // Event listener untuk tombol submit
    if (btnSubmit) {
        btnSubmit.addEventListener('click', (event) => {
            event.preventDefault(); 
            Swal.fire({
                icon: "error",
                title: "Sorry...",
                text: "this feature is not available yet",
            });
        });
    }
});
