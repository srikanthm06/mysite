function scrollToChatbot() {
    // Scroll smoothly to the chatbot section
    document.getElementById("chatbot").scrollIntoView({ behavior: "smooth" });

    // Delay chatbot interaction slightly to look natural
    setTimeout(startChatbot, 800);
}

function startChatbot() {
    let userQuestion = document.getElementById("user-input").value.trim();
    
    if (userQuestion !== "") {
        let aiResponse = getAIResponse(userQuestion);
        
        // Display response in chat window
        let chatWindow = document.getElementById("chat-window");
        let userMessage = `<p><strong>You:</strong> ${userQuestion}</p>`;
        let aiMessage = `<p><strong>AI:</strong> ${aiResponse}</p>`;
        
        chatWindow.innerHTML += userMessage + aiMessage;
        
        // Clear input field
        document.getElementById("user-input").value = "";
        
        // Scroll to the latest message
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }
}

function getAIResponse(question) {
    // Simple AI Responses (Add More for Better Interaction)
    const responses = {
        "hi":"hi! how the day going",
        "hello": "Hello! How can I assist you today?",
        "what is html": "HTML stands for HyperText Markup Language. It is used to create web pages.",
        "what is css": "CSS (Cascading Style Sheets) is used to style web pages.",
        "what is javascript": "JavaScript makes web pages interactive.",
        "bye": "Goodbye! Have a great day!"
    };

    // Convert question to lowercase for better matching
    let lowerCaseQuestion = question.toLowerCase();

    // Check if the question exists in the responses
    return responses[lowerCaseQuestion] || "I'm not sure about that. Try asking something else!";
}
