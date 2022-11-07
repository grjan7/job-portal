'use strict'

const express = require('express')
const path = require('path')
const cors = require('cors')
const bodyParser = require('body-parser')
const jobs = require('./api/jobs.route')

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/jobs', jobs)
app.use('/', express.static(path.join(__dirname, '../public')))
app.use('*', (req, res) => res.status(404).json({ error: 'Not found.' }))

module.exports = app

