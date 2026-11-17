const chatBox = document.getElementById("chat-box");
const messageInput = document.getElementById("message");
const sendBtn = document.getElementById("send-btn");
const clearBtn = document.getElementById("clear-chat");
const suggestionBtns = document.querySelectorAll(".suggestion-btn");

// Send Message
function sendMessage() {
    const message = messageInput.value.trim();

    if (message === "") return;

    addMessage(message, "user");
    messageInput.value = "";

    setTimeout(() => {
        const reply = getBotReply(message);
        addMessage(reply, "bot");
    }, 500);
}

// Add Message
function addMessage(message, sender) {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message");

    const icon = document.createElement("div");
    icon.classList.add("message-icon");

    const content = document.createElement("div");
    content.classList.add("message-content");

    content.textContent = message;

    if (sender === "user") {
        messageDiv.classList.add("user-message");
        icon.textContent = "👤";
    } else {
        messageDiv.classList.add("bot-message");
        icon.textContent = "🤖";
    }

    messageDiv.appendChild(icon);
    messageDiv.appendChild(content);
    chatBox.appendChild(messageDiv);

    chatBox.scrollTop = chatBox.scrollHeight;
}

// Chatbot Reply
function getBotReply(message) {
    const msg = message.toLowerCase();

    if (msg.includes("hello") || msg.includes("hi") || msg.includes("hey")) {
        return "Hello! Welcome. How can I help you?";
    } else if (msg.includes("your name")) {
        return "I am your AI Chatbot Assistant.";
    } else if (msg.includes("how are you")) {
        return "I am fine! Thank you for asking.";
    } else if (msg.includes("python")) {
        return "Python is a popular programming language used in web development, automation and AI.";
    } else if (msg.includes("html")) {
        return "HTML stands for HyperText Markup Language. It creates the structure of web pages.";
    } else if (msg.includes("css")) {
        return "CSS stands for Cascading Style Sheets. It is used to design web pages.";
    } else if (msg.includes("javascript")) {
        return "JavaScript makes websites interactive and dynamic.";
    } else if (msg.includes("what is ai") || msg.includes("artificial intelligence")) {
        return "AI stands for Artificial Intelligence. It helps computers perform tasks that normally require human intelligence.";
    } else if (msg.includes("thank")) {
        return "You're welcome! Happy to help you.";
    } else if (msg.includes("bye")) {
        return "Goodbye! Have a nice day.";
    } else if (msg.includes("help")) {
        return "Sure! Ask me about HTML, CSS, JavaScript, Python or AI.";
    } else {
        return "Sorry, I don't understand that question yet. Please ask me about HTML, CSS, JavaScript, Python or AI.";
    }
}

// Send Button
sendBtn.addEventListener("click", sendMessage);

// Enter Key
messageInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});

// Clear Chat
clearBtn.addEventListener("click", function() {
    chatBox.innerHTML = `
        <div class="welcome-message">
            <div class="welcome-icon">🤖</div>
            <h2>Hello! Welcome</h2>
            <p>I am your AI chatbot assistant. How can I help you today?</p>
        </div>
        <div class="message bot-message">
            <div class="message-icon">🤖</div>
            <div class="message-content">Hello! How can I help you?</div>
        </div>
    `;
});

// Suggested Questions
suggestionBtns.forEach(button => {
    button.addEventListener("click", function() {
        messageInput.value = this.dataset.message;
        sendMessage();
    });
});
