// 

// Constructor function for a single project
function Project(url, thumbnails, tags, description, title) {
  this.url = url;
  this.thumbnails = thumbnails;
  this.tags = tags;
  this.description = description;
  this.title = title;
}

// Constructor function for the project container
function ProjectsContainer(projects) {
  this.projects = projects;
}

// Add the render method to the prototype for reusability
ProjectsContainer.prototype.renderProjects = function () {
  let projectsHTML = '';

  this.projects.forEach((project) => {
    projectsHTML += `
      <div class="card1 fade-in-up">
        <a href="${project.url}" style="text-decoration: none;">
          <div class="card-image1" style="background-image: url(Thumbnails/${project.thumbnails})"></div>
          <div class="card-content1">
            <div class="card-tags1">
              <span class="tag1">${project.tags.tag1}</span>
              <span class="tag1">${project.tags.tag2}</span>
              <span class="tag1">${project.tags.tag3}</span>
            </div>
            <h3 class="card-title1">${project.description}</h3>
            <p class="card-date1">${project.title}</p>
          </div>
        </a>
      </div>
    `;
  });

  document.querySelector('.js-carousel').innerHTML = projectsHTML;
};

// Create the project instances
const projectList = [
  new Project("https://jumia-clone-sl3f.vercel.app/", "58EC0FDB-8F9F-486E-A555-FFAD982FA41D.PNG",
    { tag1: "REACT UI", tag2: "STRIPE PAYMENTS", tag3: "NODE/EXPRESS" },
    "A modern online store with product pages, cart, and checkout",
    "SHOPEASE (E-COMMERCE STORE)"
  ),
  new Project("", "Tasknet.png",
    { tag1: "REACT", tag2: "NODE/EXPRESS API", tag3: "MONGODB" },
    "Create, edit, and organize tasks with drag-and-drop UI.",
    "TASKNEST (TASK MANAGER)"
  ),
  new Project("", "skillHive.png",
    { tag1: "REACT UI", tag2: "NODE/EXPRESS", tag3: "MONGODB" },
    "List and browse beginner-friendly online courses",
    "SKILLHIVE (COURSE LISTING APP)"
  ),
  new Project("", "eventitfy.png",
    { tag1: "NODE/EXPRESS", tag2: "REACT", tag3: "MONGODB" },
    "Create, rsvp to, or view events in your area.",
    "EVENTIFY (EVENT MANAGEMENT APP)"
  ),
  new Project("", "Notebox.png",
    { tag1: "JWT-AUTH", tag2: "EXPRESS API", tag3: "MONGODB" },
    "Users can write, edit, and save personal notes in the cloud",
    "NOTEBOX (NOTE-TAKING APP)"
  ),
  new Project("", "Devlink.png",
    { tag1: "REACT FORMS", tag2: "EXPRESS API", tag3: "MONGODB" },
    "A platform to create and view mini-developer profiles with social links",
    "DEVLINK (DEVELOPER PROFILE DIRECTORY)"
  )
];

// Create container instance and render
const projectsContainer = new ProjectsContainer(projectList);
projectsContainer.renderProjects();
