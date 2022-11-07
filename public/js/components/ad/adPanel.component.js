'use strict';

const adPanelComponent = {

  template: `
  <div id="adpanel">
    <p>Advertisement Panel</p>
  </div>`,

  style: `
  #adpanel {
    min-height: 100px;
    padding: 10px;
    margin: 0px 5px;
    margin-right: -5px;
    padding-bottom: 50px; 
    width: 100%;
    background-color: #2f3741;
    border-radius: 5px;
    margin: 0px 10px;
  }
  
  #adpanel>p {
    text-align: center;
    color: #8c9f9f;
    margin-top: 300px;
    border: 1px solid #4c6272;
    padding: 10px;
    width: 80%;
    margin-left: 40px;
  }
  `
}

export default adPanelComponent;