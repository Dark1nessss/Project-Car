// Sidebar Toggle
let btn = document.querySelector("#toggle-btn");
let sidebar = document.querySelector(".sidebar");

btn.onclick = function () {
    sidebar.classList.toggle("active");
    document.querySelector("main").classList.toggle("active");
};

// Page Navigation
document.addEventListener("DOMContentLoaded", function () {
    const sidebarLinks = document.querySelectorAll('.nav_list a');
    const mainContentSections = document.querySelectorAll('main');

    sidebarLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            // Remove active class from all links
            sidebarLinks.forEach(link => link.classList.remove('expanded', 'active'));

            // Add active class to the clicked link
            this.classList.add('expanded', 'active');

            // Hide all sections with fade-out
            mainContentSections.forEach(section => {
                section.classList.add('fade-out');
                setTimeout(() => {
                    section.classList.add('hidden');
                    section.classList.remove('fade-out');
                }, 500);
            });

            // Get the target ID from the clicked link
            const targetId = this.getAttribute('id') + '-section';

            // Show the target section with fade-in
            const targetSection = document.querySelector(`#${targetId}`);
            if (targetSection) {
                setTimeout(() => {
                    targetSection.classList.remove('hidden');
                    targetSection.classList.add('fade-in');
                }, 500);
                setTimeout(() => {
                    targetSection.classList.remove('fade-in');
                }, 1000);
            }
        });
    });

    // Shows dashboard as initial active
    document.querySelector('#dashboard').classList.add('expanded', 'active');
    document.querySelector('#dashboard-section').classList.remove('hidden');
});
