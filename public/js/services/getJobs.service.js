'use strict';

const getJobsService = async () => {
  const url = document.location.href + "jobs";
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e);
  }
}

export default getJobsService;