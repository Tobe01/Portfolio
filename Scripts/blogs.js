// Structure for blogs layout
let blogSlider = [{
    thumbnails: "mern.jpg",
    header: "Building from the Ground Up — My Dev Philosophy",
    description: "Why I Choose the MERN Stack, and What It Taught Me",
    id: 1,
  },
  {
    thumbnails: "prompt2.jpg",
    header: "Talking to Machines: My Prompt Engineering Deep Dive",
    description: "What I’ve Learned About Getting the Best Out of AI Tools",
    id: 2,
  },
  {
    thumbnails: "web333.jpg",
    header: "My Web3 Wake-Up Call",
    description: "What I Got Wrong, What I Got Right, and Why It Matters Now",
    id: 3,
  },
  {
    thumbnails: "deploy.png",
    header: "The Day My Code Went Live",
    description: "Deploying My First App: The Mistakes, the Fixes, the Lessons",
    id: 4,
  },
  {
    thumbnails: "github.jpg",
    header: "GitHub Saved My Career (Literally)",
    description: "How Version Control Helped Me Land Clients, Collaborate Better, and Never Lose a File Again",
    id: 5,
  }];



  let blogSliderHTML = '';

    blogSlider.forEach((cards) => {
      blogSliderHTML += 
      `<div class="blog-slide-card" style="background-image: url('Thumbnails/${cards.thumbnails}');">
            <h2 style="color: gray">${cards.header}</h2>
            <p>${cards.description}</p>
            <a><button class="js-readArticle" data-blogs-id = "${cards.id}">Read Article</button></a>
          </div>`
    })

    document.querySelector('.js-blogsWrapper').innerHTML = blogSliderHTML;

    // View All Blogs

    document.addEventListener('DOMContentLoaded', () => {
      const blogBtn = document.querySelector('.js-readall');
      if (blogBtn){
        blogBtn.addEventListener('click', () => {
          window.location.href="https://tobechiduru.hashnode.dev/";
        })
      }
    })

    // View Each Blog

    document.addEventListener('DOMContentLoaded', () => {
      document.querySelectorAll('.js-readArticle')
        .forEach((button) => {
          button.addEventListener('click', ()=> {
            let blogsId = parseInt(button.dataset.blogsId);
            if(blogsId === 1){
            window.location.href="https://tobechiduru.hashnode.dev/building-from-the-ground-up-my-dev-philosophy";
            } else if (blogsId === 2){
                window.location.href="https://tobechiduru.hashnode.dev/talking-to-machines-my-prompt-engineering-deep-dive";
            } else if(blogsId === 3){
                window.location.href="https://tobechiduru.hashnode.dev/my-web3-wake-up-call";
            } else if(blogsId === 4){
                window.location.href="https://tobechiduru.hashnode.dev/the-day-my-code-went-live";
            } else if(blogsId === 5){
                window.location.href="https://tobechiduru.hashnode.dev/github-saved-my-career-literally";
            };
          });
        });
    });
