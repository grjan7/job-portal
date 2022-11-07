'use strict'

const { ObjectId } = require('bson')
let jobs

class JobsDAO {
  /**
   * 
   * @param {MongoClient} conn MongoClient connected to the mongoserver
   * @returns 
   * @description
   * Creates database and collection in the connected mongoserver.
   * 
   */
  static async injectDB(conn) {
    if (jobs) {
      return
    }
    try {
      jobs = await conn.db(process.env.JOBPORTAL_NS).collection("jobs")
    } catch (e) {
      console.error(`Unable to establish collection handles in jobsDAO: ${e}`)
    }
  }

  /**
   * 
   * @param {array | string} countries list of countries
   * @param {array | string}} skillsets list of skillsets
   * @param {number} page pagenumber
   * @param {number} jobsPerPage number of jobs per page
   * @returns {object[]} filtered and paginated data based on skillsets, countries
   * @data
   * 
   * ```JSON
    [
      {
        "_id": "<ObjectId>",
        "id": "<string>",
        "title": "<string>",
        "description": "<string>",
        "countries": "array<string>",
        "skillsets": "array<string>",
        "organization": {
          "name": "<string>",
          "logo": "<string>"
        }
      }
    ]
    
    ``` 
   *   
   */
  static async getJobs(countries, skillsets, page = 0, jobsPerPage = 5) {
    let queryPipeline = []

    if (countries) {
      const countriesArray = Array.isArray(countries) ? countries : countries.split(", ")
      queryPipeline.push({ $match: { countries: { $in: countriesArray } } })
    }

    if (skillsets) {
      let skillsetsArray = Array.isArray(skillsets) ? skillsets : skillsets.split(", ")
      queryPipeline.push({ $match: { skillsets: { $in: skillsetsArray } } })
    }

    const skipStage = { $skip: jobsPerPage * page }
    const limitStage = { $limit: jobsPerPage }
    const aggregatePipeline = queryPipeline.concat(skipStage, limitStage)

    try {
      const results = await (await jobs.aggregate(aggregatePipeline)).toArray()
      return results
    } catch (e) {
      return { error: 'Results too large, be more restrictive in filter.' }
    }
  }

  /**
   * 
   * @param {string} id 
   * @returns {object} job data of the given id
   * @data
   * 
   * ```JSON
    {
      "_id": "<ObjectId>",
      "id": "<string>",
      "title": "<string>",
      "description": "<string>",
      "countries": "array<string>",
      "skillsets": "array<string>",
      "organization": {
        "name": "<string>",
        "logo": "<string>"
      }
    }
    
    ``` 
   *   
   */
  static async getJobByID(id) {
    let filter = { _id: ObjectId(id) }
    let project = {}
    try {
      const cursor = await jobs.find(filter, project)
      return cursor.next()
    } catch (e) {
      console.error(`Unable to issue find command, ${e}`)
      return []
    }
  }
}


module.exports = JobsDAO