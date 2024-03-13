function buy(price) {
    // Get reference to the message container
    var messageContainer = document.getElementById("messageContainer");
 
    // Create a new message element
    var messageElement = document.createElement("p");
    // Set the message content
    messageElement.textContent = "You bought a product for $" + price;
 
    // Append the message element to the container
    messageContainer.appendChild(messageElement);
}