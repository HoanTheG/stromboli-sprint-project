document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const overlay = document.getElementById('overlay');
    const closeModal = document.querySelector('.close');
    const buttons = document.querySelectorAll('.btn-1, .btn-2, .btn-3');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const title = button.getAttribute('data-title');
            const description = button.getAttribute('data-description');
            const allergens = button.getAttribute('data-allergens');

            // Update modal content
            modal.querySelector('h2').textContent = title;
            modal.querySelector('.description').textContent = description;
            modal.querySelector('.allergens').textContent = allergens;

            modal.style.display = 'block';
            overlay.style.display = 'block';
        });
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
        overlay.style.display = 'none';
    });

    overlay.addEventListener('click', () => {
        modal.style.display = 'none';
        overlay.style.display = 'none';
    });

    // Add event listeners to category buttons
    document.querySelectorAll('.category-btn').forEach(button => {
        button.addEventListener('click', function() {
            // Remove the "active" class from all buttons
            document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
            // Add the "active" class to the clicked button
            this.classList.add('active');
        });
    });
});