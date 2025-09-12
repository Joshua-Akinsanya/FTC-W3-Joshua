function removeClass(domElement, className) {
  do {
    domElement.classList.remove(className);
  } while(domElement.classList.contains(className));
}

function addClass(domElement, className) {
  if(domElement.classList.contains(className)) return;

  domElement.classList.add(className);
}

export { removeClass , addClass }