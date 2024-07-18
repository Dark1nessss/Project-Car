document.addEventListener("DOMContentLoaded", function () {
    const ticketDetails = {
        "ticket-1": {
            name: "John Doe",
            email: "john.doe@example.com",
            phone: "123-456-7890",
            description: "Customer is unable to complete payment process.",
            vehicle: "Toyota Corolla",
            notes: "Customer prefers to pay via credit card.",
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
            messages: [
                { sender: "admin", text: "How can I assist you?", timestamp: "2024-07-17 09:00" },
                { sender: "customer", text: "The navigation system is not working.", timestamp: "2024-07-17 09:05" }
            ]
        }
    };

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
            document.getElementById('modal-incident-status').innerText = 'Open'; // Update status as needed

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
