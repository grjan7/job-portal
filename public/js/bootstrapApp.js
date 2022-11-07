'use strict'

import rootComponent from './components/root.component.js'
import setJobsListComponentService from './services/setJobsListComponent.service.js'
import setEventsService from './services/setEvents.service.js'
import setStyleService from './services/setStyle.service.js'

const bootstrapApp = async () => {

  const root = document.getElementById('root')
  root.innerHTML = rootComponent.template

  setStyleService()
  await setJobsListComponentService()
  await setEventsService()
}

export default bootstrapApp