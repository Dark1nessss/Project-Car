// SweetAlert
function confirmLogout() {
    Swal.fire({
        title: 'Are you sure?',
        text: "You will be logged out.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, log me out!'
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = '/logout';
        }
    })
}

// Button Navigation
document.addEventListener("DOMContentLoaded", function () {
    // Page Navigation
    const seeAllNewCustomersButton = document.getElementById('see-all-new-customers');
    const accountsSection = document.getElementById('accounts-section');
    const dashboardSection = document.getElementById('dashboard-section'); // Assuming this is the default visible section

    seeAllNewCustomersButton.addEventListener('click', function () {
        // Hide the currently visible section
        dashboardSection.classList.add('hidden');

        // Show the accounts section
        accountsSection.classList.remove('hidden');
    });
});