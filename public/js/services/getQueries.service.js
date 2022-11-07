'use strict'

const getQueriesService = () => {
  const countries = document.getElementById('countries').value
  const skillsets = document.getElementById('skillsets').value
  return { countries, skillsets }
}

export default getQueriesService