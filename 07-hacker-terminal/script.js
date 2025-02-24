const messages = [
    "Initializing Hacking",
    "Reading your Files",
    "Password files Detected",
    "Sending all passwords and personal files to server",
    "Cleaning up"
];

const terminal = document.querySelector(".terminal");

// Function to simulate a delay using a Promise
function delay(min, max) {
    return new Promise(resolve => setTimeout(resolve, Math.random() * (max - min) + min));
}

// Function to show messages one by one with blinking dots
async function displayMessages() {
    for (const message of messages) {
        await showMessageWithBlinkingDots(message);
        await delay(1000, 7000); // Random delay between 1 to 7 seconds
    }

    // Final message after all messages are shown
    appendMessage("Hack Completed! <br> System Compromised... 💀");
}

// Function to append a message with blinking dots
async function showMessageWithBlinkingDots(message) {
    let dots = "";
    let interval;

    // Create a new paragraph for the message
    const messageElement = document.createElement("p");
    terminal.appendChild(messageElement);

    // Start blinking effect
    interval = setInterval(() => {
        dots = dots.length < 3 ? dots + "." : "";
        messageElement.innerHTML = message + dots;
    }, 500);

    // Simulate typing delay before stopping blinking effect
    await delay(2000, 4000); // Random delay between 2 to 4 seconds
    clearInterval(interval);

    // Ensure the final message is displayed fully
    messageElement.innerHTML = message + "...";
}

// Function to append a message to the terminal
function appendMessage(text) {
    const messageElement = document.createElement("p");
    messageElement.innerHTML = text;
    terminal.appendChild(messageElement);
}

// Start the hacking simulation
displayMessages();