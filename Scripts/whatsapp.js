    // Whatsapp
   // Use a namespaced function to avoid conflicts with existing code
  (function() {
    // Wait for DOM to be fully loaded
    document.addEventListener('DOMContentLoaded', function() {
      // Get elements using more specific selectors to avoid conflicts
      const whatsappButton = document.querySelector('.whatsapp-container .whatsapp-btn');
      const whatsappMessage = document.querySelector('.whatsapp-container .whatsapp-message-bubble');
      
      // Only proceed if elements exist
      if (whatsappButton && whatsappMessage) {
        // Define unique function name to avoid conflicts
        function showWhatsAppMessage() {
          whatsappMessage.classList.add('whatsapp-message-visible');
          whatsappButton.classList.add('pulse');
          
          // Hide message bubble after 5 seconds
          setTimeout(function() {
            whatsappMessage.classList.remove('whatsapp-message-visible');
            
            // Keep the pulse effect for additional attention
            setTimeout(function() {
              whatsappButton.classList.remove('pulse');
            }, 3000);
          }, 5000);
        }
        
        // Set timeout with a unique variable name
        const whatsappMessageTimer = setTimeout(showWhatsAppMessage, 4000);
      }
    });
  })(); // Immediately invoke function to create local scope

