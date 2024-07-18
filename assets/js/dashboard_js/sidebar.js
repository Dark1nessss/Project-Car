// Sidebar Toggle
let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");
btn.onclick = function () {
    sidebar.classList.toggle("active");
}

// Page Navigation
document.addEventListener("DOMContentLoaded", function () {
    const sidebarLinks = document.querySelectorAll('.nav_list a');
    const mainContentSections = document.querySelectorAll('main');

    sidebarLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            // Remove active class from all links
            sidebarLinks.forEach(link => link.classList.remove('expanded'));

            // Add active class to the clicked link
            this.classList.add('expanded');

            // Hide all sections
            mainContentSections.forEach(section => section.classList.add('hidden'));

            // Get the target ID from the clicked link
            const targetId = this.getAttribute('id') + '-section';

            // Show the target section
            const targetSection = document.querySelector(`#${targetId}`);
            if (targetSection) {
                targetSection.classList.remove('hidden');
            }
        });
    });

    // Shows dashboard as initial active
    document.querySelector('#dashboard').classList.add('expanded');
    document.querySelector('#dashboard-section').classList.remove('hidden');
});