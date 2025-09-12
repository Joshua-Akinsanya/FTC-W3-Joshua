import { CssConstants } from "../utils/css-constants.js";
import { addClass, removeClass } from "../utils/class-funcs.js";

export function switchableImageSetup (imageId, leftbtnId, rightbtnId, ...thumbnailIds) {
  const mainImage = document.querySelector(imageId);
  const leftButton = document.querySelector(leftbtnId);
  const rightButton = document.querySelector(rightbtnId);

  const thumbnails = thumbnailIds.map( (id) => {
    return document.querySelector(id);
  });

  if (mainImage === null) return;
  if (thumbnails === null) return;

  let currentImage = 0;
  const length = thumbnails.length;

  leftButton.addEventListener('click', function () {
    removeClass( thumbnails[currentImage].parentElement,
      CssConstants.classnames.active);
    currentImage = ( (--currentImage) < 0)?(length - 1):currentImage;
    
    mainImage.src = thumbnails[currentImage].src
    addClass( thumbnails[currentImage].parentElement,
      CssConstants.classnames.active);
  });

  rightButton.addEventListener('click', function () {
    removeClass( thumbnails[currentImage].parentElement,
      CssConstants.classnames.active);
    currentImage = ( (++currentImage) >= length)?0:currentImage;
    
    mainImage.src = thumbnails[currentImage].src
    addClass( thumbnails[currentImage].parentElement,
      CssConstants.classnames.active);
  });

  for( let thumb in thumbnails) {
    thumbnails[thumb].addEventListener('click', function () {
      if(mainImage.src === this.src) return;
      mainImage.src = this.src;
      
      removeClass( thumbnails[currentImage].parentElement,
        CssConstants.classnames.active);
      addClass( this.parentElement, CssConstants.classnames.active);

      currentImage = thumb;
    });
  }
}