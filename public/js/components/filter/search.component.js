'use strict';

import searchSvgComponent from "./searchSvg.component.js";

const searchComponent = {
  template: `<div id="searchcard">
  <button type="submit" id="search">${searchSvgComponent.template} search</button>
  </div>`,
  style: ``
};

export default searchComponent;