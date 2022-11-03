'use strict';

import rootComponent from "./components/root.component.js";
import setJobsListComponentService from "./services/setJobsListComponent.service.js";

const bootstrapApp = async () => {
  const root = document.getElementById("root");
  root.innerHTML = rootComponent.template;
  await setJobsListComponentService();
}

export default bootstrapApp;