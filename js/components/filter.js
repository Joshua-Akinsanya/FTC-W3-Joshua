import { CssConstants } from "../utils/css-constants.js";
import { removeClass, addClass } from "../utils/class-funcs.js";

export function filterSetup(filtermenuId, filterbtnId, backlayerId) {
  const filterMenu = document.querySelector(filtermenuId);
  const filterButton = document.querySelector(filterbtnId);
  const backLayer = document.querySelector(backlayerId);

  // Close menu when first loaded
  if (window.innerWidth < CssConstants.breakpoints.desktop) {
    addClass(filterMenu, CssConstants.closed);
    addClass(backLayer, CssConstants.closed);
  }
  
  filterButton.addEventListener('click', function () {
    removeClass(filterMenu, CssConstants.closed);
    removeClass(backLayer, CssConstants.closed);
  })

  backLayer.addEventListener('click', function () {
    addClass(filterMenu, CssConstants.closed);
    addClass(backLayer, CssConstants.closed);
  })

  window.addEventListener('resize', function () {
    // Prevent closed class from overriding default desktop style
    if(window.innerWidth >= CssConstants.breakpoints.desktop) {
      removeClass(filterMenu, CssConstants.closed);
    }
    // 
    else {
        addClass(filterMenu, CssConstants.closed);
        addClass(backLayer,CssConstants.closed)
    }
  })
}