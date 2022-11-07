'use strict';

import getJobsService from "./getJobs.service.js";
import locationSvgComponent from "../components/jobs/locationSvg.component.js";

const skillMap = (skills) => {
  const skillsEl = skills.map(skill => `<span class="skill"> ${skill}</span>`).join("");
  return skillsEl;
}

const createJobCard = (job) => {

  const id = job._id ? job._id : '';
  const title = job.title ? job.title : '';
  const organizationLogo = job.organization.logo ? job.organization.logo : '';
  const organizationName = job.organization.name ? job.organization.name : '';
  const description = job.description ? job.description : '';
  const skillsets = job.skillsets ? skillMap(job.skillsets) : '';
  const countries = job.countries ? job.countries : '';

  const jobCardComponent = `
  <div class="job-card" id="${id}">
    <p class="job-title">${title}<br>
    <img alt="" src="${organizationLogo}"></img><span class="organization">${organizationName}</span></p>
    <p class="job-description">${description}</p>
    <p class="job-skillset">${skillsets}</p>
    <p class="job-location">${locationSvgComponent.template} ${countries}</p>
  </div>`

  return jobCardComponent;
}

const injectJobListComponent = (data) => {
  const jobListTemplate = data.map(job => createJobCard(job)).join("\n");
  const jobListComponent = document.getElementById("joblist");

  jobListComponent.innerHTML = jobListTemplate;
}

const injectJobHeadComponent = (jobsCount) => {
  const jobsHead = document.getElementById("jobhead");
  jobsHead.innerHTML = jobsCount + " jobs are available";
}

const setJobsListComponentService = async () => {
  try {
    const data = await getJobsService();
    injectJobListComponent(data);
    injectJobHeadComponent(data.length);
  } catch (e) {
    console.error(e);
  }
}

export default setJobsListComponentService;