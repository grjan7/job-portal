'use strict';

import adPanelComponent from "../components/ad/adPanel.component.js";
import countriesComponent from "../components/filter/countries.component.js";
import filterPanelComponent from "../components/filter/filterPanel.component.js";
import searchComponent from "../components/filter/search.component.js";
import searchSvgComponent from "../components/filter/searchSvg.component.js";
import titleComponent from "../components/filter/title.component.js";
import skillsetComponent from "../components/filter/skillsets.component.js";
import jobHeadComponent from "../components/jobs/jobHead.component.js";
import jobPanelComponent from "../components/jobs/jobPanel.component.js";
import jobsListComponent from "../components/jobs/jobsList.component.js";
import locationSvgComponent from "../components/jobs/locationSvg.component.js";
import paginationComponent from "../components/jobs/pagination.component.js";
import rootComponent from "../components/root.component.js";

const components = [
  adPanelComponent,
  countriesComponent,
  filterPanelComponent,
  searchComponent,
  searchSvgComponent,
  skillsetComponent,
  titleComponent,
  jobHeadComponent,
  jobPanelComponent,
  jobsListComponent,
  locationSvgComponent,
  paginationComponent,
  rootComponent
];

const setStyleService = () => {
  const styles = components.map(component => component.style).join("\n").replaceAll(/\n+|\t+/g, "");
  const style = document.getElementsByTagName("style")[0];
  style.innerHTML = styles;
}
export default setStyleService;