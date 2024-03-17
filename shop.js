function Addtocart(price, messageContainer) {
    // Get reference to the message container
    var messageContainer = document.getElementById("messageContainer");
 
    // Create a new message element
    var messageElement = document.createElement("p");
    // Set the message content
    messageElement.textContent = "Added product to cart (Price) $" + price;
 
    // Append the message element to the container
    messageContainer.appendChild(messageElement);
    
}


var addToCartCalled = false; // Flag variable to track whether function has been called

function Addtocart(price, messageContainer) {
    // Check if addToCart function has already been called
    if (addToCartCalled) {
        return; // Exit the function if it has already been called
    }

    // Set the flag to true to indicate that function has been called
    addToCartCalled = true;

    // Get reference to the message container
    var messageContainer = document.getElementById("messageContainer");
 
    // Create a new message element
    var messageElement = document.createElement("p");
    // Set the message content
    messageElement.textContent = "Added product to cart (Price) $" + price;
 
    // Append the message element to the container
    messageContainer.appendChild(messageElement);
}
