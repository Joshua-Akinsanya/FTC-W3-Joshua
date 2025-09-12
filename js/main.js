import { sidebarSetup } from "./components/sidebar.js";
import { filterSetup } from "./components/filter.js";
import { switchableImageSetup } from "./components/switchable-image.js";

sidebarSetup('#sidebar', '#sidebar-backlayer', '#open-sidebar-button', '#close-sidebar-button');
filterSetup('#filter-menu', '#filter-button', '#filter-backlayer');
switchableImageSetup(
  '#switchable-image',
  '#left-button-switchable',
  '#right-button-switchable',
  '#thumbnail-1',
  '#thumbnail-2',
  '#thumbnail-3',
  '#thumbnail-4',
  '#thumbnail-5',
  '#thumbnail-6'
);
