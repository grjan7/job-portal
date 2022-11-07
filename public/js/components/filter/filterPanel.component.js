'use strict'

import titleComponent from './title.component.js'
import countriesComponent from './countries.component.js'
import skillsetComponent from './skillsets.component.js'
import searchComponent from './search.component.js'

const filterPanelComponent = {

  template: `
  <div id="filterpanel">
    ${titleComponent.template}
    <div id="filter">
      ${countriesComponent.template}
      ${skillsetComponent.template}
      ${searchComponent.template}
    </div>
  </div>`,

  style: `
  #filterpanel{
    min-height: 100px;
    padding: 10px;
    margin: 0px 5px;
    margin-right: -5px;
    padding-bottom: 50px;
  }

  #filter {
    padding: 20px;
    background-color: #2f3741;
    border-radius: 10px;
    margin-left: 5px;
  }
  `
}

export default filterPanelComponent