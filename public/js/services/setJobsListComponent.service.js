'use strict';

import getJobsService from "./getJobs.service.js";
import locationSvgComponent from "../components/jobs/locationSvg.component.js";

const skillMap = (skills) => {
  const skillsEl = skills.map(skill => `<span class="skill"> ${skill}</span>`).join("");
  return skillsEl;
}

const createJobCard = (job) => `<div class="job-card" id = "${job.id ? job.id : ''}">
        <p class ="job-title">${job.title ? job.title : ''}<br>
        <img alt="" src ="${job.organization.logo ? job.organization.logo : ''}"></img><span class="organization">${job.organization.name ? job.organization.name : ''}</span></p>
        <p class ="job-description">${job.description ? job.description : ''}</p>
        <p class ="job-skillset">${job.skillsets ? skillMap(job.skillsets) : ''}</p>
        <p class ="job-location">${locationSvgComponent.template} ${job.countries ? job.countries : ''}</p>
      </div>`;


const setJobsListComponentService = async () => {
  try {
    const data = await getJobsService();
    const jobListTemplate = data.map(job => createJobCard(job)).join("\n");
    const jobListComponent = document.getElementById("joblist");
    jobListComponent.innerHTML = jobListTemplate;

    const jobsHead = document.getElementById("jobhead");
    jobsHead.innerHTML = data.length + " jobs are available";

  } catch (e) {
    console.error(e);
  }
};

export default setJobsListComponentService;