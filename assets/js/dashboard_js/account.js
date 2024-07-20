document.addEventListener("DOMContentLoaded", function () {
    const customerRows = document.querySelectorAll(".customer-row");
    const modal = document.getElementById("customer-details-modal");
    const closeBtn = document.querySelector(".close-btn");

    customerRows.forEach(row => {
        row.addEventListener("click", function (e) {
            if (e.target.tagName !== 'INPUT') {
                const customerId = this.getAttribute("data-customer-id");
                openCustomerDetails(customerId);
            }
        });
    });

    closeBtn.addEventListener("click", function () {
        closeModal();
    });

    function openCustomerDetails(customerId) {
        // Fetch customer details using customerId, for now, we'll use dummy data
        const customerDetails = {
            "001": {
                name: "John Doe",
                email: "johndoe@example.com",
                messages: [
                    { sender: "admin", text: "How can I help you today?", timestamp: "2024-07-18 10:00" },
                    { sender: "customer", text: "I can't complete my payment.", timestamp: "2024-07-18 10:05" }
                ]
            }
            // Add more customer data as needed
        };

        const customer = customerDetails[customerId];
        if (customer) {
            document.getElementById("customer-name").innerText = customer.name;
            document.getElementById("customer-email").innerText = customer.email;

            const chatMessages = document.getElementById("chat-messages");
            chatMessages.innerHTML = "";
            customer.messages.forEach(message => {
                const messageDiv = document.createElement("div");
                messageDiv.classList.add("message");
                if (message.sender === "admin") {
                    messageDiv.classList.add("admin");
                }
                messageDiv.innerHTML = `<strong>${message.sender}:</strong> ${message.text} <span class="timestamp">${message.timestamp}</span>`;
                chatMessages.appendChild(messageDiv);
            });

            modal.style.display = "block";
            modal.classList.remove("fadeOut");
            modal.classList.add("fadeIn");
        }
    }

    function closeModal() {
        modal.classList.remove("fadeIn");
        modal.classList.add("fadeOut");
        setTimeout(() => {
            modal.style.display = "none";
        }, 300);
    }

    document.getElementById("send-message-btn").addEventListener("click", sendMessage);

    function sendMessage() {
        const input = document.getElementById("chat-input");
        const messageText = input.value.trim();
        if (messageText) {
            const chatMessages = document.getElementById("chat-messages");
            const messageDiv = document.createElement("div");
            messageDiv.classList.add("message", "admin");
            const timestamp = new Date().toLocaleString();
            messageDiv.innerHTML = `<strong>admin:</strong> ${messageText} <span class="timestamp">${timestamp}</span>`;
            chatMessages.appendChild(messageDiv);
            input.value = "";
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
    }
});
