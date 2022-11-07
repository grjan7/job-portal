'use strict';

import jobHeadComponent from "./jobHead.component.js";
import jobsListComponent from "./jobsList.component.js";
import paginationComponent from "./pagination.component.js";

const jobPanelComponent = {

  template: `
  <div id="jobpanel">
    ${jobHeadComponent.template}
    ${jobsListComponent.template}
    ${paginationComponent.template}
  </div>`,

  style: ``

};

export default jobPanelComponent;