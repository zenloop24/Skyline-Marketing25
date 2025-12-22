
        const menuToggle = document.getElementById('mobile-menu');
        const navLinks = document.getElementById('nav-links');
        menuToggle.addEventListener('click', () => { navLinks.classList.toggle('active'); });
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => { navLinks.classList.remove('active'); });
        });


// send account 


    document.getElementById('whatsappForm').addEventListener('submit', function(e) {
        e.preventDefault(); // Prevents page reload

        // --- CONFIGURATION ---
        // Enter your WhatsApp number here (Country Code + Number)
        // Example: 919876543210
        let phoneNumber = "917305664025"; 
        // ---------------------

        // 1. Get values from the inputs
        let company = document.getElementById('companyName').value;
        let email = document.getElementById('email').value;
        let requirement = document.getElementById('requirement').value;
        let description = document.getElementById('description').value;

        // 2. Format the message for WhatsApp
        // %0a creates a new line
        let message = "New Business Request:" +
                       +
                      "Company: " + company + +
                      "Email:* " + email +  +
                      "Requirement: " + requirement +  +
                      "Details:" + description;


        // 3. Create the WhatsApp Link
        let url = "https://wa.me//" + 917305664025 + "?text=" + encodeURIComponent(message);

        
        // 4. Open WhatsApp
        window.open(url, '_blank').focus();
    });



    // scrolling


    // This script checks if the cards are in the viewport
        const observerOptions = {
            threshold: 0.2 // Trigger when 20% of the card is visible
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal');
                    // Optional: Stop observing once animated
                    // observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.service-card').forEach(card => {
            observer.observe(card);
        });

        
