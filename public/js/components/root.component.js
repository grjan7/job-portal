'use strict';

import filterPanelComponent from "./filter/filterPanel.component.js";
import jobPanelComponent from "./jobs/jobPanel.component.js";
import adPanelComponent from "./ad/adPanel.component.js";

const rootComponent = {
  template: `<div id="panel">  
  ${filterPanelComponent.template}
  ${jobPanelComponent.template}
  ${adPanelComponent.template}
  </div>`,
  style: ``
};

export default rootComponent;