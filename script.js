// Dark mode
const toggleBtn = document.getElementById('theme-toggle'); 
const lightIcon = document.querySelector('.light-icon');
const darkIcon = document.querySelector('.dark-icon');
const body = document.body;

// Load theme on page load
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  body.classList.add('dark-mode');
  lightIcon.classList.add('hidden');
  darkIcon.classList.remove('hidden');
} else {
  body.classList.remove('dark-mode');
  lightIcon.classList.remove('hidden');
  darkIcon.classList.add('hidden');
}

// Toggle and save theme
toggleBtn.addEventListener('click', () => {
  const isDarkMode = body.classList.toggle('dark-mode');

  lightIcon.classList.toggle('hidden');
  darkIcon.classList.toggle('hidden');

  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
});


// Scripts for Fade Up

 
const sections = document.querySelectorAll('.fade-in-up');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const index = [...sections].indexOf(el);
      setTimeout(() => {
        el.classList.add('show');
      }, index * 25); // delay based on position
      observer.unobserve(el);
    }
  });
}, { threshold: 0.1 });

sections.forEach(el => observer.observe(el));


// Carousel


document.addEventListener('DOMContentLoaded', function() {
  const carousel = document.querySelector('.carousel');
  const cards = document.querySelectorAll('.card');
  const cardWidth = cards[0].offsetWidth + parseInt(window.getComputedStyle(cards[0]).marginRight);
  
  // Calculate visible width to show 3.25 cards
  const containerWidth = cardWidth * 3.25;
  document.querySelector('.carousel-container').style.width = `${containerWidth}px`;
  
  let currentIndex = 0;
  
  function moveCarousel() {
      currentIndex++;
      
      // When reaching the end of original set, seamlessly jump back
      if (currentIndex > cards.length / 2) {
          currentIndex = 1;
          carousel.style.transition = 'none';
          carousel.style.transform = `translateX(0px)`;
          
          // Force reflow
          carousel.offsetHeight;
          
          // Resume transition
          carousel.style.transition = 'transform 0.5s ease-in-out';
      }
      
      // Move carousel
      carousel.style.transform = `translateX(-${cardWidth * currentIndex}px)`;
  }
  
  // Initial position
  carousel.style.transform = `translateX(0)`;
  
  // Set interval for automatic movement
  setInterval(moveCarousel, 3000);
});

window.addEventListener('load', function () {
  document.getElementById('preloader').style.display = 'none';
  document.getElementById('content').style.display = 'block';
});


// Blog section

const blogSlides = document.getElementById('blogSlides');
    const blogNavBtns = document.querySelectorAll('.blog-nav-btn');
    const blogNextBtn = document.getElementById('blogNext');
    const blogPrevBtn = document.getElementById('blogPrev');

    const blogTotalSlides = blogNavBtns.length;
    let blogIndex = 0;

    function goToBlogSlide(i) {
      blogIndex = (i + blogTotalSlides) % blogTotalSlides;
      blogSlides.style.transform = `translateX(-${blogIndex * 100}%)`;
      blogNavBtns.forEach(btn => btn.classList.remove('active'));
      blogNavBtns[blogIndex].classList.add('active');
    }

    blogNavBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        goToBlogSlide(parseInt(btn.dataset.index));
      });
    });

    blogNextBtn.addEventListener('click', () => goToBlogSlide(blogIndex + 1));
    blogPrevBtn.addEventListener('click', () => goToBlogSlide(blogIndex - 1));

    goToBlogSlide(0);

    setInterval(() => {
      goToBlogSlide(blogIndex + 1);
    }, 12000); // Change every 12 seconds


       // Handle form submission
       document.querySelector('.contact-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const form = this;
        const popup = document.getElementById('popup');

        fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
          headers: { 'Accept': 'application/json' }
        })
        .then(response => {
          if (response.ok) {
            popup.style.display = 'block';
            form.reset();
            setTimeout(() => popup.style.display = 'none', 3000);
          } else {
            alert('Something went wrong. Try again.');
          }
        })
        .catch(() => alert('Network error. Try again later.'));
      });

      // Hamburger Menu

      function dropdown() {
        const drop = document.querySelector(".js-socials-links");
        const isHidden = getComputedStyle(drop).visibility === "hidden";
      
        if (isHidden) {
          drop.style.visibility = "visible";
          drop.style.height = "220px";
        } else {
          drop.style.visibility = "hidden";
          drop.style.height = "0";
        }
      }


      // Second Dropdown

      
      function dropdown2() {
        const drop = document.querySelector(".js-socials-links");
        const isHidden = getComputedStyle(drop).visibility === "visible";
      
        if (isHidden) {
          drop.style.visibility = "hidden";
          drop.style.height = "220px";
        } else {
          drop.style.visibility = "hidden";
          drop.style.height = "0";
        }
      }

  
      // Hamburger

      function hamburger() {
        let drop = document.querySelector(".js-hamburger");
      
        if (getComputedStyle(drop).visibility === "hidden") {
          drop.style.visibility = "visible";
        } else {
          drop.style.visibility = "hidden";
        }
      }

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
