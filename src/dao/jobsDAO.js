'use strict';

const { ObjectId } = require('bson');

let jobs;

class JobsDAO {
  /**
   * 
   * @param {*} conn 
   * @returns 
   */
  static async injectDB(conn) {
    if (jobs) {
      return
    }
    try {
      jobs = await conn.db(process.env.JOBPORTAL_NS).collection("jobs");
    } catch (e) {
      console.error(`Unable to establish collection handles in jobsDAO: ${e}`)
    }
  }

  /**
   * 
   * @param {array | string} countries 
   * @param {array | string}} skillsets 
   * @param {number} page 
   * @param {number} jobsPerPage 
   * @returns {object[]}
   */
  static async getJobs(countries, skillsets, page = 0, jobsPerPage = 5) {

    let queryPipeline = [];

    if (countries) {
      const countriesArray = Array.isArray(countries) ? countries : countries.split(", ");
      queryPipeline.push({ $match: { countries: { $in: countriesArray } } });
    }

    if (skillsets) {
      let skillsetsArray = Array.isArray(skillsets) ? skillsets : skillsets.split(", ");
      queryPipeline.push({ $match: { skillsets: { $in: skillsetsArray } } });
    }

    const skipStage = { $skip: jobsPerPage * page };
    const limitStage = { $limit: jobsPerPage };

    const aggregatePipeline = queryPipeline.concat(skipStage, limitStage);


    try {
      const results = await (await jobs.aggregate(aggregatePipeline)).toArray();
      return results;
    } catch (e) {
      return { error: "Results too large, be more restrictive in filter." }
    }
  }

  /**
   * 
   * @param {ObjectId} id 
   * @returns {object[]}
   */
  static async getJobByID(id) {
    let cursor
    let filter = { _id: ObjectId(id) };
    let project = {};

    try {
      cursor = await jobs.find(filter, project)
    } catch (e) {
      console.error(`Unable to issue find command, ${e}`)
      return []
    }

    return cursor.toArray()
  }

}


module.exports = JobsDAO;