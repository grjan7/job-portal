'use strict';

const JobsDAO = require('../dao/jobsDAO');

class JobsController {
  /**
   * 
   * @param {*} req 
   * @param {*} res 
   * @param {*} next 
   * @returns 
   */
  static async apiGetJobs(req, res, next) {
    let countries, skillsets, page, limit;
    const query = req.query;
    //validation
    if (query) {
      if (query.countries) {
        countries = query.countries;
      }
      if (query.skillsets) {
        skillsets = query.skillsets;
      }
      if (query.page) {
        page = query.page;
      }
      if (query.limit) {
        limit = query.limit;
      }
    }
    try {
      const response = await JobsDAO.getJobs(countries, skillsets, page, limit);
      res.json(response);
    } catch (e) {
      res.status(400).json({ error: e })
      return
    }
  }

  /**
   * 
   * @param {*} req 
   * @param {*} res 
   * @param {*} next 
   * @returns 
   */
  static async apiGetJobById(req, res, next) {
    try {
      let id = req.params.id || {};
      let job = await JobsDAO.getJobByID(id)
      if (!job) {
        res.status(404).json({ error: "Not found" })
        return
      }
      res.json({ job })
    } catch (e) {
      console.log(`api, ${e}`)
      res.status(500).json({ error: e })
    }
  }

}

module.exports = JobsController;