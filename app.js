const humburger = document.querySelector('.nav-menue-btn');
const projectsElm = document.getElementById('works');
const navXmark = document.querySelector('.nav-xmark');
const previewProject = document.getElementById('works');
const preview = document.getElementById('preview');
const sendBtn = document.getElementById('submit');
const fullName = document.getElementById('full-name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const form = document.getElementsByTagName('form');
const messageErr = document.getElementById('messageErr');
const sucessMessage = document.getElementById('sucessMessage');
const emailErr = document.getElementById('emailErr');
const fullNameErr = document.getElementById('fullNameErr');

humburger.onclick = function () {
  const navBar = document.querySelector('.menue-btn');
  navBar.classList.add('active');
};

navXmark.onclick = function () {
  const navBar = document.querySelector('.menue-btn');
  navBar.classList.remove('active');
};

const project = [
  {
    id: 1,
    projectImg: 'images/project-1.',
    projectTitle: 'Tonic',
    projectSubt: 'CANOPY',
    projectType: 'Back End Dev',
    projectYear: '2015',
    projectDes: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    projectTech: ['html', 'css', 'javaScrip'],
    projectLive: '#',
    projectCode: '#',
  },
  {
    id: 2,
    projectImg: 'images/project-2.',
    projectTitle: 'Multi-Post Stories',
    projectSubt: 'FACEBOOK',
    projectType: 'FULL Stack Dev',
    projectYear: '2015',
    projectDes: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    projectTech: ['html', 'css', 'javaScrip'],
    projectLive: '#',
    projectCode: '#',
  },
  {
    id: 3,
    projectImg: 'images/project-3.',
    projectTitle: 'Facebook 360',
    projectSubt: 'FACEBOOK',
    projectType: 'FULL Stack Dev',
    projectYear: '2015',
    projectDes: 'Exploring the future of media in Facebook\'s first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    projectTech: ['html', 'css', 'javaScrip'],
    projectLive: '#',
    projectCode: '#',
  },
  {
    id: 4,
    projectImg: 'images/project-4.',
    projectTitle: 'Uber Navigation',
    projectSubt: 'Uber',
    projectType: 'Lead Development',
    projectYear: '2018',
    projectDes: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    projectTech: ['html', 'css', 'javaScrip'],
    projectLive: '#',
    projectCode: '#',
  },
];

function createProjects() {
  projectsElm.innerHTML = project.map((info) => `<div class="projects">
    <div class="project-img project-right-img">
      <img class="project-img" src=${info.projectImg}svg alt="Uber Navigation project screenshot image">
    </div>
    <div class="project-info project-left-info">
      <div class="project-name">
        <h2>${info.projectTitle}</h2>
      </div>
      <div class="project-subtitle">        
        <p>${info.projectSubt}</p>
        <span></span>
        <p>${info.projectType}</p>
        <span></span>
        <p>${info.projectYear}</p>
      </div>
      <div class="project-description">
        <p>${info.projectDes}</p>
        <ul>
          ${info.projectTech.map((x) => `<li class="tech-btn">${x}</li>`).join('')}
        </ul>
      </div>
      <button class="regular-btn" id=${info.id}>See Project</button> 
    </div>
  </div>`).join('');
}
createProjects();

previewProject.addEventListener('click', (val) => {
  if (val.target.classList.contains('regular-btn')) {
    preview.classList.remove('remove');
    const id = parseFloat(val.target.id);
    const target = project.find((x) => x.id === id);
    if (target !== undefined) {
      preview.innerHTML = `
      <div class="preview-project">
        <div class="preview-title-div">
          <h2 class="preview-project-title primary-font">${target.projectTitle}</h2>
          <button class="preview-project-xmark"><i id="close" class="fa-solid fa-xmark fa-2x"></i></button>
        </div>
        <div class="project-subtitle primary-font">
          <p>${target.projectSubt}</p>
          <span></span>
          <p>${target.projectType}</p>
          <span></span>
          <p>${target.projectYear}</p>
        </div>
        <img class="preview-project-img" src=${target.projectImg}png alt="">
        <div class="pre-project-info">
          <div>
            <p class="review-info-project primary-font">${target.projectDes}</p>
          </div>
          <div>
            <ul class="preview-tech-list primary-font">
              ${target.projectTech.map((x) => `<li class="tech-btn">${x}</li>`).join('')}
            </ul>
            <ul class="preview-tech-list primary-font second-list-tech">
                <li class="tech-btn">github</li>
                <li class="tech-btn">ruby</li>
                <li class="tech-btn">Bootstrap</li>
            </ul>
            <hr>
            <a class="preview-btn" href=${target.projectLive}>See live <img src="images/arrow-circle.svg" alt=""></a>
            <a class="preview-btn" href=${target.projectCode}>See source <img src="images/Frame.svg" alt=""></a>
          </div>
        </div>
      </div>
      `;
    }
  }
  createProjects();
});

preview.addEventListener('click', (val) => {
  if (val.target.id === 'close') {
    preview.classList.add('remove');
  }
  createProjects();
});

fullNameErr.style.display = 'none';
messageErr.style.display = 'none';
emailErr.style.display = 'none';
sucessMessage.style.display = 'none';

sendBtn.addEventListener('click', (val) => {
  val.preventDefault();
  const validEmail = /^[a-z]+@[a-z0-9-]+\.[a-z0-9-.]+$/;
  if (fullName.value === '') {
    fullName.style.border = '1px solid red';
    fullNameErr.textContent = 'FullName is Required';
    fullNameErr.style.color = 'red';
    fullNameErr.style.display = 'block';
  } else if (email.value === '') {
    email.style.border = '1px solid red';
    emailErr.textContent = 'Email Field Required';
    emailErr.style.color = 'red';
    emailErr.style.display = 'block';
  } else if (!validEmail.test(email.value)) {
    email.style.border = '1px solid red';
    emailErr.textContent = 'Email address must be valid and in lower case';
    emailErr.style.color = 'red';
    emailErr.style.display = 'block';
  } else if (message.value === '') {
    email.style.border = '1px solid red';
    emailErr.textContent = 'Email adress is required';
    emailErr.style.color = 'red';
    emailErr.style.display = 'block';
  } else if (message.value.lenght > 500) {
    email.style.border = '1px solid red';
    emailErr.textContent = 'Email can not be more than 500 letters';
    emailErr.style.color = 'red';
    emailErr.style.display = 'block';
  } else {
    sucessMessage.textContent = 'Thanks message is sent';
    sucessMessage.style.display = 'block';
    sucessMessage.style.color = 'green';
    form.submit();
    fullName.value = '';
    message.value = '';
    email.value = '';
  }
});