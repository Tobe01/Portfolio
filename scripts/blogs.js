// Structure for blogs layout

let blogSlider = [{
    thumbnails: "mern.jpg",
    header: "Building from the Ground Up — My Dev Philosophy",
    description: "Why I Choose the MERN Stack, and What It Taught Me"
  },
  {
    thumbnails: "prompt2.jpg",
    header: "Talking to Machines: My Prompt Engineering Deep Dive",
    description: "How I Learned to Speak AI"
  },
  {
    thumbnails: "web333.jpg",
    header: "My Web3 Wake-Up Call",
    description: "Stepping into Web3: My First Glimpse into the Decentralized Web"
  },
  {
    thumbnails: "deploy.png",
    header: "The Day My Code Went Live",
    description: "Deploying My First App: The Mistakes, the Fixes, the Lessons",
  },
  {
    thumbnails: "github.jpg",
    header: "GitHub Saved My Career (Literally)",
    description: "How Version Control Helped Me Land Clients, Collaborate Better, and Never Lose a File Again"
  }];



  let blogSliderHTML = '';

      blogSlider.forEach((cards) => {
        blogSliderHTML += 
        `<div class="blog-slide-card" style="background-image: url('Thumbnails/${cards.thumbnails}');">
              <h2 style="color: gray">${cards.header}</h2>
              <p>${cards.description}</p>
              <button onclick="alert('Blog contents is being updated! Check back later.')">Read Article</button>
            </div>`
      })

      document.querySelector('.js-blogsWrapper').innerHTML = blogSliderHTML;


