// Structure for blogs layout
let blogSlider = [{
    thumbnails: "Green.webp",
    header: "Building a Simple REST API with Node.js and Express",
    description: "A beginner-friendly guide to creating and testing a RESTful API for everyday use",
    id: 1,
  },
  {
    thumbnails: "Neon.webp",
    header: "Building a Lightweight API Rate Limiter in Node.js Without External Libraries",
    description: "Preventing abuse in your APIs with just built-in JavaScript features",
    id: 2,
  },
  {
    thumbnails: "Black.webp",
    header: "What is Penetration Testing? Simple Explanation for Developers",
    description: "Understand Pen Testing by Thinking Like a Hacker",
    id: 3,
  },
  {
    thumbnails: "Yellow.webp",
    header: "Building a Reusable Notification System with JavaScript and the DOM",
    description: "A practical walkthrough on creating a modular, scalable, and beautiful toast notification system using vanilla JavaScript. No frameworks, just clean l",
    id: 4,
  },
  {
    thumbnails: "web333.webp",
    header: "My Web3 Wake-Up Call",
    description: "What I Got Wrong, What I Got Right, and Why It Matters Now",
    id: 5,
  }];



  let blogSliderHTML = '';

    blogSlider.forEach((cards) => {
      blogSliderHTML += 
      `<div class="blog-slide-card" style="background-image: url('Thumbnails/${cards.thumbnails}');">
            <a><button class="js-readArticle" data-blogs-id = "${cards.id}">Read Article</button></a>
          </div>`
    })

    document.querySelector('.js-blogsWrapper').innerHTML = blogSliderHTML;

    // View All Blogs

    document.addEventListener('DOMContentLoaded', () => {
      const blogBtn = document.querySelector('.js-readall');
      if (blogBtn){
        blogBtn.addEventListener('click', () => {
          window.open("https://tobechiduru.hashnode.dev/","_blank");
      })
    };
    });

    // View Each Blog

    document.addEventListener('DOMContentLoaded', () => {
      document.querySelectorAll('.js-readArticle')
        .forEach((button) => {
          button.addEventListener('click', ()=> {
            let blogsId = parseInt(button.dataset.blogsId);
            if(blogsId === 1){
            window.open("https://tobechiduru.hashnode.dev/building-a-simple-rest-api-with-nodejs-and-express", "_blank");
            } else if (blogsId === 2){
                window.open("https://tobechiduru.hashnode.dev/building-a-lightweight-api-rate-limiter-in-nodejs-without-external-libraries", "_blank");
            } else if(blogsId === 3){
                window.open("https://tobechiduru.hashnode.dev/what-is-penetration-testing-simple-explanation-for-developers", "_blank");
            } else if(blogsId === 4){
                window.open("https://tobechiduru.hashnode.dev/building-a-reusable-notification-system-with-javascript-and-the-dom", "_blank");
            } else if(blogsId === 5){
                window.open("https://tobechiduru.hashnode.dev/my-web3-wake-up-call", "_blank");
            };
          });
        });
    });