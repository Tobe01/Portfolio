const certificatesContainer = {
  certificates: [{
      image: "17-short-specializations-certificate-tobechi-duru.webp",
      title: "Software Engineering (Frontend)",
      description: "Trained in core frontend development principles, tools, project workflows, frameworks and Libraries (React.js, Next.js, TypeScript)",
      url: "https://drive.google.com/file/d/1is0MtuV1m_I7ZPKDCKqy2JsvdaEdxgwE/view"
    },
    {
      image: "52-professional-foundations-certificate-tobechi-duru.webp",
      title: "Professional Foundation in Tech",
      description: "Learned essential workplace, collaboration and communication skills for modern tech roles",
      url: "https://drive.google.com/file/d/1Dvlx5aFrrPuUhxsOEvg063iVMk0m_qXG/view"
    },
    {
      image: "66-alx-aice-ai-career-essentials-certificate-tobechi-duru.webp",
      title: "AI Career Essentials (AICE)",
      description: "Covered generative AI concepts and effective prompt engineering techniques",
      url: "https://drive.google.com/file/d/1Ywm4M1c9ZUf605IKUc8-rPfLnVrc24CG/view"
    }, 
    {
      image: "IMG_8722.webp",
      title: "AI Starter Kit",
      description: "Gained introductory knowledge for building and experimenting with AI-powered solutions",
      url: "https://drive.google.com/file/d/1C88K3k96550emg6MafrqI8f3kUZ7-T8M/view"
    },
    {
      image: "javascript.webp",
      title: "JavaScript Essentials",
      description: "Learned core JavaScript syntax, logic, and DOM manipulation",
      url: "https://drive.google.com/file/d/1TkJMz0Yu1BBadTN5VIeu9yecmfZ-lAnT/view"
    },
    {
      image: "NSE.webp",
      title: "Graduate Membership Nigerian Society of Engineers",
      description: "Earned official graduate-level recognition as member of the Nigerian Society of Engineers",
      url: "https://drive.google.com/file/d/1XBumEL8jri8-G1JYrgM0r-VNHbZBP0r5/view"
    }, {
      image: "AiforDevs.webp",
      title: "AI For Developers",
      description: "Gained core AI concepts and practical ways to integrate AI into software projects",
      url: "https://drive.google.com/file/d/1juVz2npHL6IVfv4L1BUjFxNQNLZGALv4/view?usp=drivesdk"
    }, {
      image: "CrudeOperations.webp",
      title: "MongoDB CRUD Operations in Node.js",
      description: "Learned how to create, read, update, and delete data in MongoDB using Node.js",
      url: "https://learn.mongodb.com/c/PZRdR_ukQo62z1rzOEgHTw"
    }, {
      image: "GitHubFundamentals.webp",
      title: "GitHub fundamentals - Administration basics and product features Part 1 of 2",
      description: "Covered GitHub administration basics and key product features",
      url: "https://drive.google.com/file/d/1sm7HnOWrZBBI7EpDyhryHxeXWeuNPDco/view?usp=drivesdk"
    }, {
      image: "conti.webp",
      title: "Implement continuous integration and continuous delivery (CI/CD) in Microsoft Fabric",
      description: "Learned to implement automated build and deployment pipelines in Microsoft Fabric",
      url: "https://drive.google.com/file/d/1N8zZFQ3Ne4TzV_XeVjCBQfPwoutKnx20/view?usp=drivesdk"
    },  {
      image: "Introtogithub.webp",
      title: "Introduction to GitHub administration",
      description: "Gained foundational knowledge of managing and configuring GitHub environments",
      url: "https://drive.google.com/file/d/1t_3B0hx41SlSM76zmskxV8zG3Pxct10q/view?usp=drivesdk"
    },  {
      image: "Maintainrepo.webp",
      title: "Maintain a secure repository by using GitHub best practices",
      description: "Learned best practices for maintaining secure and compliant GitHub repositories",
      url: "https://drive.google.com/file/d/1t_3B0hx41SlSM76zmskxV8zG3Pxct10q/view?usp=drivesdk"
    }, {
      image: "TypescriptOperators.webp",
      title: "TypeScript Operators",
      description: "Covered how operators work and how to use them effectively in TypeScript",
      url: "https://drive.google.com/file/d/1uDVk_TFzSV5_6xphuCgOVG0p5i4tOP4G/view?usp=drivesdk"
    }, {
      image: "TypescriptVariables.webp",
      title: "TypeScript Variables and Data Types",
      description: "Learned how TypeScript handles typing, variable declarations, and data structures",
      url: "https://drive.google.com/file/d/146UMb7zNyIN5gDVxVSk42Z1eaBwEqLaG/view?usp=drivesdk"
    }, {
      image: "BuildingrRag.webp",
      title: "Building RAG Apps Using MongoDB",
      description: "Learned to build Retrieval-Augmented Generation applications backed by MongoDB",
      url: "https://www.credly.com/badges/e380e89b-b1ed-4ce3-8aad-66bb097b5aee/linked_in_profile"
    }, {
      image: "ConnectingMongo.webp",
      title: "Connecting to MongoDB in Node.js",
      description: "Covered how to establish and manage MongoDB connections in Node.js apps",
      url: "https://learn.mongodb.com/c/TYxgeiLyTlO5dTLOfPQ5SQ"
    }, {
      image: "Shell.webp",
      title: "Connecting to a MongoDB Database Using the MongoDB Shell",
      description: "Learned how to access and interact with MongoDB through the shell",
      url: "https://learn.mongodb.com/c/92i5fG6bQSG_q9OgAFJ7Og"
    }, ],


   renderCertificates(){
    let certificatesHTML = '';

    this.certificates.forEach((certificate) => {
      certificatesHTML += `<div class="cert-card fade-in-up">
            <img src="certifications/${certificate.image}" alt="Certification 1">
            <div class="cert-title">${certificate.title}</div>
            <div class="cert-desc">${certificate.description}</div>
            <div class="cert-link"><a href="${certificate.url}" target="_blank">Verify</a></div>
          </div>`
    }),

    document.querySelector('.js-cardGrid').innerHTML = certificatesHTML;

   }

}

certificatesContainer.renderCertificates();





