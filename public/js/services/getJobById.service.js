'use strict';

const getJobByIdService = async (id) => {
  let url = document.location.href + "jobs/id/" + id;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e);
  }
}

export default getJobByIdService;