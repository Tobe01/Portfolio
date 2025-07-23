// Carousel for Projects section on landing page
const topProjects = [{
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
  thumbnails: "recipe-vault.png",
  tags: {
    tag1: "REACT",
    tag2: "MONGODB",
    tag3: "EXPRESS"
  },
  description: "Search recipes via a 3rd party api, and save personal ones",
  title: "RECIPEVAULT (RECIPE FINDER & MANAGER)"
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
  thumbnails: "recipe-vault.png",
  tags: {
    tag1: "REACT",
    tag2: "MONGODB",
    tag3: "EXPRESS"
  },
  description: "Search recipes via a 3rd party api, and save personal ones",
  title: "RECIPEVAULT (RECIPE FINDER & MANAGER)"
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
  thumbnails: "eventitfy.png",
  tags: {
    tag1: "NODE/EXPRESS",
    tag2: "REACT",
    tag3: "MONGODB"
  },
  description: "Create, rsvp to, or view events in your area.",
  title: "EVENTIFY (EVENT MANAGEMENT APP)"
}];



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
                      </div>
                      <h3 class="card-title">${topProjects.description}</h3>
                      <p class="card-date">${topProjects.title}</p>
                  </div>
              </a>
          </div>`
  });

    document.querySelector('.js-topProjects-carousel').innerHTML = topProjectsHTML;
   
})



