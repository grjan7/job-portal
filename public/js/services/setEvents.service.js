'use strict'

import setJobsListComponentService from './setJobsListComponent.service.js'
import getJobByIdService from './getJobById.service.js'

const searchClick = async () => {
  const search = document.getElementById('search')
  search.onclick = async () => {
    await setJobsListComponentService()
  }
}

const countriesChange = async () => {
  const countries = document.getElementById('countries')
  countries.onchange = async () => {
    await setJobsListComponentService()
  }
}

const skillsetsChange = async () => {
  const skillsets = document.getElementById('skillsets')
  skillsets.onchange = async () => {
    await setJobsListComponentService()
  }
}

const jobCardClick = async () => {
  const jobs = document.getElementsByClassName('job-card')
  for (let job of jobs) {
    job.onclick = async () => {
      const id = job.attributes.id.nodeValue
      await getJobByIdService(id)
    };
  }
}

const setEventsService = async () => {
  await searchClick()
  await countriesChange()
  await skillsetsChange()
  await jobCardClick()
}

export default setEventsService