'use strict'

import searchSvgComponent from './searchSvg.component.js'

const searchComponent = {

  template: `
  <div id="searchcard">
    <button id="search">${searchSvgComponent.template} search</button>
  </div>`,

  style: `
  #searchcard{
    padding: 10px;
    margin: 5px;
  }

  #search {
    color: #f0f0ff;
    background-color: #4c6272;
    border: 0px;
    border-radius: 5px;
    padding: 10px;
    width: 220px;
    font-size: 18px;
  }
  `
}

export default searchComponent