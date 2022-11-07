'use strict'

const JobsDAO = require('../dao/jobsDAO')

class JobsController {
  /**
   * 
   * @param {object} req 
   * @param {object} res 
   * @param {function} next 
   * @returns
   * @description
   * Sends jobs data as a JSON response.
   *  
   */
  static async apiGetJobs(req, res, next) {
    let countries, skillsets, page, limit
    const query = req.query

    //validation
    if (query) {
      if (query.countries) {
        countries = query.countries
      }
      if (query.skillsets) {
        skillsets = query.skillsets
      }
      if (query.page) {
        page = query.page
      }
      if (query.limit) {
        limit = query.limit
      }
    }
    // fetches data from mongoserver and sends as a JSON response
    try {
      const response = await JobsDAO.getJobs(countries, skillsets, page, limit)
      res.json(response)
    } catch (e) {
      res.status(404).json({ error: 'Not found.' })
      return
    }
  }

  /**
   * 
   * @param {object} req 
   * @param {object}} res 
   * @param {function} next 
   * @returns
   * @description
   * Sends job data of the id as a JSON response.
   * 
   */
  static async apiGetJobById(req, res, next) {
    try {
      let id = req.params.id || {}
      let job = await JobsDAO.getJobByID(id)
      if (!job) {
        res.status(404).json({ error: 'Not found.' })
        return
      }
      res.json(job)
    } catch (e) {
      console.error(e)
      res.status(500).json({ error: e })
    }
  }
}

module.exports = JobsController