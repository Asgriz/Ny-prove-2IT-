function Addtocart(price) {
    // Get reference to the message container
    var messageContainer = document.getElementById("messageContainer");
 
    // Create a new message element
    var messageElement = document.createElement("p");
    // Set the message content
    messageElement.textContent = "You added a product to cart (Price) $" + price;
 
    // Append the message element to the container
    messageContainer.appendChild(messageElement);
}