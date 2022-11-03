'use strict';


const jobsListComponent = {
  template: `<div id="joblist"></div>`,
  style: ``
};

const paginationComponent = {
  template: `<div id="pagination"></div>`,
  style: ``
};

const jobHeadComponent = {
  template: `<p id="jobhead">0 Jobs</p>`,
  style: ``
};

const jobPanelComponent = {
  template: `<div id="jobpanel">
  ${jobHeadComponent.template}
  ${jobsListComponent.template}
  ${paginationComponent.template}
  </div>`,
  style: ``
};

const locationComponent = {
  template: `<div id="locationscard">
  <input type="text" id="locations" placeholder= "location">
  </div>`,
  style: ``
};

const skillsetComponent = {
  template: `<div id="skillsetcard">
  <input type="text" id="skillset" placeholder= "skillsets">
  </div>`,
  style: ``
};

const searchComponent = {
  template: `<div id="searchcard">
  <button type="submit" id="search">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="#f0f0f0" width="16" height="16" focusable="false">
  <path d="M14.56 12.44L11.3 9.18a5.51 5.51 0 10-2.12 2.12l3.26 3.26a1.5 1.5 0 102.12-2.12zM3 6.5A3.5 3.5 0 116.5 10 3.5 3.5 0 013 6.5z"></path>
</svg> search</button>
  </div>`,
  style: ``
};

const titleComponent = {
  template: `<h1 id="title">Job Portal</h1>`,
  style: ``
};

const filterPanelComponent = {
  template: `<div id="filterpanel">
  ${titleComponent.template}
  <div id="filter">
  ${locationComponent.template}
  ${skillsetComponent.template}
  ${searchComponent.template}
  </div>
  </div>`,
  style: ``
};


const adPanelComponent = {
  template: `<div id="adpanel"><p>Advertisement Panel</p></div>`,
  style: ``
}


const panelComponent = {
  template: `<div id="panel">  
  ${filterPanelComponent.template}
  ${jobPanelComponent.template}
  ${adPanelComponent.template}
  </div>`,
  style: ``
};


const rootComponent = {
  template: `${panelComponent.template}  
  `,
  style: ``
};


const jobsService = async () => {
  const url = document.location.href + "jobs";
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (e) {
    console.error(e);
  }
}

const skillMap = (skills) => {
  const skillsEl = skills.map(skill => {
    return `<span class="skill"> ${skill}</span>`;
  }).join("");

  return skillsEl;
}

const setJobsListComponent = async () => {
  try {
    const data = await jobsService();

    const jobListTemplate = data.map(job =>
      `<div class="job-card" id = "${job.id ? job.id : ''}">
        <p class ="job-title">${job.title ? job.title : ''}<br>
        <img alt="" src ="${job.organization.logo ? job.organization.logo : ''}"></img><span class="organization">${job.organization.name ? job.organization.name : ''}</span></p>
        <p class ="job-description">${job.description ? job.description : ''}</p>
        <p class ="job-skillset">${job.skillsets ? skillMap(job.skillsets) : ''}</p>
        <p class ="job-location">
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewbox = "0 0 14 14" role="img" style="width:15px;height:15px;fill:#d0605f;">
  <path fill-rule="evenodd" d="M4.856 4.9c0 1.183.928 2.103 2.124 2.103 1.23 0 2.164-.907 2.162-2.102-.001-1.19-.93-2.096-2.154-2.098C5.79 2.801 4.856 3.72 4.856 4.9m2.14 9.1c-.09-.116-.17-.22-.25-.326-1.137-1.507-2.214-3.053-3.16-4.684-.517-.89-.996-1.802-1.328-2.779-.561-1.652-.181-3.133.9-4.453C3.998.737 5.123.181 6.449.032c2.35-.266 4.57 1.128 5.302 3.327.203.611.3 1.24.225 1.884-.06.51-.227.991-.418 1.465-.411 1.018-.947 1.973-1.52 2.91a49.947 49.947 0 01-2.96 4.284l-.08.097"></path>
</svg> ${job.location ? job.location : ''}</p>
      </div> `
    ).join("\n");

    const jobListComponent = document.getElementById("joblist");
    jobListComponent.innerHTML = jobListTemplate;
    const jobsHead = document.getElementById("jobhead");
    jobsHead.innerHTML = data.length + " jobs are available";

  } catch (e) {
    console.error(e);
  }
};



(async function initializeApp() {

  const root = document.getElementById("root");
  root.innerHTML = rootComponent.template;

  await setJobsListComponent();

})();