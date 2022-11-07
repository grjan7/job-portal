
'use strict';

const jobsListComponent = {

  template: `<div id="joblist"></div>`,

  style: `
  #joblist {
    min-height: 100px;
    padding: 10px;
    margin: 0px 5px;
    margin-right: -5px;
    padding-bottom: 50px;
    width: 600px;
  }

  .job-title {
    color: #8ccfc9;
    padding: 2px 5px;
    border-radius: 5px;
    font-weight: bolder;
  }

  .job-description {
    padding: 15px 20px;
    border: 1px solid #4c6272;
    border-radius: 5px;
  }
  
  .job-location,
  .organization {
    text-align: right;
    font-size: small;
  }

  .organization {
    color: #cbcbce;
    font-weight: lighter;
  }

  .job-card {
    min-width: 500px;
    border-radius: 5px;
    background-color: #2f3741;
    color: #dbd5dd;
    padding: 10px 30px;
    margin: 10px;
  }

  .job-card:hover {
    opacity: 0.8;
  }

  .skill {
    border: 1px solid #4c6f6f;
    color: #2cefbf;
    border-radius: 10px;
    padding: 4px 8px;
    margin: 2px;
    font-size: small;
    font-weight: 400;
  }
`
};

export default jobsListComponent;