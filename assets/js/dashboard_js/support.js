document.addEventListener("DOMContentLoaded", function () {
    const ticketDetails = {
        "ticket-1": {
            name: "John Doe",
            email: "john.doe@example.com",
            phone: "123-456-7890",
            description: "Customer is unable to complete payment process.",
            vehicle: "Toyota Corolla",
            notes: "Customer prefers to pay via credit card.",
            status: "open",
            messages: [
                { sender: "admin", text: "How can I help you today?", timestamp: "2024-07-18 10:00" },
                { sender: "customer", text: "I can't complete my payment.", timestamp: "2024-07-18 10:05" }
            ]
        },
        "ticket-2": {
            name: "Jane Smith",
            email: "jane.smith@example.com",
            phone: "098-765-4321",
            description: "Customer reports issues with car navigation system.",
            vehicle: "Honda Civic",
            notes: "Customer requested a test drive before finalizing.",
            status: "open",
            messages: [
                { sender: "admin", text: "How can I assist you?", timestamp: "2024-07-17 09:00" },
                { sender: "customer", text: "The navigation system is not working.", timestamp: "2024-07-17 09:05" }
            ]
        }
    };

    function updateStatusLabel(status) {
        const statusElement = document.getElementById('modal-incident-status');
        statusElement.innerText = status.charAt(0).toUpperCase() + status.slice(1); // Capitalize first letter
        statusElement.className = 'status-label'; // Reset class
        switch (status.toLowerCase()) {
            case 'open':
                statusElement.classList.add('status-open');
                break;
            case 'in progress':
                statusElement.classList.add('status-in-progress');
                break;
            case 'closed':
                statusElement.classList.add('status-closed');
                break;
            case 'pending':
                statusElement.classList.add('status-pending');
                break;
            case 'new':
                statusElement.classList.add('status-new');
                break;
            case 'complete':
                statusElement.classList.add('status-complete');
                break;
            default:
                break;
        }
    }

    function openTicketDetails(ticketId) {
        console.log('Opening details for:', ticketId); // Debug log
        const ticket = ticketDetails[ticketId];
        if (ticket) {
            document.getElementById('modal-ticket-id').innerText = ticketId;
            document.getElementById('modal-ticket-title').innerText = ticket.description;
            document.getElementById('modal-user-id').innerText = ticketId;
            document.getElementById('modal-user-name').innerText = ticket.name;
            document.getElementById('modal-incident-title').innerText = ticket.description;
            document.getElementById('modal-incident-description').innerText = ticket.description;
            updateStatusLabel(ticket.status); // Set the status from ticket data

            const chatMessages = document.getElementById('chat-messages');
            chatMessages.innerHTML = '';
            ticket.messages.forEach(message => {
                const messageDiv = document.createElement('div');
                messageDiv.classList.add('message');
                if (message.sender === 'admin') {
                    messageDiv.classList.add('admin');
                }
                messageDiv.innerHTML = `<strong>${message.sender}:</strong> ${message.text} <span class="timestamp">${message.timestamp}</span>`;
                chatMessages.appendChild(messageDiv);
            });

            const modal = document.getElementById('ticket-details-modal');
            modal.classList.remove('fadeOut');
            modal.classList.add('fadeIn');
            modal.style.display = 'block';
        }
    }

    function closeTicketDetailsModal() {
        const modal = document.getElementById('ticket-details-modal');
        modal.classList.remove('fadeIn');
        modal.classList.add('fadeOut');
        setTimeout(() => {
            modal.style.display = 'none';
            modal.classList.remove('fadeOut'); // Reset the animation class
        }, 300); // Match the duration of fadeOut animation
    }

    function sendMessage() {
        const input = document.getElementById('chat-input');
        const messageText = input.value.trim();
        if (messageText) {
            const chatMessages = document.getElementById('chat-messages');
            const messageDiv = document.createElement('div');
            messageDiv.classList.add('message', 'admin');
            const timestamp = new Date().toLocaleString();
            messageDiv.innerHTML = `<strong>admin:</strong> ${messageText} <span class="timestamp">${timestamp}</span>`;
            chatMessages.appendChild(messageDiv);
            input.value = '';
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
    }

    document.querySelector('.close-btn').addEventListener('click', closeTicketDetailsModal);
    document.getElementById('send-message-btn').addEventListener('click', sendMessage);

    document.querySelectorAll('.ticket-table tbody tr').forEach(row => {
        row.addEventListener('click', function () {
            const ticketId = this.getAttribute('data-ticket-id');
            console.log('Row clicked for:', ticketId); // Debug log
            openTicketDetails(ticketId);
        });
    });

    document.getElementById('chat-input').addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    document.getElementById('close-ticket-btn').addEventListener('click', function () {
        const ticketId = document.getElementById('modal-ticket-id').innerText;
        ticketDetails[ticketId].status = 'closed';
        updateStatusLabel('closed');
        document.querySelector(`[data-ticket-id="${ticketId}"] .status-label`).className = 'status-label status-closed';
        document.querySelector(`[data-ticket-id="${ticketId}"] .status-label`).innerText = 'Closed';
        closeTicketDetailsModal();
    });

    document.getElementById('refer-ticket-btn').addEventListener('click', function () {
        const ticketId = document.getElementById('modal-ticket-id').innerText;
        ticketDetails[ticketId].status = 'in progress';
        updateStatusLabel('in progress');
        document.querySelector(`[data-ticket-id="${ticketId}"] .status-label`).className = 'status-label status-in-progress';
        document.querySelector(`[data-ticket-id="${ticketId}"] .status-label`).innerText = 'In Progress';
        closeTicketDetailsModal();
    });

    // Filter functionality
    document.getElementById('search-tickets').addEventListener('input', function () {
        const searchValue = this.value.toLowerCase();
        document.querySelectorAll('.ticket-table tbody tr').forEach(row => {
            const title = row.children[1].innerText.toLowerCase();
            row.style.display = title.includes(searchValue) ? '' : 'none';
        });
    });

    document.getElementById('filter-status').addEventListener('change', function () {
        const filterValue = this.value.toLowerCase();
        document.querySelectorAll('.ticket-table tbody tr').forEach(row => {
            const status = row.children[6].innerText.toLowerCase();
            row.style.display = status.includes(filterValue) || filterValue === '' ? '' : 'none';
        });
    });

    document.getElementById('filter-priority').addEventListener('change', function () {
        const filterValue = this.value.toLowerCase();
        document.querySelectorAll('.ticket-table tbody tr').forEach(row => {
            const priority = row.children[2].innerText.toLowerCase();
            row.style.display = priority.includes(filterValue) || filterValue === '' ? '' : 'none';
        });
    });

    document.getElementById('filter-assigned').addEventListener('change', function () {
        const filterValue = this.value.toLowerCase();
        document.querySelectorAll('.ticket-table tbody tr').forEach(row => {
            const assigned = row.children[5].innerText.toLowerCase();
            row.style.display = assigned.includes(filterValue) || filterValue === '' ? '' : 'none';
        });
    });
});
