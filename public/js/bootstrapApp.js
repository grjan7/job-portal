'use strict';

import rootComponent from "./components/root.component.js";
import setJobsListComponentService from "./services/setJobsListComponent.service.js";
import setEventsService from "./services/setEvents.service.js"

const bootstrapApp = async () => {
  const root = document.getElementById("root");
  root.innerHTML = rootComponent.template;
  await setJobsListComponentService();
  await setEventsService();
}

export default bootstrapApp;