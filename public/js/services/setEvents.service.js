'use strict';
import setJobsListComponentService from "./setJobsListComponent.service.js";

const setEventsService = async () => {
  const search = document.getElementById("search");
  const countries = document.getElementById("countries");
  const skillsets = document.getElementById("skillsets");

  search.onclick = async () => {
    await setJobsListComponentService();
  }
  countries.onchange = async () => {
    await setJobsListComponentService();
  }
  skillsets.onchange = async () => {
    await setJobsListComponentService();
  }
}

export default setEventsService;