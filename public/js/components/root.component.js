'use strict';

import filterPanelComponent from "./filterPanel.component.js";
import jobPanelComponent from "./jobPanel.component.js";
import adPanelComponent from "./adPanel.component.js";

const rootComponent = {

  template: `<div id="panel">  
  ${filterPanelComponent.template}
  ${jobPanelComponent.template}
  ${adPanelComponent.template}
  </div>`,

  style: ``
};

export default rootComponent;