import { CssConstants } from "../utils/css-constants.js";
import { removeClass, addClass } from "../utils/class-funcs.js";

export function filterSetup(filtermenuId, filterbtnId, backlayerId) {
  const filterMenu = document.querySelector(filtermenuId);
  const filterButton = document.querySelector(filterbtnId);
  const backLayer = document.querySelector(backlayerId);

  if(filterMenu === null) return;
  if(filterButton === null) return;
  if(backLayer === null) return;

  // Close menu when first loaded
  if (window.innerWidth < CssConstants.breakpoints.desktop) {
    addClass(filterMenu, CssConstants.classnames.closed);
    addClass(backLayer, CssConstants.classnames.closed);
  }
  
  filterButton.addEventListener('click', function () {
    removeClass(filterMenu, CssConstants.classnames.closed);
    removeClass(backLayer, CssConstants.classnames.closed);
  })

  backLayer.addEventListener('click', function () {
    addClass(filterMenu, CssConstants.classnames.closed);
    addClass(backLayer, CssConstants.classnames.closed);
  })

  window.addEventListener('resize', function () {
    // Prevent closed class from overriding default desktop style
    if(window.innerWidth >= CssConstants.breakpoints.desktop) {
      removeClass(filterMenu, CssConstants.classnames.closed);
    }
    // 
    else {
        addClass(filterMenu, CssConstants.classnames.closed);
        addClass(backLayer,CssConstants.classnames.closed)
    }
  })
}