import { CssConstants } from "../utils/css-constants.js";

export function sidebarSetup(sidebarId, sidebarBacklayerId, openbtnId, closebtnId) {
  const sidebar = document.querySelector(sidebarId);
  const sidebarBacklayer = document.querySelector(sidebarBacklayerId);
  const openButton = document.querySelector(openbtnId);
  const closeButton = document.querySelector(closebtnId);

  openButton.addEventListener('click', function () {
    sidebar.style.transform = 'translateX(0%)';
    sidebar.style.opacity = 1;
    removeClass(sidebarBacklayer, CssConstants.classnames.closed);
  });

  closeButton.addEventListener('click', function () {
    sidebar.style.transform = 'translateX(-100%)';
    sidebar.style.opacity = 0;
    addClass(sidebarBacklayer, CssConstants.classnames.closed);
  });

  sidebarBacklayer.addEventListener('click', function () {
    sidebar.style.transform = 'translateX(-100%)';
    sidebar.style.opacity = 0;
    addClass(sidebarBacklayer, CssConstants.classnames.closed);
  })
}

function removeClass(domElement, className) {
  do {
    domElement.classList.remove(className);
  } while(domElement.classList.contains(className));
}

function addClass(domElement, className) {
  if(domElement.classList.contains(className)) return;

  domElement.classList.add(className);
}