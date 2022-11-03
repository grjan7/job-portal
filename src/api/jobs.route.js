'use strict';

const { Router } = require('express');
const JobsCtrl = require('./jobs.controller');
const router = new Router();

router.route('/').get(JobsCtrl.apiGetJobs);
router.route('/id/:id').get(JobsCtrl.apiGetJobById);

module.exports = router;
