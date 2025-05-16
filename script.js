document.addEventListener('DOMContentLoaded', function () {
    const forms = document.querySelectorAll('.department-form');

    forms.forEach((form) => {
        const departmentName = form.getAttribute('data-department');

        // Create clickable label
        const label = document.createElement('button');
        label.textContent = departmentName;
        label.className = 'department-label';
        label.setAttribute('type', 'button');

        // Insert label before form
        form.parentNode.insertBefore(label, form);

        // Hide form initially
        form.style.display = 'none';

        // Show form on label click
        label.addEventListener('click', function () {
            form.style.display = 'block';
            setTimeout(() => {
                form.classList.add('visible');
            }, 50);

            // Optionally scroll to the form
            window.scrollTo({ top: label.offsetTop, behavior: 'smooth' });

            // Disable the label after it's clicked (optional, if one-time reveal)
            label.disabled = true;
        });
    });
});
