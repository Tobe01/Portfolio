// Carousel for Projects section on landing page
const topProjects = [{
  url: "https://tobe-expense-tracker.vercel.app/",
  thumbnails: "expense.webp",
  tags: {
    tag1: "REACT.js",
    tag2: "TYPESCRIPT",
    tag3: "TAILWINDCSS",
    tag4: "SHADCN"
  },
  description: "Lightweight TypeScript/React web app for tracking and reviewing daily expenses",
  title: "QUIKNAPP (EXPENSE MANAGEMENT WEB APP)"
},
{
  url: "https://zayra-by-tobe.vercel.app/",
  thumbnails: "zay.webp",
  tags: {
    tag1: "REACT.js",
    tag2: "JAVASCRIPT",
    tag3: "SHADCN",
    tag4: "SWEET-ALERT"
  },
  description: "React ecommerce app with product listings, filters, and a clean UI",
  title: "ZAYRA (E-COMMERCE STORE)"
}, 
{
  url: "https://community-website-frontend-five.vercel.app/signup",
  thumbnails: "devbyte.webp",
  tags: {
    tag1: "REACT.js",
    tag2: "MONGODB",
    tag3: "NODE.js",
    tag4: "EXPRESS"
  },
  description: "Community platform with profiles, admin tools, events, and user account management.",
  title: "DEVBYTE (COMMUNITY PLATFORM)"
}, 
{
  url: "",
  thumbnails: "eventitfy.webp",
  tags: {
    tag1: "REACT",
    tag2: "EXPRESS",
    tag3: "MONGODB",
    tag4: "NODE"
  },
  description: "Create, rsvp to, or view events in your area.",
  title: "EVENTIFY (EVENT MANAGEMENT APP)"
},
{
  url: "",
  thumbnails: "Notebox.webp",
  tags: {
    tag1: "JWT-AUTH",
    tag2: "EXPRESS API",
    tag3: "MONGODB",
    tag4: "NODE/EXPRESS"
  },
  description: "Users can write, edit, and save personal notes in the cloud",
  title: "NOTEBOX (NOTE-TAKING APP)"
}, 
{
  url: "",
  thumbnails: "skillHive.webp",
  tags: {
    tag1: "REACT UI",
    tag2: "EXPRESS",
    tag3: "MONGODB",
    tag4: "NODE"
  },
  description: "List and browse beginner-friendly online courses",
  title: "SKILLHIVE (COURSE LISTING APP)"
}, {
  url: "https://tobe-expense-tracker.vercel.app/",
  thumbnails: "expense.webp",
  tags: {
    tag1: "REACT.js",
    tag2: "TYPESCRIPT",
    tag3: "TAILWINDCSS",
    tag4: "SHADCN"
  },
  description: "Lightweight TypeScript/React web app for tracking and reviewing daily expenses",
  title: "EXPENSE MANAGEMENT WEB APP"
},
{
  url: "https://zayra-by-tobe.vercel.app/",
  thumbnails: "zay.webp",
  tags: {
    tag1: "REACT.js",
    tag2: "JAVASCRIPT",
    tag3: "SHADCN",
    tag4: "SWEET-ALERT"
  },
  description: "React ecommerce app with product listings, filters, and a clean UI",
  title: "ZAYRA (E-COMMERCE STORE)"
}, {
  url: "https://community-website-frontend-five.vercel.app/signup",
  thumbnails: "devbyte.webp",
  tags: {
    tag1: "REACT.js",
    tag2: "MONGODB",
    tag3: "NODE.js",
    tag4: "EXPRESS"
  },
  description: "Community platform with profiles, admin tools, events, and user account management.",
  title: "DEVBYTE (COMMUNITY PLATFORM)"
}, 
{
  url: "",
  thumbnails: "eventitfy.webp",
  tags: {
    tag1: "REACT",
    tag2: "EXPRESS",
    tag3: "MONGODB",
    tag4: "NODE"
  },
  description: "Create, rsvp to, or view events in your area.",
  title: "EVENTIFY (EVENT MANAGEMENT APP)"
},
{
  url: "",
  thumbnails: "Notebox.webp",
  tags: {
    tag1: "JWT-AUTH",
    tag2: "EXPRESS API",
    tag3: "MONGODB",
    tag4: "NODE/EXPRESS"
  },
  description: "Users can write, edit, and save personal notes in the cloud",
  title: "NOTEBOX (NOTE-TAKING APP)"
}, 
{
  url: "",
  thumbnails: "skillHive.webp",
  tags: {
    tag1: "REACT UI",
    tag2: "EXPRESS",
    tag3: "MONGODB",
    tag4: "NODE"
  },
  description: "List and browse beginner-friendly online courses",
  title: "SKILLHIVE (COURSE LISTING APP)"
} ];



document.addEventListener("DOMContentLoaded", () => {

    let topProjectsHTML = '';

    topProjects.forEach((topProjects) => {

      topProjectsHTML += `<div class="card">
          <a href="${topProjects.url}" style="text-decoration: none;">
              <div class="card-image" style="background-image: url(Thumbnails/${topProjects.thumbnails})"></div>
              <div class="card-content">
                  <div class="card-tags">
                      <span class="tag">${topProjects.tags.tag1}</span>
                      <span class="tag">${topProjects.tags.tag2}</span>
                      <span class="tag">${topProjects.tags.tag3}</span>
                      <span class="tag">${topProjects.tags.tag4}</span>
                      </div>
                      <h3 class="card-title">${topProjects.description}</h3>
                      <p class="card-date">${topProjects.title}</p>
                  </div>
              </a>
          </div>`
  });

    document.querySelector('.js-topProjects-carousel').innerHTML = topProjectsHTML;
   
})



