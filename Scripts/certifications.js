const certificates = [{
    image: "17-short-specializations-certificate-tobechi-duru.png",
    title: "Software Engineering (Frontend)",
    description: "Trained in frontend development with HTML, CSS, JS, and React.",
    url: "file/d/1is0MtuV1m_I7ZPKDCKqy2JsvdaEdxgwE/view"
  },
  {
    image: "52-professional-foundations-certificate-tobechi-duru.png",
    title: "Professional Foundation in Tech",
    description: "Acquired essential tech skills for teamwork and digital collaboration.",
    url: "file/d/1Dvlx5aFrrPuUhxsOEvg063iVMk0m_qXG/view"
  },
  {
    image: "66-alx-aice-ai-career-essentials-certificate-tobechi-duru.png",
    title: "AICE-AI Career Essentials",
    description: "Gained foundational knowledge in AI concepts and ethical AI practices.",
    url: "file/d/1Ywm4M1c9ZUf605IKUc8-rPfLnVrc24CG/view"
  }, 
  {
    image: "IMG_8722.PNG",
    title: "ALX-AI Starter Kit",
    description: "Completed hands-on introduction to AI tools and concepts via ALX.",
    url: "file/d/1C88K3k96550emg6MafrqI8f3kUZ7-T8M/view"
  },
  {
    image: "javascript.jpg",
    title: "JavaScript Essentials",
    description: "Learned core JavaScript syntax, logic, and DOM manipulation.",
    url: "file/d/1TkJMz0Yu1BBadTN5VIeu9yecmfZ-lAnT/view"
  },
  {
    image: "NSE.jpg",
    title: "Graduate Membership Nigerian Society of Engineers",
    description: "Officially recognized as a graduate member of the Nigerian Society of Engineers.",
    url: "file/d/1XBumEL8jri8-G1JYrgM0r-VNHbZBP0r5/view"
  }];

  let certificatesHTML = '';

  certificates.forEach((certificate) => {
      certificatesHTML += `<div class="cert-card fade-in-up">
            <img src="Icons/${certificate.image}" alt="Certification 1">
            <div class="cert-title">${certificate.title}</div>
            <div class="cert-desc">${certificate.description}</div>
            <div class="cert-link"><a href="https://drive.google.com/${certificate.url}">Verify</a></div>
          </div>`
});

document.querySelector('.js-cardGrid').innerHTML = certificatesHTML;
