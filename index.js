// JavaScript code for portfolio site

window.addEventListener('scroll', function(){
  var navbar = document.getElementById('navbar');
  const profilePhoto = document.querySelector('.profile-photo-div');
  if (window.scrollY > 200) {
    navbar.style.display = 'flex';
  } else {
    navbar.style.display = 'none';
    profilePhoto.style.display = 'flex';
  }
});

// Close side bar when  scroll to sectio is Activated

function closeSideBar(){
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'none';
}
// smooth scroll to each section

document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('nav a');

  links.forEach(link => {
      link.addEventListener('click', function (e) {
          e.preventDefault();

          const targetId = this.getAttribute('href').substring(1);
          const targetElement = document.getElementById(targetId);

          if (targetElement) {
              const yOffset = -60; // Adjust this value as needed to offset for any fixed headers
              const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;

              window.scrollTo({ top: y, behavior: 'smooth' });
          }
      });
  });
});

// link pages

function goToPage (url){
  window.location.href = url;
}


// Hamburger Menu 

function showMenu(){
  const sidebar = document.querySelector('.sidebar');
  
  if (sidebar.style.display === 'flex'){
   sidebar.style.display = 'none';
  } else {
    sidebar.style.display = 'flex';
  }
}

function hideMenu(){
  const sidebar = document.querySelector('.sidebar');

  if (sidebar.style.display === 'none'){
   sidebar.style.display = 'flex';
  } else {
    sidebar.style.display = 'none';
  }
}


// Read more for About contents

function showContents(){
  const showMore = document.querySelector('.showMore');
  const showMoreButton = document.querySelector('.showMoreBtn');

  if (showMore.style.display === 'none' && showMoreButton.innerHTML === '...Read More'){
    showMore.style.display = 'flex';
    showMoreButton.innerHTML = '...Read Less';
  } else {
    showMore.style.display = 'none';
    showMoreButton.innerHTML = '...Read More';
  }
}

// Read more for Work experience contents

function toggleHiddenContent() {
  var hiddenDiv = document.getElementById('hiddenContent');
  var readMeText = document.querySelector('.read-me');

  if (hiddenDiv.style.display === 'none') {
    hiddenDiv.style.display = 'block';
    readMeText.textContent = '...Read Less';
  } else {
    hiddenDiv.style.display = 'none';
    readMeText.textContent = '...Read More';
  }
}

// Section scrolling effect

document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute('href'));

      window.scrollTo({
          top: target.offsetTop,
          behavior: 'smooth'
      });
  });
});


// Scroll to top button

// Show the button when scrolling down
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  var scrollBtn = document.getElementById("scrollBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollBtn.style.display = "block";
  } else {
      scrollBtn.style.display = "none";
  }
}

// Smooth scroll to top
function scrollToTop() {
  const scrollOptions = {
      top: 0,
      behavior: 'smooth'
  };

  // Check if the browser supports smooth scrolling
  if ('scrollBehavior' in document.documentElement.style) {
      window.scrollTo(scrollOptions);
  } else {
      // For browsers that don't support smooth scrolling, fallback to an instant scroll
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
  }
}



