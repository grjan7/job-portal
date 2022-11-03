'use strict';

const app = require('./server');
const { MongoClient } = require('mongodb');
const JobsDAO = require('./dao/jobsDAO');

const port = process.env.PORT || 8000;

MongoClient.connect(
  process.env.JOB_PORTAL_DB_URI,
  { useNewUrlParser: true, writeConcern: { wtimeout: 2500 } },
)
  .catch(err => {
    console.error(err.stack)
    process.exit(1)
  })
  .then(async client => {
    await JobsDAO.injectDB(client)
    app.listen(port, () => {
      console.log(`listening on port ${port}`)
    })
  })

