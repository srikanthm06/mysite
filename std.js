function enrollNow() {
    alert("Enrollment will open soon!");
}

function sendMessage() {
    let input = document.getElementById("userInput").value;
    let chatbox = document.getElementById("chatbox");
    
    let userMessage = document.createElement("p");
    userMessage.textContent = "You: " + input;
    chatbox.appendChild(userMessage);

    let botMessage = document.createElement("p");
    botMessage.textContent = "Bot: I'm here to help!";
    chatbox.appendChild(botMessage);

    document.getElementById("userInput").value = "";
}
function toggleAuthMenu() {
    document.getElementById("auth-menu").classList.toggle("hidden");
}

function changeProfilePic(event) {
    const file = event.target.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById("profile-pic").src = e.target.result;
            localStorage.setItem("profilePic", e.target.result); // Save image in local storage
        };
        reader.readAsDataURL(file);
    }
}

// Load saved profile picture on page load
window.onload = function() {
    const savedPic = localStorage.getItem("profilePic");
    if (savedPic) {
        document.getElementById("profile-pic").src = savedPic;
    }
};
