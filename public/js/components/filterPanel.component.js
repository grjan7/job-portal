'use strict';

import titleComponent from "./title.component.js";
import locationComponent from "./location.component.js";
import skillsetComponent from "./skillsets.component.js";
import searchComponent from "./search.component.js";

const filterPanelComponent = {

  template: `<div id="filterpanel">
  ${titleComponent.template}
  <div id="filter">
  ${locationComponent.template}
  ${skillsetComponent.template}
  ${searchComponent.template}
  </div>
  </div>`,

  style: ``
};

export default filterPanelComponent;