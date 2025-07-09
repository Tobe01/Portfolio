// Carousel for projects page

const projects = [{
  url: "https://jumia-clone-sl3f.vercel.app/",
  thumbnails: "img1.png",
  tags: {
    tag1: "REACT UI",
    tag2: "STRIPE PAYMENTS",
    tag3: "NODE/EXPRESS"
  },
  description: "A modern online store with product pages, cart, and checkout",
  title: "SHOPEASE (E-COMMERCE STORE)"
}, 
{
  url: "",
  thumbnails: "img2.png",
  tags: {
    tag1: "REACT",
    tag2: "NODE/EXPRESS API",
    tag3: "MONGODB"
  },
  description: "Create, edit, and organize tasks with drag-and-drop UI.",
  title: "TASKNEST (TASK MANAGER)"
}, 
{
  url: "",
  thumbnails: "img3.png",
  tags: {
    tag1: "REACT UI",
    tag2: "NODE/EXPRESS",
    tag3: "MONGODB"
  },
  description: "List and browse beginner-friendly online courses",
  title: "SKILLHIVE (COURSE LISTING APP)"
}, 
{
  url: "",
  thumbnails: "img4.png", 
  tags: {
    tag1: "NODE/EXPRESS",
    tag2: "REACT",
    tag3: "MONGODB"
  },
  description: "Create, rsvp to, or view events in your area.",
  title: "EVENTIFY (EVENT MANAGEMENT APP)"
}, 
{
  url: "",
  thumbnails: "img5.png",
  tags: {
    tag1: "JWT-AUTH",
    tag2: "EXPRESS API",
    tag3: "MONGODB"
  },
  description: "Users can write, edit, and save personal notes in the cloud",
  title: "NOTEBOX (NOTE-TAKING APP)"
}, 
{
  url: "",
  thumbnails: "img6.png",
  tags: {
    tag1: "REACT FORMS",
    tag2: "EXPRESS API",
    tag3: "MONGODB"
  },
  description: "A platform to create and view mini-developer profiles with social links",
  title: "DEVLINK (DEVELOPER PROFILE DIRECTORY)"
},
{
  url: "",
  thumbnails: "img7.png",
  tags: {
    tag1: "REACT",
    tag2: "MONGODB",
    tag3: "EXPRESS"
  },
  description: "Search recipes via a 3rd party api, and save personal ones",
  title: "RECIPEVAULT (RECIPE FINDER & MANAGER)"
}, {
  url: "",
  thumbnails: "img8.png",
  tags: {
    tag1: "CLOUDINARY",
    tag2: "MONGODB",
    tag3: "EXPRESS API"
  },
  description: "Search and view a collection of movies",
  title: "MOVIEMATE"
}, 
{
  url: "",
  thumbnails: "img9.png",
  tags: {
    tag1: "REACT CHAT UI",
    tag2: "EXPRESS",
    tag3: "MONGODB"
  },
  description: "One-on-one or group chat using socket.io",
  title: "CHATIFY (REAL-TIME CHAT APP)"
}, 
{
  url: "",
  thumbnails: "img10.png",
  tags: {
    tag1: "REACT",
    tag2: "EXPRESS API",
    tag3: "MONGODB"
  },
  description: "Create and vote on polls in real-time with live updates",
  title: "POLLSTER (LIVE POLLING APP)"
}, 
{
  url: "",
  thumbnails: "img11.png",
  tags: {
    tag1: "REACT",
    tag2: "EXPRESS API",
    tag3: "MONGODB"
  },
  description: "Create, read, update, delete blog posts with markdown support",
  title: "BLOGIFY (SIMPLE BLOGGING PLATFORM)"
}, 
{
  url: "",
  thumbnails: "img12.png",
  tags: {
    tag1: "REACT FRONTEND",
    tag2:"EXPRESS API",
    tag3: "MONGODB"
  },
  description: "An intuitive FINTECH Admin Dashboard",
  title: "NEXARIC"
}];


  let projectsHTML = '';

  projects.forEach((projects) =>{
      projectsHTML += `<div class="card1 fade-in-up">
                        <a href="${projects.url}" style="text-decoration: none;">
                            <div class="card-image1" style="background-image: url(images/${projects.thumbnails})"></div>
                            <div class="card-content1">
                                <div class="card-tags1">
                                    <span class="tag1">${projects.tags.tag1}</span>
                                    <span class="tag1">${projects.tags.tag2}</span>
                                    <span class="tag1">${projects.tags.tag3}</span>
                                </div>
                                <h3 class="card-title1">${projects.description}</h3>
                                <p class="card-date1">${projects.title}</p>
                            </div>
                        </a>
                    </div>`
    });

  document.querySelector('.js-carousel').innerHTML = projectsHTML;

