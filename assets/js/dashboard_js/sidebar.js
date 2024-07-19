// Sidebar Toggle
let btn = document.querySelector("#toggle-btn");
let sidebar = document.querySelector(".sidebar");

btn.onclick = function () {
    sidebar.classList.toggle("active");
    document.querySelector("main").classList.toggle("active");
};



// STILL BUGGED ON THE .SEE-ALL!!!
// Page Navigation
document.addEventListener("DOMContentLoaded", function () {
    const sidebarLinks = document.querySelectorAll('.nav_list a');
    const mainContentSections = document.querySelectorAll('main');
    const seeAllButtons = document.querySelectorAll('.see-all');

    function switchSection(targetId) {
        // Remove active class from all links
        sidebarLinks.forEach(link => link.classList.remove('expanded', 'active'));

        // Hide all sections with fade-out
        mainContentSections.forEach(section => {
            section.classList.add('fade-out');
            setTimeout(() => {
                section.classList.add('hidden');
                section.classList.remove('fade-out');
            }, 500); // Match this duration with the CSS animation duration
        });

        // Show the target section with fade-in
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            setTimeout(() => {
                targetSection.classList.remove('hidden');
                targetSection.classList.add('fade-in');
            }, 500); // Delay to ensure the previous section is fully hidden
            setTimeout(() => {
                targetSection.classList.remove('fade-in');
            }, 1000); // Ensure the fade-in animation completes
        }
    }

    sidebarLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            // Add active class to the clicked link
            this.classList.add('expanded', 'active');

            // Get the target ID from the clicked link
            const targetId = this.getAttribute('id') + '-section';
            switchSection(targetId);
        });
    });

    // Shows dashboard as initial active
    document.querySelector('#dashboard').classList.add('expanded', 'active');
    document.querySelector('#dashboard-section').classList.remove('hidden');

    // Add event listener for all "See all" buttons
    seeAllButtons.forEach(button => {
        button.addEventListener('click', function () {
            const targetId = this.getAttribute('data-target');
            if (targetId) {
                // Add active class to the corresponding sidebar link
                const targetLink = document.getElementById(targetId.replace('-section', ''));
                if (targetLink) {
                    targetLink.classList.add('expanded', 'active');
                }

                // Show the target section
                switchSection(targetId);
            }
        });
    });
});