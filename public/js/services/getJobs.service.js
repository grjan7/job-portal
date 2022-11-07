'use strict'

import getQueries from './getQueries.service.js'

const getJobsService = async () => {
  let url = document.location.href + 'jobs'
  const queries = getQueries()
  const hasQueries = (queries.countries != '') || (queries.skillsets != '')

  if (hasQueries) {
    url += '?'
    if (queries.countries) {
      url += `countries=${queries.countries}`
      if (queries.skillsets) {
        url += `&skillsets=${queries.skillsets}`
      }
    } else {
      if (queries.skillsets) {
        url += `skillsets=${queries.skillsets}`
      }
    }
  }

  try {
    const response = await fetch(url)
    const data = await response.json()
    return data
  } catch (e) {
    console.error(e)
  }
}

export default getJobsService