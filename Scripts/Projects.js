const projects = [{
  url: "https://jumia-clone-sl3f.vercel.app/",
  thumbnails: "58EC0FDB-8F9F-486E-A555-FFAD982FA41D.PNG",
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
  thumbnails: "Tasknet.png",
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
  thumbnails: "skillHive.png",
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
  thumbnails: "eventitfy.png", 
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
  thumbnails: "Notebox.png",
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
  thumbnails: "Devlink.png",
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
  thumbnails: "recipe-vault.png",
  tags: {
    tag1: "REACT",
    tag2: "MONGODB",
    tag3: "EXPRESS"
  },
  description: "Search recipes via a 3rd party api, and save personal ones",
  title: "RECIPEVAULT (RECIPE FINDER & MANAGER)"
}, {
  url: "",
  thumbnails: "Movie.PNG",
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
  thumbnails: "chatify.png",
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
  thumbnails: "pollster.png",
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
  thumbnails: "blogify.png",
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
  thumbnails: "Admin.png",
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
            <div class="card-image1" style="background-image: url(Thumbnails/${projects.thumbnails})"></div>
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

